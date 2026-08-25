"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, XCircle, Zap } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const LeadTiming: React.FC = () => {
  const timingSteps = [
    {
      time: "AGORA",
      title: "Intenção máxima",
      desc: "O cliente está interessado e focado no seu produto neste exato momento.",
      status: "high",
    },
    {
      time: "30 MINUTOS",
      title: "Distrações aparecem",
      desc: "Entrou em outra reunião, voltou ao trabalho ou simplesmente mudou o foco.",
      status: "medium",
    },
    {
      time: "2 HORAS",
      title: "A necessidade esfria",
      desc: "A urgência inicial e o impulso de compra diminuem drasticamente.",
      status: "low",
    },
    {
      time: "PIOR CENÁRIO",
      title: "Outra empresa respondeu primeiro",
      desc: "O prospect avançou a conversa e comprou de um concorrente mais ágil.",
      status: "critical",
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="TIMING DE VENDAS"
          title="O lead tem prazo de validade."
          description="Quando alguém entra em contato, existe um momento de intenção alta. Quanto mais tempo passa, mais fácil essa atenção se perder:"
        />

        {/* Timeline Visual de Degradação do Tempo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timingSteps.map((step, idx) => {
            const isHigh = step.status === "high";
            const isCritical = step.status === "critical";

            return (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card
                  variant={isHigh ? "tech" : "default"}
                  className={`h-full p-6 flex flex-col justify-between transition-all ${
                    isHigh
                      ? "bg-[#19212C] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.15)]"
                      : isCritical
                      ? "bg-[#151B24] border-red-500/30"
                      : "bg-[#151B24] border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-heading text-xs font-black uppercase tracking-wider ${
                          isHigh
                            ? "text-[#F26522]"
                            : isCritical
                            ? "text-red-400"
                            : "text-[#AEB6C2]"
                        }`}
                      >
                        {step.time}
                      </span>
                      {isHigh ? (
                        <Zap className="w-4 h-4 text-[#F26522]" />
                      ) : isCritical ? (
                        <XCircle className="w-4 h-4 text-red-400" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#AEB6C2]" />
                      )}
                    </div>

                    <h3 className="font-heading text-base font-extrabold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Destaque Editorial de Impacto */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto">
          <p className="font-heading text-base md:text-xl font-black text-white uppercase tracking-wide">
            NO DIGITAL, ATENDER RÁPIDO NÃO É DETALHE. <span className="text-[#F26522]">É PARTE DA VENDA.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
