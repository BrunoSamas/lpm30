"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, LineChart, Cpu, RefreshCw, TrendingUp, BarChart3, Target, PieChart, Layers } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const TrafficMetrics: React.FC = () => {
  const dataCycle = [
    { title: "Coleta", icon: Database },
    { title: "Análise", icon: LineChart },
    { title: "Aprendizado", icon: Cpu },
    { title: "Otimização", icon: RefreshCw },
    { title: "Escala", icon: TrendingUp },
  ];

  const metricsGrid = [
    {
      title: "CPL",
      sub: "Custo por Lead",
      desc: "Monitoramos o valor exato gasto para gerar cada oportunidade qualificada no funil.",
      icon: Target,
    },
    {
      title: "Taxa de Conversão",
      sub: "Percentual de Avanço",
      desc: "Acompanhamos qual porcentagem de prospects avança de cada etapa até o fechamento.",
      icon: BarChart3,
    },
    {
      title: "CAC",
      sub: "Custo de Aquisição de Cliente",
      desc: "Calculamos exatamente quanto custa trazer cada novo cliente pagante.",
      icon: PieChart,
    },
    {
      title: "Investimento x Vendas",
      sub: "ROAS & Eficiência",
      desc: "Relação direta entre a verba investida em mídia e o retorno gerado em negócios.",
      icon: LineChart,
    },
    {
      title: "Faturamento Real",
      sub: "Atribuição Comercial",
      desc: "Resultado comercial efetivamente atribuído ao processo de anúncios quando houver dados disponíveis.",
      icon: Layers,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        {/* Transição Editorial: Decisões Baseadas em Dados */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight"
          >
            Quanto mais dados coletamos, <br />
            <span className="text-[#F26522]">melhores e mais precisas ficam as decisões.</span>
          </motion.h2>

          <p className="font-body text-lg md:text-xl text-[#AEB6C2] max-w-2xl mx-auto leading-relaxed">
            Campanhas eficientes não nascem prontas. Elas são medidas, ajustadas e otimizadas continuamente.
          </p>

          {/* Ciclo de Otimização Conectado */}
          <div className="pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
              {dataCycle.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3 rounded-xl bg-[#151B24] border border-white/10 flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 text-[#F26522] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-xs font-bold text-white">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Parte 2: Não Entregamos Apenas Cliques */}
        <SectionHeading
          eyebrow="ACOMPANHAMENTO & PERFORMANCE"
          title="NÃO ENTREGAMOS APENAS CLIQUES."
          description="Construímos e acompanhamos o funil real da sua empresa todos os meses através destas métricas fundamentais:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metricsGrid.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card variant="default" className="h-full p-6 bg-[#151B24] hover:border-[#F26522]/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-4 text-[#F26522]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                    {metric.sub}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {metric.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#AEB6C2] leading-relaxed">
                    {metric.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151B24] via-[#19212C] to-[#151B24] border border-[#F26522]/30 text-center max-w-3xl mx-auto">
          <p className="font-body text-base md:text-lg font-bold text-white">
            Anunciar é só o começo. <span className="text-[#F26522]">Medir, aprender e melhorar continuamente</span> é o que faz uma operação crescer.
          </p>
        </div>
      </Container>
    </Section>
  );
};
