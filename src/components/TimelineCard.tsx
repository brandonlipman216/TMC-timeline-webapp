import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { TimelineEvent } from '../types';

interface TimelineCardProps {
  event: TimelineEvent;
  isPending: boolean;
  isPast: boolean; 
}

export default function TimelineCard({ event, isPending, isPast }: TimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  
  const formatDate = (date: Date) => {
    // Special case for PFS Release - check if title includes "(Q2 2025)"
    if (event.title.includes('(Q2 2025)')) {
      return 'Q2 2025';
    }
    return format(date, 'MMM dd, yyyy');
  };
  
  const formatCompression = (compression: string | undefined) => {
    if (!compression) return '';
    if (compression === 'Typical') {
      return '(Typical Timeline)';
    }
    return `(${compression} Time Compression)`;
  };

  // Format description into paragraphs, with 3 sentences per paragraph
  const formatDescription = (description: string) => {
    if (typeof description !== 'string') return <p className="leading-relaxed">{description}</p>;
    
    // For shorter descriptions (increased threshold), don't split into paragraphs
    if (description.length < 1000) {
      return <p className="leading-relaxed">{description}</p>;
    }
    
    // First, explicitly fix the problematic "$2.$5 billion" pattern
    description = description.replace(/\$(\d+)\.(\$)(\d+)\s+(billion|million|trillion|thousand)/gi, 
      (_, dollars, __, cents, unit) => `$${dollars}.${cents} ${unit}`
    );
    
    // First, protect dollar amounts with decimals by replacing them with placeholders
    // This prevents the decimal point from being treated as a sentence end
    const dollarPlaceholders: {[key: string]: string} = {};
    let placeholderCount = 0;
    
    // Improved regex to better capture dollar amounts with decimals
    let processedText = description.replace(/(\$\d+\.\d+|\d+\.\d+)\s+(billion|million|trillion|thousand)/gi, (match) => {
      const placeholder = `DOLLAR_PLACEHOLDER_${placeholderCount++}`;
      dollarPlaceholders[placeholder] = match.startsWith('$') ? match : `$${match}`;
      return placeholder;
    });
    
    // Pre-process: Replace common abbreviations temporarily to prevent incorrect splits
    processedText = processedText
      .replace(/U\.S\./g, "US_PLACEHOLDER")
      .replace(/C\.F\.R\.\s+§\d+\.\d+/g, (match) => `CFR_SECTION_PLACEHOLDER_${placeholderCount++}`) // Handle C.F.R. §NN.NN pattern
      .replace(/C\.F\.R\./g, "CFR_PLACEHOLDER")
      .replace(/e\.g\./g, "EG_PLACEHOLDER")
      .replace(/i\.e\./g, "IE_PLACEHOLDER")
      .replace(/et al\./g, "ETAL_PLACEHOLDER")
      .replace(/et seq\./g, "ETSEQ_PLACEHOLDER")
      .replace(/§§/g, "SECTIONS_PLACEHOLDER")
      .replace(/§/g, "SECTION_PLACEHOLDER");
    
    // Store CFR section references for restoration
    const cfrSections: {[key: string]: string} = {};
    processedText.replace(/CFR_SECTION_PLACEHOLDER_(\d+)/g, (match, index) => {
      cfrSections[match] = dollarPlaceholders[`DOLLAR_PLACEHOLDER_${index}`] || match;
      return match;
    });
    
    // Better sentence detection - look for periods followed by space and capital letter or quotation
    const sentences = [];
    const sentenceRegex = /[^.!?]+[.!?]+(?=\s+[A-Z0-9"]|$)/g;
    let match;
    
    while ((match = sentenceRegex.exec(processedText)) !== null) {
      const sentence = match[0].trim();
      if (sentence) {
        sentences.push(sentence);
      }
    }
    
    // If regex didn't capture all text, add remaining content as a sentence
    if (sentences.join('').length < processedText.length && sentences.length > 0) {
      const lastSentenceEnd = processedText.indexOf(sentences[sentences.length - 1]) + 
                             sentences[sentences.length - 1].length;
      const remainingText = processedText.substring(lastSentenceEnd).trim();
      
      if (remainingText) {
        sentences.push(remainingText);
      }
    }
    
    // If no sentences were matched, treat the whole text as one sentence
    if (sentences.length === 0) {
      sentences.push(processedText);
    }
    
    // Format dollar amounts in each sentence and restore placeholders
    const formattedSentences = sentences.map(sentence => {
      // First restore all dollar amount placeholders
      let formattedSentence = sentence;
      Object.keys(dollarPlaceholders).forEach(placeholder => {
        formattedSentence = formattedSentence.replace(placeholder, dollarPlaceholders[placeholder]);
      });
      
      // Restore CFR section references
      Object.keys(cfrSections).forEach(placeholder => {
        formattedSentence = formattedSentence.replace(placeholder, cfrSections[placeholder]);
      });
      
      // Handle remaining whole numbers like "2 billion" that didn't have decimals
      // And make sure we don't mess with text that already has a dollar sign before or after a decimal
      formattedSentence = formattedSentence.replace(/(?<!\$[\d.]*)\b(\d+)\s+(billion|million|trillion|thousand)/gi, 
        (match, number, unit) => {
          // Improved check to avoid adding dollar signs to numbers that already have them in context
          if (match.includes('$') || formattedSentence.includes(`$${number}.`)) return match;
          return `$${number} ${unit}`;
        });
      
      return formattedSentence;
    });
    
    // Group sentences into paragraphs of 3
    const paragraphs = [];
    for (let i = 0; i < formattedSentences.length; i += 3) {
      let paragraph = formattedSentences.slice(i, Math.min(i + 3, formattedSentences.length)).join(' ');
      
      // Post-process: Restore abbreviations
      paragraph = paragraph
        .replace(/US_PLACEHOLDER/g, "U.S.")
        .replace(/CFR_PLACEHOLDER/g, "C.F.R.")
        .replace(/EG_PLACEHOLDER/g, "e.g.")
        .replace(/IE_PLACEHOLDER/g, "i.e.")
        .replace(/ETAL_PLACEHOLDER/g, "et al.")
        .replace(/ETSEQ_PLACEHOLDER/g, "et seq.")
        .replace(/SECTIONS_PLACEHOLDER/g, "§§")
        .replace(/SECTION_PLACEHOLDER/g, "§")
        .replace(/CFR_SECTION_PLACEHOLDER_\d+/g, (match) => {
          return cfrSections[match] || "C.F.R. §"; // Fallback
        });
      
      if (paragraph.trim()) {
        paragraphs.push(paragraph.trim());
      }
    }
    
    // Remove any standalone periods at the end of paragraphs
    const cleanedParagraphs = paragraphs.map(p => 
      p.endsWith('.') && p.charAt(p.length - 2) === ' ' ? p.slice(0, -1).trim() : p
    );
    
    return cleanedParagraphs.map((paragraph, i) => (
      <p key={i} className="leading-relaxed mb-4">
        {paragraph}
      </p>
    ));
  };

  // Calculate dynamic spacing based on description length and flipped state
  const getMarginClass = () => {
    // Increased base margins for more vertical spacing between cards
    const contentLength = event.description.length;
    
    // Increase margin when flipped to account for description length
    if (isFlipped) {
      if (contentLength > 500) return 'mb-64'; // Increased from mb-48
      if (contentLength > 300) return 'mb-56'; // Increased from mb-40
      return 'mb-48';                          // Increased from mb-36
    }
    // Default margins when not flipped - also increased
    if (contentLength > 500) return 'mb-48';   // Increased from mb-36
    if (contentLength > 300) return 'mb-40';   // Increased from mb-32
    return 'mb-36';                            // Increased from mb-28
  };
  
  // Update card heights when flipped to ensure enough space
  useEffect(() => {
    if (isFlipped && backCardRef.current) {
      const height = backCardRef.current.scrollHeight;
      setContainerHeight(height);
    } else if (!isFlipped && frontCardRef.current) {
      const height = frontCardRef.current.scrollHeight;
      setContainerHeight(height);
    }
  }, [isFlipped]);

  return (
    <div className={`relative ${getMarginClass()}`}>
      {/* Timeline visual elements */}
      <div className="timeline-line"></div>
      <div className={`timeline-dot ${isPending ? 'current' : isPast ? 'past' : ''}`}></div>
      
      {/* Card container with flip functionality */}
      <div className="ml-10 md:ml-48 sm:ml-34 relative"> {/* Increased margins by 20% */}
        <div 
          className="flip-card cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={containerHeight ? { minHeight: `${containerHeight}px` } : {}}
        >
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front of card - Event title and date */}
            <div className="flip-card-front">
              <div ref={frontCardRef} className="bg-white p-4 md:p-14">
                <div className="flex items-center justify-between mb-3">
                  <span className={`type-pill ${event.type === 'Company' ? 'company' : 'policy'}`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-xs md:text-sm font-medium text-gray-500">{formatDate(event.date)}</div>
                    {event.isVariableTimeline && (
                      <div className="mt-1 text-xs px-2 py-0.5 md:py-1 bg-gray-100 rounded-md font-medium text-gray-600 inline-block">
                        {formatCompression(event.compressionLevel)}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mt-3 md:mt-5 mb-3 md:mb-4">{event.title}</h3>
                <div className="text-sm font-medium text-blue-600 flex items-center">
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
            
            {/* Back of card - Description */}
            <div className="flip-card-back">
              <div ref={backCardRef} className="bg-white">
                <div className="mb-4 flex justify-between">
                  <span className={`type-pill ${
                    event.type === 'Company' ? 'company' : 'policy'
                  }`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-500">{formatDate(event.date)}</div>
                    {event.isVariableTimeline && (
                      <div className="mt-1 text-xs px-2 py-1 bg-gray-100 rounded-md font-medium text-gray-600 inline-block">
                        {formatCompression(event.compressionLevel)}
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-5 text-gray-800">Why it matters</h3>
                
                <div className="text-sm text-gray-600 mb-6">
                  {formatDescription(event.description)}
                </div>
                
                {/* View Source button - show only if sourceUrl exists */}
                {event.sourceUrl && (
                  <div className="mt-4 mb-5"> {/* Increased margin-bottom from mb-2 to mb-5 */}
                    <a 
                      href={event.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-button"
                      onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking link
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
                  </div>
                )}
                
                <div className="text-sm font-medium text-blue-600 flex items-center">
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