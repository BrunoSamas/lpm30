"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Video, Share2, Bot, LineChart } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const IntegratedExecution: React.FC = () => {
  const steps = [
    {
      number: "01",
      action: "PENSAMOS",
      title: "Consultoria In Loco",
      desc: "Diagnóstico profundo, planejamento, acompanhamento presencial e direcionamento estratégico.",
      icon: Compass,
    },
    {
      number: "02",
      action: "PRODUZIMOS",
      title: "6 Vídeos PRO / mês",
      desc: "Transformamos a estratégia do negócio em comunicação visual forte, moderna e autoritária.",
      icon: Video,
    },
    {
      number: "03",
      action: "DISTRIBUÍMOS",
      title: "Gestão de Tráfego Pago",
      desc: "Levamos os anúncios e conteúdos produzidos até o público ideal com gestão profissional.",
      icon: Share2,
    },
    {
      number: "04",
      action: "ATENDEMOS",
      title: "BeeIA — 1 número",
      desc: "Agente Digital treinado para atender e qualificar oportunidades 24/7 sem tempo de espera.",
      icon: Bot,
    },
    {
      number: "05",
      action: "MEDIMOS",
      title: "Funil & Vendas",
      desc: "Analisamos continuamente o que entrou, converteu e ajustamos as próximas decisões.",
      icon: LineChart,
    },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="DA ESTRATÉGIA À OPERAÇÃO"
          title="Estratégia sem execução VIRA POWERPOINT."
          description="A M30 não entrega apenas conselhos teóricos. Colocamos uma estrutura operacional completa trabalhando junto com sua empresa:"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
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
                <Card variant="tech" className="w-full h-full p-5 bg-[#151B24] border-white/10 hover:border-[#F26522] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F26522]/15 border border-[#F26522]/30 text-[#F26522] uppercase tracking-wider">
                        {step.action}
                      </span>
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <span className="font-mono text-xs text-[#AEB6C2] block mb-1">0{index + 1}</span>

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

        {/* Fórmula de Crescimento */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto">
          <div className="font-heading text-xs sm:text-base md:text-lg font-bold text-white flex flex-wrap items-center justify-center gap-2">
            <span>PENSAR</span>
            <span className="text-[#F26522]">+</span>
            <span>EXECUTAR</span>
            <span className="text-[#F26522]">+</span>
            <span>DISTRIBUIR</span>
            <span className="text-[#F26522]">+</span>
            <span>ATENDER</span>
            <span className="text-[#F26522]">+</span>
            <span>MEDIR</span>
            <span className="text-[#F26522]">=</span>
            <span className="text-[#F26522] font-black">CRESCER</span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
