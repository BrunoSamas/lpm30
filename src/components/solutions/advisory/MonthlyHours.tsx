"use client";

import React, { useState } from "react";
import { Clock, CalendarCheck, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const MonthlyHours: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<"A" | "B">("A");

  return (
    <Section variant="dark" className="border-t border-white/5 relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.14)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="ACOMPANHAMENTO CONTÍNUO"
          title="2 horas por mês para construir um marketing melhor."
          description="Um tempo dedicado e altamente focado para tirar dúvidas, alinhar estratégias e colocar em prática:"
        />

        {/* Indicador Grande de 2 Horas */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522] text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 text-xs font-bold text-[#F26522] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              TEMPO DEDICADO MENSAL
            </div>

            <div className="font-heading text-6xl sm:text-7xl md:text-8xl font-black text-[#F26522] my-2 tracking-tight">
              2H
              <span className="text-xl sm:text-2xl font-bold text-white ml-2">POR MÊS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10 text-left">
              <div className="p-5 rounded-2xl bg-[#11161E]/90 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-heading text-lg font-extrabold text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F26522] text-white text-xs font-bold">1H</span>
                  <span>PLANEJAMENTO</span>
                </div>
                <p className="font-body text-xs md:text-sm text-[#AEB6C2]">
                  Definimos estrategicamente o que precisa acontecer no período, com análise de momento e prioridades claras.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#11161E]/90 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 font-heading text-lg font-extrabold text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F26522] text-white text-xs font-bold">1H</span>
                  <span>PRÁTICA</span>
                </div>
                <p className="font-body text-xs md:text-sm text-[#AEB6C2]">
                  Ajudamos você e sua equipe a executarem em tempo real, ajustando campanhas, ferramentas e conteúdos juntos.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Seletor Visual de Formato */}
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h3 className="font-heading text-xl font-bold text-white">
            Você escolhe como distribuir as 2 horas:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedFormat("A")}
              className={`p-6 rounded-2xl border text-left transition-all ${
                selectedFormat === "A"
                  ? "bg-[#19212C] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.15)]"
                  : "bg-[#151B24] border-white/10 hover:border-white/20 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider">OPÇÃO A</span>
                <Clock className="w-5 h-5 text-[#F26522]" />
              </div>
              <h4 className="font-heading text-lg font-extrabold text-white mb-1">
                1 encontro mensal de 2h
              </h4>
              <p className="font-body text-xs text-[#AEB6C2]">
                Imersão quinzenal/mensal completa com planejamento e aplicação no mesmo dia.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedFormat("B")}
              className={`p-6 rounded-2xl border text-left transition-all ${
                selectedFormat === "B"
                  ? "bg-[#19212C] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.15)]"
                  : "bg-[#151B24] border-white/10 hover:border-white/20 opacity-80"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider">OPÇÃO B</span>
                <CalendarCheck className="w-5 h-5 text-[#F26522]" />
              </div>
              <h4 className="font-heading text-lg font-extrabold text-white mb-1">
                2 encontros mensais de 1h
              </h4>
              <p className="font-body text-xs text-[#AEB6C2]">
                Acompanhamento quinzenal com menor espaçamento de tempo entre as pautas.
              </p>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
