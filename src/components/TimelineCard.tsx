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
    return 'mb-36';                           // Increased from mb-28
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
      <div className="ml-16 md:ml-40 sm:ml-28"> {/* INCREASED left margin from timeline */}
        <div 
          className="flip-card cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          style={containerHeight ? { minHeight: `${containerHeight}px` } : {}}
        >
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front of card - Event title and date */}
            <div className="flip-card-front">
              <div ref={frontCardRef} className="bg-white p-14"> {/* Increased padding from p-10 to p-14 */}
                <div className="flex items-center justify-between mb-4">
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
                
                <h3 className="text-lg font-semibold text-gray-800 mt-5 mb-4">{event.title}</h3>
                
                <div className="mt-8 text-sm font-medium text-blue-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                  Tap to see why it matters
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
                  <p className="leading-relaxed">{event.description}</p>
                </div>
                
                <div className="mt-8 text-sm font-medium text-blue-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                  </svg>
                  Tap to go back
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}