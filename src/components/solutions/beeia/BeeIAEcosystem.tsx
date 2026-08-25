"use client";

import React from "react";
import { MessageSquare, Database, Cpu, Network, Calendar, FileText, AlertCircle, Bot } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIAEcosystem: React.FC = () => {
  const connections = [
    {
      title: "WHATSAPP",
      desc: "Atendimento imediato e conversas diretamente no canal de preferência do cliente.",
      icon: MessageSquare,
    },
    {
      title: "CRM",
      desc: "Consulta, cadastro e atualização de oportunidades quando houver integração compatível.",
      icon: Database,
    },
    {
      title: "AUTOMAÇÕES",
      desc: "Disparo de ações operacionais configuradas a partir do avanço da conversa.",
      icon: Cpu,
    },
    {
      title: "SISTEMAS & APIs",
      desc: "Troca de dados com plataformas proprietárias ou sistemas web compatíveis.",
      icon: Network,
    },
    {
      title: "AGENDAMENTOS",
      desc: "Possibilidade de conduzir o cliente para reuniões ou compromissos quando integrado.",
      icon: Calendar,
    },
    {
      title: "DADOS & DOCUMENTOS",
      desc: "Acesso a catálogos autorizados, propostas e materiais técnicos configurados.",
      icon: FileText,
    },
  ];

  return (
    <Section variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="CONECTIVIDADE & ECOSSISTEMA"
          title="Um Agente. Várias Conexões."
          description="A BeeIA não precisa ficar isolada. Ela pode ser conectada diretamente ao ecossistema tecnológico da sua empresa:"
        />

        {/* Centro de Conectividade */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Esquerda (3 Módulos) */}
            <div className="space-y-4">
              {connections.slice(0, 3).map((conn) => {
                const Icon = conn.icon;
                return (
                  <Card key={conn.title} variant="default" className="p-4 bg-[#151B24] hover:border-[#F26522]/40 transition-all">
                    <div className="flex items-center gap-2.5 mb-1">
                      <Icon className="w-4 h-4 text-[#F26522]" />
                      <h4 className="font-heading text-xs font-bold text-white">{conn.title}</h4>
                    </div>
                    <p className="font-body text-[11px] text-[#AEB6C2]">{conn.desc}</p>
                  </Card>
                );
              })}
            </div>

            {/* Centro: Nó BEEIA com Glow */}
            <div className="my-6 md:my-0 flex flex-col items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#F26522] via-[#F26522]/80 to-[#19212C] p-1 shadow-[0_0_40px_rgba(242,101,34,0.3)]">
                <div className="w-full h-full rounded-[22px] bg-[#11161E] flex flex-col items-center justify-center p-4 text-center">
                  <Bot className="w-8 h-8 text-[#F26522] mb-1" />
                  <span className="font-heading text-lg font-black text-white">BEEIA</span>
                  <span className="text-[9px] font-bold text-[#F26522] uppercase tracking-widest">NÓ CENTRAL</span>
                </div>
              </div>
            </div>

            {/* Direita (3 Módulos) */}
            <div className="space-y-4">
              {connections.slice(3, 6).map((conn) => {
                const Icon = conn.icon;
                return (
                  <Card key={conn.title} variant="default" className="p-4 bg-[#151B24] hover:border-[#F26522]/40 transition-all">
                    <div className="flex items-center gap-2.5 mb-1">
                      <Icon className="w-4 h-4 text-[#F26522]" />
                      <h4 className="font-heading text-xs font-bold text-white">{conn.title}</h4>
                    </div>
                    <p className="font-body text-[11px] text-[#AEB6C2]">{conn.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fórmula Visual de Integração */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto mb-6">
          <div className="font-heading text-sm sm:text-lg font-bold text-white flex flex-wrap items-center justify-center gap-2">
            <span>IA</span>
            <span className="text-[#F26522]">+</span>
            <span>INTEGRAÇÕES</span>
            <span className="text-[#F26522]">+</span>
            <span>PROCESSO COMERCIAL</span>
            <span className="text-[#F26522]">=</span>
            <span className="text-[#F26522]">PARTE ATIVA DA OPERAÇÃO</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-[#AEB6C2] text-center">
          <AlertCircle className="w-4 h-4 text-[#F26522] shrink-0" />
          <span>Disponibilidade e escopo das integrações dependem dos sistemas utilizados e da configuração contratada.</span>
        </div>
      </Container>
    </Section>
  );
};
