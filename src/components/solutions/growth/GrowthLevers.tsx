"use client";

import React from "react";
import { motion } from "framer-motion";
import { Magnet, Filter, TrendingUp, RefreshCw, Megaphone, GitBranch } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const GrowthLevers: React.FC = () => {
  const levers = [
    {
      title: "ATRAIR MAIS",
      desc: "Gerar demanda qualificada e novas oportunidades constantes no topo do funil.",
      icon: Magnet,
    },
    {
      title: "CONVERTER MELHOR",
      desc: "Transformar mais oportunidades de venda recebidas em clientes pagantes ativos.",
      icon: Filter,
    },
    {
      title: "VENDER MAIS",
      desc: "Aumentar ticket médio, frequência de compra e cruzamento de mix de produtos.",
      icon: TrendingUp,
    },
    {
      title: "RETER MAIS",
      desc: "Fazer com que a base atual de clientes compre continuamente com maior LTV.",
      icon: RefreshCw,
    },
    {
      title: "COMUNICAR MELHOR",
      desc: "Elevar percepção de valor, autoridade no mercado e posicionamento de marca.",
      icon: Megaphone,
    },
    {
      title: "ORGANIZAR MELHOR",
      desc: "Otimizar processos operacionais, métricas de gestão e time comercial.",
      icon: GitBranch,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ALAVANCAS DE CRESCIMENTO"
          title="Diferentes alavancas podem destravar o crescimento."
          description="Crescer não significa apenas vender mais. Nosso trabalho é identificar qual destas 6 alavancas está limitando sua empresa agora:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {levers.map((lever, idx) => {
            const Icon = lever.icon;
            return (
              <motion.div
                key={lever.title}
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
                    <h3 className="font-heading text-lg font-extrabold text-white mb-2">
                      {lever.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-[#AEB6C2] leading-relaxed">
                      {lever.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto">
          <p className="font-heading text-base md:text-lg font-bold text-white">
            Transformamos o gargalo da sua empresa em um <span className="text-[#F26522]">plano prático de crescimento.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
