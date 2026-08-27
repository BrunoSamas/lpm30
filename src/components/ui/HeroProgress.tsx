"use client";

import React from "react";
import { HeroSlide } from "@/lib/data";

interface HeroProgressProps {
  slides: HeroSlide[];
  activeIndex: number;
  progress: number; // 0 to 100
  onSelectSlide: (index: number) => void;
  className?: string;
}

export const HeroProgress: React.FC<HeroProgressProps> = ({
  slides,
  activeIndex,
  progress,
  onSelectSlide,
  className = "",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-4xl mx-auto px-4 ${className}`}>
      {/* Lista de Indicadores dos 6 Slides */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              className="group flex items-center gap-1.5 py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] rounded-md transition-all cursor-pointer"
              aria-label={`Ir para slide ${slide.number}: ${slide.eyebrow}`}
            >
              {/* Número do Slide */}
              <span
                className={`font-mono text-xs font-bold transition-colors ${
                  isActive ? "text-[#F26522]" : "text-white/40 group-hover:text-white/80"
                }`}
              >
                {slide.number}
              </span>

              {/* Barra de Progresso */}
              <div className="relative w-8 sm:w-12 md:w-16 h-1 rounded-full bg-white/15 overflow-hidden transition-all group-hover:bg-white/25">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-[#F26522] rounded-full transition-all duration-75 ease-linear"
                  style={{
                    width: isActive ? `${progress}%` : "0%",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Contador Discreto 0X / 06 */}
      <div
        className="font-mono text-xs font-semibold text-[#AEB6C2]/60 tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10 select-none"
        aria-hidden="true"
      >
        <span className="text-white font-bold">{slides[activeIndex]?.number}</span>
        <span className="opacity-40"> / </span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};
