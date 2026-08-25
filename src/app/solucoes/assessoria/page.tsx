import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { AdvisoryHero } from "@/components/solutions/advisory/AdvisoryHero";
import { DirectionProblem } from "@/components/solutions/advisory/DirectionProblem";
import { M30GuideMethod } from "@/components/solutions/advisory/M30GuideMethod";
import { MonthlyWorkflow } from "@/components/solutions/advisory/MonthlyWorkflow";
import { MonthlyHours } from "@/components/solutions/advisory/MonthlyHours";
import { SixMonthJourney } from "@/components/solutions/advisory/SixMonthJourney";
import { AdvisoryFit } from "@/components/solutions/advisory/AdvisoryFit";
import { AdvisoryTopics } from "@/components/solutions/advisory/AdvisoryTopics";
import { AdvisoryPricing } from "@/components/solutions/advisory/AdvisoryPricing";
import { AdvisoryCTA } from "@/components/solutions/advisory/AdvisoryCTA";
import { OtherSolutionsAdvisory } from "@/components/solutions/advisory/OtherSolutionsAdvisory";

export const metadata: Metadata = {
  title: "Assessoria de Marketing | M30 Marketing",
  description:
    "Assessoria de marketing com planejamento, orientação estratégica e aplicação prática para empresas que querem executar com mais direção.",
  openGraph: {
    title: "Assessoria de Marketing | M30 Marketing",
    description:
      "Assessoria de marketing com planejamento, orientação estratégica e aplicação prática para empresas que querem executar com mais direção.",
    url: "https://m30marketing.com.br/solucoes/assessoria",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
  },
};

export default function AssessoriaPage() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero da Solução */}
        <AdvisoryHero />

        {/* 03 - O Problema é Excesso de Possibilidades */}
        <DirectionProblem />

        {/* 04 - Metodologia M30 Guia (01 Guia & 02 Prática) */}
        <M30GuideMethod />

        {/* 05 - Como Funciona na Prática (Ciclo Mensal de 6 Etapas) */}
        <MonthlyWorkflow />

        {/* 06 & 07 - 2 Horas por Mês com Direção & Formatos (1x2h / 2x1h) */}
        <MonthlyHours />

        {/* 08 - Por Que 6 Meses? (Jornada de Maturação) */}
        <SixMonthJourney />

        {/* 09 - Para Quem É a Assessoria? (Faz Sentido vs Não É o Plano Certo) */}
        <AdvisoryFit />

        {/* 10 & 11 - O Que Podemos Trabalhar Juntos & O Que Está Incluso */}
        <AdvisoryTopics />

        {/* 12 & 13 - Investimento (R$ 440/mês) & Direção ou Execução */}
        <AdvisoryPricing />

        {/* 14 - CTA Final */}
        <AdvisoryCTA />

        {/* 15 - Outras Soluções M30 */}
        <OtherSolutionsAdvisory />
      </main>

      {/* 16 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
