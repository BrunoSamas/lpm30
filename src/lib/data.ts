// URL Fallback para botão de WhatsApp ou formulário de contato
export const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5542988017956?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20M30%20Marketing";

// Item do Checklist - "Quem Faz o Marketing?"
export interface ChecklistItem {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "1", label: "É você quem pensa nas ideias de conteúdo?", defaultChecked: true },
  { id: "2", label: "Decide o que postar e grava os próprios vídeos?", defaultChecked: true },
  { id: "3", label: "Cobra a edição e ajusta conteúdos?", defaultChecked: true },
  { id: "4", label: "Configura os anúncios e gerencia campanhas?", defaultChecked: true },
  { id: "5", label: "Acompanha relatórios e métricas de desempenho?", defaultChecked: true },
  { id: "6", label: "Responde os leads e qualifica as oportunidades?", defaultChecked: true },
  { id: "7", label: "Pensa na próxima ação estratégica da marca?", defaultChecked: true },
];

// Onde seu tempo gera mais valor
export const HIGH_VALUE_TASKS = [
  "Liderando a equipe e a cultura",
  "Fechando vendas e grandes contratos",
  "Negociando parcerias estratégicas",
  "Tomando decisões de alto impacto",
  "Fazendo a empresa crescer e escalar",
];

// Custo de Oportunidade - Atividades que o dono deixa de fazer
export const OPPORTUNITY_COST_ACTIVITIES = [
  {
    icon: "Users",
    title: "Visitar novos clientes",
    description: "Abrir novas frentes de relacionamento e novos mercados.",
  },
  {
    icon: "Briefcase",
    title: "Fechar grandes negócios",
    description: "Dedicar tempo comercial onde a margem é verdadeiramente alta.",
  },
  {
    icon: "Compass",
    title: "Liderar sua equipe",
    description: "Alinhar processos, motivar pessoas e cobrar resultados.",
  },
  {
    icon: "TrendingUp",
    title: "Melhorar processos",
    description: "Eliminar gargalos operacionais que corroem o lucro.",
  },
  {
    icon: "Lightbulb",
    title: "Criar novos produtos",
    description: "Inovar na esteira de soluções da empresa.",
  },
  {
    icon: "Target",
    title: "Pensar no futuro",
    description: "Desenhar a visão de médio e longo prazo do negócio.",
  },
];

// Ecossistema M30 - 5 Pilares com Rotas Clicáveis
export interface EcosystemPillar {
  number: string;
  category: string;
  name: string;
  description: string;
  badge: string;
  href: string;
}

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    number: "01",
    category: "Direção",
    name: "ASSESSORIA",
    description: "Orientação estratégica clara para sua equipe executar com máxima eficiência.",
    badge: "Estratégia",
    href: "/solucoes/assessoria",
  },
  {
    number: "02",
    category: "Conteúdo",
    name: "VÍDEOS MOBILE / PRO",
    description: "Produção de alto impacto para posicionar sua marca e gerar autoridade imediata.",
    badge: "Autoridade",
    href: "/solucoes/videos",
  },
  {
    number: "03",
    category: "Distribuição",
    name: "TRÁFEGO PAGO",
    description: "Anúncios altamente otimizados para atrair clientes qualificados diariamente.",
    badge: "Aquisição",
    href: "/solucoes/trafego-pago",
  },
  {
    number: "04",
    category: "Atendimento",
    name: "BEEIA",
    description: "Atendimento e qualificação inteligente de leads 24 horas por dia sem espera.",
    badge: "Automação",
    href: "/solucoes/beeia",
  },
  {
    number: "05",
    category: "Crescimento",
    name: "CONSULTORIA IN LOCO",
    description: "Acompanhamento direto no seu negócio para destravar gargalos e escalar.",
    badge: "Escala",
    href: "/solucoes/consultoria-in-loco",
  },
];

