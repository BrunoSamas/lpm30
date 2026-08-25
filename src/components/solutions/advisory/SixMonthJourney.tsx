"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const SixMonthJourney: React.FC = () => {
  const months = [
    { number: "01", name: "Diagnóstico", desc: "Mapeamento inicial da operação" },
    { number: "02", name: "Organização", desc: "Estruturação de prioridades e pautas" },
    { number: "03", name: "Aplicação", desc: "Primeiras campanhas e testes práticos" },
    { number: "04", name: "Ajustes", desc: "Refinamento com base em métricas reais" },
    { number: "05", name: "Evolução", desc: "Aprofundamento de ferramentas e processos" },
    { number: "06", name: "Maturidade", desc: "Equipe operando com total direção" },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="PROCESSO, NÃO REUNIÃO ISOLADA"
          title="6 meses para construir um marketing melhor."
          description="Marketing consistente não é construído em uma reunião isolada. É um processo estruturado de evolução, aplicação e maturação contínua:"
        />

        {/* Linha de Progresso de 6 Meses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
          {months.map((m, index) => (
            <motion.div
              key={m.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex"
            >
              <Card variant="default" className="w-full h-full p-5 bg-[#151B24] hover:border-[#F26522]/40 transition-all">
                <span className="font-heading text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                  MÊS {m.number}
                </span>
                <h3 className="font-heading text-base font-extrabold text-white mb-2">
                  {m.name}
                </h3>
                <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                  {m.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Destaque Comercial */}
        <div className="p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#F26522] shrink-0" />
            <div>
              <span className="font-heading text-base font-bold text-white block">
                Contrato mínimo de 6 meses
              </span>
              <span className="text-xs text-[#AEB6C2]">
                Tempo necessário para maturação de processos e autonomia da sua equipe.
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 text-xs font-bold text-[#F26522] uppercase shrink-0">
            Acompanhamento M30
          </span>
        </div>
      </Container>
    </Section>
  );
};
