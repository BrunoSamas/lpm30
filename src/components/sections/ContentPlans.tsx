"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Video, Compass, ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Card, Button } from "@/components/ui";
import { CONTENT_SERVICES, WHATSAPP_URL } from "@/lib/data";

export const ContentPlans: React.FC = () => {
  const { assessoria, videosMobile, videosPro } = CONTENT_SERVICES;

  return (
    <Section id="servicos" variant="dark" className="border-t border-white/5 relative">
      <Container>
        <SectionHeading
          eyebrow="SERVIÇOS DE ORIENTAÇÃO E CONTEÚDO"
          title="Escolha o que você não quer mais fazer."
          description="Modelos flexíveis para destravar o posicionamento da sua empresa no digital com qualidade profissional:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Assessoria de Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card variant="default" className="h-full p-8 flex flex-col justify-between bg-[#151B24]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-6">
                  <Compass className="w-5 h-5 text-[#F26522]" />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {assessoria.title}
                </h3>
                <p className="font-body text-xs text-[#AEB6C2] mb-6">
                  {assessoria.description}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-extrabold text-white">
                      {assessoria.price}
                    </span>
                    <span className="text-sm text-[#AEB6C2]">{assessoria.period}</span>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {assessoria.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#AEB6C2]">
                      <Check className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="secondary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                  {assessoria.ctaText}
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Card 2: Vídeos Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card variant="default" className="h-full p-8 flex flex-col justify-between bg-[#151B24]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center mb-6">
                  <Video className="w-5 h-5 text-[#F26522]" />
                </div>

                <span className="text-xs font-semibold text-[#F26522] uppercase tracking-wider block mb-1">
                  {videosMobile.tag}
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {videosMobile.title}
                </h3>
                <p className="font-body text-xs text-[#AEB6C2] mb-6">
                  {videosMobile.description}
                </p>

                <div className="space-y-3 mb-8 p-4 rounded-xl bg-[#11161E] border border-white/5">
                  {videosMobile.plans.map((plan, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b last:border-0 border-white/5">
                      <span className="font-body text-xs font-semibold text-white">{plan.name}</span>
                      <span className="font-heading text-base font-extrabold text-[#F26522]">{plan.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="secondary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                  {videosMobile.ctaText}
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Card 3: Vídeos PRO (Destaque Especial) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card
              variant="tech"
              className="h-full p-8 flex flex-col justify-between relative bg-gradient-to-b from-[#19212C] to-[#151B24] border-[#F26522]"
            >
              {/* Badge de Destaque */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#F26522] text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                MAIS RECOMENDADO PARA AUTORIDADE
              </div>

              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F26522] text-white flex items-center justify-center mb-6 mt-2 shadow-[0_4px_16px_rgba(242,101,34,0.3)]">
                  <Video className="w-5 h-5" />
                </div>

                <span className="text-xs font-bold text-[#F26522] uppercase tracking-wider block mb-1">
                  {videosPro.tag}
                </span>

                <h3 className="font-heading text-xl font-extrabold text-white mb-2">
                  {videosPro.title}
                </h3>
                <p className="font-body text-xs text-[#AEB6C2] mb-6">
                  {videosPro.description}
                </p>

                <div className="space-y-3 mb-8 p-4 rounded-xl bg-[#11161E]/90 border border-[#F26522]/30">
                  {videosPro.plans.map((plan, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b last:border-0 border-white/5">
                      <span className="font-body text-xs font-semibold text-white">{plan.name}</span>
                      <span className="font-heading text-base font-extrabold text-[#F26522]">{plan.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="primary" fullWidth iconRight={<ArrowRight className="w-4 h-4" />}>
                  {videosPro.ctaText}
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
