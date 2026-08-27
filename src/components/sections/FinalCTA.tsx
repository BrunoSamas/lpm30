"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { Container, Section, Button, Eyebrow } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const FinalCTA: React.FC = () => {
  return (
    <Section id="contato" variant="dark" className="relative border-t border-white/5 py-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl" />

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
            PRÓXIMO PASSO ESTRATÉGICO
          </Eyebrow>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Quanto do seu crescimento ainda{" "}
            <span className="text-[#F26522]">depende do seu tempo?</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-[#AEB6C2] max-w-2xl mx-auto leading-relaxed">
            Converse com a M30 e descubra o que faz sentido tirar da sua operação primeiro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" fullWidth iconLeft={<PhoneCall className="w-5 h-5" />}>
                Falar com um especialista
              </Button>
            </a>
            <a href="#servicos" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                Conhecer nossos serviços
              </Button>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
            <ShieldCheck className="w-4 h-4 text-[#F26522]" />
            <span>Sem compromisso. Vamos entender primeiro o seu cenário.</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
