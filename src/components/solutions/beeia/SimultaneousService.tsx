"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Zap, Repeat } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const SimultaneousService: React.FC = () => {
  const concepts = [
    {
      title: "Disponibilidade 24/7",
      desc: "Sem pausas ou limitações de horário comercial. Sua empresa responde a qualquer hora.",
      icon: Clock,
    },
    {
      title: "Múltiplos Atendimentos",
      desc: "Capacidade de conduzir várias conversas ao mesmo tempo sem filas de espera.",
      icon: Users,
    },
    {
      title: "Padronização Comercial",
      desc: "Todas as conversas seguem exatamente o tom de voz e os critérios definidos.",
      icon: ShieldCheck,
    },
    {
      title: "Velocidade Instantânea",
      desc: "Primeiro contato e resposta em segundos quando a intenção do cliente está no ápice.",
      icon: Zap,
    },
    {
      title: "Continuidade da Operação",
      desc: "Qualificação e organização das informações mesmo durante fins de semana e feriados.",
      icon: Repeat,
    },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ESCALA DE ATENDIMENTO"
          title="Enquanto sua equipe atende uma pessoa, a BeeIA pode conversar com várias."
          description="Escale sua capacidade de atendimento mantendo a qualidade e personalização em cada conversa:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {concepts.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card variant="default" className="h-full p-6 bg-[#151B24] hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-4 text-[#F26522]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-extrabold text-white mb-2">
                      {c.title}
                    </h3>
                    <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                      {c.desc}
                    </p>
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
