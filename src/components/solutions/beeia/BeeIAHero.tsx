"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronRight, Zap } from "lucide-react";
import { Container, Button, Eyebrow, Card } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const BeeIAHero: React.FC = () => {
  const highlights = [
    "ATENDE 24H POR DIA",
    "ATENDIMENTO SIMULTÂNEO",
    "CONHECE SEUS PRODUTOS",
    "SEGUE SEU PROCESSO",
    "PERGUNTA O NECESSÁRIO",
    "RESPOSTA IMEDIATA",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#11161E]">
      {/* Background Tech Grid & Radial Glow */}
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
          <span className="text-white font-semibold">BeeIA</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda / Conteúdo */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>
                <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
                INTELIGÊNCIA COMERCIAL • 24/7
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              SEU PRÓXIMO COLABORADOR <br />
              <span className="text-[#F26522]">PODE NÃO SER HUMANO.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-[#AEB6C2] leading-relaxed"
            >
              Conheça a <strong className="text-white">BeeIA</strong>, o Agente Digital da M30 treinado para atender, qualificar e acompanhar oportunidades junto com sua empresa.
            </motion.p>

            {/* No Mobile: BeeIA Mascote aparece AQUI (entre Descrição e Benefícios) */}
            <div className="block lg:hidden my-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] my-2">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(242,101,34,0.22)_0%,transparent_70%)] blur-2xl pointer-events-none" />
                  <Image
                    src="/images/beeia/ilustracao-beeIA.png"
                    alt="BeeIA — Agente Digital da M30"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain relative z-10 drop-shadow-[0_15px_35px_rgba(242,101,34,0.25)]"
                  />
                </div>

                <Card variant="tech" className="w-full p-4 bg-gradient-to-b from-[#151B24] to-[#0D1117] border-[#F26522]/40 text-center space-y-1 mt-2">
                  <span className="text-xs font-heading font-black uppercase tracking-widest text-[#F26522]">
                    ESSA É A BEEIA.
                  </span>
                  <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                    Não é apenas um chatbot ou um software qualquer. É um <strong className="text-white">Agente Digital</strong> treinado para atender e vender junto com sua empresa.
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Grid de Tags Técnicas (Benefícios) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2"
            >
              {highlights.map((h) => (
                <div
                  key={h}
                  className="px-3 py-2 rounded-xl bg-[#151B24] border border-white/10 text-[11px] font-bold text-white flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 text-[#F26522] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero conhecer a BeeIA
                </Button>
              </a>
              <a href="#como-funciona" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Ver como funciona
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
              <span>Agente Digital Especializado • Treinamento personalizado para o seu negócio.</span>
            </motion.div>
          </div>

          {/* Coluna Direita (Desktop): Mascote Oficial Grande + Card Introdução */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="relative w-full max-w-[480px] aspect-[4/5] mb-4 group">
                {/* Glow sutil atrás da personagem */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(242,101,34,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none group-hover:scale-105 transition-transform" />
                <Image
                  src="/images/beeia/ilustracao-beeIA.png"
                  alt="BeeIA — Agente Digital da M30"
                  fill
                  priority
                  sizes="500px"
                  className="object-contain relative z-10 drop-shadow-[0_20px_45px_rgba(242,101,34,0.28)]"
                />
              </div>

              <Card variant="tech" className="w-full max-w-[480px] p-6 bg-gradient-to-b from-[#151B24] to-[#0D1117] border-[#F26522]/40 text-center space-y-2">
                <span className="text-xs font-heading font-black uppercase tracking-widest text-[#F26522]">
                  ESSA É A BEEIA.
                </span>
                <p className="font-body text-xs md:text-sm text-[#AEB6C2] leading-relaxed">
                  Não é apenas um chatbot ou um software qualquer. É um <strong className="text-white">Agente Digital</strong> treinado para atender e vender junto com sua empresa.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
