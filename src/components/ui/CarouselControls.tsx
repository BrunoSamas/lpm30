"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrev,
  onNext,
  className = "",
}) => {
  return (
    <div className={`hidden md:flex items-center justify-between pointer-events-none ${className}`}>
      <button
        onClick={onPrev}
        aria-label="Slide anterior"
        className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#F26522]/20 hover:border-[#F26522]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Próximo slide"
        className="pointer-events-auto p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#F26522]/20 hover:border-[#F26522]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
