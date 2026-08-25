"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, PenTool, Share2, RefreshCw, BarChart2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const TrafficProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Planejamento",
      desc: "Definição de objetivo, público, oferta e estratégia de mídia.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Criação",
      desc: "Estruturação técnica de campanhas, conjuntos de públicos e anúncios.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Distribuição",
      desc: "Veiculação otimizada dos anúncios para os públicos definidos.",
      icon: Share2,
    },
    {
      number: "04",
      title: "Otimização",
      desc: "Análise diária de desempenho, refinamento de verba e ajustes contínuos.",
      icon: RefreshCw,
    },
    {
      number: "05",
      title: "Acompanhamento",
      desc: "Relatórios transparentes e acompanhamento direto das principais métricas.",
      icon: BarChart2,
    },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="PROCESSO DE EXECUÇÃO"
          title="O que a M30 faz na prática?"
          description="Nossa metodologia de gestão contínua de tráfego pago é dividida em 5 etapas fundamentais:"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex"
              >
                <Card variant="default" className="w-full h-full p-6 bg-[#151B24] hover:border-[#F26522]/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-black text-[#F26522]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-base font-extrabold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
