"use client";

import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIAFit: React.FC = () => {
  const idealCriteria = [
    "Recebem oportunidades e contatos pelo WhatsApp",
    "Possuem volume recorrente de dúvidas institucionais ou de produtos",
    "Demoram para responder em determinados períodos ou fins de semana",
    "Precisam qualificar a intenção e perfil do cliente rapidamente",
    "Querem padronizar o tom de voz e o atendimento inicial",
    "Possuem processo comercial definido ou querem estruturá-lo",
    "Precisam manter acompanhamento ativo de oportunidades",
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="QUALIFICAÇÃO OPERACIONAL"
          title="A BeeIA faz sentido para sua operação?"
          description="Confira se a sua empresa possui os requisitos ideais para implementação do Agente Digital:"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card variant="tech" className="p-8 bg-[#151B24] border-[#F26522]/30">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Ideal para empresas que:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {idealCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F26522] shrink-0" />
              <span className="font-body text-xs md:text-sm text-[#AEB6C2]">
                A tecnologia funciona melhor quando existe um <strong className="text-white">processo claro para ela seguir</strong>.
              </span>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
