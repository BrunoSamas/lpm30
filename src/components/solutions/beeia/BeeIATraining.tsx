"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users2, MessageSquareCode, Target, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIATraining: React.FC = () => {
  const pillars = [
    {
      title: "SOBRE SUA EMPRESA",
      desc: "Treinamento com a base de conhecimento institucional do seu negócio:",
      items: [
        "Catálogo de produtos e serviços detalhado",
        "Diferenciais competitivos e proposta de valor",
        "Regras de negócio e políticas comerciais",
        "Informações institucionais e operacionais",
      ],
      icon: Building2,
    },
    {
      title: "SOBRE SEU CLIENTE",
      desc: "Mapeamento comportamental do seu comprador ideal:",
      items: [
        "Principais dúvidas e dores recorrentes",
        "Mapeamento e contorno de objeções",
        "Perfil Ideal de Cliente (ICP) e necessidades",
        "Critérios de qualificação e urgência",
      ],
      icon: Users2,
    },
    {
      title: "SOBRE SEU ATENDIMENTO",
      desc: "Parametrização da experiência de comunicação:",
      items: [
        "Tom de voz e linguagem personalizada",
        "Abordagem e saudações padronizadas",
        "Perguntas-chave estratégicas",
        "Condução fluida e empática da conversa",
      ],
      icon: MessageSquareCode,
    },
    {
      title: "SOBRE SUA VENDA",
      desc: "Configuração focada no avanço de oportunidades:",
      items: [
        "Qualificação inteligente do lead",
        "Argumentação comercial direcionada",
        "Direcionamento para equipe ou agenda",
        "Próximos passos claros dentro do funil",
      ],
      icon: Target,
    },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="TECNOLOGIA EXCLUSIVA"
          title="Atendimento fascinante + INTELIGÊNCIA ARTIFICIAL"
          description="Não colocamos uma IA para apenas responder mensagens. Treinamos um Agente Especializado de acordo com 4 pilares fundamentais:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10 hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-lg font-extrabold text-white">
                        {p.title}
                      </h3>
                    </div>

                    <p className="font-body text-xs text-[#AEB6C2] mb-4">
                      {p.desc}
                    </p>

                    <ul className="space-y-3">
                      {p.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-white font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Frases de Destaque Visual */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center space-y-4 shadow-xl">
          <p className="font-body text-sm text-[#AEB6C2] uppercase font-bold tracking-wider">
            O OBJETIVO NÃO É O CLIENTE TERMINAR PENSANDO: <br />
            <span className="text-white font-normal lowercase italic">“Nossa, estou falando com uma IA.”</span>
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-white leading-tight">
            O objetivo é ele terminar pensando: <br />
            <span className="text-[#F26522]">“Nossa, fui muito bem atendido.”</span>
          </h3>
        </div>
      </Container>
    </Section>
  );
};
