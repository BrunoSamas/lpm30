"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, DollarSign, Headset, Users, GitBranch, BarChart3, Sparkles, Filter } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BusinessPillars: React.FC = () => {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const pillars = [
    { number: "01", title: "MARKETING", desc: "Como a empresa gera e comunica demanda no mercado.", icon: Megaphone },
    { number: "02", title: "COMERCIAL", desc: "Como oportunidades recebidas se transformam em vendas.", icon: DollarSign },
    { number: "03", title: "ATENDIMENTO", desc: "Como clientes e leads são recebidos e conduzidos.", icon: Headset },
    { number: "04", title: "CLIENTES", desc: "Perfil, comportamento, recorrência e valor no tempo (LTV).", icon: Users },
    { number: "05", title: "PROCESSOS", desc: "Como as atividades são executadas e conectadas diariamente.", icon: GitBranch },
    { number: "06", title: "INDICADORES", desc: "O que é efetivamente medido e utilizado para tomar decisões.", icon: BarChart3 },
    { number: "07", title: "OPORTUNIDADES", desc: "Pontos de alavancagem comercial ainda pouco explorados.", icon: Sparkles },
    { number: "08", title: "GARGALOS", desc: "Restrições específicas que impedem o próximo avanço do negócio.", icon: Filter },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ANÁLISE MULTIDIMENSIONAL"
          title="Analisamos 8 pilares fundamentais do negócio."
          description="Passe o mouse (ou toque) em cada pilar para ver como ele influencia o crescimento da sua empresa:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isHovered = activeHover === idx;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Card
                  variant={isHovered ? "tech" : "default"}
                  className={`h-full p-6 transition-all duration-300 ${
                    isHovered
                      ? "bg-[#19212C] border-[#F26522] -translate-y-1"
                      : "bg-[#151B24] border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-xl font-black text-[#F26522]">
                      {p.number}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isHovered
                        ? "bg-[#F26522] text-white"
                        : "bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-base font-extrabold text-white mb-2">
                    {p.title}
                  </h3>

                  <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Posicionamento Editorial */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center space-y-2 max-w-3xl mx-auto shadow-xl">
          <span className="font-body text-xs text-[#AEB6C2] uppercase font-bold tracking-wider block">
            NÃO É UMA CONSULTORIA SOBRE MARKETING.
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white leading-tight">
            É MARKETING <span className="text-[#F26522]">OLHANDO PARA O NEGÓCIO.</span>
          </h3>
        </div>
      </Container>
    </Section>
  );
};
