import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { Container } from "@/components/ui";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1117] border-t border-white/8 py-12 md:py-16 text-[#AEB6C2]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Coluna 1: Logo e Pitch */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <Image
                src="/logos/m30-logo.png"
                alt="M30 Marketing Logo"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm text-[#AEB6C2] max-w-sm leading-relaxed">
              Marketing profissional sem depender do seu tempo. Estrutura, tecnologia e alta performance comercial para sua empresa crescer.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#AEB6C2] hover:text-[#F26522] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes & Contato */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp M30 Marketing"
                className="w-10 h-10 rounded-xl bg-[#151B24] border border-white/10 hover:border-[#F26522] text-[#AEB6C2] hover:text-[#F26522] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram M30 Marketing"
                className="w-10 h-10 rounded-xl bg-[#151B24] border border-white/10 hover:border-[#F26522] text-[#AEB6C2] hover:text-[#F26522] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior e Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} M30 Marketing. Todos os direitos reservados.</p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[#AEB6C2] hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F26522]" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
