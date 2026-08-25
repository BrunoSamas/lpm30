"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/data";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#11161E]/85 backdrop-blur-md border-b border-white/8 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo M30 */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <Image
              src="/logos/m30-logo.png"
              alt="M30 Marketing Logo"
              width={130}
              height={44}
              priority
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#AEB6C2] hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                size="sm"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Falar com a M30
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/5 focus:outline-none"
            aria-label="Abrir menu principal"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#F26522]" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0D1117]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#AEB6C2] hover:text-[#F26522] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button variant="primary" fullWidth iconLeft={<PhoneCall className="w-4 h-4" />}>
                  Falar com a M30
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
