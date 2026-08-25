"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, AlertCircle, Info } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { calculateEstimatedLeads, calculateEstimatedCustomers, formatBRL, formatNumber } from "@/lib/traffic-utils";

export const TrafficInvestment: React.FC = () => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(900);
  const [estimatedCPL, setEstimatedCPL] = useState<number>(20);
  const [closeRate, setCloseRate] = useState<number>(20); // 10%, 20%, 30%

  const estimatedLeads = calculateEstimatedLeads(monthlyBudget, estimatedCPL);
  const estimatedCustomers = calculateEstimatedCustomers(estimatedLeads, closeRate);

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="INVESTIMENTO & PROJEÇÃO"
          title="Conversão precisa de VOLUME."
          description="Marketing também é matemática e estatística aplicada ao crescimento sustentável do seu negócio:"
        />

        {/* 3 Indicadores de Referência */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="default" className="p-6 text-center bg-[#151B24]">
              <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mx-auto mb-3 text-[#F26522]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="font-heading text-3xl font-black text-white mb-1">R$ 30/dia</div>
              <p className="font-body text-xs text-[#AEB6C2]">Investimento mínimo recomendado em mídia</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="default" className="p-6 text-center bg-[#151B24]">
              <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mx-auto mb-3 text-[#F26522]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="font-heading text-3xl font-black text-[#F26522] mb-1">≈ R$ 900/mês</div>
              <p className="font-body text-xs text-[#AEB6C2]">Verba mensal estimada em anúncios</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card variant="tech" className="p-6 text-center bg-[#19212C] border-[#F26522]/40">
              <div className="w-10 h-10 rounded-xl bg-[#F26522] text-white flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-heading text-3xl font-black text-[#F26522] mb-1">~45</div>
              <p className="font-body text-xs text-[#AEB6C2]">
                Oportunidades/mês em simulação com CPL de R$ 20
              </p>

              <div className="mt-2 text-[10px] text-[#F26522] font-semibold flex items-center justify-center gap-1">
                <Info className="w-3 h-3" />
                <span>Exemplo baseado em CPL hipotético de R$ 20.</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Simulador Interativo de Oportunidades */}
        <Card variant="tech" className="p-8 bg-[#151B24] border-[#F26522]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block">
                SIMULADOR INTERATIVO
              </span>
              <h3 className="font-heading text-xl font-extrabold text-white">
                Simulação de Oportunidades & Vendas
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-[#F26522]">
              Simulação Dinâmica
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controles */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="budget-slider" className="font-body text-sm font-semibold text-white">
                    Investimento Mensal em Mídia:
                  </label>
                  <span className="font-heading text-lg font-bold text-[#F26522]">
                    {formatBRL(monthlyBudget)}
                  </span>
                </div>
                <input
                  id="budget-slider"
                  type="range"
                  min={500}
                  max={10000}
                  step={100}
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="cpl-slider" className="font-body text-sm font-semibold text-white">
                    CPL Estimado (Custo por Lead/Oportunidade):
                  </label>
                  <span className="font-heading text-lg font-bold text-[#F26522]">
                    {formatBRL(estimatedCPL)}
                  </span>
                </div>
                <input
                  id="cpl-slider"
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={estimatedCPL}
                  onChange={(e) => setEstimatedCPL(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              <div>
                <label className="font-body text-sm font-semibold text-white block mb-2">
                  Taxa de Fechamento Comercial da sua equipe:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[10, 20, 30].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setCloseRate(rate)}
                      className={`py-2 px-3 rounded-xl border font-heading text-xs font-bold transition-all ${
                        closeRate === rate
                          ? "bg-[#F26522] border-[#F26522] text-white shadow-md"
                          : "bg-[#11161E] border-white/10 text-[#AEB6C2] hover:border-white/30"
                      }`}
                    >
                      {rate}% Fechamento
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resultado do Simulador */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#11161E] border border-white/10 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-[#151B24] border border-white/5">
                    <span className="text-xs text-[#AEB6C2] uppercase font-semibold">Leads Estimados</span>
                    <div className="font-heading text-3xl font-black text-white mt-1">
                      {formatNumber(estimatedLeads)}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F26522]/15 border border-[#F26522]/40">
                    <span className="text-xs text-[#F26522] uppercase font-bold">Clientes Estimados</span>
                    <div className="font-heading text-3xl font-black text-[#F26522] mt-1">
                      ~{formatNumber(estimatedCustomers)}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#AEB6C2] space-y-1">
                  <p>
                    Com investimento de <strong className="text-white">{formatBRL(monthlyBudget)}</strong> e CPL hipotético de <strong className="text-white">{formatBRL(estimatedCPL)}</strong>, a operação gera em média <strong className="text-white">{estimatedLeads} oportunidades</strong>.
                  </p>
                  <p>
                    Com taxa de fechamento comercial de <strong className="text-[#F26522]">{closeRate}%</strong>, projeta-se aproximadamente <strong className="text-white">{estimatedCustomers} novos clientes</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#AEB6C2] text-center">
            <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0" />
            <span>
              Simulação ilustrativa baseada nos valores informados. Não representa promessa ou garantia de resultados.
            </span>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
