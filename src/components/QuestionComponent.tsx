import React, { useState } from 'react';
import { Question } from '@/types';

interface QuestionComponentProps {
  question: Question;
  onAnswer: (questionId: string, value: string | string[]) => void;
  currentAnswer?: string | string[];
}

export default function QuestionComponent({ 
  question, 
  onAnswer, 
  currentAnswer 
}: QuestionComponentProps) {
  const [selectedValue, setSelectedValue] = useState<string | string[]>(
    currentAnswer || (question.type === 'multiple' ? [] : '')
  );

  const handleSingleChoice = (value: string) => {
    setSelectedValue(value);
    onAnswer(question.id, value);
  };

  const handleMultipleChoice = (value: string) => {
    const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    setSelectedValue(newValues);
    onAnswer(question.id, newValues);
  };

  const handleTextInput = (value: string) => {
    setSelectedValue(value);
    onAnswer(question.id, value);
  };

  const handleRating = (value: string) => {
    setSelectedValue(value);
    onAnswer(question.id, value);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        {question.text}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </h4>

      {question.type === 'single' && question.options && (
        <div className="space-y-3">
          {question.options.map((option) => (
            <label key={option.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => handleSingleChoice(option.value)}
                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700">{option.text}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'multiple' && question.options && (
        <div className="space-y-3">
          {question.options.map((option) => (
            <label key={option.id} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={option.value}
                checked={Array.isArray(selectedValue) && selectedValue.includes(option.value)}
                onChange={() => handleMultipleChoice(option.value)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700">{option.text}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <textarea
          value={typeof selectedValue === 'string' ? selectedValue : ''}
          onChange={(e) => handleTextInput(e.target.value)}
          placeholder="Digite sua resposta..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          rows={4}
        />
      )}

      {question.type === 'rating' && (
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRating(rating.toString())}
              className={`w-10 h-10 rounded-full border-2 font-semibold transition-colors ${
                selectedValue === rating.toString()
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-primary-400'
              }`}
            >
              {rating}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}