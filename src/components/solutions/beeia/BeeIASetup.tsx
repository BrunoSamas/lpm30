"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Users, MessageSquare, GitBranch, ShieldCheck, Zap } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIASetup: React.FC = () => {
  const setupSteps = [
    { number: "01", title: "DIAGNÓSTICO", desc: "Entendemos o processo comercial atual.", icon: Compass },
    { number: "02", title: "CONHECIMENTO", desc: "Organizamos informações sobre empresa, produtos e serviços.", icon: BookOpen },
    { number: "03", title: "CLIENTE", desc: "Mapeamos dúvidas, necessidades e critérios de qualificação.", icon: Users },
    { number: "04", title: "COMUNICAÇÃO", desc: "Definimos abordagem, tom de voz e regras de negócios.", icon: MessageSquare },
    { number: "05", title: "PROCESSO", desc: "Configuramos como as oportunidades devem avançar.", icon: GitBranch },
    { number: "06", title: "TESTES", desc: "Validamos múltiplos cenários antes da operação oficial.", icon: ShieldCheck },
    { number: "07", title: "ATIVAÇÃO", desc: "O agente entra em funcionamento 24/7.", icon: Zap },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="IMPLANTAÇÃO ESTRUTURADA"
          title="Antes de atender, ela aprende o seu negócio."
          description="Um processo seguro de preparação em 7 etapas para garantir alinhamento total com a sua marca:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-10">
          {setupSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === setupSteps.length - 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex"
              >
                <Card
                  variant={isLast ? "tech" : "default"}
                  className={`w-full h-full p-4 flex flex-col justify-between ${
                    isLast
                      ? "bg-[#19212C] border-[#F26522]"
                      : "bg-[#151B24] border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-heading text-xs font-black ${isLast ? "text-[#F26522]" : "text-[#AEB6C2]"}`}>
                        {step.number}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isLast ? "text-[#F26522]" : "text-[#AEB6C2]"}`} />
                    </div>
                    <h3 className="font-heading text-xs font-bold text-white mb-1">
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

        <div className="p-4 rounded-xl bg-[#151B24] border border-white/10 text-center max-w-2xl mx-auto">
          <p className="font-body text-xs text-[#AEB6C2]">
            Treinamento e implantação podem ocorrer em <strong className="text-white">menos de 15 dias</strong>, conforme complexidade, disponibilidade das informações e integrações necessárias.
          </p>
        </div>
      </Container>
    </Section>
  );
};
