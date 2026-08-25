"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Compass, Target, Megaphone, Share2, Bot, Wrench, GitBranch, Calendar } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const AdvisoryTopics: React.FC = () => {
  const topics = [
    { title: "Marketing Estratégico", icon: Target },
    { title: "Produção de Conteúdo", icon: Megaphone },
    { title: "Campanhas de Vendas", icon: Compass },
    { title: "Tráfego Pago", icon: Share2 },
    { title: "Inteligência Artificial", icon: Bot },
    { title: "Ferramentas Digitais", icon: Wrench },
    { title: "Processos Comerciais", icon: GitBranch },
    { title: "Planejamento Mensal", icon: Calendar },
  ];

  const includes = [
    "Planejamento mensal focado em prioridades reais",
    "Orientação estratégica contínua com especialista M30",
    "Aplicação prática e mão na massa nos encontros",
    "Mapeamento de marketing, conteúdo, tráfego, IA e ferramentas",
    "2 horas de acompanhamento estratégico por mês",
    "Flexibilidade total: 1 encontro de 2h ou 2 de 1h",
    "Contrato mínimo de 6 meses para evolução sustentável",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        {/* Temas que Podem Ser Trabalhados */}
        <SectionHeading
          eyebrow="ABRANGÊNCIA TÉCNICA"
          title="Da estratégia à aplicação."
          description="Trabalhamos os temas mais urgentes para destravar a comunicação e vendas da sua empresa:"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {topics.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="p-4 rounded-xl bg-[#151B24] border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-[#F26522]/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 text-[#F26522] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-heading text-xs font-bold text-white">{t.title}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#AEB6C2] mb-16 max-w-xl mx-auto">
          Os temas acima são trabalhados de acordo com as prioridades identificadas durante os encontros de assessoria.
        </p>

        {/* O que está incluso */}
        <div className="max-w-4xl mx-auto">
          <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                  DIREÇÃO • ASSESSORIA
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                  Você continua no comando. Agora com um mapa.
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F26522]/20 border border-[#F26522]/40 text-[#F26522] uppercase shrink-0">
                METODOLOGIA M30 GUIA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                  <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 text-center">
              <span className="font-heading text-sm font-bold text-white tracking-wide">
                “Você aprende. <span className="text-[#F26522]">Sua empresa executa.”</span>
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
