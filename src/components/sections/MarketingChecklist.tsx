"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, AlertTriangle, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { CHECKLIST_ITEMS, WHATSAPP_URL } from "@/lib/data";

export const MarketingChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(
    CHECKLIST_ITEMS.map((item) => item.id)
  );

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const checkedCount = checkedIds.length;

  return (
    <Section id="o-problema" variant="deep" className="border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="RESPONDA COM SINCERIDADE"
          title="Quem faz o marketing da sua empresa?"
          description="Selecione abaixo quais destas rotinas hoje dependem diretamente da sua presença e intervenção diária:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lado Esquerdo: Checklist Interativo */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
            {CHECKLIST_ITEMS.map((item, index) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => toggleCheck(item.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isChecked
                      ? "bg-[#151B24] border-[#F26522]/40 shadow-sm"
                      : "bg-[#11161E]/60 border-white/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Alternar item ${item.label}`}
                    className="mt-0.5 shrink-0 focus:outline-none"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#F26522]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#AEB6C2]" />
                    )}
                  </button>
                  <span
                    className={`font-body text-base md:text-lg transition-colors ${
                      isChecked ? "text-white font-medium" : "text-[#AEB6C2]"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Lado Direito: Card Provocativo de Impacto */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Card variant="tech" className="h-full flex flex-col justify-between p-8 relative overflow-hidden bg-gradient-to-br from-[#151B24] to-[#0D1117]">
                {/* Glow de fundo */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(242,101,34,0.2)_0%,transparent_70%)] pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F26522]/15 border border-[#F26522]/40 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-[#F26522]" />
                  </div>

                  <div className="inline-block px-3 py-1 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-xs font-semibold text-[#F26522] uppercase tracking-wider mb-4">
                    {checkedCount} de {CHECKLIST_ITEMS.length} tarefas sob sua responsabilidade
                  </div>

                  <p className="font-body text-lg text-[#AEB6C2] leading-relaxed mb-4">
                    Então você não está apenas administrando sua empresa...
                  </p>

                  <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6">
                    Você virou o <span className="text-[#F26522]">departamento de marketing</span> dela.
                  </h3>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <p className="text-sm text-[#AEB6C2] mb-5">
                    O maior custo não é a verba investida. É o seu tempo de dono preso no operacional de comunicação.
                  </p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button variant="primary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                      Mudar essa realidade
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
