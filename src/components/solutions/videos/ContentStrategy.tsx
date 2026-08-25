"use client";

import React from "react";
import { Target, Film, PenTool } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const ContentStrategy: React.FC = () => {
  const objectives = [
    "Apresentar produto ou serviço com clareza",
    "Explicar soluções e resolver objeções",
    "Responder dúvidas frequentes do mercado",
    "Construir autoridade técnica e posicionamento",
    "Mostrar diferenciais competitivos reais",
    "Criar desejo de compra e converter vendas",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ESTRATÉGIA ANTES DO REC"
          title="NÃO É SOBRE POSTAR MAIS. É SOBRE TER O QUE DIZER."
          description="Um bom vídeo começa antes de ligar a câmera. Ele precisa ter objetivo claro, mensagem assertiva e função definida dentro da comunicação da empresa:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Lado Esquerdo: Objetivos do Conteúdo */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-2">
              OBJETIVOS ESTRATÉGICOS DE CADA VÍDEO
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {objectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#151B24] border border-white/10 text-xs md:text-sm font-medium text-white flex items-start gap-2.5"
                >
                  <Target className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Como a M30 Trabalha */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="tech" className="p-6 bg-[#19212C] border-[#F26522] space-y-4">
              <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block">
                COMO A M30 TRABALHA
              </span>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 flex items-start gap-3">
                  <PenTool className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading text-xs font-bold text-white uppercase block">01 — PENSA & ROTEIRIZA</span>
                    <p className="font-body text-xs text-[#AEB6C2]">Definição estratégica de pautas e roteiros com objetivo comercial.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#11161E] border border-white/5 flex items-start gap-3">
                  <Film className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading text-xs font-bold text-white uppercase block">02 — GRAVA & EDITA</span>
                    <p className="font-body text-xs text-[#AEB6C2]">Captação guiada e edição final dinâmica com padrão profissional.</p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#151B24] text-center text-xs text-[#AEB6C2]">
                “Você entra com aquilo que ninguém conhece melhor: <strong className="text-white">o seu negócio.”</strong>
              </div>
            </Card>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/40 text-center max-w-2xl mx-auto">
          <p className="font-heading text-base md:text-lg font-black text-white uppercase tracking-wide">
            POR ISSO, ANTES DE APERTAR REC, <span className="text-[#F26522]">EXISTE ESTRATÉGIA.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
