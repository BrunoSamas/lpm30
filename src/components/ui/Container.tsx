import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  wide?: boolean;
  as?: React.ElementType;
}

/**
 * Componente Container padronizado do Design System M30.
 * Responsável por limitar a largura máxima e aplicar as margens laterais.
 * - Padrão: max-width 1280px (mobile: 20px, tablet: 24px, desktop: 32px)
 * - Wide: max-width 1440px
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  wide = false,
  as: Component = "div",
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(
        wide ? "container-wide" : "container",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
