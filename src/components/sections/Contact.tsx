"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { BUSINESS, SOCIAL, MAPS_EMBED_URL } from "@/lib/constants";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: BUSINESS.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos directamente",
    href: SOCIAL.whatsapp,
  },
  {
    icon: Clock,
    label: "Horario",
    value: BUSINESS.schedule,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Contacto"
          subtitle="Estamos aquí para ayudarte. Contáctanos por el medio que prefieras."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl bg-brand-gray-bg p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                  <item.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-gray">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-gray-900 transition-colors hover:text-brand-blue"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                Escríbenos por WhatsApp
              </Button>
              <Button
                href={`mailto:${BUSINESS.email}`}
                variant="secondary"
              >
                <Mail className="h-5 w-5" />
                Envíanos un Email
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Medic Scan 360"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
