"use client";

import React from "react";
import { ArrowRight, Layers, Target, FileText, Play } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui";

export const DirectionProblem: React.FC = () => {
  const possibilities = [
    "Redes Sociais",
    "Tráfego Pago",
    "Ferramentas de IA",
    "Criação de Conteúdo",
    "Automações",
    "Campanhas de Vendas",
  ];

  const steps = [
    { title: "PRIORIDADE", desc: "Saber o que vem primeiro", icon: Target },
    { title: "PLANO", desc: "Desenhar as ações do mês", icon: FileText },
    { title: "EXECUÇÃO", desc: "Aplicar com sua equipe", icon: Play },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="CLAREZA ANTES DA EXECUÇÃO"
          title="Ideias não são o problema. Falta de direção é."
          description="Conteúdo, campanhas, anúncios, ferramentas, inteligência artificial, redes sociais... Hoje existem possibilidades demais. Sem prioridades claras, o marketing consome tempo sem construir resultados:"
        />

        {/* Mapeamento Visual de Possibilidades Convergindo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Lado Esquerdo: Mar de Possibilidades */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#AEB6C2] uppercase tracking-wider block mb-2">
              EXCESSO DE POSSIBILIDADES
            </span>
            <div className="grid grid-cols-2 gap-3">
              {possibilities.map((pos) => (
                <div
                  key={pos}
                  className="p-3 rounded-xl bg-[#151B24] border border-white/5 text-xs font-medium text-[#AEB6C2] flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-[#F26522]" />
                  <span>{pos}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center my-4 lg:my-0">
            <ArrowRight className="w-8 h-8 text-[#F26522] rotate-90 lg:rotate-0" />
          </div>

          {/* Lado Direito: Funil de Filtro e Decisão */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-2">
              CONVERGÊNCIA ESTRATÉGICA M30
            </span>
            <div className="space-y-3">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="p-4 rounded-xl bg-[#151B24] border border-[#F26522]/30 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-[#AEB6C2]">{step.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#F26522]">0{idx + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/40 text-center max-w-2xl mx-auto">
          <p className="font-heading text-lg font-bold text-white">
            A Assessoria existe para <span className="text-[#F26522]">transformar possibilidades em decisões.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
