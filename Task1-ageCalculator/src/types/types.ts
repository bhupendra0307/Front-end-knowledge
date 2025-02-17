// src/types/types.ts
export interface DateInputProps {
    onDateChange: (date: DateValues) => void;
  }
  
  export interface DateValues {
    day: string;
    month: string;
    year: string;
  }
  
  export interface ResultDisplayProps {
    age: {
      years: number;
      months: number;
      days: number;
    } | null;
  }