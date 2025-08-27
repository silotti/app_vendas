import { SalesGuide } from '@/types';

export const salesGuideData: SalesGuide = {
  id: 'vendas-online-basico',
  title: 'Guia Completo de Vendas Online',
  description: 'Aprenda passo a passo como iniciar e otimizar suas vendas online com estratégias comprovadas.',
  estimatedDuration: '45-60 minutos',
  difficulty: 'iniciante',
  steps: [
    {
      id: 'step-1',
      title: 'Definindo seu Produto ou Serviço',
      description: 'Primeiro passo para vendas online bem-sucedidas',
      content: `
        <h3>Identificando seu Produto ou Serviço Ideal</h3>
        <p>Antes de começar a vender online, é fundamental definir claramente o que você vai oferecer ao mercado.</p>
        
        <h4>Principais considerações:</h4>
        <ul>
          <li><strong>Paixão vs. Demanda:</strong> Equilibre algo que você goste com algo que o mercado precisa</li>
          <li><strong>Conhecimento:</strong> Escolha algo que você já conhece ou está disposto a aprender</li>
          <li><strong>Investimento inicial:</strong> Considere quanto capital você tem disponível</li>
          <li><strong>Competição:</strong> Analise quantos concorrentes existem no mercado</li>
        </ul>
        
        <h4>Dica importante:</h4>
        <p>Produtos digitais (cursos, e-books, consultoria) têm menor custo inicial e maior margem de lucro.</p>
      `,
      questions: [
        {
          id: 'product-type',
          text: 'Que tipo de produto ou serviço você pretende vender?',
          type: 'single',
          required: true,
          options: [
            { id: 'physical', text: 'Produtos Físicos', value: 'physical', nextStepId: 'step-2a' },
            { id: 'digital', text: 'Produtos Digitais', value: 'digital', nextStepId: 'step-2b' },
            { id: 'service', text: 'Serviços', value: 'service', nextStepId: 'step-2c' },
            { id: 'unsure', text: 'Ainda não tenho certeza', value: 'unsure', nextStepId: 'step-2d' }
          ]
        }
      ],
      isCompleted: false,
      order: 1
    },
    {
      id: 'step-2a',
      title: 'Estratégias para Produtos Físicos',
      description: 'Como vender produtos físicos online com sucesso',
      content: `
        <h3>Vendendo Produtos Físicos Online</h3>
        <p>Produtos físicos exigem atenção especial para logística, estoque e entrega.</p>
        
        <h4>Estratégias específicas:</h4>
        <ul>
          <li><strong>Dropshipping:</strong> Venda sem estoque próprio</li>
          <li><strong>Estoque próprio:</strong> Maior controle, mas requer investimento</li>
          <li><strong>Print on demand:</strong> Ideal para produtos personalizados</li>
        </ul>
        
        <h4>Plataformas recomendadas:</h4>
        <ul>
          <li>Mercado Livre (marketplace)</li>
          <li>Shopify (loja própria)</li>
          <li>WooCommerce (WordPress)</li>
          <li>Nuvemshop (nacional)</li>
        </ul>
      `,
      questions: [
        {
          id: 'physical-model',
          text: 'Qual modelo de negócio para produtos físicos mais te interessa?',
          type: 'single',
          required: true,
          options: [
            { id: 'dropshipping', text: 'Dropshipping', value: 'dropshipping' },
            { id: 'own-stock', text: 'Estoque próprio', value: 'own-stock' },
            { id: 'print-demand', text: 'Print on demand', value: 'print-demand' }
          ]
        }
      ],
      isCompleted: false,
      order: 2
    },
    {
      id: 'step-2b',
      title: 'Estratégias para Produtos Digitais',
      description: 'Como criar e vender produtos digitais',
      content: `
        <h3>Vendendo Produtos Digitais</h3>
        <p>Produtos digitais são escaláveis e têm alta margem de lucro.</p>
        
        <h4>Tipos de produtos digitais:</h4>
        <ul>
          <li><strong>Cursos online:</strong> Ensine suas habilidades</li>
          <li><strong>E-books:</strong> Compartilhe conhecimento por escrito</li>
          <li><strong>Templates:</strong> Crie modelos reutilizáveis</li>
          <li><strong>Software/Apps:</strong> Desenvolva soluções digitais</li>
        </ul>
        
        <h4>Plataformas especializadas:</h4>
        <ul>
          <li>Hotmart (marketplace nacional)</li>
          <li>Udemy (cursos online)</li>
          <li>Gumroad (produtos digitais variados)</li>
          <li>Teachable (plataforma de cursos)</li>
        </ul>
      `,
      questions: [
        {
          id: 'digital-type',
          text: 'Que tipo de produto digital você gostaria de criar?',
          type: 'single',
          required: true,
          options: [
            { id: 'course', text: 'Curso online', value: 'course' },
            { id: 'ebook', text: 'E-book', value: 'ebook' },
            { id: 'template', text: 'Templates', value: 'template' },
            { id: 'software', text: 'Software/App', value: 'software' }
          ]
        }
      ],
      isCompleted: false,
      order: 2
    },
    {
      id: 'step-2c',
      title: 'Estratégias para Serviços',
      description: 'Como vender serviços online',
      content: `
        <h3>Vendendo Serviços Online</h3>
        <p>Serviços online permitem monetizar suas habilidades diretamente.</p>
        
        <h4>Tipos de serviços online:</h4>
        <ul>
          <li><strong>Consultoria:</strong> Ofereça expertise em sua área</li>
          <li><strong>Freelancing:</strong> Projetos pontuais</li>
          <li><strong>Mentoria:</strong> Acompanhamento personalizado</li>
          <li><strong>Serviços técnicos:</strong> Desenvolvimento, design, etc.</li>
        </ul>
        
        <h4>Plataformas para serviços:</h4>
        <ul>
          <li>99Freelas (marketplace nacional)</li>
          <li>Upwork (internacional)</li>
          <li>Calendly (agendamento)</li>
          <li>Site próprio com formulário</li>
        </ul>
      `,
      questions: [
        {
          id: 'service-type',
          text: 'Que tipo de serviço você oferece ou gostaria de oferecer?',
          type: 'single',
          required: true,
          options: [
            { id: 'consulting', text: 'Consultoria', value: 'consulting' },
            { id: 'freelance', text: 'Freelancing', value: 'freelance' },
            { id: 'mentoring', text: 'Mentoria', value: 'mentoring' },
            { id: 'technical', text: 'Serviços técnicos', value: 'technical' }
          ]
        }
      ],
      isCompleted: false,
      order: 2
    },
    {
      id: 'step-2d',
      title: 'Descobrindo sua Área de Atuação',
      description: 'Como identificar oportunidades de negócio online',
      content: `
        <h3>Encontrando sua Oportunidade</h3>
        <p>Se você ainda não tem certeza do que vender, vamos descobrir juntos!</p>
        
        <h4>Exercício de autodescoberta:</h4>
        <ol>
          <li><strong>Liste suas habilidades:</strong> O que você sabe fazer bem?</li>
          <li><strong>Identifique problemas:</strong> Que problemas você pode resolver?</li>
          <li><strong>Pesquise demanda:</strong> As pessoas procuram por isso?</li>
          <li><strong>Analise a concorrência:</strong> Quanto outros cobram?</li>
        </ol>
        
        <h4>Ferramentas de pesquisa:</h4>
        <ul>
          <li>Google Trends (tendências de busca)</li>
          <li>Answer The Public (perguntas frequentes)</li>
          <li>Social media (grupos do Facebook, LinkedIn)</li>
        </ul>
      `,
      questions: [
        {
          id: 'skills-interest',
          text: 'Em qual área você tem mais habilidades ou interesse?',
          type: 'multiple',
          required: true,
          options: [
            { id: 'tech', text: 'Tecnologia', value: 'tech' },
            { id: 'marketing', text: 'Marketing', value: 'marketing' },
            { id: 'design', text: 'Design', value: 'design' },
            { id: 'education', text: 'Educação', value: 'education' },
            { id: 'health', text: 'Saúde e bem-estar', value: 'health' },
            { id: 'finance', text: 'Finanças', value: 'finance' },
            { id: 'arts', text: 'Artes e criatividade', value: 'arts' }
          ]
        }
      ],
      isCompleted: false,
      order: 2
    },
    {
      id: 'step-3',
      title: 'Definindo seu Público-Alvo',
      description: 'Identificando quem são seus clientes ideais',
      content: `
        <h3>Conhecendo seu Cliente Ideal</h3>
        <p>Conhecer profundamente seu público é essencial para vendas eficazes.</p>
        
        <h4>Criando uma persona:</h4>
        <ul>
          <li><strong>Demografia:</strong> Idade, gênero, localização, renda</li>
          <li><strong>Comportamento:</strong> Onde passa tempo online, como consome conteúdo</li>
          <li><strong>Problemas:</strong> Que dores precisa resolver</li>
          <li><strong>Objeções:</strong> Por que hesitaria em comprar</li>
        </ul>
        
        <h4>Onde encontrar seu público:</h4>
        <ul>
          <li>Redes sociais (Instagram, Facebook, LinkedIn)</li>
          <li>Google (anúncios e SEO)</li>
          <li>Comunidades online (grupos, fóruns)</li>
          <li>Influenciadores da área</li>
        </ul>
      `,
      questions: [
        {
          id: 'target-experience',
          text: 'Seu público-alvo tem experiência com compras online?',
          type: 'single',
          required: true,
          options: [
            { id: 'experienced', text: 'Muito experiente', value: 'experienced' },
            { id: 'moderate', text: 'Alguma experiência', value: 'moderate' },
            { id: 'beginner', text: 'Pouca experiência', value: 'beginner' }
          ]
        }
      ],
      isCompleted: false,
      order: 3
    },
    {
      id: 'step-4',
      title: 'Criando sua Presença Online',
      description: 'Estabelecendo credibilidade e visibilidade',
      content: `
        <h3>Construindo sua Credibilidade Online</h3>
        <p>Para vender online, você precisa de uma presença digital confiável.</p>
        
        <h4>Elementos essenciais:</h4>
        <ul>
          <li><strong>Website ou Landing Page:</strong> Sua "casa" na internet</li>
          <li><strong>Redes Sociais:</strong> Onde você se conecta com o público</li>
          <li><strong>Depoimentos:</strong> Prova social de outros clientes</li>
          <li><strong>Portfolio:</strong> Exemplos do seu trabalho</li>
        </ul>
        
        <h4>Dicas para construir confiança:</h4>
        <ul>
          <li>Use fotos profissionais suas</li>
          <li>Seja transparente sobre quem você é</li>
          <li>Compartilhe sua história e experiência</li>
          <li>Mostre certificados e conquistas</li>
          <li>Inclua informações de contato claras</li>
        </ul>
      `,
      questions: [
        {
          id: 'online-presence',
          text: 'Você já tem alguma presença online?',
          type: 'multiple',
          required: true,
          options: [
            { id: 'website', text: 'Website próprio', value: 'website' },
            { id: 'instagram', text: 'Instagram', value: 'instagram' },
            { id: 'facebook', text: 'Facebook', value: 'facebook' },
            { id: 'linkedin', text: 'LinkedIn', value: 'linkedin' },
            { id: 'youtube', text: 'YouTube', value: 'youtube' },
            { id: 'none', text: 'Ainda não tenho', value: 'none' }
          ]
        }
      ],
      isCompleted: false,
      order: 4
    },
    {
      id: 'step-5',
      title: 'Estratégias de Precificação',
      description: 'Como definir preços que vendem e dão lucro',
      content: `
        <h3>Definindo o Preço Certo</h3>
        <p>O preço é um dos fatores mais importantes para o sucesso das vendas online.</p>
        
        <h4>Estratégias de precificação:</h4>
        <ul>
          <li><strong>Baseada no custo:</strong> Custo + margem de lucro</li>
          <li><strong>Baseada no valor:</strong> Quanto vale para o cliente</li>
          <li><strong>Baseada na concorrência:</strong> Preços do mercado</li>
          <li><strong>Psicológica:</strong> R$ 99,90 ao invés de R$ 100,00</li>
        </ul>
        
        <h4>Fatores a considerar:</h4>
        <ul>
          <li>Custos diretos e indiretos</li>
          <li>Tempo investido</li>
          <li>Exclusividade do produto/serviço</li>
          <li>Poder de compra do público-alvo</li>
          <li>Sazonalidade</li>
        </ul>
        
        <h4>Dica importante:</h4>
        <p>Comece com preços mais baixos para gerar depoimentos, depois aumente gradualmente.</p>
      `,
      questions: [
        {
          id: 'pricing-strategy',
          text: 'Qual estratégia de precificação faz mais sentido para você?',
          type: 'single',
          required: true,
          options: [
            { id: 'cost-based', text: 'Baseada no custo', value: 'cost-based' },
            { id: 'value-based', text: 'Baseada no valor', value: 'value-based' },
            { id: 'competition-based', text: 'Baseada na concorrência', value: 'competition-based' },
            { id: 'unsure', text: 'Não tenho certeza', value: 'unsure' }
          ]
        }
      ],
      isCompleted: false,
      order: 5
    },
    {
      id: 'step-6',
      title: 'Marketing Digital e Atração de Clientes',
      description: 'Como atrair pessoas interessadas no que você oferece',
      content: `
        <h3>Atraindo seus Primeiros Clientes</h3>
        <p>De nada adianta ter um ótimo produto se ninguém souber que ele existe.</p>
        
        <h4>Canais de marketing digital:</h4>
        <ul>
          <li><strong>Content Marketing:</strong> Blog, vídeos, podcasts</li>
          <li><strong>Redes Sociais:</strong> Posts orgânicos e anúncios pagos</li>
          <li><strong>Email Marketing:</strong> Lista de contatos interessados</li>
          <li><strong>SEO:</strong> Aparecer no Google organicamente</li>
          <li><strong>Parcerias:</strong> Colaboração com influenciadores</li>
        </ul>
        
        <h4>Estratégia dos 3 C's:</h4>
        <ul>
          <li><strong>Criar:</strong> Conteúdo de valor para seu público</li>
          <li><strong>Conectar:</strong> Engajar e responder comentários</li>
          <li><strong>Converter:</strong> Transformar seguidores em clientes</li>
        </ul>
        
        <h4>Orçamento inicial recomendado:</h4>
        <p>Comece com R$ 100-300/mês em anúncios após validar organicamente.</p>
      `,
      questions: [
        {
          id: 'marketing-budget',
          text: 'Quanto você pode investir em marketing por mês?',
          type: 'single',
          required: true,
          options: [
            { id: 'no-budget', text: 'R$ 0 - Apenas orgânico', value: 'no-budget' },
            { id: 'low-budget', text: 'R$ 100 - R$ 300', value: 'low-budget' },
            { id: 'medium-budget', text: 'R$ 300 - R$ 1000', value: 'medium-budget' },
            { id: 'high-budget', text: 'Mais de R$ 1000', value: 'high-budget' }
          ]
        }
      ],
      isCompleted: false,
      order: 6
    },
    {
      id: 'step-7',
      title: 'Processo de Vendas e Conversão',
      description: 'Como transformar interesse em vendas efetivas',
      content: `
        <h3>Otimizando suas Conversões</h3>
        <p>Ter visitantes é bom, mas converter em vendas é o que realmente importa.</p>
        
        <h4>Funil de vendas básico:</h4>
        <ol>
          <li><strong>Atração:</strong> Pessoa descobre você</li>
          <li><strong>Interesse:</strong> Se interessa pelo que oferece</li>
          <li><strong>Consideração:</strong> Avalia se vale a pena comprar</li>
          <li><strong>Decisão:</strong> Decide comprar ou não</li>
          <li><strong>Pós-venda:</strong> Experiência após a compra</li>
        </ol>
        
        <h4>Elementos que aumentam conversão:</h4>
        <ul>
          <li>Depoimentos e avaliações reais</li>
          <li>Garantia de satisfação</li>
          <li>Escassez (oferta limitada)</li>
          <li>Urgência (prazo limitado)</li>
          <li>Bônus exclusivos</li>
          <li>Processo de compra simples</li>
        </ul>
        
        <h4>Páginas de venda eficientes:</h4>
        <ul>
          <li>Título chamativo</li>
          <li>Problema + Solução</li>
          <li>Benefícios claros</li>
          <li>Prova social</li>
          <li>Call-to-action forte</li>
        </ul>
      `,
      questions: [
        {
          id: 'sales-experience',
          text: 'Você já tem experiência vendendo online?',
          type: 'single',
          required: true,
          options: [
            { id: 'experienced', text: 'Sim, já vendi bastante', value: 'experienced' },
            { id: 'some-experience', text: 'Algumas vendas esporádicas', value: 'some-experience' },
            { id: 'beginner', text: 'Nunca vendi online', value: 'beginner' }
          ]
        }
      ],
      isCompleted: false,
      order: 7
    },
    {
      id: 'step-8',
      title: 'Finalizando e Próximos Passos',
      description: 'Seu plano de ação personalizado para começar',
      content: `
        <h3>Parabéns! Você completou o guia</h3>
        <p>Agora você tem todas as informações necessárias para começar suas vendas online.</p>
        
        <h4>Seu plano de ação:</h4>
        <ol>
          <li>Defina seu produto/serviço final</li>
          <li>Crie sua persona de cliente ideal</li>
          <li>Monte sua presença online básica</li>
          <li>Defina seus preços estrategicamente</li>
          <li>Comece criando conteúdo de valor</li>
          <li>Faça suas primeiras vendas</li>
          <li>Colete depoimentos</li>
          <li>Escale com anúncios pagos</li>
        </ol>
        
        <h4>Recursos úteis:</h4>
        <ul>
          <li>Canva (para criar imagens)</li>
          <li>Hotmart/Monetizze (para produtos digitais)</li>
          <li>MercadoPago/PagSeguro (para pagamentos)</li>
          <li>Google Analytics (para métricas)</li>
          <li>Mailchimp (para email marketing)</li>
        </ul>
        
        <h4>Lembre-se:</h4>
        <p>O segredo do sucesso em vendas online é começar, testar, aprender e melhorar continuamente. Não espere a perfeição!</p>
      `,
      isCompleted: false,
      order: 8
    }
  ]
};