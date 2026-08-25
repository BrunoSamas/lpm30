/**
 * Utilitários para cálculos e formatações da página de Gestão de Tráfego Pago
 */

export function calculateConversions(
  impressions: number,
  conversionRate: number
): number {
  if (impressions <= 0 || conversionRate <= 0) return 0;
  return Math.round(impressions * (conversionRate / 100));
}

export function calculateEstimatedLeads(
  investment: number,
  cpl: number
): number {
  if (cpl <= 0 || investment <= 0) return 0;
  return Math.round(investment / cpl);
}

export function calculateEstimatedCustomers(
  leads: number,
  closeRate: number
): number {
  if (leads <= 0 || closeRate <= 0) return 0;
  return Math.round(leads * (closeRate / 100));
}

export function formatBRL(val: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(val);
}

export function formatNumber(val: number): string {
  return new Intl.NumberFormat("pt-BR").format(val);
}
