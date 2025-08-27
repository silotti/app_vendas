import { useState, useEffect, useCallback } from 'react';
import { Step, UserResponse, UserProgress } from '@/types';
import { StepManager } from '@/lib/stepManager';

export function useSalesGuide(initialSteps: Step[], userId: string = 'default-user') {
  const [stepManager] = useState(() => new StepManager(initialSteps, userId));
  const [currentStep, setCurrentStep] = useState<Step | undefined>();
  const [userProgress, setUserProgress] = useState<UserProgress>();
  const [isLoading, setIsLoading] = useState(false);

  // Atualizar estado quando stepManager muda
  const updateState = useCallback(() => {
    setCurrentStep(stepManager.getCurrentStep());
    setUserProgress(stepManager.getProgress());
  }, [stepManager]);

  // Carregar progresso salvo ao inicializar
  useEffect(() => {
    stepManager.loadFromLocalStorage();
    updateState();
  }, [stepManager, updateState]);

  // Salvar progresso automaticamente
  const saveProgress = useCallback(() => {
    stepManager.saveToLocalStorage();
  }, [stepManager]);

  // Navegar para o próximo passo
  const goToNextStep = useCallback(async () => {
    setIsLoading(true);
    try {
      const success = stepManager.goToNextStep();
      if (success) {
        updateState();
        saveProgress();
      }
      return success;
    } finally {
      setIsLoading(false);
    }
  }, [stepManager, updateState, saveProgress]);

  // Navegar para o passo anterior
  const goToPreviousStep = useCallback(() => {
    const success = stepManager.goToPreviousStep();
    if (success) {
      updateState();
      saveProgress();
    }
    return success;
  }, [stepManager, updateState, saveProgress]);

  // Ir para um passo específico
  const goToStep = useCallback((stepId: string) => {
    const success = stepManager.goToStep(stepId);
    if (success) {
      updateState();
      saveProgress();
    }
    return success;
  }, [stepManager, updateState, saveProgress]);

  // Adicionar resposta
  const addResponse = useCallback((questionId: string, value: string | string[]) => {
    const current = stepManager.getCurrentStep();
    if (current) {
      stepManager.addResponse(questionId, current.id, value);
      updateState();
      saveProgress();
    }
  }, [stepManager, updateState, saveProgress]);

  // Obter resposta para uma questão
  const getResponseForQuestion = useCallback((questionId: string) => {
    return stepManager.getResponseForQuestion(questionId);
  }, [stepManager]);

  // Obter todas as respostas de um passo
  const getResponsesForStep = useCallback((stepId: string) => {
    return stepManager.getResponsesForStep(stepId);
  }, [stepManager]);

  // Verificar se pode navegar
  const canGoBack = useCallback(() => {
    return stepManager.canGoBack();
  }, [stepManager]);

  const canGoNext = useCallback(() => {
    return stepManager.canGoNext();
  }, [stepManager]);

  // Obter informações de progresso
  const getProgressInfo = useCallback(() => {
    return {
      currentStepIndex: stepManager.getCurrentStepIndex() + 1,
      totalSteps: stepManager.getTotalSteps(),
      progressPercentage: stepManager.getProgressPercentage(),
      isCompleted: stepManager.isCompleted()
    };
  }, [stepManager]);

  // Resetar progresso
  const resetProgress = useCallback(() => {
    stepManager.reset();
    updateState();
    saveProgress();
  }, [stepManager, updateState, saveProgress]);

  // Obter todos os passos
  const getAllSteps = useCallback(() => {
    return stepManager.getAllSteps();
  }, [stepManager]);

  return {
    // Estado atual
    currentStep,
    userProgress,
    isLoading,

    // Navegação
    goToNextStep,
    goToPreviousStep,
    goToStep,
    canGoBack,
    canGoNext,

    // Respostas
    addResponse,
    getResponseForQuestion,
    getResponsesForStep,

    // Informações
    getProgressInfo,
    getAllSteps,

    // Controle
    resetProgress,
    saveProgress
  };
}