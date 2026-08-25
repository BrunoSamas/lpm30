import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m30marketing.com.br"),
  title: "M30 Marketing | Estratégia, Tecnologia & Alta Performance",
  description:
    "Agência de marketing digital focada em estratégias de alta performance, tecnologia e aceleração de receita comercial para negócios de alto impacto.",
  keywords: [
    "M30 Marketing",
    "Agência de Marketing Digital",
    "Alta Performance",
    "Growth Marketing",
    "Tráfego Pago",
    "Branding",
    "Estratégia Comercial",
  ],
  authors: [{ name: "M30 Marketing" }],
  openGraph: {
    title: "M30 Marketing | Estratégia, Tecnologia & Alta Performance",
    description:
      "Acelere o crescimento do seu negócio com marketing digital estratégico e focado em resultados reais.",
    url: "https://m30marketing.com.br",
    siteName: "M30 Marketing",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logos/m30-logo.png",
        width: 1200,
        height: 630,
        alt: "M30 Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M30 Marketing | Estratégia, Tecnologia & Alta Performance",
    description:
      "Acelere o crescimento do seu negócio com marketing digital estratégico e focado em resultados reais.",
    images: ["/logos/m30-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body className="antialiased selection:bg-[#F26522] selection:text-white">
        {children}
      </body>
    </html>
  );
}
