import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { GrowthHero } from "@/components/solutions/growth/GrowthHero";
import { GrowthLevers } from "@/components/solutions/growth/GrowthLevers";
import { GrowthDiagnosis } from "@/components/solutions/growth/GrowthDiagnosis";
import { InLocoConsulting } from "@/components/solutions/growth/InLocoConsulting";
import { BusinessPillars } from "@/components/solutions/growth/BusinessPillars";
import { GrowthProcess } from "@/components/solutions/growth/GrowthProcess";
import { IntegratedExecution } from "@/components/solutions/growth/IntegratedExecution";
import { GrowthEcosystem } from "@/components/solutions/growth/GrowthEcosystem";
import { IntegratedComparison } from "@/components/solutions/growth/IntegratedComparison";
import { GrowthIncludes } from "@/components/solutions/growth/GrowthIncludes";
import { GrowthPricing } from "@/components/solutions/growth/GrowthPricing";
import { NextThirty } from "@/components/solutions/growth/NextThirty";
import { GrowthCTA } from "@/components/solutions/growth/GrowthCTA";
import { OtherSolutionsGrowth } from "@/components/solutions/growth/OtherSolutionsGrowth";

export const metadata: Metadata = {
  title: "Consultoria de Crescimento In Loco | M30 Marketing",
  description:
    "Consultoria de crescimento com diagnóstico In Loco, estratégia, conteúdo, tráfego, atendimento e acompanhamento de indicadores para encontrar novas oportunidades de evolução no negócio.",
  openGraph: {
    title: "Consultoria de Crescimento In Loco | M30 Marketing",
    description:
      "Consultoria de crescimento com diagnóstico In Loco, estratégia, conteúdo, tráfego, atendimento e acompanhamento de indicadores para encontrar novas oportunidades de evolução no negócio.",
    url: "https://m30marketing.com.br/solucoes/consultoria-in-loco",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ConsultoriaInLocoPage() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero da Solução */}
        <GrowthHero />

        {/* 03 - Crescimento Não é uma Única Coisa (6 Alavancas) */}
        <GrowthLevers />

        {/* 04 - Diagnóstico de Crescimento (Fluxo de Descoberta) */}
        <GrowthDiagnosis />

        {/* 05 - Consultoria In Loco (Presencial & Imersivo) */}
        <InLocoConsulting />

        {/* 06 - Os 8 Pilares Analisados */}
        <BusinessPillars />

        {/* 07 - Como Funciona a Consultoria (Timeline em 6 etapas) */}
        <GrowthProcess />

        {/* 08 - Estratégia sem Execução Vira PowerPoint (5 Etapas Operacionais) */}
        <IntegratedExecution />

        {/* 09 - O Ecossistema em Ação (Ciclo Dinâmico Recorrente) */}
        <GrowthEcosystem />

        {/* 10 - Por que não contratar tudo separado? (Comparação Tradicional vs M30) */}
        <IntegratedComparison />

        {/* 11 - O que está incluso (Detalhamento da Entrega em 5 frentes) */}
        <GrowthIncludes />

        {/* 12 - Investimento (A partir de R$ 3.880/mês + Mídia Separada) */}
        <GrowthPricing />

        {/* 13 - O Próximo 30% (Posicionamento de Evolução) */}
        <NextThirty />

        {/* 14 - CTA Final */}
        <GrowthCTA />

        {/* 15 - Outras Soluções M30 */}
        <OtherSolutionsGrowth />
      </main>

      {/* 16 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
