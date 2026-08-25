"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Camera, Zap, Sparkles } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const ProductionFormats: React.FC = () => {
  const mobileBenefits = ["Velocidade de produção", "Frequência constante", "Linguagem do cotidiano"];
  const proBenefits = ["Produção audiovisual refinada", "Alto impacto visual", "Elevada percepção de valor"];

  return (
    <Section id="formatos" variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="FORMATOS DE PRODUÇÃO"
          title="UM MÉTODO. DOIS JEITOS DE PRODUZIR."
          description="Nem todo conteúdo precisa de uma grande produção de cinema. E nem toda comunicação comercial deveria parecer improvisada:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-white">MOBILE</h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white uppercase tracking-wider">
                    ÁGIL & NATURAL
                  </span>
                </div>

                <p className="font-body text-sm text-[#AEB6C2] mb-6 leading-relaxed">
                  Conteúdo dinâmico e recorrente, pensado para empresas que buscam aumentar a frequência, manter presença constante e criar proximidade real nas redes sociais.
                </p>

                <ul className="space-y-3 mb-8">
                  {mobileBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#AEB6C2]">
                      <Zap className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 text-center">
                <span className="font-heading text-sm font-black text-white uppercase tracking-wider">
                  MOBILE PARA ESTAR PRESENTE.
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Card PRO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="tech" className="h-full p-8 bg-gradient-to-b from-[#19212C] to-[#151B24] border-[#F26522] flex flex-col justify-between shadow-[0_8px_30px_rgba(242,101,34,0.15)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center text-white">
                      <Camera className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-2xl font-black text-white">PRO</h3>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F26522]/20 border border-[#F26522]/40 text-[#F26522] uppercase tracking-wider">
                    ALTA PERCEPÇÃO
                  </span>
                </div>

                <p className="font-body text-sm text-[#AEB6C2] mb-6 leading-relaxed">
                  Produção audiovisual profissional para valorizar produtos, serviços, lançamentos e reforçar o posicionamento de autoridade da marca no mercado.
                </p>

                <ul className="space-y-3 mb-8">
                  {proBenefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white font-medium">
                      <Sparkles className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#11161E]/90 border border-[#F26522]/40 text-center">
                <span className="font-heading text-sm font-black text-[#F26522] uppercase tracking-wider">
                  PRO PARA MARCAR PRESENÇA.
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
