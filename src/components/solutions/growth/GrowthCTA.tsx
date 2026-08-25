"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const GrowthCTA: React.FC = () => {
  return (
    <Section variant="dark" className="relative border-t border-white/5 py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle,rgba(242,101,34,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8 p-8 md:p-14 rounded-3xl bg-gradient-to-b from-[#151B24] to-[#0D1117] border border-[#F26522]/30"
        >
          <Eyebrow className="justify-center">
            <Sparkles className="w-4 h-4 text-[#F26522]" />
            DIAGNÓSTICO ESTRATÉGICO
          </Eyebrow>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
            ONDE ESTÁ O PRÓXIMO PONTO DE CRESCIMENTO DA SUA EMPRESA?
          </h2>

          <p className="font-body text-base md:text-xl text-[#AEB6C2] max-w-2xl mx-auto">
            Vamos analisar seu cenário e identificar quais alavancas merecem atenção primeiro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" fullWidth iconLeft={<PhoneCall className="w-5 h-5" />}>
                Quero conversar sobre crescimento
              </Button>
            </a>
            <Link href="/#ecossistema" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" fullWidth>
                Conhecer as outras soluções
              </Button>
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
            <ShieldCheck className="w-4 h-4 text-[#F26522]" />
            <span>Primeiro entendemos o negócio. Depois falamos sobre solução.</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
