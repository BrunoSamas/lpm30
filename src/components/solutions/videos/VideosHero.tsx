"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, ShieldCheck, ChevronRight, XCircle, RefreshCw } from "lucide-react";
import { Container, Button, Eyebrow, Card } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const VideosHero: React.FC = () => {
  const soloRoutine = [
    "Pensar no que gravar",
    "Criar roteiro sozinho",
    "Parar para produzir",
    "Editar e publicar",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#11161E]">
      {/* Background Tech & Audio-Visual Elements */}
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
          <span className="text-white font-semibold">Vídeos</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Textos & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>
                <Video className="w-4 h-4 text-[#F26522]" />
                M30 • CONTEÚDO
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            >
              SUA EMPRESA PRECISA <br />
              <span className="text-[#F26522]">APARECER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xl font-bold text-white leading-snug"
            >
              “Você não precisa virar o louco do conteúdo.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-base md:text-lg text-[#AEB6C2] leading-relaxed"
            >
              Transformamos o que sua empresa tem para dizer em conteúdo que as pessoas realmente querem assistir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero produzir com a M30
                </Button>
              </a>
              <a href="#formatos" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Conhecer os formatos
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
              <span>Vídeos Mobile & PRO • Planejados, roteirizados e produzidos para o seu negócio.</span>
            </motion.div>
          </div>

          {/* Coluna Direita: Composição Gráfica "Rotina Tenta Sozinho" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card variant="default" className="p-8 bg-[#151B24] border-white/10 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#AEB6C2] block">
                A ROTINA COMUM DE QUEM TENTA SOZINHO:
              </span>

              <div className="space-y-3">
                {soloRoutine.map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-[#11161E] border border-white/5 text-xs md:text-sm font-semibold text-[#AEB6C2] flex items-center gap-3"
                  >
                    <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F26522]/15 border border-[#F26522]/40 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#F26522] font-extrabold uppercase">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>E NA SEMANA SEGUINTE...</span>
                </div>
                <p className="font-heading text-base font-black text-white">
                  Começar tudo de novo.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
