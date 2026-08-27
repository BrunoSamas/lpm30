import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { HeroSolutionsCarousel } from "@/components/sections/HeroSolutionsCarousel";
import { MarketingChecklist } from "@/components/sections/MarketingChecklist";
import { OwnerProblem } from "@/components/sections/OwnerProblem";
import { TimeCostCalculator } from "@/components/sections/TimeCostCalculator";
import { OpportunityCost } from "@/components/sections/OpportunityCost";
import { M30Ecosystem } from "@/components/sections/M30Ecosystem";
// import { ContentPlans } from "@/components/sections/ContentPlans";
// import { GrowthTools } from "@/components/sections/GrowthTools";
import { GrowthConsulting } from "@/components/sections/GrowthConsulting";
import { FinalManifesto } from "@/components/sections/FinalManifesto";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero Dobra Principal (Carrossel de Posicionamento M30) */}
        <HeroSolutionsCarousel />

        {/* 03 - Quem faz o marketing? Checklist Provocativo */}
        <MarketingChecklist />

        {/* 04 - O problema não é você não saber fazer */}
        <OwnerProblem />

        {/* 05 - Calculadora do Custo do Tempo */}
        <TimeCostCalculator />

        {/* 06 - Custo de Oportunidade */}
        <OpportunityCost />

        {/* 07 - Ecossistema M30 (5 Pilares Conectados) */}
        <M30Ecosystem />

        {/* 08 - Escolha o que você não quer mais fazer (Serviços e Vídeos) */}
        {/* <ContentPlans /> */}

        {/* 09 - Aquisição e Automação (Tráfego Pago & BeeIA) */}
        {/* <GrowthTools /> */}

        {/* 10 - Oferta Principal (Consultoria de Crescimento) */}
        <GrowthConsulting />

        {/* 11 - Posicionamento Final / Manifesto */}
        <FinalManifesto />

        {/* 12 - CTA Final de Conversão */}
        <FinalCTA />
      </main>

      {/* 13 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
