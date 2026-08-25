"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const BeeIAPricing: React.FC = () => {
  const benefits = [
    "Operação 24 horas por dia, 7 dias por semana",
    "Treinamento personalizado com informações da sua empresa",
    "Adaptação ao seu tom de voz e processo comercial",
    "Qualificação e triagem de oportunidades",
    "Atendimento padronizado e resposta imediata",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="INVESTIMENTO"
          title="Um Agente Digital treinado para sua operação."
          description="Tecnologia acessível para escalar seu atendimento comercial com previsibilidade:"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Lado Esquerdo: O que inclui */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                      PLANO BASE
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
                      BeeIA — Agente Digital
                    </h3>
                    <p className="font-body text-sm text-[#AEB6C2] mt-2">
                      Atendimento inteligente, qualificação e suporte 24/7 integrado à sua empresa.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                        <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lado Direito: Valores */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="p-6 rounded-2xl bg-[#11161E] border border-[#F26522]/40 text-center space-y-6">
                    <div>
                      <span className="text-xs text-[#AEB6C2] font-semibold uppercase tracking-wider block mb-1">
                        MENSALIDADE
                      </span>
                      <div className="font-heading text-4xl sm:text-5xl font-black text-[#F26522]">
                        R$ 820
                        <span className="text-sm font-normal text-[#AEB6C2]">/mês</span>
                      </div>
                      <span className="text-xs text-white font-medium block mt-1">
                        Inclui: 1 Agente Digital + 1 Número de WhatsApp
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#151B24] border border-white/10 text-xs text-[#AEB6C2]">
                      Número adicional: <strong className="text-white">R$ 200/mês cada</strong>
                    </div>

                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full pt-1">
                      <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                        Quero uma BeeIA na minha empresa
                      </Button>
                    </a>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
                      <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                      <span>Alinhamento completo antes da ativação.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#AEB6C2] text-center">
                <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>
                  Implantação e integrações específicas podem depender do escopo contratado.
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
