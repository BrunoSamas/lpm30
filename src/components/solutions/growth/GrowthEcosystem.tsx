"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Video, Share2, Bot, Filter, Database, RefreshCw, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const GrowthEcosystem: React.FC = () => {
  const ecosystemLoop = [
    { title: "Consultoria In Loco", icon: Compass },
    { title: "Conteúdo PRO", icon: Video },
    { title: "Tráfego Pago", icon: Share2 },
    { title: "BeeIA (Atendimento)", icon: Bot },
    { title: "Funil Comercial", icon: Filter },
    { title: "Dados & Métricas", icon: Database },
    { title: "Novas Decisões", icon: RefreshCw },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="CICLO DE EVOLUÇÃO CONTÍNUA"
          title="O ecossistema em ação."
          description="A operação de crescimento funciona como um organismo vivo, onde cada frente alimenta a próxima:"
        />

        {/* Visual do Ciclo Contínuo */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {ecosystemLoop.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                >
                  <Card variant="default" className="p-3 bg-[#151B24] border-white/10 flex flex-col items-center justify-center text-center gap-2 hover:border-[#F26522] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 text-[#F26522] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-[11px] font-bold text-white leading-tight">
                      {item.title}
                    </span>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ciclo Dinâmico */}
        <div className="p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#F26522] uppercase tracking-widest block mb-2">
            CICLO RECORRENTE MENSAL
          </span>
          <div className="font-heading text-sm sm:text-base font-extrabold text-white flex flex-wrap items-center justify-center gap-2">
            <span>DIAGNOSTICAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span>EXECUTAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span>MEDIR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span>APRENDER</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span className="text-[#F26522]">AJUSTAR</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
