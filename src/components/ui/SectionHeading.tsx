import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, SectionTitle, Text } from "./Typography";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-10 md:mb-14 max-w-3xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <SectionTitle>{title}</SectionTitle>
      {description && (
        <Text variant="large" className="mt-1">
          {description}
        </Text>
      )}
    </div>
  );
};
