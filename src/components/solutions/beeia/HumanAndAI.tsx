"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Bot, Check, Plus } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const HumanAndAI: React.FC = () => {
  const humanFeatures = [
    "Negociações complexas e personalizadas",
    "Construção de relacionamento e confiança",
    "Tratamento de exceções e cenários atípicos",
    "Tomada de decisões estratégicas e sensíveis",
    "Fechamento comercial consultivo",
  ];

  const beeiaFeatures = [
    "Disponibilidade total 24 horas por dia",
    "Resposta inicial imediata sem tempo de espera",
    "Respostas a perguntas frequentes e institucionais",
    "Coleta e organização de informações do lead",
    "Qualificação e triagem padronizada",
    "Follow-up estruturado de oportunidades",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="SINERGIA COMERCIAL"
          title="Automatize o repetitivo. Preserve o humano para o que exige julgamento."
          description="A BeeIA não substitui sua equipe comercial. Ela potencializa os vendedores liberando tempo para fechamentos estratégicos:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Lado 1: Equipe Humana */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#AEB6C2] font-bold uppercase tracking-wider">PAPEL ESTRATÉGICO</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">EQUIPE HUMANA</h3>
                </div>
              </div>

              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">Excelente para:</span>
              <ul className="space-y-3">
                {humanFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#AEB6C2]">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Centro: Sinal de Adição */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-12 h-12 rounded-full bg-[#F26522]/15 border border-[#F26522]/40 flex items-center justify-center text-[#F26522]">
              <Plus className="w-6 h-6" />
            </div>
          </div>

          {/* Lado 2: BeeIA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5"
          >
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-[#F26522]">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#F26522] font-bold uppercase tracking-wider">AGENTE DIGITAL</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">BEEIA</h3>
                </div>
              </div>

              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-3">Excelente para:</span>
              <ul className="space-y-3">
                {beeiaFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white font-medium">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Resultado Final */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-2xl mx-auto">
          <p className="font-heading text-lg md:text-xl font-extrabold text-white">
            HUMANO + BEEIA = <span className="text-[#F26522]">Uma operação comercial mais ágil.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
