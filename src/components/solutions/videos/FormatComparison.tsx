"use client";

import React from "react";
import { Smartphone, Camera, Check, Info } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const FormatComparison: React.FC = () => {
  const mobileUseCases = [
    "Frequência contínua nas redes sociais",
    "Criar proximidade e engajamento real",
    "Mostrar bastidores e rotina da empresa",
    "Dicas rápidas e orientações diretas",
    "Recorrência de presença de marca",
  ];

  const proUseCases = [
    "Campanhas promocionais e comerciais",
    "Lançamento de novos produtos e serviços",
    "Consolidação de posicionamento premium",
    "Anúncios de alta conversão para tráfego pago",
    "Vídeos institucionais e mensagens estratégicas",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="GUIA DE ESCOLHA"
          title="Mobile ou PRO?"
          description="Escolha pelo objetivo da comunicação, não apenas pelo nível de produção:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Coluna Mobile */}
          <Card variant="default" className="p-6 bg-[#151B24] border-white/10 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <Smartphone className="w-5 h-5 text-white" />
              <h3 className="font-heading text-xl font-bold text-white">FORMATO MOBILE</h3>
            </div>

            <div>
              <span className="text-xs font-bold text-[#AEB6C2] uppercase tracking-wider block mb-3">Mais indicado para:</span>
              <ul className="space-y-2.5">
                {mobileUseCases.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#AEB6C2]">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#11161E] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-[#AEB6C2] font-semibold uppercase">PERFIL VISUAL:</span>
              <span className="font-heading font-bold text-white">“Natural, direto e ágil.”</span>
            </div>
          </Card>

          {/* Coluna PRO */}
          <Card variant="default" className="p-6 bg-[#151B24] border-[#F26522]/40 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <Camera className="w-5 h-5 text-[#F26522]" />
              <h3 className="font-heading text-xl font-bold text-white">FORMATO PRO</h3>
            </div>

            <div>
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-3">Mais indicado para:</span>
              <ul className="space-y-2.5">
                {proUseCases.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white font-medium">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#11161E] border border-[#F26522]/30 flex items-center justify-between text-xs">
              <span className="text-[#F26522] font-semibold uppercase">PERFIL VISUAL:</span>
              <span className="font-heading font-bold text-white">“Planejado, produzido e de alto impacto.”</span>
            </div>
          </Card>
        </div>

        <div className="p-4 rounded-xl bg-[#151B24] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#F26522] shrink-0" />
          <p className="font-body text-xs text-[#AEB6C2]">
            Os dois formatos podem coexistir harmoniosamente dentro da estratégia de conteúdo da sua empresa.
          </p>
        </div>
      </Container>
    </Section>
  );
};
