import React from 'react';
import { Step } from '@/types';

interface StepContentProps {
  step: Step;
  className?: string;
}

export default function StepContent({ step, className = '' }: StepContentProps) {
  return (
    <div className={`step-card ${className}`}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {step.title}
        </h2>
        <p className="text-gray-600 text-lg">
          {step.description}
        </p>
      </div>
      
      <div 
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: step.content }}
      />
    </div>
  );
}