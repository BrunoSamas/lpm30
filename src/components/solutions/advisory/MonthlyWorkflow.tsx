"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Target, FileCheck, Hammer, Play, RefreshCw } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const MonthlyWorkflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "DIAGNÓSTICO",
      desc: "Entendemos o momento atual da empresa.",
      icon: Search,
    },
    {
      number: "02",
      title: "PRIORIDADES",
      desc: "Definimos o que realmente precisa de atenção agora.",
      icon: Target,
    },
    {
      number: "03",
      title: "PLANO",
      desc: "Organizamos as ações que serão executadas no mês.",
      icon: FileCheck,
    },
    {
      number: "04",
      title: "PRÁTICA",
      desc: "Aplicamos parte do plano junto com sua equipe.",
      icon: Hammer,
    },
    {
      number: "05",
      title: "EXECUÇÃO",
      desc: "Sua equipe continua a execução com total clareza.",
      icon: Play,
    },
    {
      number: "06",
      title: "PRÓXIMO CICLO",
      desc: "Analisamos a evolução e definimos novas prioridades.",
      icon: RefreshCw,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="FLUXO RECORRENTE"
          title="Todo mês, seu marketing sai com direção."
          description="Um ciclo contínuo de planejamento, aplicação e evolução para manter sua empresa em crescimento:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
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
                <Card variant="default" className="w-full h-full p-5 bg-[#151B24] hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-heading text-xl font-black text-[#F26522]">
                        {step.number}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="font-heading text-sm font-extrabold text-white mb-2">
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
      </Container>
    </Section>
  );
};
