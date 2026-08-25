"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Search, Target, FileCheck, Play, BarChart2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const GrowthProcess: React.FC = () => {
  const steps = [
    { number: "01", title: "IMERSÃO", desc: "Entramos na operação e entendemos o cenário atual.", icon: Compass },
    { number: "02", title: "DIAGNÓSTICO", desc: "Mapeamos dados, processos, oportunidades e gargalos.", icon: Search },
    { number: "03", title: "PRIORIDADE", desc: "Identificamos o ponto com maior potencial de impacto.", icon: Target },
    { number: "04", title: "PLANO", desc: "Transformamos o diagnóstico em ações práticas.", icon: FileCheck },
    { number: "05", title: "EXECUÇÃO", desc: "Conectamos as frentes necessárias para colocar o plano em movimento.", icon: Play },
    { number: "06", title: "ACOMPANHAMENTO", desc: "Medimos o que aconteceu e ajustamos as decisões continuamente.", icon: BarChart2 },
  ];

  return (
    <Section id="como-funciona" variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="METODOLOGIA DE TRABALHO"
          title="Como funciona a Consultoria"
          description="Nossa atuação presencial e contínua segue 6 etapas rigorosamente estruturadas:"
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
