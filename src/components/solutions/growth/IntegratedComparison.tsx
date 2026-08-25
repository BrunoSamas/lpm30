"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const IntegratedComparison: React.FC = () => {
  const traditionalNeeds = [
    "Contratar produtora / videomaker para vídeos frequentes",
    "Contratar gestor / agência de tráfego pago especialista",
    "Contratar plataforma e configuração de inteligência de atendimento",
    "Contratar consultoria estratégica externa para direcionamento",
    "Desgaste diário coordenando e cobrando múltiplos fornecedores",
  ];

  const m30Includes = [
    "6 Vídeos PRO/mês com direção e produção profissional",
    "Gestão completa e otimização contínua de Tráfego Pago",
    "BeeIA — Agente Digital para atendimento 24/7 em 1 número",
    "Consultoria de Crescimento In Loco com alinhamento presencial",
    "Planejamento, gestão e acompanhamento integrado de funil",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ESTRUTURA INTEGRADA"
          title="Quanto custaria montar tudo separadamente?"
          description="Compare a complexidade de gerenciar fornecedores isolados versus a eficiência de uma única equipe alinhada:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Estrutura Tradicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-red-500/20">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider">CENÁRIO DESFRAGMENTADO</span>
                  <h3 className="font-heading text-lg font-bold text-white">Operação interna / Múltiplos fornecedores</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {traditionalNeeds.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB6C2]">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                <p className="font-body text-xs text-red-400 font-semibold">
                  Além do custo elevado, exige tempo precioso do empresário para alinhar todos os lados.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Solução M30 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-[#F26522]">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#F26522] flex items-center justify-center text-white">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#F26522] font-bold uppercase tracking-wider">OPERAÇÃO M30</span>
                  <h3 className="font-heading text-lg font-extrabold text-white">Operação Completa de Crescimento</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {m30Includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-[#11161E] border border-[#F26522]/40 text-center">
                <span className="font-heading text-sm font-black text-[#F26522] uppercase tracking-wider">
                  UMA ESTRUTURA. UM OBJETIVO.
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
