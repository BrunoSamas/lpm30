import React from "react";
import { cn } from "@/lib/utils";

export interface IconBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "subtle" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({
  children,
  variant = "subtle",
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "w-9 h-9 text-base rounded-lg",
    md: "w-11 h-11 text-lg rounded-xl",
    lg: "w-14 h-14 text-xl rounded-2xl",
  };

  const variantClasses = {
    primary: "bg-[#F26522] text-white shadow-[0_4px_16px_rgba(242,101,34,0.3)]",
    subtle: "bg-[#F26522]/10 border border-[#F26522]/25 text-[#F26522]",
    outline: "bg-[#151B24] border border-white/10 text-white hover:border-[#F26522]/40",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 transition-colors duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
