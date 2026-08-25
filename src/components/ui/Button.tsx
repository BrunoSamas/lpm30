import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * Componente de Botão do Design System M30 Marketing.
 * Disponível nas variantes 'primary' (laranja M30 com hover e leve elevação)
 * e 'secondary' (transparente com borda sutil).
 * Suporta ícones à esquerda/direita e modo fullWidth.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      fullWidth = false,
      iconLeft,
      iconRight,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      variant === "primary" ? "button-primary" : "button-secondary";

    const sizeClasses = {
      sm: "h-10 px-5 text-sm rounded-lg",
      default: "h-[52px] px-7 text-base rounded-[12px]",
      lg: "h-14 px-8 text-lg rounded-[12px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseClasses,
          sizeClasses[size],
          fullWidth && "w-full flex justify-center",
          disabled && "opacity-50 cursor-not-allowed transform-none shadow-none pointer-events-none",
          className
        )}
        {...props}
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
