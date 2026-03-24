import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, MessageCircle, Phone, CheckCircle } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { BUSINESS, SOCIAL } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Button from "@/components/ui/Button";

// Generate static params for all services
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

// Dynamic metadata
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.name} en Chimbote`,
    description: `${service.shortDescription} — ${BUSINESS.fullName}, Chimbote, Áncash.`,
    openGraph: {
      title: `${service.name} | ${BUSINESS.name}`,
      description: service.shortDescription,
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  // FAQ JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-brand-blue pb-12 pt-28">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-1 text-sm text-white/60">
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href="/#servicios"
                className="transition-colors hover:text-white"
              >
                Servicios
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{service.name}</span>
            </nav>

            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              {service.shortDescription}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/60">
              <Clock className="h-4 w-4" />
              <span>Duración estimada: {service.duration}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            {/* Full description */}
            <div className="mb-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                ¿Qué es la {service.name}?
              </h2>
              <p className="text-lg leading-relaxed text-brand-gray">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-12 rounded-2xl bg-brand-gray-bg p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                Beneficios
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span className="text-brand-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation */}
            <div className="mb-12">
              <h2 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                Preparación del Paciente
              </h2>
              <ul className="space-y-3">
                {service.preparation.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mb-12 rounded-2xl bg-brand-blue p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-white">
                ¿Listo para agendar tu estudio?
              </h2>
              <p className="mt-2 text-white/80">
                Contáctanos para reservar tu cita de {service.name.toLowerCase()}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={SOCIAL.whatsappReserva}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Reservar por WhatsApp
                </Button>
                <Button
                  href={`tel:${BUSINESS.phoneRaw}`}
                  variant="outline"
                  size="lg"
                >
                  <Phone className="h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-gray-900">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-gray-200 bg-white"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-5 font-heading font-semibold text-gray-900">
                      {faq.question}
                      <ChevronRight className="h-5 w-5 shrink-0 text-brand-gray transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-5 pb-5 text-brand-gray">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
