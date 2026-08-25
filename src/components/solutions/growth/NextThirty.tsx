"use client";

import React from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Container, Section, Card } from "@/components/ui";

export const NextThirty: React.FC = () => {
  const possibilities = [
    "Atrair mais pessoas qualificadas",
    "Converter melhor as oportunidades que entram",
    "Aumentar o ticket médio e mix de vendas",
    "Gerar recorrência e retenção na base",
    "Melhorar a agilidade de atendimento comercial",
    "Organizar processos e indicadores operacionais",
    "Comunicar mais valor e elevar o posicionamento",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522] space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F26522] uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#F26522]" />
              CICLO DE EVOLUÇÃO
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Encontre o seu próximo 30%.
            </h2>

            <p className="font-body text-base md:text-lg text-[#AEB6C2] leading-relaxed">
              Seu próximo nível de faturamento pode estar em uma alavanca que sua empresa ainda não enxergou. Pode ser:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {possibilities.map((p, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#11161E] border border-white/10 text-center space-y-2 mt-6">
              <p className="font-heading text-base md:text-lg font-bold text-white">
                É para isso que a M30 entra: <br className="hidden sm:inline" />
                <span className="text-[#F26522]">não apenas para fazer marketing, mas para diagnosticar, planejar, executar, medir e ajudar o negócio a crescer.</span>
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
