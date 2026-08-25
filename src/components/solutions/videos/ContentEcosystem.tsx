"use client";

import React from "react";
import Link from "next/link";
import { Video, Share2, Bot, Compass, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

export const ContentEcosystem: React.FC = () => {
  const ecosystemSteps = [
    { title: "CONTEÚDO", icon: Video },
    { title: "TRÁFEGO PAGO", icon: Share2 },
    { title: "ATENÇÃO", icon: Compass },
    { title: "BEEIA", icon: Bot },
    { title: "CONVERSA", icon: Share2 },
    { title: "VENDA", icon: Video },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ECOSSISTEMA INTEGRADO"
          title="Conteúdo não precisa trabalhar sozinho."
          description="Quando estratégia, produção, distribuição e atendimento trabalham conectados, o vídeo deixa de ser apenas uma postagem e passa a gerar vendas reais:"
        />

        {/* Fluxo de Conexão */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ecosystemSteps.map((step, idx) => {
              const isLast = idx === ecosystemSteps.length - 1;
              return (
                <React.Fragment key={step.title}>
                  <div className="p-3.5 rounded-xl bg-[#151B24] border border-white/10 flex items-center gap-2">
                    <span className="font-heading text-xs font-bold text-white">{step.title}</span>
                  </div>
                  {!isLast && <ArrowRight className="w-4 h-4 text-[#F26522] shrink-0" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto mb-8">
          <p className="font-body text-sm md:text-base text-[#AEB6C2]">
            Quando sua empresa alinha conteúdo de alta qualidade com anúncios estratégicos e atendimento 24/7, a comunicação ganha <strong className="text-white">escala e conversão contínua.</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
          <Link href="/solucoes/trafego-pago" className="px-4 py-2 rounded-xl bg-[#151B24] border border-white/10 text-white hover:border-[#F26522] transition-colors flex items-center gap-2">
            <span>Tráfego Pago</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
          </Link>
          <Link href="/solucoes/beeia" className="px-4 py-2 rounded-xl bg-[#151B24] border border-white/10 text-white hover:border-[#F26522] transition-colors flex items-center gap-2">
            <span>BeeIA — Atendimento</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
          </Link>
          <Link href="/solucoes/consultoria-in-loco" className="px-4 py-2 rounded-xl bg-[#151B24] border border-white/10 text-white hover:border-[#F26522] transition-colors flex items-center gap-2">
            <span>Consultoria In Loco</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};
