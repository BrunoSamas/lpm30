"use client";

import React from "react";
import { Gauge, ExternalLink } from "lucide-react";
import { Container, Section, Card } from "@/components/ui";

interface ResponseSpeedProps {
  sourceTitle?: string;
  sourceUrl?: string;
  sourceMetric?: string;
}

export const ResponseSpeed: React.FC<ResponseSpeedProps> = ({
  sourceTitle,
  sourceUrl,
  sourceMetric,
}) => {
  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522]/40 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 text-xs font-bold text-[#F26522] uppercase tracking-wider">
              <Gauge className="w-4 h-4" />
              AGILIDADE COMERCIAL
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Velocidade muda a chance de uma conversa avançar.
            </h2>

            <p className="font-body text-base md:text-lg text-[#AEB6C2] max-w-2xl mx-auto leading-relaxed">
              Estudos consolidados sobre <strong className="text-white">lead response</strong> mostram que responder rapidamente tende a aumentar significativamente a taxa de contato, engajamento e qualificação comercial.
            </p>

            {/* Suporte Dinâmico para Fontes Externas Verificadas */}
            {sourceMetric && (
              <div className="p-6 rounded-2xl bg-[#11161E] border border-white/10 max-w-lg mx-auto space-y-2">
                <span className="font-heading text-4xl font-black text-[#F26522]">
                  {sourceMetric}
                </span>
                {sourceTitle && (
                  <p className="font-body text-xs text-[#AEB6C2]">
                    Fonte: {sourceUrl ? (
                      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white inline-flex items-center gap-1">
                        {sourceTitle} <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : sourceTitle}
                  </p>
                )}
              </div>
            )}

            <div className="pt-4 border-t border-white/10 text-center">
              <span className="font-heading text-lg font-bold text-white">
                “Quando a intenção está alta, <span className="text-[#F26522]">a velocidade importa.”</span>
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
