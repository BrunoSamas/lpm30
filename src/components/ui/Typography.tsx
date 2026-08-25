import React from "react";
import { cn } from "@/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

/**
 * Eyebrow Component
 * Pequena tag superior em letras maiúsculas e cor laranja M30.
 */
export const Eyebrow: React.FC<TypographyProps> = ({
  children,
  as: Component = "span",
  className,
  ...props
}) => {
  return (
    <Component className={cn("eyebrow", className)} {...props}>
      {children}
    </Component>
  );
};

/**
 * DisplayTitle (H1)
 * Título principal de grande impacto visual para a seção Hero e destaques.
 */
export const DisplayTitle: React.FC<TypographyProps> = ({
  children,
  as: Component = "h1",
  className,
  ...props
}) => {
  return (
    <Component className={cn("display-title", className)} {...props}>
      {children}
    </Component>
  );
};

/**
 * SectionTitle (H2)
 * Título padronizado para as seções principais da página.
 */
export const SectionTitle: React.FC<TypographyProps> = ({
  children,
  as: Component = "h2",
  className,
  ...props
}) => {
  return (
    <Component className={cn("section-title", className)} {...props}>
      {children}
    </Component>
  );
};

/**
 * Heading3 (H3)
 * Título de subseção ou cards (24px a 32px).
 */
export const Heading3: React.FC<TypographyProps> = ({
  children,
  as: Component = "h3",
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "font-heading text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "body" | "large" | "small" | "muted";
  as?: React.ElementType;
}

/**
 * Text Component
 * Textos de corpo padronizados:
 * - 'large': 18px a 20px
 * - 'body': 16px a 18px
 * - 'small': 13px a 14px
 * - 'muted': cor secundária #AEB6C2
 */
export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  as: Component = "p",
  className,
  ...props
}) => {
  const variantClasses = {
    large: "text-lg md:text-xl text-foreground-muted leading-relaxed",
    body: "text-base md:text-lg text-foreground-muted leading-relaxed",
    small: "text-xs md:text-sm text-foreground-muted leading-normal",
    muted: "text-muted",
  };

  return (
    <Component
      className={cn("font-body", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
