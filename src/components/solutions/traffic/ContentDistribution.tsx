"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const ContentDistribution: React.FC = () => {
  const companyAItems = [
    "Pouco conteúdo relevante publicado",
    "Comunicação confusa e genérica",
    "Perfil desatualizado ou abandonado",
    "Pouca demonstração real do produto/serviço",
  ];

  const companyBItems = [
    "Vídeos e anúncios altamente profissionais",
    "Produtos e serviços bem apresentados",
    "Dúvidas frequentes respondidas com clareza",
    "Diferenciais claros e recorrentes",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="SINERGIA"
          title="CONTEÚDO + DISTRIBUIÇÃO"
          description="Tráfego compra atenção. O conteúdo ajuda a convertê-la em vendas reais:"
        />

        {/* Comparativo Empresa A vs Empresa B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Empresa A */}
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
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider">CENÁRIO CRÍTICO</span>
                  <h3 className="font-heading text-xl font-bold text-white">Empresa A — Sem preparação</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {companyAItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB6C2]">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Resultado Esperado:</span>
                <p className="font-body text-sm font-semibold text-white mt-1">
                  Maior tendência de rejeição e encarecimento dos anúncios.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Empresa B */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-emerald-500/30">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">CENÁRIO IDEAL</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">Empresa B — Atraente e pronta</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {companyBItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Resultado Esperado:</span>
                <p className="font-body text-sm font-bold text-white mt-1">
                  Maior potencial de conversão, menor custo e máxima confiança.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Pergunta e Frase de Destaque Visual */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center space-y-4 shadow-xl">
          <span className="font-heading text-xs font-bold text-[#F26522] uppercase tracking-widest block">
            QUAL DELAS TEM MAIS CHANCE DE CONVERTER?
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            O anúncio leva até você. <br />
            <span className="text-[#F26522]">O conteúdo ajuda o cliente a comprar.</span>
          </h3>
        </div>
      </Container>
    </Section>
  );
};
