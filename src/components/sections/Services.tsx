"use client";

import Link from "next/link";
import {
  Scan,
  Layers,
  HeartPulse,
  Bone,
  ArrowRight,
} from "lucide-react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/services-data";
import { SOCIAL } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Scan,
  Layers,
  HeartPulse,
  Bone,
};

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-brand-gray-bg">
      <div className="container-custom">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Contamos con equipos de última generación para brindarte resultados precisos y confiables"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Scan;
            return (
              <Card key={service.slug} className="flex flex-col">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="h-7 w-7 text-brand-blue" />
                </div>

                <h3 className="font-heading text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-2 flex-1 text-brand-gray">
                  {service.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    Más información
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Button
                    href={SOCIAL.whatsappReserva}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="sm"
                  >
                    Reservar
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
