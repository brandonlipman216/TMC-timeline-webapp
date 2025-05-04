export interface TimelineEvent {
  id: string;
  date: Date;
  type: 'Company' | 'Policy';
  title: string;
  description: string;
  isVariableTimeline?: boolean;
  compressionLevel?: '75%' | '50%' | 'Typical';
}