import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { TimelineEvent } from '../types';

interface TimelineCardProps {
  event: TimelineEvent;
  isPending: boolean;
  isPast: boolean;
  dueDateEventId?: string;
  onJumpToEvent?: (eventId: string) => void;
  onJumpToDate: (dateText: string) => void;
}

export default function TimelineCard({ event, isPending, isPast, dueDateEventId, onJumpToEvent, onJumpToDate }: TimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  
  const formatDate = (date: Date) => {
    if (event.title.includes('(Q2 2025)')) {
      return 'Q2 2025';
    }
    return format(date, 'MMM d, yyyy'); // Changed from 'MMM dd, yyyy' to match the current date format
  };
  
  const formatCompression = (compression: string | undefined) => {
    if (!compression) return '';
    if (compression === 'Typical') {
      return '(Typical Timeline)';
    }
    return `(${compression} Time Compression)`;
  };

  const formatDescription = (description: string) => {
    if (typeof description !== 'string') return <p className="leading-relaxed">{description}</p>;
    
    if (description.length < 1000) {
      return processDescriptionWithClickableDates(description);
    }
    
    description = description.replace(/\$(\d+)\.(\$)(\d+)\s+(billion|million|trillion|thousand)/gi, 
      (_, dollars, __, cents, unit) => `$${dollars}.${cents} ${unit}`
    );
    const dollarPlaceholders: {[key: string]: string} = {};
    let placeholderCount = 0;
    let processedText = description.replace(/(\$\d+\.\d+|\d+\.\d+)\s+(billion|million|trillion|thousand)/gi, (matchStr) => {
      const placeholder = `DOLLAR_PLACEHOLDER_${placeholderCount++}`;
      dollarPlaceholders[placeholder] = matchStr.startsWith('$') ? matchStr : `$${matchStr}`;
      return placeholder;
    });
    processedText = processedText
      .replace(/U\.S\./g, "US_PLACEHOLDER")
      .replace(/C\.F\.R\.\s+§\d+\.\d+/g, (matchText) => `CFR_SECTION_PLACEHOLDER_${placeholderCount++}`)
      .replace(/C\.F\.R\./g, "CFR_PLACEHOLDER")
      .replace(/e\.g\./g, "EG_PLACEHOLDER")
      .replace(/i\.e\./g, "IE_PLACEHOLDER")
      .replace(/et al\./g, "ETAL_PLACEHOLDER")
      .replace(/et seq\./g, "ETSEQ_PLACEHOLDER")
      .replace(/§§/g, "SECTIONS_PLACEHOLDER")
      .replace(/§/g, "SECTION_PLACEHOLDER");
    const cfrSections: {[key: string]: string} = {};
    processedText.replace(/CFR_SECTION_PLACEHOLDER_(\d+)/g, (matchText, index) => {
      cfrSections[matchText] = dollarPlaceholders[`DOLLAR_PLACEHOLDER_${index}`] || matchText;
      return matchText;
    });
    const sentences: string[] = [];
    const sentenceRegex = /[^.!?]+[.!?]+(?=\s+[A-Z0-9"]|$)/g;
    let sentenceMatch: RegExpExecArray | null;
    while ((sentenceMatch = sentenceRegex.exec(processedText)) !== null) {
      const sentence = sentenceMatch[0].trim();
      if (sentence) {
        sentences.push(sentence);
      }
    }
    if (sentences.join('').length < processedText.length && sentences.length > 0) {
      const lastSentenceEnd = processedText.indexOf(sentences[sentences.length - 1]) + 
                             sentences[sentences.length - 1].length;
      const remainingText = processedText.substring(lastSentenceEnd).trim();
      if (remainingText) {
        sentences.push(remainingText);
      }
    }
    if (sentences.length === 0) {
      sentences.push(processedText);
    }
    const formattedSentences = sentences.map(sentence => {
      let formattedSentence = sentence;
      Object.keys(dollarPlaceholders).forEach(placeholder => {
        formattedSentence = formattedSentence.replace(placeholder, dollarPlaceholders[placeholder]);
      });
      Object.keys(cfrSections).forEach(placeholder => {
        formattedSentence = formattedSentence.replace(placeholder, cfrSections[placeholder]);
      });
      formattedSentence = formattedSentence.replace(/(?<!\$[\d.]*)\b(\d+)\s+(billion|million|trillion|thousand)/gi, 
        (matchText, number, unit) => {
          if (matchText.includes('$') || formattedSentence.includes(`$${number}.`)) return matchText;
          return `$${number} ${unit}`;
        });
      return formattedSentence;
    });
    const paragraphs = [];
    for (let i = 0; i < formattedSentences.length; i += 3) {
      let paragraph = formattedSentences.slice(i, Math.min(i + 3, formattedSentences.length)).join(' ');
      paragraph = processDateReferencesInString(paragraph);
      paragraph = paragraph
        .replace(/US_PLACEHOLDER/g, "U.S.")
        .replace(/CFR_PLACEHOLDER/g, "C.F.R.")
        .replace(/EG_PLACEHOLDER/g, "e.g.")
        .replace(/IE_PLACEHOLDER/g, "i.e.")
        .replace(/ETAL_PLACEHOLDER/g, "et al.")
        .replace(/ETSEQ_PLACEHOLDER/g, "et seq.")
        .replace(/SECTIONS_PLACEHOLDER/g, "§§")
        .replace(/SECTION_PLACEHOLDER/g, "§")
        .replace(/CFR_SECTION_PLACEHOLDER_\d+/g, (matchText) => {
          return cfrSections[matchText] || "C.F.R. §";
        });
      if (paragraph.trim()) {
        paragraphs.push(paragraph.trim());
      }
    }
    const cleanedParagraphs = paragraphs.map(p => 
      p.endsWith('.') && p.charAt(p.length - 2) === ' ' ? p.slice(0, -1).trim() : p
    );
    return cleanedParagraphs.map((paragraph, i) => (
      <p key={i} className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
    ));
  };

  const processDescriptionWithClickableDates = (text: string) => {
    const processedText = processDateReferencesInString(text);
    return <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  const processDateReferencesInString = (text: string) => {
    const datePattern = /\b(due(?:\s+(?:by|on))?\s+)?([A-Za-z]+\s+\d{1,2},?\s+\d{4})\b/gi;
    return text.replace(datePattern, (match, prefix, dateText) => {
      if (prefix) {
        return `${prefix}<span class="clickable-date" onclick="event.stopPropagation(); window.jumpToTimelineDate('${dateText.trim()}')">${dateText}</span>`;
      } else {
        return `<span class="clickable-date" onclick="event.stopPropagation(); window.jumpToTimelineDate('${match.trim()}')">${match}</span>`;
      }
    });
  };

  const getMarginClass = () => {
    const contentLength = event.description.length;
    if (isFlipped) {
      if (contentLength > 500) return 'mb-64';
      if (contentLength > 300) return 'mb-56';
      return 'mb-48';
    }
    if (contentLength > 500) return 'mb-48';
    if (contentLength > 300) return 'mb-40';
    return 'mb-36';
  };
  
  useEffect(() => {
    if (isFlipped && backCardRef.current) {
      const height = backCardRef.current.scrollHeight;
      setContainerHeight(height);
    } else if (!isFlipped && frontCardRef.current) {
      const height = frontCardRef.current.scrollHeight;
      setContainerHeight(height);
    }
  }, [isFlipped]);

  useEffect(() => {
    window.jumpToTimelineDate = (dateText: string) => {
      onJumpToDate(dateText);
    };
    return () => {
      delete window.jumpToTimelineDate;
    };
  }, [onJumpToDate]);

  return (
    <div className={`relative ${getMarginClass()}`}>
      <div className="timeline-line"></div>
      <div className={`timeline-dot ${isPending ? 'current' : isPast ? 'past' : ''}`}></div>
      
      <div className="ml-10 md:ml-48 sm:ml-34 relative">
        <div 
          className="flip-card cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={containerHeight ? { minHeight: `${containerHeight}px` } : {}}
        >
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-front">
              <div ref={frontCardRef} className="bg-white dark:bg-gray-800 p-4 md:p-14">
                <div className="flex items-center justify-between mb-3">
                  <span className={`type-pill ${event.type === 'Company' ? 'company' : 'policy'}`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">{formatDate(event.date)}</div>
                    {event.isVariableTimeline && (
                      <div className="mt-1 text-xs px-2 py-0.5 md:py-1 bg-gray-100 dark:bg-gray-700 rounded-md font-medium text-gray-600 dark:text-gray-300 inline-block">
                        {formatCompression(event.compressionLevel)}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3 md:mt-5 mb-3 md:mb-4">{event.title}</h3>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center">
                  <svg 
                    className="w-3 h-3 mr-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{ minWidth: '12px', maxWidth: '12px', minHeight: '12px', maxHeight: '12px' }}
                  >
                    {isFlipped ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                  {isFlipped ? 'Tap to go back' : 'Tap to see why it matters'}
                </div>
              </div>
            </div>
            
            <div className="flip-card-back">
              <div ref={backCardRef} className="bg-white dark:bg-gray-800">
                <div className="mb-4 flex justify-between">
                  <span className={`type-pill ${
                    event.type === 'Company' ? 'company' : 'policy'
                  }`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{formatDate(event.date)}</div>
                    {event.isVariableTimeline && (
                      <div className="mt-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md font-medium text-gray-600 dark:text-gray-300 inline-block">
                        {formatCompression(event.compressionLevel)}
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-5 text-gray-800 dark:text-gray-100">Why it matters</h3>
                
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {formatDescription(event.description)}
                </div>
                
                <div className="button-container">
                  {event.sourceUrl && (
                    <a 
                      href={event.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg 
                        className="w-3.5 h-3.5 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Source
                    </a>
                  )}
                  
                  {dueDateEventId && onJumpToEvent && (
                    <button 
                      className="source-button jump-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onJumpToEvent(dueDateEventId);
                      }}
                    >
                      <svg 
                        className="w-3.5 h-3.5 mr-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                      Jump to due date
                    </button>
                  )}
                </div>
                
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center">
                  <svg 
                    className="w-3 h-3 mr-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{ minWidth: '12px', maxWidth: '12px', minHeight: '12px', maxHeight: '12px' }}
                  >
                    {isFlipped ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                  {isFlipped ? 'Tap to go back' : 'Tap to see why it matters'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TypeScript declaration for the global window object
declare global {
  interface Window {
    jumpToTimelineDate: (dateText: string) => void;
  }
}