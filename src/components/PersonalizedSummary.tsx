import React from 'react';
import { UserResponse } from '@/types';

interface PersonalizedSummaryProps {
  responses: UserResponse[];
  className?: string;
}

export default function PersonalizedSummary({ responses, className = '' }: PersonalizedSummaryProps) {
  const getRecommendations = () => {
    const recommendations: string[] = [];
    
    // Analisar tipo de produto/serviço
    const productType = responses.find(r => r.questionId === 'product-type')?.value as string;
    
    if (productType === 'digital') {
      recommendations.push('🚀 Produtos digitais são ideais para começar - baixo investimento e alta margem!');
      recommendations.push('📚 Considere criar um curso online ou e-book sobre sua área de expertise.');
    } else if (productType === 'physical') {
      recommendations.push('📦 Para produtos físicos, considere começar com dropshipping para reduzir riscos.');
      recommendations.push('🏪 Marketplace como Mercado Livre pode ser um bom ponto de partida.');
    } else if (productType === 'service') {
      recommendations.push('💼 Serviços online têm grande potencial - foque em construir sua credibilidade.');
      recommendations.push('📅 Use ferramentas de agendamento para facilitar o processo de contratação.');
    }

    // Analisar orçamento de marketing
    const marketingBudget = responses.find(r => r.questionId === 'marketing-budget')?.value as string;
    
    if (marketingBudget === 'no-budget') {
      recommendations.push('📱 Foque em marketing orgânico: crie conteúdo de valor no Instagram e LinkedIn.');
      recommendations.push('🤝 Busque parcerias e indicações para crescer sem custos.');
    } else if (marketingBudget === 'low-budget') {
      recommendations.push('🎯 Com R$ 100-300, teste anúncios no Facebook/Instagram com foco em conversão.');
      recommendations.push('📧 Invista em email marketing - tem ótimo retorno sobre investimento.');
    }

    // Analisar presença online
    const onlinePresence = responses.find(r => r.questionId === 'online-presence')?.value;
    const hasPresence = Array.isArray(onlinePresence) && onlinePresence.length > 0 && !onlinePresence.includes('none');
    
    if (!hasPresence) {
      recommendations.push('🌐 Prioridade: criar pelo menos um perfil profissional no Instagram ou LinkedIn.');
      recommendations.push('📝 Comece postando 3x por semana sobre sua área de expertise.');
    } else {
      recommendations.push('📈 Ótimo! Aproveite sua presença online existente para gerar mais engajamento.');
      recommendations.push('🔗 Conecte suas redes sociais para criar um ecossistema digital coeso.');
    }

    // Analisar experiência em vendas
    const salesExperience = responses.find(r => r.questionId === 'sales-experience')?.value as string;
    
    if (salesExperience === 'beginner') {
      recommendations.push('📖 Como iniciante, foque primeiro em entender bem seu cliente ideal.');
      recommendations.push('🎓 Estude cases de sucesso na sua área para acelerar o aprendizado.');
    } else if (salesExperience === 'experienced') {
      recommendations.push('⚡ Com sua experiência, foque em escalar e automatizar processos.');
      recommendations.push('📊 Use métricas para otimizar continuamente suas conversões.');
    }

    return recommendations;
  };

  const getNextSteps = () => {
    const steps = [
      '1. Defina exatamente o que você vai vender e para quem',
      '2. Crie ou melhore sua presença online principal',
      '3. Desenvolva 5-10 peças de conteúdo de valor',
      '4. Defina seus preços baseado na estratégia escolhida',
      '5. Faça suas primeiras 5 vendas para validar',
      '6. Colete depoimentos e refine sua oferta',
      '7. Implemente estratégias de marketing digital',
      '8. Automatize e escale o que funcionar'
    ];
    
    return steps;
  };

  if (responses.length === 0) {
    return null;
  }

  const recommendations = getRecommendations();
  const nextSteps = getNextSteps();

  return (
    <div className={`bg-gradient-to-br from-primary-50 to-success-50 border border-primary-200 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        🎯 Suas Recomendações Personalizadas
      </h3>
      
      {recommendations.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Baseado no seu perfil:</h4>
          <div className="space-y-2">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-gray-700 text-sm">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Seu plano de ação:</h4>
        <div className="grid gap-2">
          {nextSteps.map((step, index) => (
            <div key={index} className="flex items-center p-2 bg-white bg-opacity-60 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-success-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                {index + 1}
              </div>
              <p className="text-gray-700 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-white bg-opacity-70 rounded-lg border border-primary-200">
        <p className="text-sm text-gray-600 flex items-center">
          <span className="text-lg mr-2">💡</span>
          <strong>Dica importante:</strong> Não tente fazer tudo de uma vez. Foque em um passo por vez e execute bem antes de passar para o próximo.
        </p>
      </div>
    </div>
  );
}