"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Film, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const ClientM30Roles: React.FC = () => {
  const companyInputs = [
    "Conhecimento profundo do seu mercado",
    "Informações reais de produtos e serviços",
    "Diferenciais e proposta de valor única",
    "Casos de sucesso e experiência de atendimento",
    "Novidades e prioridades comerciais do mês",
  ];

  const m30Deliveries = [
    "Planejamento mensal e geração de pautas",
    "Criação de roteiros estratégicos estruturados",
    "Direção profissional durante a gravação",
    "Captação técnica com equipamento adequado",
    "Edição dinâmica, cortes e legendagem",
    "Organização pronta para distribuição no calendário",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="DIVISÃO DE PAPÉIS"
          title="Você não precisa fazer tudo."
          description="Sua equipe não precisa gastar horas tentando adivinhar como gravar ou editar. Cada um faz o que sabe de melhor:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Lado 1: Sua Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#AEB6C2] font-bold uppercase tracking-wider">SUA PARTE</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">SUA EMPRESA ENTRA COM:</h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {companyInputs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB6C2]">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Lado 2: M30 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-[#F26522]">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center text-white">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#F26522] font-bold uppercase tracking-wider">NOSSA PARTE</span>
                  <h3 className="font-heading text-xl font-extrabold text-white">A M30 TRANSFORMA EM:</h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {m30Deliveries.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Frase Central */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-2xl mx-auto">
          <p className="font-heading text-lg md:text-xl font-black text-white">
            Você conhece o negócio. <span className="text-[#F26522]">Nós transformamos isso em comunicação.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
