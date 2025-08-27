export interface Step {
  id: string;
  title: string;
  description: string;
  content: string;
  questions?: Question[];
  nextSteps?: ConditionalNext[];
  isCompleted: boolean;
  order: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'text' | 'rating';
  options?: QuestionOption[];
  required: boolean;
}

export interface QuestionOption {
  id: string;
  text: string;
  value: string;
  nextStepId?: string;
}

export interface ConditionalNext {
  condition: string;
  nextStepId: string;
  description: string;
}

export interface UserResponse {
  questionId: string;
  stepId: string;
  value: string | string[];
  timestamp: Date;
}

export interface UserProgress {
  userId: string;
  currentStepId: string;
  completedSteps: string[];
  responses: UserResponse[];
  startedAt: Date;
  lastActivity: Date;
}

export interface SalesGuide {
  id: string;
  title: string;
  description: string;
  steps: Step[];
  estimatedDuration: string;
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
}