import { NextRequest, NextResponse } from 'next/server';
import { salesGuideData } from '@/data/salesGuide';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const stepId = url.searchParams.get('stepId');

    if (stepId) {
      // Retornar passo específico
      const step = salesGuideData.steps.find(s => s.id === stepId);
      if (!step) {
        return NextResponse.json(
          { error: 'Passo não encontrado' },
          { status: 404 }
        );
      }
      return NextResponse.json({ step });
    }

    // Retornar todos os passos
    return NextResponse.json({
      guide: salesGuideData,
      totalSteps: salesGuideData.steps.length
    });

  } catch (error) {
    console.error('Erro na API de passos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}