
export interface ScheduleItem {
  time: string;
  activity: string;
  description?: string;
  type?: 'primary' | 'secondary' | 'highlight';
}

export interface DaySchedule {
  dayNumber: string;
  date: string;
  weekday: string;
  items: ScheduleItem[];
}
