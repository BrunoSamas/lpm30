import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes do Tailwind de forma condicional e previne conflitos de especificidade.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
