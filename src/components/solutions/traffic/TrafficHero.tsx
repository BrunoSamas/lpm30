"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Eye, MousePointerClick, Users, MessageSquare, DollarSign, ChevronRight } from "lucide-react";
import { Container, Button, Eyebrow } from "@/components/ui";
import { WHATSAPP_URL } from "@/lib/data";

export const TrafficHero: React.FC = () => {
  const funnelNodes = [
    { label: "ATENÇÃO", icon: Eye, color: "border-white/10 text-white" },
    { label: "VISITAS", icon: MousePointerClick, color: "border-white/10 text-white" },
    { label: "RELACIONAMENTO", icon: Users, color: "border-white/10 text-white" },
    { label: "CONVERSAS", icon: MessageSquare, color: "border-white/10 text-white" },
    { label: "VENDAS", icon: DollarSign, color: "border-[#F26522] bg-[#F26522]/20 text-[#F26522]" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#11161E]">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.15)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#AEB6C2] mb-6">
          <Link href="/" className="hover:text-white transition-colors">M30</Link>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span>Soluções</span>
          <ChevronRight className="w-3 h-3 text-[#F26522]" />
          <span className="text-white font-semibold">Tráfego Pago</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda: Texto & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>
                <Sparkles className="w-4 h-4 text-[#F26522]" />
                ESTRATÉGIA DE AQUISIÇÃO
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            >
              TRÁFEGO PAGO: <br />
              <span className="text-[#F26522]">DISTRIBUIÇÃO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xl font-bold text-white leading-snug"
            >
              “Não basta criar conteúdo. <br className="hidden sm:inline" />
              Ele precisa ser distribuído para as pessoas certas.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-base md:text-lg text-[#AEB6C2] leading-relaxed"
            >
              Todo conteúdo começa disputando uma única coisa:{" "}
              <strong className="text-[#F26522]">ATENÇÃO</strong>. O tráfego pago coloca sua empresa na frente de mais pessoas e cria o volume necessário para alimentar um processo previsível de aquisição de clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" fullWidth iconRight={<ArrowRight className="w-5 h-5" />}>
                  Quero atrair mais clientes
                </Button>
              </a>
              <a href="#funil" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth>
                  Entender como funciona
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 text-xs md:text-sm text-[#AEB6C2] pt-1"
            >
              <ShieldCheck className="w-4 h-4 text-[#F26522] shrink-0" />
              <span>Não pagamos apenas por visualizações. Construímos um caminho até a venda.</span>
            </motion.div>
          </div>

          {/* Coluna Direita: Composição Gráfica do Caminho de Aquisição */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#151B24] via-[#19212C] to-[#0D1117] border border-[#F26522]/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(242,101,34,0.2)_0%,transparent_70%)] pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-[#F26522] block mb-6">
                CAMINHO DA CONVERSÃO
              </span>

              <div className="space-y-3 relative">
                {funnelNodes.map((node, index) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="relative">
                      <div
                        className={`flex items-center justify-between p-4 rounded-xl border ${node.color} bg-[#11161E]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#F26522]/60`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#F26522]/15 flex items-center justify-center text-[#F26522]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-heading text-sm font-bold tracking-wider">
                            {node.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#AEB6C2]">ETAPA 0{index + 1}</span>
                      </div>
                      {index < funnelNodes.length - 1 && (
                        <div className="h-2 w-[2px] bg-[#F26522]/30 mx-auto my-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-[#AEB6C2]">
                  Tráfego pago conecta atenção qualificada a resultados comerciais.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
