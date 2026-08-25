"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";

export const FinalManifesto: React.FC = () => {
  return (
    <Section variant="deep" className="border-t border-white/5 py-24 text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Logo M30 Centralizada */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/m30-logo.png"
              alt="M30 Marketing Logo"
              width={160}
              height={55}
              className="h-12 w-auto object-contain"
            />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            O melhor marketing não é aquele que você aprende a fazer. <br />
            <span className="text-[#F26522]">
              É aquele que funciona sem depender de você.
            </span>
          </h2>

          <p className="font-body text-lg md:text-xl text-[#AEB6C2] leading-relaxed max-w-2xl mx-auto">
            Você não abriu uma empresa para virar Social Media, Videomaker, Gestor de Tráfego ou Especialista em IA.{" "}
            <strong className="text-white font-semibold">
              Você abriu para fazê-la crescer.
            </strong>
          </p>

          <div className="pt-6">
            <div className="inline-block p-6 rounded-2xl bg-[#151B24] border border-[#F26522]/30 shadow-xl">
              <span className="font-heading text-2xl sm:text-3xl font-black text-white tracking-wider block">
                VENDER É CRESCER. <br className="sm:hidden" />
                <span className="text-[#F26522]"> E CRESCER É SER M30.</span>
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
