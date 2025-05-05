export interface TimelineEvent {
  id: string;
  date: Date;
  type: 'Company' | 'Policy';
  title: string;
  description: string;
  isVariableTimeline?: boolean;
  compressionLevel?: string;
  sourceUrl?: string; // Added source URL field
}
