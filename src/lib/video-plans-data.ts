export interface VideoPlan {
  id: string;
  videos: number;
  price: number;
  category: "mobile" | "pro";
  recommended?: boolean;
  highlight?: string;
  description: string;
  ctaText: string;
}

export const VIDEO_PLANS: { mobile: VideoPlan[]; pro: VideoPlan[] } = {
  mobile: [
    {
      id: "mobile-4",
      videos: 4,
      price: 590,
      category: "mobile",
      description: "Para empresas que querem iniciar uma presença recorrente com conteúdo planejado.",
      ctaText: "Quero 4 vídeos Mobile",
    },
    {
      id: "mobile-6",
      videos: 6,
      price: 890,
      category: "mobile",
      recommended: true,
      highlight: "MAIS RECOMENDADO",
      description: "Mais frequência para manter sua empresa constantemente presente e engajada.",
      ctaText: "Quero 6 vídeos Mobile",
    },
  ],
  pro: [
    {
      id: "pro-4",
      videos: 4,
      price: 890,
      category: "pro",
      description: "Para empresas que precisam de produção profissional para lançamentos, campanhas e anúncios.",
      ctaText: "Quero 4 vídeos PRO",
    },
    {
      id: "pro-6",
      videos: 6,
      price: 1210,
      category: "pro",
      highlight: "MÁXIMO IMPACTO",
      description: "Produção audiovisual de alto impacto para autoridade máxima e fortalecimento de marca.",
      ctaText: "Quero 6 vídeos PRO",
    },
  ],
};

export const formatCurrency = (val: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(val);
};
