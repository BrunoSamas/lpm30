"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const GrowthPricing: React.FC = () => {
  const includes = [
    "6 Vídeos PRO por mês produzidos e alinhados ao negócio",
    "Gestão técnica e otimização contínua de Tráfego Pago",
    "BeeIA — Agente Digital configurado em 1 número de WhatsApp",
    "Consultoria de Crescimento In Loco com presença física",
    "Planejamento mensal, acompanhamento de funil e métricas de vendas",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="OPERAÇÃO COMPLETA"
          title="Tudo conectado em uma única estratégia."
          description="Transparência total no modelo de investimento para a Operação Completa de Crescimento M30:"
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
                      ESTRUTURA COMPLETA
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                      Consultoria & Operação de Crescimento
                    </h3>
                    <p className="font-body text-sm text-[#AEB6C2] mt-2">
                      Diagnóstico presencial, estratégia, criação de vídeos PRO, tráfego pago e inteligência de atendimento integrados.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                        <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lado Direito: Valores & Mídia Separada */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="p-6 rounded-2xl bg-[#11161E] border border-[#F26522]/40 text-center space-y-6">
                    <div>
                      <span className="text-xs text-[#AEB6C2] font-semibold uppercase tracking-wider block mb-1">
                        GESTÃO / OPERAÇÃO M30
                      </span>
                      <div className="text-xs font-bold text-[#F26522] uppercase tracking-wider mb-1">
                        A PARTIR DE
                      </div>
                      <div className="font-heading text-4xl sm:text-5xl font-black text-[#F26522]">
                        R$ 3.880
                        <span className="text-sm font-normal text-[#AEB6C2]">/mês</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#151B24] border border-white/10 text-left space-y-1">
                      <div className="text-[11px] text-white font-bold uppercase">INVESTIMENTO EM MÍDIA (ADS)</div>
                      <p className="text-[11px] text-[#AEB6C2]">
                        O investimento em mídia é pago diretamente às plataformas (Meta / Google) e não está incluso na mensalidade M30.
                      </p>
                    </div>

                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full pt-1">
                      <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                        Quero uma operação completa
                      </Button>
                    </a>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
                      <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                      <span>Você cuida da sua empresa. Nós procuramos o próximo ponto de crescimento.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#AEB6C2] text-center">
                <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>
                  O investimento em mídia não está incluído no valor mensal da gestão M30.
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
