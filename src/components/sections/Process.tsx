"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Building2, ScanSearch, FileCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Agenda tu cita",
    description: "Contáctanos por WhatsApp, teléfono o email",
  },
  {
    icon: Building2,
    number: "02",
    title: "Visítanos",
    description: "Acude a nuestro centro con tu orden médica",
  },
  {
    icon: ScanSearch,
    number: "03",
    title: "Realizamos tu estudio",
    description:
      "Nuestro equipo realiza el diagnóstico con tecnología avanzada",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Recibe tus resultados",
    description: "Entregamos resultados precisos en el menor tiempo posible",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-brand-gray-bg">
      <div className="container-custom">
        <SectionTitle
          title="¿Cómo Funciona?"
          subtitle="Tu diagnóstico en 4 simples pasos"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-10 hidden h-0.5 w-[calc(100%-4rem)] bg-brand-blue/20 lg:block" />
              )}

              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue">
                <step.icon className="h-8 w-8 text-white" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-dark text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-brand-gray">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
