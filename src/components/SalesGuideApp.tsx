import React, { useState, useEffect } from 'react';
import { salesGuideData } from '@/data/salesGuide';
import { useSalesGuide } from '@/lib/useSalesGuide';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import StepContent from '@/components/StepContent';
import QuestionComponent from '@/components/QuestionComponent';
import StepNavigation from '@/components/StepNavigation';
import PersonalizedSummary from '@/components/PersonalizedSummary';

export default function SalesGuideApp() {
  const {
    currentStep,
    isLoading,
    goToNextStep,
    goToPreviousStep,
    canGoBack,
    canGoNext,
    addResponse,
    getResponseForQuestion,
    getProgressInfo,
    resetProgress,
    userProgress
  } = useSalesGuide(salesGuideData.steps);

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const progressInfo = getProgressInfo();

  const handleQuestionAnswer = (questionId: string, value: string | string[]) => {
    addResponse(questionId, value);
  };

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  if (!currentStep) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Carregando guia de vendas...
          </h2>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={salesGuideData.title}
        subtitle={salesGuideData.description}
      />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Barra de Progresso */}
        <ProgressBar
          currentStep={progressInfo.currentStepIndex}
          totalSteps={progressInfo.totalSteps}
          className="mb-8"
        />

        {/* Informações do Guia */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-primary-800">
                Passo {progressInfo.currentStepIndex} de {progressInfo.totalSteps}
              </h3>
              <p className="text-primary-600 text-sm">
                Duração estimada: {salesGuideData.estimatedDuration} • 
                Nível: {salesGuideData.difficulty}
              </p>
            </div>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="text-primary-600 hover:text-primary-800 text-sm underline"
            >
              Reiniciar guia
            </button>
          </div>
        </div>

        {/* Conteúdo do Passo */}
        <StepContent step={currentStep} className="mb-8" />

        {/* Questões */}
        {currentStep.questions && currentStep.questions.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Vamos personalizar sua experiência:
            </h3>
            {currentStep.questions.map((question) => (
              <QuestionComponent
                key={question.id}
                question={question}
                currentAnswer={getResponseForQuestion(question.id)?.value}
                onAnswer={handleQuestionAnswer}
              />
            ))}
          </div>
        )}

        {/* Resumo Personalizado */}
        {userProgress && userProgress.responses.length > 0 && (
          <PersonalizedSummary 
            responses={userProgress.responses} 
            className="mb-8"
          />
        )}

        {/* Navegação */}
        <StepNavigation
          canGoBack={canGoBack()}
          canGoNext={canGoNext()}
          onPrevious={goToPreviousStep}
          onNext={goToNextStep}
          isLoading={isLoading}
          nextButtonText={
            progressInfo.currentStepIndex === progressInfo.totalSteps 
              ? 'Finalizar' 
              : 'Próximo'
          }
        />

        {/* Dica de Progresso */}
        {progressInfo.progressPercentage > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-success-50 border border-success-200 rounded-lg">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-2"></div>
              <span className="text-success-700 text-sm font-medium">
                Você já completou {Math.round(progressInfo.progressPercentage)}% do guia!
              </span>
            </div>
          </div>
        )}
      </main>

      {/* Modal de Confirmação de Reset */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Reiniciar Guia
            </h3>
            <p className="text-gray-600 mb-6">
              Tem certeza que deseja reiniciar o guia? Todo o seu progresso será perdido.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 btn-secondary"
              >
                Cancelar
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}