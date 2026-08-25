"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, ChevronRight, X, TrendingUp, Target } from "lucide-react";
import { Container, Button, Eyebrow, Card } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const GrowthHero: React.FC = () => {
  const negativeIndicators = [
    "Mais vídeos",
    "Mais anúncios",
    "Mais seguidores",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#11161E]">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(242,101,34,0.18)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#AEB6C2] mb-6">
          <Link href="/" className="hover:text-white transition-colors">M30</Link>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span>Soluções</span>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span className="text-white font-semibold">Consultoria In Loco</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>
                <Compass className="w-4 h-4 text-[#F26522]" />
                CONSULTORIA DE CRESCIMENTO • IN LOCO
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              MARKETING NÃO É O OBJETIVO. <br />
              <span className="text-[#F26522]">CRESCIMENTO É.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-[#AEB6C2] leading-relaxed"
            >
              Sua empresa não precisa simplesmente de mais volume. <br className="hidden sm:inline" />
              Ela precisa de <strong className="text-white">resultados mais previsíveis.</strong>
            </motion.p>

            {/* Indicadores Negativos -> Foco Estratégico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3 pt-2"
            >
              <div className="flex flex-wrap items-center gap-2">
                {negativeIndicators.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 flex items-center gap-1.5 line-through opacity-80"
                  >
                    <X className="w-3.5 h-3.5" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#F26522]/15 border border-[#F26522]/40 text-xs md:text-sm font-heading font-extrabold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>ELA PRECISA CRESCER COM ESTRATÉGIA.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero encontrar meu próximo gargalo
                </Button>
              </a>
              <a href="#como-funciona" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Entender como funciona
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs md:text-sm text-[#AEB6C2] pt-1"
            >
              <ShieldCheck className="w-4 h-4 text-[#F26522] shrink-0" />
              <span>Acompanhamento presencial e imersivo com os sócios e equipe da M30.</span>
            </motion.div>
          </div>

          {/* Coluna Direita: Card Premium "A Pergunta Central" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card variant="tech" className="p-8 bg-gradient-to-b from-[#151B24] via-[#19212C] to-[#0D1117] border-[#F26522] shadow-2xl space-y-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] flex items-center justify-center gap-2">
                <Target className="w-4 h-4" />
                A PERGUNTA CENTRAL
              </span>

              <div className="space-y-1 py-4 border-y border-white/10">
                <span className="font-heading text-sm font-extrabold text-[#AEB6C2] uppercase tracking-wider block">
                  ONDE ESTÁ O PRÓXIMO
                </span>

                <div className="font-heading text-7xl sm:text-8xl font-black text-[#F26522] my-1 leading-none tracking-tight">
                  30%
                </div>

                <span className="font-heading text-lg font-black text-white uppercase tracking-widest block">
                  DA SUA EMPRESA?
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  Consultoria de Crescimento M30
                </span>
                <p className="font-body text-[11px] text-[#AEB6C2] leading-relaxed">
                  “Próximo 30%” representa a busca sistemática pelo próximo ciclo de evolução do negócio, não uma garantia estática de resultado.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
