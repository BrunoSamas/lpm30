"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Video, Film, Share2, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const ContentWorkflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "PLANEJAMENTO",
      desc: "1 reunião online por mês. Definimos pautas, campanhas, produtos e datas importantes do período.",
      tag: "ALINHAMENTO ESTRATÉGICO",
      icon: Calendar,
    },
    {
      number: "02",
      title: "CAPTAÇÃO",
      desc: "1 encontro mensal para gravação com o empresário ou equipe. Pessoas geram conexão autêntica.",
      tag: "CONEXÃO REAL",
      icon: Video,
    },
    {
      number: "03",
      title: "EDIÇÃO",
      desc: "Transformamos o material bruto em vídeos dinâmicos e legendados. Prazo de edição: até 10 dias, conforme fluxo do pacote contratado.",
      tag: "FINALIZAÇÃO PRO",
      icon: Film,
    },
    {
      number: "04",
      title: "DISTRIBUIÇÃO",
      desc: "Conteúdo organizado no calendário comercial, respeitando os momentos de venda da empresa.",
      tag: "ENTREGA PROGRAMADA",
      icon: Share2,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="FLUXO DE TRABALHO"
          title="COMO FUNCIONA? O PROCESSO M30"
          description="Você entra com o conhecimento do seu negócio e a M30 transforma em conteúdo de alto valor:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <Card variant="default" className="w-full h-full p-6 bg-[#151B24] hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-xl font-black text-[#F26522]">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading text-base font-extrabold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="font-body text-xs text-[#AEB6C2] leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#11161E] border border-white/5 text-[#F26522] uppercase tracking-wider block text-center">
                    {step.tag}
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Fórmula Final */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto space-y-2">
          <div className="font-heading text-xs sm:text-base font-bold text-white flex flex-wrap items-center justify-center gap-2">
            <span>PLANEJAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span>GRAVAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span>EDITAR</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F26522]" />
            <span className="text-[#F26522]">DISTRIBUIR</span>
          </div>

          <p className="font-heading text-sm sm:text-base font-black text-white uppercase tracking-wider">
            TODO MÊS SEM DEPENDER DO IMPROVISO.
          </p>
        </div>
      </Container>
    </Section>
  );
};
