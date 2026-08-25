"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Brain, HelpCircle, Filter, Info, ArrowUpRight, Repeat } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIAFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "RECEBE",
      desc: "O cliente inicia uma conversa pelo canal oficial.",
      icon: MessageSquare,
      disclaimer: "Atendimento imediato 24/7",
    },
    {
      number: "02",
      title: "ENTENDE",
      desc: "Identifica a intenção e o produto/serviço buscado.",
      icon: Brain,
      disclaimer: "Compreensão de linguagem natural",
    },
    {
      number: "03",
      title: "PERGUNTA",
      desc: "Coleta as informações e dados necessários.",
      icon: HelpCircle,
      disclaimer: "Perguntas-chave parametrizadas",
    },
    {
      number: "04",
      title: "QUALIFICA",
      desc: "Organiza a oportunidade conforme regras da empresa.",
      icon: Filter,
      disclaimer: "De acordo com o processo definido",
    },
    {
      number: "05",
      title: "ORIENTA",
      desc: "Responde dúvidas e apresenta informações relevantes.",
      icon: Info,
      disclaimer: "Com base nos dados institucionais",
    },
    {
      number: "06",
      title: "ENCAMINHA",
      desc: "Conduz a conversa para o próximo passo comercial.",
      icon: ArrowUpRight,
      disclaimer: "Conforme integração/agenda",
    },
    {
      number: "07",
      title: "FOLLOW-UP",
      desc: "Continua o acompanhamento e resgate de pautas.",
      icon: Repeat,
      disclaimer: "Quando parte da configuração",
    },
  ];

  return (
    <Section id="como-funciona" variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="AGENTE DIGITAL EM AÇÃO"
          title="Uma oportunidade chegou. A BeeIA entra em ação."
          description="Conheça a jornada estruturada de atendimento de ponta a ponta desenvolvida para a sua empresa:"
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

                  <div className="pt-3 border-t border-white/5 text-[10px] text-[#AEB6C2] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    <span>{step.disclaimer}</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
