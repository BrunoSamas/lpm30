"use client";

import React, { useState } from "react";
import { Calculator, AlertCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const AfterHoursCalculator: React.FC = () => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(100);
  const [afterHoursPercent, setAfterHoursPercent] = useState<number>(35);

  const afterHoursLeads = Math.round(monthlyLeads * (afterHoursPercent / 100));

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="SIMULADOR DE DEMANDA"
          title="Quantos leads chegam quando ninguém pode responder?"
          description="Informe os dados da sua empresa para visualizar a demanda fora do expediente tradicional:"
        />

        <div className="max-w-3xl mx-auto">
          <Card variant="tech" className="p-8 bg-[#151B24] border-[#F26522]/30 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                Calculadora de Volume Fora do Horário
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="monthly-leads-slider" className="font-body text-sm font-semibold text-white">
                    Leads Recebidos por Mês:
                  </label>
                  <span className="font-heading text-lg font-bold text-[#F26522]">
                    {monthlyLeads} leads
                  </span>
                </div>
                <input
                  id="monthly-leads-slider"
                  type="range"
                  min={20}
                  max={1000}
                  step={10}
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="after-hours-slider" className="font-body text-sm font-semibold text-white">
                    % Fora do Horário Comercial:
                  </label>
                  <span className="font-heading text-lg font-bold text-[#F26522]">
                    {afterHoursPercent}%
                  </span>
                </div>
                <input
                  id="after-hours-slider"
                  type="range"
                  min={10}
                  max={70}
                  step={5}
                  value={afterHoursPercent}
                  onChange={(e) => setAfterHoursPercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#11161E] rounded-lg appearance-none cursor-pointer accent-[#F26522]"
                />
              </div>
            </div>

            {/* Exibição do Resultado */}
            <div className="p-6 rounded-2xl bg-[#11161E] border border-white/10 text-center space-y-2">
              <span className="text-xs text-[#AEB6C2] font-semibold uppercase tracking-wider block">
                DEMANDA FORA DO EXPEDIENTE ESTIMADA
              </span>
              <div className="font-heading text-4xl sm:text-5xl font-black text-[#F26522]">
                ~{afterHoursLeads}
                <span className="text-base font-normal text-white ml-2">conversas/mês</span>
              </div>
              <p className="font-body text-xs text-[#AEB6C2] max-w-lg mx-auto">
                Com os valores informados, aproximadamente <strong className="text-white">{afterHoursLeads} conversas</strong> chegam fora do horário comercial.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-start gap-2 text-xs text-[#AEB6C2]">
              <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
              <span>
                Isso não significa que todas essas oportunidades seriam perdidas. O objetivo é visualizar quanto da demanda acontece quando sua equipe pode não estar disponível.
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
