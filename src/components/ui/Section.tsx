import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "dark" | "deep" | "soft";
  id?: string;
  as?: React.ElementType;
}

/**
 * Componente Section do Design System M30.
 * Garante o espaçamento vertical padronizado:
 * - Desktop: 120px
 * - Tablet: 96px
 * - Mobile: 72px
 * E alternância discreta de backgrounds entre as seções.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  variant = "dark",
  id,
  as: Component = "section",
  className,
  ...props
}) => {
  const variantClasses = {
    dark: "section-dark",
    deep: "section-deep",
    soft: "section-soft",
  };

  return (
    <Component
      id={id}
      className={cn("section", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
