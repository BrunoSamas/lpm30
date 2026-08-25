"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Compass, TrendingUp, Lightbulb, Target, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { OPPORTUNITY_COST_ACTIVITIES } from "@/lib/data";

export const OpportunityCost: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-[#F26522]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#F26522]" />,
    Compass: <Compass className="w-5 h-5 text-[#F26522]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#F26522]" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-[#F26522]" />,
    Target: <Target className="w-5 h-5 text-[#F26522]" />,
  };

  return (
    <Section variant="dark" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="O VERDADEIRO CUSTO OCULTO"
          title="Quanto vale o que você deixou de fazer?"
          description="As horas gastas gravando, editando e configurando campanhas poderiam estar sendo usadas para gerar crescimento real no seu negócio:"
        />

        {/* Grid de Atividades que o Dono Deixa de Fazer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {OPPORTUNITY_COST_ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card variant="default" className="h-full p-6 hover:border-[#F26522]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-4">
                  {iconMap[activity.icon] || <Target className="w-5 h-5 text-[#F26522]" />}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="font-body text-sm text-[#AEB6C2] leading-relaxed">
                  {activity.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparação Visual Provocativa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 p-8 md:p-12 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(242,101,34,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#AEB6C2] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#F26522]" />
              PERGUNTA COMUM DOS EMPRESÁRIOS
            </div>

            <p className="font-body text-lg md:text-xl text-[#AEB6C2] line-through decoration-[#F26522] decoration-2 opacity-75">
              “Quanto custa contratar alguém para fazer meu marketing?”
            </p>

            <div className="flex items-center justify-center gap-3 py-2">
              <span className="h-[1px] w-12 bg-[#F26522]/40" />
              <span className="font-heading text-xs font-bold text-[#F26522] uppercase tracking-widest">
                A PERGUNTA REAL É
              </span>
              <span className="h-[1px] w-12 bg-[#F26522]/40" />
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Quanto custa continuar fazendo{" "}
              <span className="text-[#F26522]">tudo isso sozinho?</span>
            </h3>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
