import { Step, UserResponse, UserProgress } from '@/types';

export class StepManager {
  private steps: Step[];
  private userProgress: UserProgress;

  constructor(steps: Step[], userId: string = 'default-user') {
    this.steps = steps;
    this.userProgress = {
      userId,
      currentStepId: steps[0]?.id || '',
      completedSteps: [],
      responses: [],
      startedAt: new Date(),
      lastActivity: new Date()
    };
  }

  getCurrentStep(): Step | undefined {
    return this.steps.find(step => step.id === this.userProgress.currentStepId);
  }

  getStepById(stepId: string): Step | undefined {
    return this.steps.find(step => step.id === stepId);
  }

  getAllSteps(): Step[] {
    return this.steps;
  }

  getCurrentStepIndex(): number {
    return this.steps.findIndex(step => step.id === this.userProgress.currentStepId);
  }

  getTotalSteps(): number {
    return this.steps.length;
  }

  canGoBack(): boolean {
    return this.getCurrentStepIndex() > 0;
  }

  canGoNext(): boolean {
    const currentStep = this.getCurrentStep();
    if (!currentStep) return false;

    // Verificar se todas as questões obrigatórias foram respondidas
    if (currentStep.questions) {
      const requiredQuestions = currentStep.questions.filter(q => q.required);
      const answeredRequiredQuestions = requiredQuestions.filter(q => 
        this.getResponseForQuestion(q.id) !== undefined
      );
      
      return answeredRequiredQuestions.length === requiredQuestions.length;
    }

    return true;
  }

  goToPreviousStep(): boolean {
    const currentIndex = this.getCurrentStepIndex();
    if (currentIndex > 0) {
      this.userProgress.currentStepId = this.steps[currentIndex - 1].id;
      this.userProgress.lastActivity = new Date();
      return true;
    }
    return false;
  }

  goToNextStep(): boolean {
    const currentStep = this.getCurrentStep();
    if (!currentStep || !this.canGoNext()) return false;

    // Marcar passo atual como completo
    if (!this.userProgress.completedSteps.includes(currentStep.id)) {
      this.userProgress.completedSteps.push(currentStep.id);
    }

    // Determinar próximo passo baseado nas respostas
    const nextStepId = this.getNextStepId(currentStep);
    if (nextStepId) {
      this.userProgress.currentStepId = nextStepId;
      this.userProgress.lastActivity = new Date();
      return true;
    }

    return false;
  }

  goToStep(stepId: string): boolean {
    const step = this.getStepById(stepId);
    if (step) {
      this.userProgress.currentStepId = stepId;
      this.userProgress.lastActivity = new Date();
      return true;
    }
    return false;
  }

  addResponse(questionId: string, stepId: string, value: string | string[]): void {
    // Remover resposta anterior para a mesma questão
    this.userProgress.responses = this.userProgress.responses.filter(
      r => r.questionId !== questionId
    );

    // Adicionar nova resposta
    this.userProgress.responses.push({
      questionId,
      stepId,
      value,
      timestamp: new Date()
    });

    this.userProgress.lastActivity = new Date();
  }

  getResponseForQuestion(questionId: string): UserResponse | undefined {
    return this.userProgress.responses.find(r => r.questionId === questionId);
  }

  getResponsesForStep(stepId: string): UserResponse[] {
    return this.userProgress.responses.filter(r => r.stepId === stepId);
  }

  private getNextStepId(currentStep: Step): string | null {
    // Verificar se há lógica condicional baseada nas respostas
    if (currentStep.questions && currentStep.questions.length > 0) {
      for (const question of currentStep.questions) {
        const response = this.getResponseForQuestion(question.id);
        if (response && question.options) {
          const selectedOption = question.options.find(
            opt => opt.value === response.value || 
            (Array.isArray(response.value) && response.value.includes(opt.value))
          );
          
          if (selectedOption && selectedOption.nextStepId) {
            return selectedOption.nextStepId;
          }
        }
      }
    }

    // Se não há lógica condicional, ir para o próximo passo na ordem
    const currentIndex = this.getCurrentStepIndex();
    if (currentIndex < this.steps.length - 1) {
      return this.steps[currentIndex + 1].id;
    }

    return null; // Fim do guia
  }

  getProgress(): UserProgress {
    return { ...this.userProgress };
  }

  getProgressPercentage(): number {
    return (this.userProgress.completedSteps.length / this.steps.length) * 100;
  }

  isCompleted(): boolean {
    return this.userProgress.completedSteps.length === this.steps.length;
  }

  reset(): void {
    this.userProgress = {
      userId: this.userProgress.userId,
      currentStepId: this.steps[0]?.id || '',
      completedSteps: [],
      responses: [],
      startedAt: new Date(),
      lastActivity: new Date()
    };
  }

  // Métodos para persistência (localStorage)
  saveToLocalStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        `sales-guide-progress-${this.userProgress.userId}`,
        JSON.stringify(this.userProgress)
      );
    }
  }

  loadFromLocalStorage(): boolean {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(
        `sales-guide-progress-${this.userProgress.userId}`
      );
      if (saved) {
        try {
          const progress = JSON.parse(saved);
          this.userProgress = {
            ...progress,
            startedAt: new Date(progress.startedAt),
            lastActivity: new Date(progress.lastActivity),
            responses: progress.responses.map((r: any) => ({
              ...r,
              timestamp: new Date(r.timestamp)
            }))
          };
          return true;
        } catch (error) {
          console.error('Erro ao carregar progresso:', error);
        }
      }
    }
    return false;
  }
}