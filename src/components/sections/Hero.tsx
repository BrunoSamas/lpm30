"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { Container, Button, Eyebrow } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden bg-[#11161E]">
      {/* Elementos Gráficos e Tecnológicos de Fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid em Perspectiva Sutil */}
        <div className="absolute inset-0 tech-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Glow Laranja Centralizado */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,rgba(242,101,34,0.15)_0%,transparent_70%)] blur-3xl" />

        {/* Linhas Tecnológicas Decorativas */}
        <div className="absolute top-1/4 left-10 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#F26522]/30 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 right-10 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#F26522]/30 to-transparent hidden lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Selo Superior */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Eyebrow className="px-4 py-1.5 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-xs md:text-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
              ESTRUTURA DE MARKETING & CRESCIMENTO
            </Eyebrow>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02] mb-6"
          >
            VOCÊ NÃO PRECISA FAZER MARKETING. <br className="hidden sm:inline" />
            <span className="text-[#F26522] block mt-1">SUA EMPRESA PRECISA.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl lg:text-2xl text-[#AEB6C2] max-w-3xl leading-relaxed mb-8 md:mb-10"
          >
            Sua empresa precisa aparecer, comunicar, anunciar, atender e vender.{" "}
            <span className="text-white font-medium">
              Mas não precisa ser você fazendo tudo isso.
            </span>
          </motion.p>

          {/* CTAs do Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                iconRight={<ArrowRight className="w-5 h-5" />}
              >
                Quero tirar o marketing das minhas costas
              </Button>
            </a>
            <a href="#ecossistema" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" fullWidth>
                Conhecer as soluções
              </Button>
            </a>
          </motion.div>

          {/* Selo de Garantia / Assinatura */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#AEB6C2]"
          >
            <ShieldCheck className="w-4 h-4 text-[#F26522]" />
            <span>Marketing profissional sem depender do seu tempo.</span>
          </motion.div>
        </div>
      </Container>

      {/* Indicador sutil de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <a href="#o-problema" aria-label="Rolar para a primeira seção">
          <ChevronDown className="w-6 h-6 text-[#F26522] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
