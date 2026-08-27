"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Video, Share2, Bot, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { ECOSYSTEM_PILLARS } from "@/lib/data";

export const M30Ecosystem: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "01": <Compass className="w-6 h-6 text-[#F26522]" />,
    "02": <Video className="w-6 h-6 text-[#F26522]" />,
    "03": <Share2 className="w-6 h-6 text-[#F26522]" />,
    "04": <Bot className="w-6 h-6 text-[#F26522]" />,
    "05": <MapPin className="w-6 h-6 text-[#F26522]" />,
  };

  return (
    <Section id="ecossistema" variant="deep" className="border-t border-white/5 relative overflow-hidden">
      <div id="solucoes" className="scroll-mt-24" />
      {/* Background glow sutil */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(242,101,34,0.10)_0%,transparent_70%)] pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow="UMA ESTRUTURA. VÁRIAS FRENTES."
          title="Sim. Queremos fazer você vender mais."
          description="Esse é o segundo ganho. O primeiro é fazer sua empresa ter marketing profissional sem você precisar operacionalizar."
        />

        {/* Módulos do Ecossistema Conectados */}
        <div className="relative">
          {/* Linha Conectora em Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F26522]/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {ECOSYSTEM_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Link
                  href={pillar.href}
                  className="group block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] rounded-2xl"
                  aria-label={`Ver detalhes da solução ${pillar.name}`}
                >
                  <Card
                    variant="tech"
                    className="w-full h-full flex flex-col justify-between p-6 bg-[#151B24]/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F26522] hover:bg-[#19212C] hover:shadow-[0_12px_40px_rgba(242,101,34,0.08)] cursor-pointer"
                  >
                    <div>
                      {/* Número e Badge + Ícone indicador de clique */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-heading text-2xl font-black text-[#F26522]">
                          {pillar.number}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-[#F26522]">
                            {pillar.badge}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:text-[#F26522] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Ícone e Categoria */}
                      <div className="w-12 h-12 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                        {iconMap[pillar.number]}
                      </div>

                      <span className="text-xs font-bold text-[#AEB6C2] uppercase tracking-wider block mb-1">
                        {pillar.category}
                      </span>

                      <h3 className="font-heading text-lg font-extrabold text-white mb-3 leading-snug group-hover:text-[#F26522] transition-colors">
                        {pillar.name}
                      </h3>

                      <p className="font-body text-xs md:text-sm text-[#AEB6C2] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#F26522] font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Mapeado & Executado</span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
