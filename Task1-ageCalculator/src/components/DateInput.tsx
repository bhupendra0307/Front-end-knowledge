// src/components/DateInput.tsx
import React from 'react';
import { DateInputProps, DateValues } from '../types/types';
import '../styles/DateInput.css';

const DateInput: React.FC<DateInputProps> = ({ onDateChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onDateChange((prev: DateValues) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="date-input">
      <div className="input-group">
        <label htmlFor="day">Day</label>
        <input
          type="number"
          id="day"
          name="day"
          min="1"
          max="31"
          placeholder="DD"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="month">Month</label>
        <input
          type="number"
          id="month"
          name="month"
          min="1"
          max="12"
          placeholder="MM"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="year"
          min="1900"
          max={new Date().getFullYear()}
          placeholder="YYYY"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DateInput;