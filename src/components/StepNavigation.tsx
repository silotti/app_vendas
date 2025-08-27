import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepNavigationProps {
  canGoBack: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  isLoading?: boolean;
  nextButtonText?: string;
}

export default function StepNavigation({
  canGoBack,
  canGoNext,
  onPrevious,
  onNext,
  isLoading = false,
  nextButtonText = 'Próximo'
}: StepNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
          canGoBack
            ? 'text-gray-700 hover:bg-gray-100'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={20} className="mr-1" />
        Anterior
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext || isLoading}
        className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
          canGoNext && !isLoading
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Carregando...
          </>
        ) : (
          <>
            {nextButtonText}
            <ChevronRight size={20} className="ml-1" />
          </>
        )}
      </button>
    </div>
  );
}