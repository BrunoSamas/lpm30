"use client";

import React from "react";
import { Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { VIDEO_PLANS, formatCurrency } from "@/lib/video-plans-data";
import { WHATSAPP_URL } from "@/lib/data";

export const MobileVideos: React.FC = () => {
  const useCases = [
    "Conteúdo recorrente para redes sociais",
    "Dicas rápidas, orientações e explicações diretas",
    "Bastidores do dia a dia da empresa",
    "Apresentação rápida de produtos e serviços",
    "Construção de autoridade e relacionamento próximo",
  ];

  const conceptualTags = ["DICA", "BASTIDOR", "PRODUTO", "DÚVIDA", "ROTINA", "NOVIDADE"];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="PLANO MOBILE"
          title="VÍDEOS MOBILE: CARA DE INTERNET"
          description="Produção pensada para uma comunicação rápida, próxima, autêntica e altamente recorrente nas redes sociais:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Lado Esquerdo: Para quem é */}
          <div className="lg:col-span-7">
            <Card variant="default" className="h-full p-8 bg-[#151B24] border-white/10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Smartphone className="w-6 h-6 text-[#F26522]" />
                <h3 className="font-heading text-xl font-bold text-white">IDEAL PARA:</h3>
              </div>

              <ul className="space-y-3.5">
                {useCases.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#AEB6C2]">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold text-[#AEB6C2] uppercase tracking-wider block mb-2">FORMATOS CONCEITUAIS:</span>
                <div className="flex flex-wrap gap-2">
                  {conceptualTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-[#11161E] border border-white/10 text-xs font-mono text-white">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Lado Direito: Cards de Preço Mobile */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {VIDEO_PLANS.mobile.map((plan) => (
              <Card
                key={plan.id}
                variant={plan.recommended ? "tech" : "default"}
                className={`p-6 flex flex-col justify-between ${
                  plan.recommended
                    ? "bg-[#19212C] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.15)]"
                    : "bg-[#151B24] border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-lg font-extrabold text-white">
                      {plan.videos} VÍDEOS / MÊS
                    </span>
                    {plan.highlight && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F26522] text-white uppercase tracking-wider">
                        {plan.highlight}
                      </span>
                    )}
                  </div>

                  <p className="font-body text-xs text-[#AEB6C2] mb-4">
                    {plan.description}
                  </p>

                  <div className="font-heading text-3xl font-black text-[#F26522] mb-4">
                    {formatCurrency(plan.price)}
                    <span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
                  </div>
                </div>

                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button
                    variant={plan.recommended ? "primary" : "secondary"}
                    size="default"
                    fullWidth
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#151B24] border border-[#F26522]/30 text-center max-w-xl mx-auto">
          <p className="font-heading text-xs sm:text-sm font-black text-white uppercase tracking-wider">
            MENOS PRODUÇÃO COMPLEXA. <span className="text-[#F26522]">MAIS FREQUÊNCIA E PRESENÇA.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
