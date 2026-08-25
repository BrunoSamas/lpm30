"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Compass, Layers } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const AdvisoryPricing: React.FC = () => {
  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        {/* Bloco de Preço */}
        <SectionHeading
          eyebrow="PROPOSTA DE VALOR"
          title="Direção para parar de improvisar."
          description="Investimento acessível e previsível para transformar a relação da sua empresa com o marketing:"
        />

        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="tech" className="p-8 md:p-12 bg-gradient-to-br from-[#19212C] via-[#151B24] to-[#0D1117] border-[#F26522] text-center space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 text-xs font-bold text-[#F26522] uppercase tracking-wider">
                INVESTIMENTO MENSAL
              </div>

              <div>
                <span className="font-heading text-5xl sm:text-6xl font-black text-[#F26522]">
                  R$ 440
                </span>
                <span className="text-sm font-normal text-[#AEB6C2]">/mês</span>
              </div>

              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#11161E] border border-white/10 text-xs font-semibold text-white">
                <span>Contrato de 6 meses de acompanhamento</span>
                <span className="text-[#F26522] font-bold">(R$ 440 × 6)</span>
              </div>

              <p className="font-body text-sm text-[#AEB6C2] max-w-md mx-auto leading-relaxed">
                Para você parar de improvisar o marketing e começar a executá-lo com direção e metas claras.
              </p>

              <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 text-xs text-white font-medium">
                “Você continua no comando. Agora com um mapa.”
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero contratar a Assessoria
                </Button>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2]">
                <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                <span>Primeiro alinhamos o momento da sua empresa.</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Comparação Simples: Direção ou Execução? */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
              ESCLARECIMENTO FINAL
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
              Direção ou execução?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ASSESSORIA */}
            <Card variant="default" className="p-6 bg-[#151B24] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F26522] uppercase">
                <Compass className="w-4 h-4" />
                <span>ASSESSORIA</span>
              </div>

              <div className="space-y-2 text-xs md:text-sm">
                <p>
                  <strong className="text-white">M30:</strong> orienta, planeja e acompanha.
                </p>
                <p>
                  <strong className="text-[#F26522]">SUA EMPRESA:</strong> executa.
                </p>
              </div>
            </Card>

            {/* OPERAÇÃO COMPLETA */}
            <Card variant="default" className="p-6 bg-[#151B24] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase">
                <Layers className="w-4 h-4 text-[#F26522]" />
                <span>OPERAÇÃO COMPLETA</span>
              </div>

              <div className="space-y-2 text-xs md:text-sm">
                <p>
                  <strong className="text-[#F26522]">M30:</strong> planeja e executa as frentes contratadas.
                </p>
                <p>
                  <strong className="text-white">SUA EMPRESA:</strong> acompanha e direciona o negócio.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center pt-4">
            <Link href="/#ecossistema" className="inline-block">
              <Button variant="secondary" size="sm" iconRight={<ArrowRight className="w-4 h-4" />}>
                Conhecer todas as soluções
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
