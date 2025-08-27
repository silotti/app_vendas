# 🚀 App de Vendas Online - Guia Passo a Passo

## 📋 Sobre o Projeto

Este é um aplicativo interativo desenvolvido com **Next.js** e **Node.js** que oferece instruções passo a passo para vendas online. O sistema adapta as recomendações baseado nas respostas do usuário, fornecendo um guia personalizado em **Português do Brasil**.

## ✨ Características

- **🎯 Interativo**: Responda perguntas e receba recomendações personalizadas
- **📊 Progresso Visual**: Acompanhe seu avanço com barra de progresso
- **🔄 Dinâmico**: As próximas etapas se adaptam às suas respostas
- **💾 Persistente**: Seu progresso é salvo automaticamente
- **📱 Responsivo**: Funciona perfeitamente em desktop e mobile
- **🇧🇷 Português**: Todo conteúdo em português brasileiro

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React para desenvolvimento web
- **TypeScript** - Para maior segurança e produtividade
- **Tailwind CSS** - Framework CSS para estilização
- **Lucide React** - Ícones modernos
- **Local Storage** - Persistência de dados local

## 🚦 Como Executar

1. **Instalar dependências:**
   ```bash
   cd app-vendas-online
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📖 Como Usar

1. **Iniciar o Guia**: Ao abrir a aplicação, você verá o primeiro passo
2. **Responder Perguntas**: Responda às perguntas em cada etapa
3. **Navegar**: Use os botões "Anterior" e "Próximo" para navegar
4. **Ver Recomendações**: Suas respostas geram recomendações personalizadas
5. **Acompanhar Progresso**: A barra de progresso mostra seu avanço
6. **Reiniciar**: Use o botão "Reiniciar guia" se quiser começar novamente

## 🎯 Estrutura do Guia

O guia contém 8 etapas principais:

1. **Definindo seu Produto ou Serviço**
2. **Estratégias por Tipo de Produto** (varia conforme resposta)
3. **Definindo seu Público-Alvo**
4. **Criando sua Presença Online**
5. **Estratégias de Precificação**
6. **Marketing Digital e Atração de Clientes**
7. **Processo de Vendas e Conversão**
8. **Finalizando e Próximos Passos**

## 🔧 Funcionalidades Técnicas

### Sistema de Passos Dinâmicos
- Navegação condicional baseada nas respostas
- Diferentes caminhos para diferentes tipos de produtos/serviços

### Gerenciamento de Estado
- Hook customizado `useSalesGuide` para gerenciar estado
- Classe `StepManager` para lógica de negócio
- Persistência automática no localStorage

### API Routes
- `/api/steps` - Obter dados dos passos
- `/api/progress` - Gerenciar progresso do usuário

### Componentes Reutilizáveis
- `ProgressBar` - Barra de progresso visual
- `QuestionComponent` - Renderiza diferentes tipos de questões
- `StepContent` - Exibe conteúdo dos passos
- `PersonalizedSummary` - Resumo e recomendações personalizadas

## 📁 Estrutura do Projeto

```
app-vendas-online/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── progress/
│   │   │   └── steps/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── QuestionComponent.tsx
│   │   ├── StepContent.tsx
│   │   ├── StepNavigation.tsx
│   │   ├── PersonalizedSummary.tsx
│   │   └── SalesGuideApp.tsx
│   ├── lib/
│   │   ├── stepManager.ts
│   │   └── useSalesGuide.ts
│   ├── types/
│   │   └── index.ts
│   └── data/
│       └── salesGuide.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Personalização

### Adicionando Novos Passos
1. Edite `src/data/salesGuide.ts`
2. Adicione o novo passo ao array `steps`
3. Configure questões e lógica condicional se necessário

### Modificando Estilos
- Edite `src/app/globals.css` para estilos globais
- Modifique `tailwind.config.js` para cores personalizadas

### Adicionando Novas Funcionalidades
- Crie novos componentes em `src/components/`
- Adicione tipos em `src/types/index.ts`
- Implemente lógica em `src/lib/`

## 🚀 Build e Deploy

```bash
# Build para produção
npm run build

# Iniciar versão de produção
npm start
```

## 📝 Licença

Este projeto foi desenvolvido como uma ferramenta educacional para ajudar empreendedores a iniciar suas vendas online.

---

**Desenvolvido com ❤️ em português brasileiro 🇧🇷**