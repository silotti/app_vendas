import { NextRequest, NextResponse } from 'next/server';

// Simulação de banco de dados em memória (em produção, use um banco real)
const userProgressDB = new Map();

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId') || 'default-user';

    const progress = userProgressDB.get(userId);
    
    if (!progress) {
      return NextResponse.json({
        userId,
        currentStepId: 'step-1',
        completedSteps: [],
        responses: [],
        startedAt: new Date().toISOString(),
        lastActivity: new Date().toISOString()
      });
    }

    return NextResponse.json(progress);

  } catch (error) {
    console.error('Erro ao obter progresso:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId = 'default-user', ...progressData } = body;

    // Validar dados recebidos
    if (!progressData.currentStepId) {
      return NextResponse.json(
        { error: 'currentStepId é obrigatório' },
        { status: 400 }
      );
    }

    // Atualizar timestamp de última atividade
    const updatedProgress = {
      ...progressData,
      userId,
      lastActivity: new Date().toISOString()
    };

    // Salvar no "banco de dados"
    userProgressDB.set(userId, updatedProgress);

    return NextResponse.json({
      success: true,
      progress: updatedProgress
    });

  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId = 'default-user', response } = body;

    if (!response || !response.questionId || !response.stepId) {
      return NextResponse.json(
        { error: 'Dados de resposta inválidos' },
        { status: 400 }
      );
    }

    // Obter progresso atual
    let progress = userProgressDB.get(userId);
    if (!progress) {
      progress = {
        userId,
        currentStepId: 'step-1',
        completedSteps: [],
        responses: [],
        startedAt: new Date().toISOString(),
        lastActivity: new Date().toISOString()
      };
    }

    // Remover resposta anterior para a mesma questão
    progress.responses = progress.responses.filter(
      (r: any) => r.questionId !== response.questionId
    );

    // Adicionar nova resposta
    progress.responses.push({
      ...response,
      timestamp: new Date().toISOString()
    });

    progress.lastActivity = new Date().toISOString();

    // Salvar progresso atualizado
    userProgressDB.set(userId, progress);

    return NextResponse.json({
      success: true,
      progress
    });

  } catch (error) {
    console.error('Erro ao adicionar resposta:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId') || 'default-user';

    // Resetar progresso do usuário
    userProgressDB.delete(userId);

    return NextResponse.json({
      success: true,
      message: 'Progresso resetado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao resetar progresso:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}