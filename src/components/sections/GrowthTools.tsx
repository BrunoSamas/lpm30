"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Bot, Check, ArrowRight, Zap, MessageSquareCode, Clock } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { GROWTH_TOOLS, WHATSAPP_URL } from "@/lib/data";

export const GrowthTools: React.FC = () => {
  const { traffic, beeIA } = GROWTH_TOOLS;

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="FAZER MARKETING É MAIS DO QUE POSTAR"
          title="Transformamos atenção em oportunidades."
          description="Atraia o público certo e atenda instantaneamente para não perder nenhuma venda:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Gestão de Tráfego Pago */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="default" className="h-full p-8 flex flex-col justify-between bg-[#151B24]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F26522]/10 text-[#F26522] border border-[#F26522]/30 uppercase tracking-wider">
                    {traffic.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white mb-2">
                  {traffic.title}
                </h3>
                <p className="font-body text-sm text-[#AEB6C2] mb-6">
                  {traffic.description}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-white">
                    {traffic.price}
                  </span>
                  <span className="text-sm text-[#AEB6C2]">{traffic.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {traffic.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#AEB6C2]">
                      <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 mb-8">
                  <p className="font-body text-xs md:text-sm italic text-white leading-relaxed">
                    “{traffic.quote}”
                  </p>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="primary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                  {traffic.ctaText}
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Card 2: BeeIA - Inteligência Comercial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              variant="tech"
              className="h-full p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522]"
            >
              {/* Efeito visual tecnológico sutil */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(242,101,34,0.18)_0%,transparent_70%)] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F26522] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(242,101,34,0.3)]">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F26522]/20 text-[#F26522] border border-[#F26522]/40 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {beeIA.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-extrabold text-white mb-1">
                  {beeIA.title}
                </h3>
                <p className="text-xs text-[#F26522] font-semibold mb-4">
                  {beeIA.additionalInfo}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-white">
                    {beeIA.price}
                  </span>
                  <span className="text-sm text-[#AEB6C2]">{beeIA.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {beeIA.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white">
                      <div className="w-4 h-4 rounded-full bg-[#F26522]/20 text-[#F26522] flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-[#11161E]/90 border border-[#F26522]/30 mb-8 flex items-start gap-3">
                  <MessageSquareCode className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                  <p className="font-body text-xs md:text-sm italic text-white leading-relaxed">
                    “{beeIA.quote}”
                  </p>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="primary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                  {beeIA.ctaText}
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
