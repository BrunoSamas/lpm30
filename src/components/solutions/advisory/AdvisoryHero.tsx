"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, ChevronRight, HelpCircle, Target } from "lucide-react";
import { Container, Button, Eyebrow } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const AdvisoryHero: React.FC = () => {
  const questionNodes = [
    "O que comunicar?",
    "O que priorizar?",
    "Qual campanha criar?",
    "Onde investir?",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#11161E]">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.15)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#AEB6C2] mb-6">
          <Link href="/" className="hover:text-white transition-colors">M30</Link>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span>Soluções</span>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span className="text-white font-semibold">Assessoria</span>
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
                DIREÇÃO • ASSESSORIA
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            >
              VOCÊ NÃO PRECISA DE MAIS IDEIAS. <br />
              <span className="text-[#F26522]">PRECISA SABER O QUE FAZER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xl font-bold text-white leading-snug"
            >
              “Marketing não costuma parar por falta de possibilidades. <br className="hidden sm:inline" />
              O desafio é ter clareza nas decisões.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-base md:text-lg text-[#AEB6C2] leading-relaxed"
            >
              A Assessoria de Marketing M30 organiza prioridades, transforma ideias em um plano estruturado e acompanha sua equipe na execução mensal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero direção para meu marketing
                </Button>
              </a>
              <a href="#metodologia" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Conhecer a metodologia
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
              <span>METODOLOGIA M30 GUIA • A M30 dá direção, você e sua equipe executam.</span>
            </motion.div>
          </div>

          {/* Coluna Direita: Composição de Dúvidas Convergindo para Ação */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#151B24] via-[#19212C] to-[#0D1117] border border-[#F26522]/30 relative overflow-hidden shadow-2xl space-y-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(242,101,34,0.2)_0%,transparent_70%)] pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#AEB6C2] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#F26522]" />
                DÚVIDAS FREQUENTES DA OPERAÇÃO
              </span>

              <div className="grid grid-cols-2 gap-3">
                {questionNodes.map((q) => (
                  <div
                    key={q}
                    className="p-3.5 rounded-xl bg-[#11161E]/90 border border-white/10 text-xs font-semibold text-[#AEB6C2] flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F26522]" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-2">
                <div className="h-6 w-[2px] bg-gradient-to-b from-[#F26522]/40 to-[#F26522]" />
              </div>

              {/* Resultado Centralizador */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#F26522]/20 via-[#F26522]/10 to-[#F26522]/20 border border-[#F26522] text-center">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F26522] block mb-1">
                  DIREÇÃO CLARA M30
                </span>
                <div className="font-heading text-xl font-black text-white flex items-center justify-center gap-2">
                  <Target className="w-5 h-5 text-[#F26522]" />
                  <span>O que fazer este mês?</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
