"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { Container, Section, Card, Eyebrow } from "@/components/ui";
import { HIGH_VALUE_TASKS } from "@/lib/data";

export const OwnerProblem: React.FC = () => {
  return (
    <Section variant="dark" className="border-t border-white/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Narrativa Forte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <Eyebrow>O DIAGNÓSTICO DA OPERAÇÃO</Eyebrow>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              O problema não é você <br className="hidden sm:inline" />
              <span className="inline-block px-3 py-1 rounded-lg bg-[#F26522]/20 border border-[#F26522]/40 text-[#F26522] my-1">
                NÃO SABER FAZER.
              </span>{" "}
              <br />
              <span className="text-white">É justamente você conseguir fazer.</span>
            </h2>

            <div className="space-y-4 font-body text-lg text-[#AEB6C2] leading-relaxed pt-2">
              <p>
                Porque o marketing começa a ser encaixado entre uma reunião e outra.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-[#151B24] border border-white/5 text-sm font-medium text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F26522]" />
                  <span>Quando dá.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#151B24] border border-white/5 text-sm font-medium text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F26522]" />
                  <span>Quando sobra tempo.</span>
                </div>
                <div className="p-3 rounded-lg bg-[#151B24] border border-white/5 text-sm font-medium text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F26522]" />
                  <span>Quando alguém lembra.</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#F26522]/15 via-[#151B24] to-[#151B24] border border-[#F26522]/30 mt-6">
              <p className="font-heading text-lg md:text-xl font-bold text-white leading-snug">
                E marketing profissional não pode depender do tempo que sobra do dono.
              </p>
            </div>
          </motion.div>

          {/* Lado Direito: Composição Visual Editorial & Card "Onde seu tempo gera mais valor" */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <Card variant="tech" className="p-8 relative bg-[#151B24]/90 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F26522]">
                    FOCO ESTRATÉGICO
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-white mt-1">
                    ONDE SEU TEMPO GERA MAIS VALOR
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#F26522]" />
                </div>
              </div>

              <ul className="space-y-4">
                {HIGH_VALUE_TASKS.map((task, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-[#11161E]/80 border border-white/5 hover:border-[#F26522]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0" />
                    <span className="font-body text-base font-semibold text-white">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#AEB6C2]">
                <Zap className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>Cada hora no operacional do marketing é 1 hora a menos na liderança do negócio.</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
