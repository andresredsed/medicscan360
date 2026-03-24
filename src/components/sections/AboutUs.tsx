"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  "Confianza",
  "Precisión",
  "Innovación",
  "Calidez Humana",
  "Ética Profesional",
  "Compromiso con la Comunidad",
];

export default function AboutUs() {
  return (
    <section id="sobre-nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SectionTitle
              title="Sobre Nosotros"
              className="text-left md:text-left"
            />

            <div className="space-y-6 text-brand-gray">
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-gray-900">
                  Nuestra Misión
                </h3>
                <p>
                  Brindar servicios de diagnósticos por imágenes de alta calidad
                  mediante tecnología avanzada y un equipo capacitado.
                  Compromiso con mejorar la salud y bienestar de pacientes en
                  Chimbote y toda la región de Áncash, con un trato ético,
                  seguro y centrado en sus necesidades.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-gray-900">
                  Nuestra Visión
                </h3>
                <p>
                  Ser el centro de diagnóstico por imágenes líder en Áncash,
                  reconocido por el uso de tecnología avanzada, la precisión
                  diagnóstica y calidad humana, con proyección a expandir
                  servicios a toda la región.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-gray-900">
                  Nuestros Valores
                </h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-blue/5">
              {/* Placeholder for real photo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10">
                  <svg
                    className="h-10 w-10 text-brand-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-brand-gray">
                  Foto del centro de diagnóstico
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