// Planos de Serviços de Conteúdo e Assessoria
export const CONTENT_SERVICES = {
  assessoria: {
    title: "ASSESSORIA DE MARKETING",
    price: "R$ 440",
    period: "/mês",
    description: "Ideal para quem quer orientação profissional contínua mantendo a execução interna.",
    features: [
      "Encontros mensais de 2 horas de alinhamento",
      "Metodologia exclusiva M30 Guia",
      "Direcionamento estratégico de campanhas",
      "Execução guiada para a equipe do cliente",
    ],
    ctaText: "Quero assessoria",
  },
  videosMobile: {
    title: "VÍDEOS MOBILE",
    tag: "Mobile para estar presente",
    description: "Conteúdo ágil e dinâmico para manter sua empresa constantemente presente na rotina dos seus clientes.",
    plans: [
      { name: "4 vídeos / mês", price: "R$ 590", period: "/mês" },
      { name: "6 vídeos / mês", price: "R$ 890", period: "/mês" },
    ],
    ctaText: "Quero produzir conteúdo",
  },
  videosPro: {
    title: "VÍDEOS PRO",
    tag: "PRO para marcar presença",
    description: "Produção cinematográfica e profissional para promover seus produtos e posicionar sua marca no topo.",
    highlight: true,
    plans: [
      { name: "4 vídeos PRO / mês", price: "R$ 990", period: "/mês" },
      { name: "6 vídeos PRO / mês", price: "R$ 1.480", period: "/mês" },
    ],
    ctaText: "Quero vídeos PRO",
  },
};

// Ferramentas de Aquisição e Automação
export const GROWTH_TOOLS = {
  traffic: {
    title: "GESTÃO DE TRÁFEGO PAGO",
    tag: "ATRAÇÃO DE CLIENTES",
    price: "R$ 890",
    period: "/mês",
    description: "Planejamento, criação, gestão e otimização contínua das suas campanhas de anúncios em Meta e Google.",
    highlights: [
      "Investimento mínimo recomendado em mídia: R$ 30/dia",
      "Relatórios periódicos e transparentes de performance",
      "Criação e testes de anúncios de alta conversão",
    ],
    quote: "Você não precisa aprender a anunciar. Precisa que as pessoas certas encontrem sua empresa.",
    ctaText: "Quero atrair clientes",
  },
  beeIA: {
    title: "BeeIA — Inteligência Comercial",
    tag: "VENDAS & AUTOMAÇÃO 24/7",
    price: "R$ 820",
    period: "/mês",
    additionalInfo: "Incluso 1 número de WhatsApp (+ R$ 200/mês por número adicional).",
    features: [
      "Atende instantaneamente sem tempo de espera",
      "Conversa de forma natural e personalizada",
      "Qualifica a oportunidade antes de enviar ao vendedor",
      "Realiza follow-up automático de leads frios",
      "Funciona 24 horas por dia, 7 dias por semana",
    ],
    quote: "Não adianta gerar oportunidades e deixá-las esperando no WhatsApp.",
    ctaText: "Conhecer a BeeIA",
  },
};

// Oferta Principal - Consultoria de Crescimento M30
export const MAIN_OFFER = {
  title: "Consultoria de Crescimento",
  eyebrow: "E SE A M30 ASSUMISSE A OPERAÇÃO?",
  subtitle: "Para empresas que querem uma estrutura completa trabalhando ativamente pelo seu crescimento.",
  included: [
    {
      title: "6 Vídeos PRO por mês",
      desc: "Produção e conteúdo profissional recorrente de alto nível",
    },
    {
      title: "Gestão de Tráfego Pago",
      desc: "Campanhas, otimização e atração contínua de novos clientes",
    },
    {
      title: "BeeIA Integrada",
      desc: "1 número de WhatsApp com inteligência comercial ativa 24/7",
    },
    {
      title: "Consultoria In Loco",
      desc: "Estratégia, diagnósticos e otimização direta de processos",
    },
  ],
  price: "R$ 3.880",
  period: "/mês",
  priceLabel: "INVESTIMENTO MENSAL A PARTIR DE",
  badge: "Solução Completa Integrada",
  quote: "Você cuida da empresa. Nós cuidamos do crescimento.",
  ctaText: "Quero a M30 na minha empresa",
};

// Links do Header e Footer
export const NAV_LINKS = [
  { label: "O Problema", href: "/#o-problema" },
  { label: "Calculadora", href: "/#calculadora" },
  { label: "Soluções", href: "/#ecossistema" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Consultoria", href: "/#consultoria" },
];
