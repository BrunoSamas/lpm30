"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Database, Stethoscope, Filter, FileCheck, Play } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const GrowthDiagnosis: React.FC = () => {
  const flowSteps = [
    { title: "SINTOMA", desc: "O que parece ser o problema", icon: Search },
    { title: "DADOS", desc: "Métricas e histórico real", icon: Database },
    { title: "DIAGNÓSTICO", desc: "Análise profunda In Loco", icon: Stethoscope },
    { title: "GARGALO", desc: "A restrição real identificada", icon: Filter },
    { title: "PLANO", desc: "Ações prioritárias desenhadas", icon: FileCheck },
    { title: "EXECUÇÃO", desc: "Operação colocada em movimento", icon: Play },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="INVESTIGAÇÃO PROFUNDA"
          title="Antes de executar, precisamos descobrir onde está o problema."
          description="A maioria das empresas tenta resolver gargalos com mais volume do que já faz. Nossa metodologia segue uma ordem clara de descoberta:"
        />

        {/* Fluxo de Diagnóstico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {flowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex"
              >
                <Card variant="default" className="w-full h-full p-4 bg-[#151B24] hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#F26522]">0{idx + 1}</span>
                      <Icon className="w-4 h-4 text-[#F26522]" />
                    </div>
                    <h3 className="font-heading text-xs font-extrabold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-[11px] text-[#AEB6C2] leading-tight">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de Reflexão Estratégica */}
        <div className="p-8 rounded-3xl bg-[#151B24] border border-white/10 max-w-3xl mx-auto space-y-4 text-center">
          <div className="space-y-2 text-xs md:text-sm text-[#AEB6C2]">
            <p>Mais marketing não resolve necessariamente um problema de conversão.</p>
            <p>Mais leads não resolvem necessariamente um problema de atendimento.</p>
            <p>Mais vendas não resolvem necessariamente um problema de retenção.</p>
          </div>

          <div className="pt-4 border-t border-white/10 font-heading text-lg font-extrabold text-white">
            “O crescimento começa quando <span className="text-[#F26522]">encontramos a restrição certa.”</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
