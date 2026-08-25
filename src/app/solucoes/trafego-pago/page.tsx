import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { TrafficHero } from "@/components/solutions/traffic/TrafficHero";
import { AcquisitionFunnel } from "@/components/solutions/traffic/AcquisitionFunnel";
import { ConversionSimulation } from "@/components/solutions/traffic/ConversionSimulation";
import { ContentDistribution } from "@/components/solutions/traffic/ContentDistribution";
import { TrafficInvestment } from "@/components/solutions/traffic/TrafficInvestment";
import { TrafficMetrics } from "@/components/solutions/traffic/TrafficMetrics";
import { TrafficProcess } from "@/components/solutions/traffic/TrafficProcess";
import { TrafficPricing } from "@/components/solutions/traffic/TrafficPricing";
import { OtherSolutions } from "@/components/solutions/traffic/OtherSolutions";

export const metadata: Metadata = {
  title: "Gestão de Tráfego Pago | M30 Marketing",
  description:
    "Gestão estratégica de tráfego pago para atrair pessoas qualificadas, acompanhar métricas e construir um processo de aquisição mais previsível.",
  openGraph: {
    title: "Gestão de Tráfego Pago | M30 Marketing",
    description:
      "Gestão estratégica de tráfego pago para atrair pessoas qualificadas, acompanhar métricas e construir um processo de aquisição mais previsível.",
    url: "https://m30marketing.com.br/solucoes/trafego-pago",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TrafegoPagoPage() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero da Solução */}
        <TrafficHero />

        {/* 03 - O Funil de Aquisição */}
        <AcquisitionFunnel />

        {/* 04 & 05 - Marketing é um jogo de Conversão & Simulador de Funil */}
        <ConversionSimulation />

        {/* 06 - Conteúdo + Distribuição (Empresa A vs Empresa B) */}
        <ContentDistribution />

        {/* 07 & 08 - Investimento e Volume & Simulador de Oportunidades */}
        <TrafficInvestment />

        {/* 09 & 10 - Decisões Baseadas em Dados & Não Entregamos Apenas Cliques */}
        <TrafficMetrics />

        {/* 11 - Como Funciona o Trabalho (Processo M30) */}
        <TrafficProcess />

        {/* 12 & 13 - Proposta e CTA Principal */}
        <TrafficPricing />

        {/* 14 - Outras Soluções */}
        <OtherSolutions />
      </main>

      {/* 15 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
