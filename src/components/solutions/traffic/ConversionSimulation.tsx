"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertCircle, ArrowDown, Info } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { calculateConversions, formatNumber } from "@/lib/traffic-utils";

export const ConversionSimulation: React.FC = () => {
  const [impressions, setImpressions] = useState<number>(10000);
  const [conversionRate, setConversionRate] = useState<number>(1.0);

  const estimatedConversions = calculateConversions(impressions, conversionRate);

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ESTATÍSTICA & MÉTRICAS"
          title="Marketing é um jogo de CONVERSÃO."
          description="Nem todo mundo que vê vai comprar — e está tudo certo. O segredo é gerar volume suficiente para encontrar quem está pronto para avançar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lado Esquerdo: O conceito do 1% de Referência */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <Card variant="tech" className="h-full p-8 flex flex-col justify-between bg-gradient-to-b from-[#151B24] to-[#0D1117] border-[#F26522]/40">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-xs font-semibold text-[#F26522] uppercase tracking-wider mb-6">
                  <Info className="w-3.5 h-3.5" />
                  CONCEITO ESTRATÉGICO
                </div>

                <div className="text-center my-4 p-6 rounded-2xl bg-[#11161E]/90 border border-white/5">
                  <div className="font-heading text-6xl md:text-7xl font-black text-[#F26522] mb-1">
                    1%
                  </div>
                  <div className="font-heading text-xs font-bold uppercase tracking-widest text-white">
                    TAXA DE REFERÊNCIA DE CONVERSÃO
                  </div>
                </div>

                <p className="font-body text-sm text-[#AEB6C2] leading-relaxed mt-4">
                  Em um cenário de referência, buscamos construir volume suficiente no topo do funil para que uma parcela qualificada avance até a conversão final.
                </p>
              </div>

              {/* Aviso Transparente Obrigatório */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-start gap-2 text-xs text-[#AEB6C2]">
                <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                <span>
                  Exemplo ilustrativo. Resultados variam conforme segmento, oferta, investimento, criativos, mercado e processo comercial.
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Lado Direito: Simulador Prático de Funil */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <Card variant="default" className="h-full p-8 flex flex-col justify-between bg-[#151B24]">
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      Simulação Prática de Funil
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#AEB6C2]">
                    Simulação Ilustrativa
                  </span>
                </div>

                {/* Controles do Simulador */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="impressions-slider" className="font-body text-sm font-semibold text-white">
                        Pessoas Impactadas:
                      </label>
                      <span className="font-heading text-lg font-bold text-[#F26522]">
                        {formatNumber(impressions)} pessoas
                      </span>
                    </div>
                    <input
                      id="impressions-slider"
                      type="range"
                      min={1000}
                      max={100000}
                      step={1000}
                      value={impressions}
                      onChange={(e) => setImpressions(Number(e.target.value))}
                      className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="conversion-slider" className="font-body text-sm font-semibold text-white">
                        Taxa de Conversão de Referência:
                      </label>
                      <span className="font-heading text-lg font-bold text-[#F26522]">
                        {conversionRate.toFixed(1)}%
                      </span>
                    </div>
                    <input
                      id="conversion-slider"
                      type="range"
                      min={0.5}
                      max={5.0}
                      step={0.1}
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                    />
                  </div>
                </div>

                {/* Fluxo Visual Recalculado */}
                <div className="p-6 rounded-2xl bg-[#11161E] border border-[#F26522]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                  <div>
                    <span className="text-xs text-[#AEB6C2] uppercase font-semibold">Pessoas Impactadas</span>
                    <div className="font-heading text-2xl font-black text-white mt-1">
                      {formatNumber(impressions)}
                    </div>
                  </div>

                  <ArrowDown className="w-5 h-5 text-[#F26522] md:-rotate-90 shrink-0" />

                  <div>
                    <span className="text-xs text-[#AEB6C2] uppercase font-semibold">Taxa de Conversão</span>
                    <div className="font-heading text-2xl font-black text-[#F26522] mt-1">
                      {conversionRate.toFixed(1)}%
                    </div>
                  </div>

                  <ArrowDown className="w-5 h-5 text-[#F26522] md:-rotate-90 shrink-0" />

                  <div className="p-3 rounded-xl bg-[#F26522]/15 border border-[#F26522]/40 min-w-[140px]">
                    <span className="text-xs text-white uppercase font-bold">Conversões Estimadas</span>
                    <div className="font-heading text-3xl font-black text-[#F26522] mt-1">
                      {formatNumber(estimatedConversions)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-[#AEB6C2]">
                Tráfego é sobre encontrar quem está pronto para avançar no momento certo.
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
