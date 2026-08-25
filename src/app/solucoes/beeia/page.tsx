import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { BeeIAHero } from "@/components/solutions/beeia/BeeIAHero";
import { LeadTiming } from "@/components/solutions/beeia/LeadTiming";
import { ResponseSpeed } from "@/components/solutions/beeia/ResponseSpeed";
import { BeeIAFlow } from "@/components/solutions/beeia/BeeIAFlow";
import { BeeIATraining } from "@/components/solutions/beeia/BeeIATraining";
import { BeeIASetup } from "@/components/solutions/beeia/BeeIASetup";
import { BeeIAEcosystem } from "@/components/solutions/beeia/BeeIAEcosystem";
import { BeeIAConversation } from "@/components/solutions/beeia/BeeIAConversation";
import { SimultaneousService } from "@/components/solutions/beeia/SimultaneousService";
import { HumanAndAI } from "@/components/solutions/beeia/HumanAndAI";
import { BeeIAPricing } from "@/components/solutions/beeia/BeeIAPricing";
import { AfterHoursCalculator } from "@/components/solutions/beeia/AfterHoursCalculator";
import { BeeIAFit } from "@/components/solutions/beeia/BeeIAFit";
import { BeeIACTA } from "@/components/solutions/beeia/BeeIACTA";
import { OtherSolutionsBeeIA } from "@/components/solutions/beeia/OtherSolutionsBeeIA";

export const metadata: Metadata = {
  title: "BeeIA — Agente Digital para Atendimento e Vendas | M30 Marketing",
  description:
    "Agente Digital treinado para atender, qualificar e acompanhar oportunidades 24 horas por dia, integrado ao processo comercial da sua empresa.",
  openGraph: {
    title: "BeeIA — Agente Digital para Atendimento e Vendas | M30 Marketing",
    description:
      "Agente Digital treinado para atender, qualificar e acompanhar oportunidades 24 horas por dia, integrado ao processo comercial da sua empresa.",
    url: "https://m30marketing.com.br/solucoes/beeia",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BeeIAPage() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero da Solução */}
        <BeeIAHero />

        {/* 03 - O Problema: O Lead não espera */}
        <LeadTiming />

        {/* 04 - Dado de Referência sobre Velocidade */}
        <ResponseSpeed />

        {/* 05 - O que a BeeIA faz (Jornada em 7 etapas) */}
        <BeeIAFlow />

        {/* 06 - Atendimento + Inteligência Artificial (4 Pilares) */}
        <BeeIATraining />

        {/* 07 - Como a BeeIA é preparada (Treinamento em 7 etapas) */}
        <BeeIASetup />

        {/* 08 - Um Agente. Várias Conexões (Ecossistema e Módulos) */}
        <BeeIAEcosystem />

        {/* 09 - Exemplo de Conversa (Simulação em Chat) */}
        <BeeIAConversation />

        {/* 10 - Atendimento Simultâneo (Escala 24/7) */}
        <SimultaneousService />

        {/* 11 - Humano + Agente Digital (Sinergia Comercial) */}
        <HumanAndAI />

        {/* 12 - Investimento (R$ 820/mês) */}
        <BeeIAPricing />

        {/* 13 - Calculadora de Oportunidades Fora do Horário */}
        <AfterHoursCalculator />

        {/* 14 - Para quem a BeeIA faz sentido */}
        <BeeIAFit />

        {/* 15 - CTA Final */}
        <BeeIACTA />

        {/* 16 - Outras Soluções M30 */}
        <OtherSolutionsBeeIA />
      </main>

      {/* 17 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
