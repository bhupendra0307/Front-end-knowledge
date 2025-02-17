// src/components/AgeCalculator.tsx
import React, { useState } from 'react';
import DateInput from './DateInput';
import ResultDisplay from './ResultDisplay';
import { calculateAge } from '../utils/calculateAge';
import { DateValues } from '../types/types';
import '../styles/AgeCalculator.css';
import Footer from './Footer';

const AgeCalculator: React.FC = () => {
  const [dateValues, setDateValues] = useState<DateValues>({
    day: '',
    month: '',
    year: ''
  });
  const [age, setAge] = useState(null);
  const [error, setError] = useState<string>('');

  const calculateUserAge = () => {
    const { day, month, year } = dateValues;
    
    if (!day || !month || !year) {
      setError('Please fill in all fields');
      return;
    }

    const birthDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );

    if (birthDate > new Date()) {
      setError('Birth date cannot be in the future');
      return;
    }

    if (isNaN(birthDate.getTime())) {
      setError('Please enter a valid date');
      return;
    }

    setError('');
    setAge(calculateAge(birthDate));
  };

  return (
    <div className="age-calculator">
      <h1 id='codeAlpha'>Code Alpha Task1 Completed</h1>
      <h1>Age Calculator</h1>
      <DateInput onDateChange={setDateValues} />
      <button onClick={calculateUserAge}>Calculate Age</button>
      {error && <p className="error">{error}</p>}
      <ResultDisplay age={age} />
      <Footer />
    </div>
  );
};

export default AgeCalculator;