import React from 'react';
import { ResultDisplayProps } from '../types/types';
import '../styles/ResultDisplay.css';

const ResultDisplay: React.FC<ResultDisplayProps> = ({ age }) => {
  if (!age) return null;

  return (
    <div className="result-display">
      <p><span>{age.years}</span> years</p>
      <p><span>{age.months}</span> months</p>
      <p><span>{age.days}</span> days</p>
    </div>
  );
};

export default ResultDisplay;