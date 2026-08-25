"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const M30GuideMethod: React.FC = () => {
  const guideFeatures = [
    "Análise do momento atual da empresa",
    "Definição clara de prioridades de marketing",
    "Construção do plano de ação para o mês",
    "Alinhamento estratégico do calendário",
  ];

  const practiceExamples = [
    "Estruturação de campanhas de anúncios",
    "Direcionamento de conteúdo e vídeos",
    "Configuração de ferramentas e IA",
    "Ajuste de processos comerciais de atendimento",
  ];

  return (
    <Section id="metodologia" variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="METODOLOGIA M30 GUIA"
          title="Não é só falar sobre marketing. É planejar e fazer."
          description="Nossa metodologia divide o acompanhamento mensal em dois momentos complementares de alto impacto:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pilar 1: GUIA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl font-black text-white">01</span>
                    <h3 className="font-heading text-2xl font-bold text-white">GUIA</h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white uppercase tracking-wider">
                    1H DE PLANEJAMENTO MENSAL
                  </span>
                </div>

                <p className="font-body text-sm text-[#AEB6C2] mb-6 leading-relaxed">
                  Analisamos o momento da empresa, definimos prioridades e construímos o plano de marketing completo para o mês.
                </p>

                <ul className="space-y-3 mb-8">
                  {guideFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#AEB6C2]">
                      <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 text-center">
                <span className="text-xs text-[#AEB6C2] font-semibold uppercase block">Resultado Direto:</span>
                <p className="font-body text-sm font-bold text-white mt-1">
                  “Você sai sabendo exatamente o que precisa ser feito.”
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Pilar 2: PRÁTICA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="tech" className="h-full p-8 bg-gradient-to-b from-[#19212C] to-[#151B24] border-[#F26522] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl font-black text-[#F26522]">02</span>
                    <h3 className="font-heading text-2xl font-extrabold text-white">PRÁTICA</h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F26522]/20 border border-[#F26522]/40 text-[#F26522] uppercase tracking-wider">
                    1H DE APLICAÇÃO PRÁTICA
                  </span>
                </div>

                <p className="font-body text-sm text-[#AEB6C2] mb-6 leading-relaxed">
                  Usamos o encontro para colocar a mão na massa junto com você e sua equipe em tempo real.
                </p>

                <ul className="space-y-3 mb-8">
                  {practiceExamples.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white font-medium">
                      <Hammer className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#11161E]/90 border border-[#F26522]/30 text-center">
                <span className="text-xs text-[#F26522] font-semibold uppercase block">Resultado Direto:</span>
                <p className="font-body text-sm font-bold text-white mt-1">
                  “Você não apenas aprende. Aprende fazendo.”
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
