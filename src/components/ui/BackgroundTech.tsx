import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundTechProps extends React.HTMLAttributes<HTMLDivElement> {
  grid?: boolean;
  radialGlow?: boolean;
  glowPosition?: "top-right" | "top-left" | "center" | "bottom-right";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Componente BackgroundTech
 * Aplica fundos tecnológicos sutis com grid geométrico discreto
 * e iluminação radial laranja M30.
 */
export const BackgroundTech: React.FC<BackgroundTechProps> = ({
  grid = true,
  radialGlow = true,
  glowPosition = "top-right",
  className,
  children,
  ...props
}) => {
  const glowPositions = {
    "top-right": "top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(242,101,34,0.12)_0%,transparent_70%)]",
    "top-left": "top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(242,101,34,0.12)_0%,transparent_70%)]",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(242,101,34,0.10)_0%,transparent_70%)]",
    "bottom-right": "bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(242,101,34,0.10)_0%,transparent_70%)]",
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)} {...props}>
      {grid && (
        <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
      )}
      {radialGlow && (
        <div
          className={cn(
            "absolute pointer-events-none blur-3xl",
            glowPositions[glowPosition]
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
