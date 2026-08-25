"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { MAIN_OFFER, WHATSAPP_URL } from "@/lib/data";

export const GrowthConsulting: React.FC = () => {
  return (
    <Section id="consultoria" variant="dark" className="relative border-t border-white/5 py-24 overflow-hidden">
      {/* Elementos Gráficos de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(242,101,34,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-2 border-[#F26522] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(242,101,34,0.15)] relative overflow-hidden"
        >
          {/* Selo Principal de Operação Completa */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
            <div>
              <Eyebrow className="mb-2">{MAIN_OFFER.eyebrow}</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white">
                {MAIN_OFFER.title}
              </h2>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#F26522] text-white text-xs md:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
              <Crown className="w-4 h-4" />
              <span>{MAIN_OFFER.badge}</span>
            </div>
          </div>

          <p className="font-body text-lg md:text-xl text-[#AEB6C2] max-w-3xl mb-12 leading-relaxed">
            {MAIN_OFFER.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Lado Esquerdo: O que está Incluso */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#F26522]" />
                TUDO O QUE SUA EMPRESA RECEBE RECORRENTEMENTE:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MAIN_OFFER.included.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#11161E]/90 border border-white/8 hover:border-[#F26522]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0" />
                      <h4 className="font-heading text-base font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-body text-xs text-[#AEB6C2] pl-8 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito: Bloco de Investimento e Ação */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-8 rounded-2xl bg-[#11161E] border border-[#F26522]/50 text-center space-y-6 relative overflow-hidden">
                <div className="text-xs font-bold text-[#AEB6C2] uppercase tracking-widest">
                  {MAIN_OFFER.priceLabel}
                </div>

                <div className="my-2">
                  <span className="font-heading text-5xl sm:text-6xl font-black text-[#F26522]">
                    {MAIN_OFFER.price}
                  </span>
                  <span className="text-sm font-semibold text-[#AEB6C2]">
                    {MAIN_OFFER.period}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 text-xs md:text-sm font-semibold text-white">
                  “{MAIN_OFFER.quote}”
                </div>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full pt-2">
                  <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                    {MAIN_OFFER.ctaText}
                  </Button>
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
                  <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                  <span>Alinhamento prévio sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
