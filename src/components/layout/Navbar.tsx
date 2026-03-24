"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SOCIAL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-2 shadow-lg backdrop-blur-sm"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-brand-gray transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={SOCIAL.whatsappReserva}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Reservar Cita
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-brand-blue" />
          ) : (
            <Menu className="h-6 w-6 text-brand-blue" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-lg px-4 py-3 font-heading text-sm font-medium text-brand-gray transition-colors hover:bg-brand-gray-bg hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2">
              <Button
                href={SOCIAL.whatsappReserva}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full"
              >
                Reservar Cita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
