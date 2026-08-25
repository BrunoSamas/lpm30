import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "tech";
  as?: React.ElementType;
}

/**
 * Componente Card do Design System M30.
 * Possui fundo #151B24, borda sutil de 1px e cantos arredondados de 16px.
 * Variante 'tech' adiciona destaque sutil de borda laranja M30.
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  as: Component = "div",
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(
        variant === "tech" ? "card-tech" : "card",
        "p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
