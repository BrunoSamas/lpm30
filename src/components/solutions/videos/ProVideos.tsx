"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Clapperboard } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { VIDEO_PLANS, formatCurrency } from "@/lib/video-plans-data";
import { WHATSAPP_URL } from "@/lib/data";

export const ProVideos: React.FC = () => {
  const useCases = [
    "Campanhas promocionais e lançamentos de produtos",
    "Vídeos institucionais e apresentação de serviços",
    "Posicionamento premium de marca e autoridade",
    "Anúncios de alta conversão para tráfego pago",
    "Captação com direção, áudio e iluminação profissional",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="PLANO PRO"
          title="VÍDEOS PRO: VALORIZANDO A MENSAGEM"
          description="Produção audiovisual profissional para conteúdos que precisam carregar mais percepção de valor e autoridade comercial:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Lado Esquerdo: Para quem é */}
          <div className="lg:col-span-7">
            <Card variant="tech" className="h-full p-8 bg-[#19212C] border-[#F26522]/40 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Clapperboard className="w-6 h-6 text-[#F26522]" />
                <h3 className="font-heading text-xl font-bold text-white">IDEAL PARA:</h3>
              </div>

              <ul className="space-y-3.5">
                {useCases.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-[#11161E] border border-white/10 text-xs text-[#AEB6C2] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F26522] shrink-0" />
                <span>Acabamento refinado, pós-produção avançada e captação guiada por especialistas M30.</span>
              </div>
            </Card>
          </div>

          {/* Lado Direito: Cards de Preço PRO */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {VIDEO_PLANS.pro.map((plan) => (
              <Card
                key={plan.id}
                variant="tech"
                className={`p-6 flex flex-col justify-between ${
                  plan.highlight
                    ? "bg-[#19212C] border-[#F26522] shadow-[0_8px_30px_rgba(242,101,34,0.2)]"
                    : "bg-[#151B24] border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-lg font-extrabold text-white">
                      {plan.videos} VÍDEOS PRO / MÊS
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
                    variant={plan.highlight ? "primary" : "secondary"}
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
            NÃO É SÓ SOBRE O QUE SUA EMPRESA DIZ. <span className="text-[#F26522]">É SOBRE COMO ELA É PERCEBIDA.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
