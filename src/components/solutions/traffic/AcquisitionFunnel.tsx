"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2, UserCheck, UserPlus, MessageSquare, DollarSign, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const AcquisitionFunnel: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "DISTRIBUIÇÃO",
      desc: "Pessoas impactadas pelo conteúdo.",
      icon: Share2,
      highlight: false,
    },
    {
      number: "02",
      title: "VISITAS AO PERFIL",
      desc: "Interesse em conhecer mais.",
      icon: UserCheck,
      highlight: false,
    },
    {
      number: "03",
      title: "NOVOS SEGUIDORES",
      desc: "Acompanhamento contínuo.",
      icon: UserPlus,
      highlight: false,
    },
    {
      number: "04",
      title: "MENSAGENS",
      desc: "Início de uma conversa comercial.",
      icon: MessageSquare,
      highlight: false,
    },
    {
      number: "05",
      title: "VENDAS",
      desc: "Resultado de todo o processo.",
      icon: DollarSign,
      highlight: true,
    },
  ];

  return (
    <Section id="funil" variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="NOSSO FUNIL DE VENDAS"
          title="Não anunciamos para gerar cliques. Anunciamos para criar oportunidades."
          description="Cada etapa da nossa gestão de anúncios é estruturada para guiar o prospect do primeiro contato até o fechamento:"
        />

        {/* Visualização do Funil / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = activeHover !== null && index <= activeHover;
            const isVendas = step.highlight;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
                className="flex flex-col h-full"
              >
                <Card
                  variant={isVendas ? "tech" : "default"}
                  className={`h-full p-6 flex flex-col justify-between transition-all duration-300 ${
                    isVendas
                      ? "bg-gradient-to-b from-[#19212C] to-[#151B24] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.2)]"
                      : isHovered
                      ? "border-[#F26522]/60 bg-[#19212C] -translate-y-1"
                      : "bg-[#151B24]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-heading text-xl font-black ${
                          isVendas ? "text-[#F26522]" : "text-white"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isVendas
                            ? "bg-[#F26522] text-white"
                            : "bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      className={`font-heading text-base font-extrabold mb-2 ${
                        isVendas ? "text-[#F26522]" : "text-white"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {isVendas && (
                    <div className="mt-4 pt-3 border-t border-[#F26522]/30 flex items-center gap-1.5 text-[11px] font-bold text-[#F26522]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>OBJETIVO PRINCIPAL</span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-[#151B24] border border-white/8 text-center max-w-2xl mx-auto">
          <p className="font-heading text-base md:text-lg font-bold text-white">
            O clique não é o objetivo final. <span className="text-[#F26522]">É apenas o início do caminho.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
