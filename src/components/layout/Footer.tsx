import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { BUSINESS, SOCIAL, NAV_LINKS } from "@/lib/constants";

// TikTok icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.98a8.21 8.21 0 0 0 4.76 1.52V7.05a4.84 4.84 0 0 1-1-.36z" />
    </svg>
  );
}

const socialLinks = [
  { href: SOCIAL.instagram, icon: Instagram, label: "Instagram" },
  { href: SOCIAL.facebook, icon: Facebook, label: "Facebook" },
  { href: SOCIAL.tiktok, icon: TikTokIcon, label: "TikTok" },
  { href: SOCIAL.whatsapp, icon: MessageCircle, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo + description */}
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Centro de diagnóstico por imágenes de alta calidad en Chimbote.
              Tecnología avanzada y calidad humana para tu salud.
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{BUSINESS.address}</li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>{BUSINESS.schedule}</li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">
              Síguenos
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-4 py-6 text-center text-xs text-white/50 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} {BUSINESS.fullName}. Todos los
            derechos reservados.
          </p>
          <p className="max-w-xl">
            Empresa debidamente registrada ante SUNAT, SUSALUD y el Ministerio
            de Salud del Perú (MINSA). Autorizada para operar como
            establecimiento de salud categorizado.
          </p>
        </div>
        <div className="container-custom flex justify-center gap-4 pb-6 text-xs text-white/40">
          <a href="#" className="transition-colors hover:text-white/60">
            Política de Privacidad
          </a>
          <span>|</span>
          <a href="#" className="transition-colors hover:text-white/60">
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  );
}
