"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown } from "lucide-react";
import { Container, Button, Eyebrow, HeroProgress, CarouselControls } from "@/components/ui";
import { HERO_SLIDES, HeroSlide } from "@/lib/data";

export const HeroSolutionsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Refs para controle de Swipe Mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const currentSlide: HeroSlide = HERO_SLIDES[activeIndex];

  // Detectar preferencia de movimento reduzido
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Detectar visibilidade da aba (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Função para navegar para um slide específico e reiniciar progresso
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  // Avançar / Recuar Slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  // Timer do Autoplay e preenchimento de progresso (5000ms = 5s)
  useEffect(() => {
    if (isHovered || !isTabVisible) return;

    const intervalTime = 50; // Atualização a cada 50ms
    const step = (intervalTime / 5000) * 100; // 1% a cada 50ms (100% em 5000ms)

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isHovered, isTabVisible, activeIndex]);

  // Handlers para Swipe Horizontal em telas de toque
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Variações de fundo (glow suave por slide)
  const glowVariants: Record<HeroSlide["glowStyle"], string> = {
    m30: "bg-[radial-gradient(circle_at_50%_40%,rgba(242,101,34,0.18)_0%,transparent_70%)]",
    assessoria: "bg-[radial-gradient(circle_at_25%_45%,rgba(242,101,34,0.16)_0%,transparent_65%)]",
    videos: "bg-[radial-gradient(circle_at_50%_30%,rgba(242,101,34,0.17)_0%,transparent_65%)]",
    trafego: "bg-[radial-gradient(circle_at_75%_40%,rgba(242,101,34,0.15)_0%,transparent_65%)]",
    beeia: "bg-[radial-gradient(circle_at_50%_50%,rgba(242,101,34,0.16)_0%,transparent_70%)]",
    consultoria: "bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(242,101,34,0.15)_0%,transparent_75%)]",
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-28 pb-12 md:py-24 overflow-hidden bg-[#11161E] selection:bg-[#F26522] selection:text-white select-none sm:select-auto"
      aria-label="Carrossel de Posicionamento M30"
    >
      {/* Background Gráfico Dinâmico */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Tecnológico de Fundo */}
        <div className="absolute inset-0 tech-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Dynamic Glow Transicionado por Slide */}
        <motion.div
          key={currentSlide.glowStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] blur-3xl pointer-events-none ${
            glowVariants[currentSlide.glowStyle]
          }`}
        />

        {/* Linhas Decorativas de Alta Tecnologia */}
        <div className="absolute top-1/4 left-10 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#F26522]/30 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 right-10 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#F26522]/30 to-transparent hidden lg:block" />
      </div>

      {/* Container Principal de Conteúdo */}
      <Container className="relative z-10 my-auto w-full">
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          {/* Controles Laterais Desktop */}
          <CarouselControls
            onPrev={prevSlide}
            onNext={nextSlide}
            className="absolute -left-12 -right-12 xl:-left-20 xl:-right-20 top-1/2 -translate-y-1/2 z-20"
          />

          {/* Wrapper Animado do Slide Atual */}
          <div className="w-full flex flex-col items-center text-center">
            {/* Tag / Indicação de Solução Superior */}
            <div className="mb-6 h-8 flex items-center justify-center">
              <motion.div
                key={`tag-${currentSlide.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Eyebrow className="px-4 py-1.5 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 text-xs md:text-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
                  {currentSlide.tag}
                </Eyebrow>
              </motion.div>
            </div>

            {/* Container Principal de Texto com Altura Mínima Estável */}
            <div
              className="w-full max-w-4xl flex flex-col items-center justify-center min-h-[260px] sm:min-h-[240px] md:min-h-[270px] lg:min-h-[290px]"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : -15,
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0.1 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Eyebrow de Categoria / Pilar */}
                  <span className="text-xs md:text-sm font-mono text-[#AEB6C2]/80 font-bold uppercase tracking-widest mb-3 block">
                    {currentSlide.eyebrow}
                  </span>

                  {/* Headline e Destaque em Laranja */}
                  <h1 className="font-heading font-extrabold tracking-tight text-white leading-[1.02] text-[34px] sm:text-[46px] md:text-[58px] lg:text-[72px] xl:text-[80px] max-w-4xl">
                    <span className="block">{currentSlide.headline}</span>
                    <span className="text-[#F26522] block mt-1 md:mt-2">
                      {currentSlide.highlight}
                    </span>
                  </h1>

                  {/* Subheadline Opcional */}
                  {currentSlide.subheadline && (
                    <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-[#AEB6C2] max-w-3xl leading-relaxed mt-5 md:mt-6">
                      {currentSlide.subheadline}
                    </p>
                  )}

                  {/* Botões CTA do Slide */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-8 md:mt-10">
                    {/* CTA Primário */}
                    {currentSlide.primaryCta.href.startsWith("/") ? (
                      <Link href={currentSlide.primaryCta.href} className="w-full sm:w-auto">
                        <Button
                          variant="primary"
                          size="lg"
                          fullWidth
                          iconRight={<ArrowRight className="w-5 h-5" />}
                        >
                          {currentSlide.primaryCta.text}
                        </Button>
                      </Link>
                    ) : (
                      <a href={currentSlide.primaryCta.href} className="w-full sm:w-auto">
                        <Button
                          variant="primary"
                          size="lg"
                          fullWidth
                          iconRight={<ArrowRight className="w-5 h-5" />}
                        >
                          {currentSlide.primaryCta.text}
                        </Button>
                      </a>
                    )}

                    {/* CTA Secundário (Apenas no Slide Institucional M30) */}
                    {currentSlide.secondaryCta && (
                      <a href={currentSlide.secondaryCta.href} className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" fullWidth>
                          {currentSlide.secondaryCta.text}
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Microcopy Discreto (Apenas no Slide Institucional M30) */}
                  {currentSlide.microcopy && (
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#AEB6C2] mt-6">
                      <ShieldCheck className="w-4 h-4 text-[#F26522]" />
                      <span>{currentSlide.microcopy}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>

      {/* Progresso Visual e Indicadores no Rodapé do Hero */}
      <div className="relative z-10 w-full pt-6">
        <HeroProgress
          slides={HERO_SLIDES}
          activeIndex={activeIndex}
          progress={progress}
          onSelectSlide={goToSlide}
        />
      </div>

      {/* Indicador de Scroll Sutil */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <a href="#o-problema" aria-label="Rolar para a primeira seção">
          <ChevronDown className="w-5 h-5 text-[#F26522] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
