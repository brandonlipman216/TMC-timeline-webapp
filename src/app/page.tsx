'use client';

import { useState, useEffect } from 'react';
import Timeline from '../components/Timeline';
import { timelineEvents } from '../data/timelineData';

export default function Home() {
  // Use client-side date to determine which events are in the past
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Timeline events={timelineEvents} currentDate={currentDate} />
    </main>
  );
}