"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, AlertCircle, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const TimeCostCalculator: React.FC = () => {
  const [proLabore, setProLabore] = useState<number>(10000);
  const [hours, setHours] = useState<number>(30);

  // Cálculo: 176 horas úteis no mês
  const hourlyRate = proLabore / 176;
  const monthlyCost = hourlyRate * hours;
  const yearlyCost = monthlyCost * 12;

  // Formatação em Reais (BRL)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <Section id="calculadora" variant="deep" className="relative border-t border-white/5 overflow-hidden">
      {/* Glow Laranja de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.14)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="ANÁLISE ECONÔMICA DO TEMPO"
          title="Quanto custa você fazer o marketing?"
          description="A maioria dos empresários acredita que fazer o marketing sozinho sai 'de graça'. Calcule abaixo o custo real da sua hora de trabalho:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lado Esquerdo: Controles Interativos da Calculadora */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <Card variant="default" className="p-6 md:p-8 bg-[#151B24]/90 backdrop-blur-md">
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Simulador de Custo Operacional
                </h3>
              </div>

              {/* Controle 1: Pró-labore Mensal */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="pro-labore-slider" className="font-body text-sm font-semibold text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#F26522]" />
                    Seu Pró-Labore / Retirada Mensal:
                  </label>
                  <span className="font-heading text-xl font-extrabold text-[#F26522]">
                    {formatCurrency(proLabore)}
                  </span>
                </div>
                <input
                  id="pro-labore-slider"
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={proLabore}
                  onChange={(e) => setProLabore(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
                <div className="flex justify-between text-xs text-[#AEB6C2] mt-2">
                  <span>R$ 3.000</span>
                  <span>R$ 25.000</span>
                  <span>R$ 50.000+</span>
                </div>
              </div>

              {/* Controle 2: Horas Mensais Dedicadas */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="hours-slider" className="font-body text-sm font-semibold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F26522]" />
                    Horas mensais gastas com marketing:
                  </label>
                  <span className="font-heading text-xl font-extrabold text-white">
                    {hours}h <span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
                  </span>
                </div>
                <input
                  id="hours-slider"
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
                <div className="flex justify-between text-xs text-[#AEB6C2] mt-2">
                  <span>10h (Leve)</span>
                  <span>30h (Média geral)</span>
                  <span>80h (Muito preso)</span>
                </div>
              </div>

              {/* Botões Rápidos de Referência */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-[#AEB6C2]">Valores comuns:</span>
                <button
                  type="button"
                  onClick={() => { setProLabore(5000); setHours(30); }}
                  className="px-3 py-1 rounded-md bg-[#11161E] hover:bg-[#F26522]/20 border border-white/10 text-white transition-colors"
                >
                  R$ 5k (30h)
                </button>
                <button
                  type="button"
                  onClick={() => { setProLabore(10000); setHours(30); }}
                  className="px-3 py-1 rounded-md bg-[#11161E] hover:bg-[#F26522]/20 border border-white/10 text-white transition-colors"
                >
                  R$ 10k (30h)
                </button>
                <button
                  type="button"
                  onClick={() => { setProLabore(15000); setHours(30); }}
                  className="px-3 py-1 rounded-md bg-[#11161E] hover:bg-[#F26522]/20 border border-white/10 text-white transition-colors"
                >
                  R$ 15k (30h)
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Lado Direito: Resultado do Custo do Tempo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <Card variant="tech" className="h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117]">
              <div>
                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-2">
                  CUSTO DIRETO DA SUA HORA
                </span>
                <h4 className="text-[#AEB6C2] text-sm">
                  Sua hora custa aproximadamente:{" "}
                  <strong className="text-white">{formatCurrency(hourlyRate)}/hora</strong>
                </h4>

                <div className="my-8 p-6 rounded-2xl bg-[#11161E]/90 border border-[#F26522]/40 text-center relative overflow-hidden">
                  <div className="text-xs text-[#AEB6C2] uppercase tracking-wider mb-1 font-semibold">
                    Custo direto mensal do seu tempo no marketing
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-black text-[#F26522] my-2">
                    {formatCurrency(monthlyCost)}
                  </div>
                  <div className="text-xs text-[#AEB6C2]">
                    Totalizando <strong className="text-white">{formatCurrency(yearlyCost)}</strong> por ano.
                  </div>
                </div>
              </div>

              {/* Destaque para o Custo de Oportunidade */}
              <div className="p-5 rounded-xl bg-[#F26522]/15 border border-[#F26522]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#F26522] font-bold text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>E este ainda NÃO é o seu maior custo.</span>
                </div>
                <p className="font-heading text-lg font-extrabold text-white leading-tight">
                  O maior prejuízo é o <span className="text-[#F26522]">CUSTO DE OPORTUNIDADE</span> das reuniões e vendas que você deixou de fechar.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
                  <Button variant="primary" fullWidth size="sm" iconRight={<ArrowRight className="w-4 h-4" />}>
                    Quero economizar meu tempo
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
