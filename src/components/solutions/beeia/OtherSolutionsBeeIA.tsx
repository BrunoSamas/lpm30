"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Video, Share2, MapPin, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";

export const OtherSolutionsBeeIA: React.FC = () => {
  const otherSolutionsList = [
    {
      title: "Assessoria de Marketing",
      category: "Estratégia & Direção",
      desc: "Orientação estratégica clara para sua equipe executar com eficiência.",
      href: "/solucoes/assessoria",
      icon: Compass,
    },
    {
      title: "Vídeos Mobile / PRO",
      category: "Produção de Conteúdo",
      desc: "Produção de alto impacto para posicionar sua marca e gerar autoridade.",
      href: "/solucoes/videos",
      icon: Video,
    },
    {
      title: "Gestão de Tráfego Pago",
      category: "Atração de Clientes",
      desc: "Campanhas estratégicas e otimização contínua para atrair clientes qualificados.",
      href: "/solucoes/trafego-pago",
      icon: Share2,
    },
    {
      title: "Consultoria In Loco",
      category: "Acompanhamento & Escala",
      desc: "Diagnóstico e otimização direta de processos comerciais presencialmente.",
      href: "/solucoes/consultoria-in-loco",
      icon: MapPin,
    },
  ];

  return (
    <Section variant="deep" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="ECOSSISTEMA M30"
          title="A BeeIA é uma parte do ecossistema M30."
          description="Conheça nossas outras soluções para impulsionar a comunicação, produção de conteúdo e tráfego:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSolutionsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11161E] rounded-2xl"
                >
                  <Card
                    variant="default"
                    className="h-full p-6 bg-[#151B24] transition-all duration-300 hover:-translate-y-1 hover:border-[#F26522] hover:bg-[#19212C] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522] group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#F26522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <span className="text-[11px] font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>

                      <h3 className="font-heading text-base font-extrabold text-white mb-2 group-hover:text-[#F26522] transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-body text-xs text-[#AEB6C2] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
