"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";

export const AdvisoryFit: React.FC = () => {
  const makesSense = [
    "Você já possui alguém ou uma equipe que consegue executar",
    "Existem ideias, mas falta organização e método",
    "Você tem dúvidas constantes sobre o que priorizar no mês",
    "Quer tomar decisões de marketing mais estratégicas",
    "Precisa desenvolver a capacidade operacional da sua equipe",
    "Quer acompanhamento profissional recorrente sem pagar por agência inteira",
  ];

  const notRightFit = [
    "Você quer terceirizar toda a operação de marketing",
    "Não possui nenhuma disponibilidade interna para executar",
    "Precisa que a M30 produza todo o conteúdo (vídeos, artes, textos)",
    "Precisa que a M30 assuma anúncios, atendimento e operação completa",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="PERFIL DE CLIENTE"
          title="Para empresas que querem executar melhor, não terceirizar tudo."
          description="A Assessoria de Marketing foi desenhada para perfis específicos de empresas. Veja se é o momento ideal para o seu negócio:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Faz Sentido Se */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-emerald-500/30">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">CENÁRIO IDEAL</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">FAZ SENTIDO SE:</h3>
                </div>
              </div>

              <ul className="space-y-4">
                {makesSense.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Talvez Não Seja O Plano Certo Se */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-red-400 font-bold uppercase tracking-wider">ATENÇÃO</span>
                    <h3 className="font-heading text-xl font-bold text-white">TALVEZ NÃO SEJA CERTO SE:</h3>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {notRightFit.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB6C2]">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 text-center space-y-3">
                <p className="text-xs text-[#AEB6C2]">
                  Precisa que a M30 assuma toda a operação por você?
                </p>
                <Link href="/#ecossistema" className="inline-block">
                  <Button variant="secondary" size="sm" iconRight={<ArrowRight className="w-4 h-4" />}>
                    Conhecer nossas soluções completas
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
