"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const BeeIAConversation: React.FC = () => {
  const messages = [
    {
      sender: "client",
      text: "Olá! Gostaria de saber mais sobre as soluções de marketing para minha empresa.",
      time: "14:32",
    },
    {
      sender: "beeia",
      text: "Com certeza! Posso te ajudar. Para indicar a opção ideal para o seu momento, posso fazer 2 perguntas rápidas?",
      time: "14:32",
      status: "ENTENDEU A NECESSIDADE",
    },
    {
      sender: "client",
      text: "Pode sim, pode perguntar.",
      time: "14:33",
    },
    {
      sender: "beeia",
      text: "Excelente! Qual é o principal desafio comercial que você quer resolver hoje?",
      time: "14:33",
      status: "COLETOU INFORMAÇÕES",
    },
    {
      sender: "client",
      text: "Recebo contatos mas demoramos a responder, e sinto que perdemos vendas fora do horário.",
      time: "14:34",
    },
    {
      sender: "beeia",
      text: "Entendido! O Agente Digital BeeIA é exatamente a solução para atendimento 24/7 e qualificação imediata. Posso direcionar seus dados para um especialista agendar uma demonstração?",
      time: "14:34",
      status: "QUALIFICOU & DEFINIU PASSO",
    },
  ];

  const statusLogs = [
    "ENTENDEU A NECESSIDADE",
    "COLETOU INFORMAÇÃO",
    "QUALIFICOU O LEAD",
    "DEFINIU PRÓXIMO PASSO",
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="DEMONSTRAÇÃO DE ATENDIMENTO"
          title="Do primeiro 'oi' até uma oportunidade qualificada."
          description="Veja como a BeeIA conduz conversas fluidas e objetivas mantendo o padrão comercial da sua empresa:"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Lado Esquerdo: Chat Interface da BeeIA */}
          <div className="lg:col-span-8">
            <Card variant="tech" className="p-0 bg-[#0D1117] border-[#F26522]/40 overflow-hidden shadow-2xl">
              {/* Top Bar da Conversa */}
              <div className="p-4 bg-[#151B24] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F26522] flex items-center justify-center text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white flex items-center gap-2">
                      BeeIA Agente Digital
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </h4>
                    <span className="text-[10px] text-[#AEB6C2]">ONLINE • ATENDIMENTO M30</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#F26522]/10 border border-[#F26522]/30 text-[#F26522]">
                  SIMULAÇÃO DE CONVERSA
                </span>
              </div>

              {/* Mensagens */}
              <div className="p-6 space-y-4 max-h-[480px] overflow-y-auto font-body text-xs md:text-sm">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`flex flex-col ${m.sender === "client" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`p-3.5 rounded-2xl max-w-[85%] space-y-1 ${
                        m.sender === "client"
                          ? "bg-[#F26522] text-white rounded-br-none"
                          : "bg-[#151B24] text-[#AEB6C2] border border-white/10 rounded-bl-none"
                      }`}
                    >
                      <p className="leading-relaxed">{m.text}</p>
                      <span className="text-[9px] opacity-70 block text-right">{m.time}</span>
                    </div>

                    {m.status && (
                      <span className="text-[9px] font-bold text-[#F26522] mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {m.status}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Lado Direito: Status Interno do Processamento */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block">
              STATUS DE PROCESSAMENTO INTERNO
            </span>
            <div className="space-y-3">
              {statusLogs.map((log) => (
                <Card key={log} variant="default" className="p-4 bg-[#151B24] border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#F26522]" />
                    <span className="font-heading text-xs font-bold text-white">{log}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </Card>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#151B24] border border-white/10 text-xs text-[#AEB6C2] text-center">
              A BeeIA segue o tom de voz e os padrões do seu negócio em cada interação.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
