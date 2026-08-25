"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const TrafficPricing: React.FC = () => {
  const features = [
    "Planejamento e estruturação completa das campanhas",
    "Gestão e otimização contínua de anúncios",
    "Acompanhamento direto de métricas (CPL, CAC, Conversão)",
    "Relatórios periódicos e transparentes de performance",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="GESTÃO DE TRÁFEGO PAGO"
          title="Transforme investimento em um processo de aquisição mensurável."
          description="Transparência total entre o valor da gestão M30 e o investimento em mídia pago diretamente às plataformas:"
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
                {/* Lado Esquerdo: O que inclui a Gestão */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                      SERVIÇO ESPECIALIZADO
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
                      Gestão Mensal M30
                    </h3>
                    <p className="font-body text-sm text-[#AEB6C2] mt-2">
                      Planejamento, criação, gestão e otimização contínua das suas campanhas de anúncios.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                        <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lado Direito: Valores & Separação Clara */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="p-6 rounded-2xl bg-[#11161E] border border-[#F26522]/40 text-center space-y-6">
                    <div>
                      <span className="text-xs text-[#AEB6C2] font-semibold uppercase tracking-wider block mb-1">
                        GESTÃO M30
                      </span>
                      <div className="font-heading text-4xl sm:text-5xl font-black text-[#F26522]">
                        R$ 890
                        <span className="text-sm font-normal text-[#AEB6C2]">/mês</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#151B24] border border-white/10 text-left space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-bold uppercase">INVESTIMENTO EM MÍDIA</span>
                        <span className="text-[#F26522] font-bold">A partir de R$ 30/dia</span>
                      </div>
                      <p className="text-[11px] text-[#AEB6C2]">
                        Verba recomendada paga diretamente ao Meta / Google Ads (estimada em ~R$ 900/mês).
                      </p>
                    </div>

                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full pt-1">
                      <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                        Quero anunciar com a M30
                      </Button>
                    </a>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
                      <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                      <span>Primeiro entendemos seu negócio. Depois definimos a estratégia.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aviso em destaque de Separação de Mídia */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#AEB6C2] text-center">
                <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>
                  O investimento em mídia é pago diretamente às plataformas (Meta / Google) e não está incluso na mensalidade da gestão M30.
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
