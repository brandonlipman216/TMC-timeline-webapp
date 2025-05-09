import { useRef, useEffect, useState, useMemo } from 'react';
import TimelineCard from './TimelineCard';
import { TimelineEvent } from '../types';
import { format } from 'date-fns';

interface TimelineProps {
  events: TimelineEvent[];
  currentDate: Date;
}

export default function Timeline({ events, currentDate }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const [currentDatePosition, setCurrentDatePosition] = useState(0);
  const [showDateIndicator, setShowDateIndicator] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showJumpButton, setShowJumpButton] = useState(false);
  
  // Format the current date for display
  const formattedCurrentDate = format(currentDate, 'MMM d, yyyy');
  
  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    // Check on initial render
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Memoize sorted events to prevent unnecessary re-renders
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [events]);
  
  // Find pending event (first event that hasn't happened yet)
  const pendingEventIndex = useMemo(() => {
    return sortedEvents.findIndex(event => event.date > currentDate);
  }, [sortedEvents, currentDate]);

  // Calculate current date position between events
  useEffect(() => {
    if (!timelineRef.current) return;
    
    let newPosition = 0;
    let shouldShowIndicator = false;
    
    // Find events that surround the current date
    if (pendingEventIndex <= 0) {
      // If current date is before first event or there are no future events
      if (sortedEvents.length > 0) {
        try {
          // Position at first event
          const firstElementRect = timelineRef.current.children[0].getBoundingClientRect();
          newPosition = firstElementRect.top + window.scrollY;
          shouldShowIndicator = true;
        } catch (error) {
          console.error('Error calculating first element position:', error);
        }
      }
    } 
    else {
      // Current date is between two events
      try {
        const previousEvent = sortedEvents[pendingEventIndex - 1];
        const nextEvent = sortedEvents[pendingEventIndex];
        
        // Get time differences
        const totalTimespan = nextEvent.date.getTime() - previousEvent.date.getTime();
        const currentTimespan = currentDate.getTime() - previousEvent.date.getTime();
        
        // Calculate position ratio between 0 and 1
        const ratio = Math.max(0, Math.min(1, currentTimespan / totalTimespan));
        
        // Get event elements from all children
        const children = Array.from(timelineRef.current.children);
        const eventElements = children.filter(child => 
          child.className.includes('relative')
        );
        
        if (eventElements.length > pendingEventIndex - 1 && eventElements.length > pendingEventIndex) {
          const previousElementRect = eventElements[pendingEventIndex - 1].getBoundingClientRect();
          const nextElementRect = eventElements[pendingEventIndex].getBoundingClientRect();
          
          // Calculate position
          newPosition = previousElementRect.top + 
            (ratio * (nextElementRect.top - previousElementRect.top)) + 
            window.scrollY;
            
          shouldShowIndicator = true;
        }
      } catch (error) {
        console.error('Error calculating date position:', error);
      }
    }
    
    // Only update state when needed to prevent infinite loops
    if (shouldShowIndicator && (newPosition !== currentDatePosition || !showDateIndicator)) {
      setCurrentDatePosition(newPosition);
      setShowDateIndicator(true);
    } else if (!shouldShowIndicator && showDateIndicator) {
      setShowDateIndicator(false);
    }
  }, [pendingEventIndex, sortedEvents, currentDate, currentDatePosition, showDateIndicator]);
  
  // Scroll to pending event on load - use a ref to ensure this only runs once
  const hasScrolled = useRef(false);
  useEffect(() => {
    if (timelineRef.current && pendingEventIndex >= 0 && !hasScrolled.current) {
      const pendingEventElement = timelineRef.current.children[pendingEventIndex];
      if (pendingEventElement) {
        // Delay scrolling slightly to ensure the DOM is fully rendered
        setTimeout(() => {
          pendingEventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          hasScrolled.current = true;
        }, 500);
      }
    }
  }, [pendingEventIndex]);

  // Check scroll position to show/hide jump button
  useEffect(() => {
    if (!timelineRef.current || pendingEventIndex < 0) return;
    
    const handleScroll = () => {
      const eventElements = Array.from(timelineRef.current!.children).filter(
        child => child.className.includes('timeline-event-card')
      );
      
      if (eventElements.length > pendingEventIndex) {
        const pendingElement = eventElements[pendingEventIndex] as HTMLElement;
        const rect = pendingElement.getBoundingClientRect();
        
        // Show button when pending event is not visible in viewport
        const isOutOfView = rect.top < 0 || rect.bottom > window.innerHeight;
        setShowJumpButton(isOutOfView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pendingEventIndex]);
  
  // Function to jump to current pending event
  const jumpToCurrent = () => {
    if (timelineRef.current && pendingEventIndex >= 0) {
      const eventElements = Array.from(timelineRef.current.children).filter(
        child => child.className.includes('timeline-event-card')
      );
      
      if (eventElements.length > pendingEventIndex) {
        eventElements[pendingEventIndex].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-1 md:px-6 py-4 md:py-8"> {/* Reduced padding even more */}
      <div className="text-center mb-6 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">
          The Metals Company
        </h1>
        <h2 className="text-base md:text-xl text-gray-600">
          2025 Key Company and Policy Events
        </h2>
      </div>
      
      <div className="max-w-full md:max-w-2xl mx-auto">
        <div ref={timelineRef} className="relative py-6 md:py-8 overflow-visible px-0 md:px-0">
          {/* Continuous timeline line that spans the entire container */}
          <div className="timeline-line" ref={timelineLineRef}></div>
          
          {/* Past timeline line segment */}
          {showDateIndicator && (
            <div 
              className="timeline-line-past"
              style={{ 
                top: 0,
                height: `${currentDatePosition}px` 
              }}
            ></div>
          )}
          
          {/* Current date indicator with label - only show label on desktop */}
          {showDateIndicator && (
            <div 
              className="current-date-indicator"
              style={{ top: `${currentDatePosition}px` }}
            >
              {!isMobileView && (
                <span className="current-date-label">
                  {formattedCurrentDate}
                </span>
              )}
            </div>
          )}
          
          {sortedEvents.map((event, index) => (
            <div key={event.id} className="relative timeline-event-card">
              <TimelineCard 
                event={event}
                isPending={index === pendingEventIndex}
                isPast={index < pendingEventIndex}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating "Jump to Current" button */}
      {showJumpButton && (
        <button 
          onClick={jumpToCurrent}
          className="jump-to-current-button"
          aria-label="Jump to current event"
        >
          Jump to current
        </button>
      )}
    </div>
  );
}