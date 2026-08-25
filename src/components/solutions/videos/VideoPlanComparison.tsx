"use client";

import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { VIDEO_PLANS, formatCurrency } from "@/lib/video-plans-data";
import { WHATSAPP_URL } from "@/lib/data";

export const VideoPlanComparison: React.FC = () => {
  return (
    <Section id="comparador" variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="COMPARATIVO COMPLETO DE PLANOS"
          title="Escolha como sua marca quer aparecer."
          description="Visão resumida e objetiva dos nossos pacotes de produção mensal:"
        />

        {/* Tabela Comparativa em Cards Responsivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Mobile 4 */}
          <Card variant="default" className="p-6 bg-[#151B24] border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#AEB6C2] uppercase tracking-wider block mb-1">
                MOBILE • 4 VÍDEOS
              </span>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Mobile 4</h3>
              <div className="font-heading text-2xl font-black text-[#F26522] mb-4">
                {formatCurrency(VIDEO_PLANS.mobile[0].price)}<span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
              </div>

              <div className="space-y-2 text-xs text-[#AEB6C2] pt-3 border-t border-white/10">
                <p><strong className="text-white">Perfil:</strong> Ágil & Natural</p>
                <p><strong className="text-white">Objetivo:</strong> Presença de marca</p>
                <p><strong className="text-white">Produção:</strong> Dinâmica leve</p>
                <p><strong className="text-white">Frequência:</strong> Semanal</p>
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button variant="secondary" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                Escolher Mobile 4
              </Button>
            </a>
          </Card>

          {/* Mobile 6 */}
          <Card variant="tech" className="p-6 bg-[#19212C] border-[#F26522] flex flex-col justify-between space-y-4 shadow-[0_8px_30px_rgba(242,101,34,0.15)]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-wider block">
                  MOBILE • 6 VÍDEOS
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#F26522] text-white">RECOMENDADO</span>
              </div>
              <h3 className="font-heading text-lg font-extrabold text-white mb-2">Mobile 6</h3>
              <div className="font-heading text-2xl font-black text-[#F26522] mb-4">
                {formatCurrency(VIDEO_PLANS.mobile[1].price)}<span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
              </div>

              <div className="space-y-2 text-xs text-[#AEB6C2] pt-3 border-t border-white/10">
                <p><strong className="text-white">Perfil:</strong> Ágil & Recorrente</p>
                <p><strong className="text-white">Objetivo:</strong> Alta presença e engajamento</p>
                <p><strong className="text-white">Produção:</strong> Dinâmica leve</p>
                <p><strong className="text-white">Frequência:</strong> Alta recorrência</p>
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button variant="primary" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                Escolher Mobile 6
              </Button>
            </a>
          </Card>

          {/* PRO 4 */}
          <Card variant="default" className="p-6 bg-[#151B24] border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#AEB6C2] uppercase tracking-wider block mb-1">
                PRO • 4 VÍDEOS
              </span>
              <h3 className="font-heading text-lg font-bold text-white mb-2">PRO 4</h3>
              <div className="font-heading text-2xl font-black text-[#F26522] mb-4">
                {formatCurrency(VIDEO_PLANS.pro[0].price)}<span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
              </div>

              <div className="space-y-2 text-xs text-[#AEB6C2] pt-3 border-t border-white/10">
                <p><strong className="text-white">Perfil:</strong> Premium & Refinado</p>
                <p><strong className="text-white">Objetivo:</strong> Impacto e lançamentos</p>
                <p><strong className="text-white">Produção:</strong> Audiovisual profissional</p>
                <p><strong className="text-white">Frequência:</strong> Estratégica mensal</p>
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button variant="secondary" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                Escolher PRO 4
              </Button>
            </a>
          </Card>

          {/* PRO 6 */}
          <Card variant="tech" className="p-6 bg-[#19212C] border-[#F26522] flex flex-col justify-between space-y-4 shadow-[0_8px_30px_rgba(242,101,34,0.2)]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-[#F26522] uppercase tracking-wider block">
                  PRO • 6 VÍDEOS
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#F26522] text-white">IMPACTO</span>
              </div>
              <h3 className="font-heading text-lg font-extrabold text-white mb-2">PRO 6</h3>
              <div className="font-heading text-2xl font-black text-[#F26522] mb-4">
                {formatCurrency(VIDEO_PLANS.pro[1].price)}<span className="text-xs font-normal text-[#AEB6C2]">/mês</span>
              </div>

              <div className="space-y-2 text-xs text-[#AEB6C2] pt-3 border-t border-white/10">
                <p><strong className="text-white">Perfil:</strong> Premium & Autoridade</p>
                <p><strong className="text-white">Objetivo:</strong> Máxima autoridade e conversão</p>
                <p><strong className="text-white">Produção:</strong> Audiovisual profissional</p>
                <p><strong className="text-white">Frequência:</strong> Alta recorrência PRO</p>
              </div>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block pt-2">
              <Button variant="primary" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                Escolher PRO 6
              </Button>
            </a>
          </Card>
        </div>

        {/* Dúvida de Escolha */}
        <div className="p-6 rounded-2xl bg-[#151B24] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#F26522] shrink-0" />
            <div>
              <span className="font-heading text-base font-bold text-white block">
                Tem dúvida sobre qual formato escolher?
              </span>
              <span className="text-xs text-[#AEB6C2]">
                Nosso time ajuda a identificar o pacote ideal para o objetivo comercial do seu negócio.
              </span>
            </div>
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
            <Button variant="secondary" size="sm" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
              Quero ajuda para escolher
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};
