"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

export const ContentClosing: React.FC = () => {
  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase"
          >
            CHEGA DE INCERTEZA SEMANAL.
          </motion.h2>

          <p className="font-body text-base md:text-xl text-[#AEB6C2] max-w-2xl mx-auto leading-relaxed">
            Você não precisa passar a semana inteira pensando: <br className="hidden sm:inline" />
            <em className="text-white not-italic font-semibold">“O que vamos postar?”</em> <br />
            Nós planejamos, roteirizamos, captamos, editamos e organizamos o conteúdo mensalmente.
          </p>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 max-w-3xl mx-auto shadow-xl">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-widest block mb-2">
              REVOLUÇÃO NA COMUNICAÇÃO
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white leading-tight uppercase">
              SUA EMPRESA TEM MUITO PARA MOSTRAR. <br />
              <span className="text-[#F26522]">A M30 TRANSFORMA ISSO EM CONTEÚDO.</span>
            </h3>
          </div>
        </div>
      </Container>
    </Section>
  );
};
