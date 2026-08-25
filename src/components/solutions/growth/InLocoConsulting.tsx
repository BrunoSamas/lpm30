"use client";

import React from "react";
import { MapPin, CheckCircle2, ShieldCheck, Building2, Compass } from "lucide-react";
import { Container, Section, Card } from "@/components/ui";

export const InLocoConsulting: React.FC = () => {
  const benefits = [
    "Acompanhamento presencial da rotina da sua equipe",
    "Mapeamento direto de gargalos no ambiente de trabalho",
    "Entrevistas e alinhamento com lideranças da empresa",
    "Construção de soluções práticas de aplicação imediata",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Conteúdo */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F26522]" />
              PRESENCIAL & IMERSIVO
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Entramos na sua empresa para entender como ela realmente funciona.
            </h2>

            <p className="font-body text-base md:text-lg text-[#AEB6C2] leading-relaxed">
              Não conhecemos seu negócio apenas por reuniões online de 1 hora. Acompanhamos a operação presencialmente junto com o empresário e sua equipe para transformar problemas reais em ações práticas.
            </p>

            <ul className="space-y-3 pt-2">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#151B24] border border-white/10 text-xs text-[#AEB6C2] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F26522] shrink-0" />
              <span>Diagnóstico profundo com visão de sócio, olhando para o negócio de ponta a ponta.</span>
            </div>
          </div>

          {/* Lado Direito: Card Gráfico Imersivo In Loco */}
          <div className="lg:col-span-5">
            <Card variant="tech" className="p-8 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522] text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mx-auto text-[#F26522]">
                <Building2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-widest block">
                  IMERSÃO OPERACIONAL
                </span>
                <h3 className="font-heading text-2xl font-black text-white">
                  Diagnóstico no Chão de Fábrica e no Comercial
                </h3>
              </div>

              <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                Estar In Loco nos permite enxergar ruídos de comunicação, gargalos comerciais e oportunidades invisíveis em relatórios à distância.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-heading font-extrabold text-white">
                <Compass className="w-4 h-4 text-[#F26522]" />
                <span>M30 EM CAMPO COM SUA EMPRESA</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
