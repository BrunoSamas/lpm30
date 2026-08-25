"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Video, Share2, Bot, BarChart3, Check } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const GrowthIncludes: React.FC = () => {
  const pillars = [
    {
      title: "CONSULTORIA DE CRESCIMENTO",
      desc: "Direcionamento e acompanhamento direto no seu negócio:",
      items: [
        "Diagnóstico estratégico inicial e contínuo",
        "Mapeamento e análise profunda de gargalos",
        "Planejamento de crescimento mensal",
        "Acompanhamento presencial In Loco",
      ],
      icon: Compass,
    },
    {
      title: "PRODUÇÃO DE CONTEÚDO",
      desc: "Estruturação visual de alto impacto para autoridade:",
      items: [
        "6 Vídeos PRO por mês produzidos com roteiro e edição profissional",
        "Alinhamento do conteúdo com os objetivos comerciais da empresa",
      ],
      icon: Video,
    },
    {
      title: "AQUISIÇÃO & MÍDIA",
      desc: "Atração qualificada constante no topo do funil:",
      items: [
        "Gestão técnica e estratégica de Tráfego Pago (Meta & Google Ads)",
        "Otimização contínua de criativos, públicos e conversão",
      ],
      icon: Share2,
    },
    {
      title: "ATENDIMENTO & IA",
      desc: "Resposta imediata e triagem comercial 24/7:",
      items: [
        "BeeIA — Agente Digital configurado em 1 número de WhatsApp",
        "Qualificação e encaminhamento de oportunidades sem tempo de espera",
      ],
      icon: Bot,
    },
    {
      title: "DADOS & FUNIL",
      desc: "Gestão orientada a indicadores de performance:",
      items: [
        "Acompanhamento de conversões de ponta a ponta",
        "Métricas para tomada de decisão estratégica dos sócios",
      ],
      icon: BarChart3,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="DETALHAMENTO DA ENTREGA"
          title="Uma estrutura completa trabalhando pelo crescimento."
          description="Conheça tudo o que está incluído na Operação Completa de Crescimento M30:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card variant="default" className="h-full p-6 bg-[#151B24] border-white/10 hover:border-[#F26522]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-white/10">
                      <div className="w-9 h-9 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <h3 className="font-heading text-sm font-extrabold text-white">
                        {p.title}
                      </h3>
                    </div>

                    <p className="font-body text-xs text-[#AEB6C2] mb-3">
                      {p.desc}
                    </p>

                    <ul className="space-y-2.5">
                      {p.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs text-white font-medium">
                          <Check className="w-3.5 h-3.5 text-[#F26522] shrink-0 mt-0.5" />
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
      </Container>
    </Section>
  );
};
