import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { VideosHero } from "@/components/solutions/videos/VideosHero";
import { ContentStrategy } from "@/components/solutions/videos/ContentStrategy";
import { ClientM30Roles } from "@/components/solutions/videos/ClientM30Roles";
import { ProductionFormats } from "@/components/solutions/videos/ProductionFormats";
import { FormatComparison } from "@/components/solutions/videos/FormatComparison";
import { ContentWorkflow } from "@/components/solutions/videos/ContentWorkflow";
import { MobileVideos } from "@/components/solutions/videos/MobileVideos";
import { ProVideos } from "@/components/solutions/videos/ProVideos";
import { VideoPlanComparison } from "@/components/solutions/videos/VideoPlanComparison";
import { ContentClosing } from "@/components/solutions/videos/ContentClosing";
import { ContentEcosystem } from "@/components/solutions/videos/ContentEcosystem";
import { VideosCTA } from "@/components/solutions/videos/VideosCTA";
import { OtherSolutionsVideos } from "@/components/solutions/videos/OtherSolutionsVideos";

export const metadata: Metadata = {
  title: "Produção de Vídeos Mobile e PRO | M30 Marketing",
  description:
    "Produção estratégica de vídeos Mobile e PRO para empresas que querem aparecer com frequência, autoridade e comunicação profissional.",
  openGraph: {
    title: "Produção de Vídeos Mobile e PRO | M30 Marketing",
    description:
      "Produção estratégica de vídeos Mobile e PRO para empresas que querem aparecer com frequência, autoridade e comunicação profissional.",
    url: "https://m30marketing.com.br/solucoes/videos",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
  },
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-[#11161E] text-white selection:bg-[#F26522] selection:text-white">
      {/* Header Sticky */}
      <Header />

      <main>
        {/* 02 - Hero da Solução */}
        <VideosHero />

        {/* 03 - Não é sobre postar mais (Estratégia antes do REC) */}
        <ContentStrategy />

        {/* 04 - O papel do cliente e da M30 */}
        <ClientM30Roles />

        {/* 05 - Um método. Dois formatos. (Mobile & PRO) */}
        <ProductionFormats />

        {/* 06 - Qual formato faz sentido? (Mobile ou PRO) */}
        <FormatComparison />

        {/* 07 - Como funciona? O Processo M30 */}
        <ContentWorkflow />

        {/* 08 & 09 - Vídeos Mobile & Planos Mobile */}
        <MobileVideos />

        {/* 10 & 11 - Vídeos PRO & Planos PRO */}
        <ProVideos />

        {/* 12 - Comparador de Planos */}
        <VideoPlanComparison />

        {/* 13 - Chega de incerteza semanal */}
        <ContentClosing />

        {/* 14 - Como conteúdo se conecta ao restante da M30 */}
        <ContentEcosystem />

        {/* 15 - CTA Final */}
        <VideosCTA />

        {/* 16 - Outras Soluções M30 */}
        <OtherSolutionsVideos />
      </main>

      {/* 17 - Footer Minimalista */}
      <Footer />
    </div>
  );
}
