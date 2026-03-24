"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Users,
  Zap,
  Heart,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Cpu,
    title: "Tecnología de Vanguardia",
    description:
      "Equipos de última generación para resultados de máxima precisión",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description:
      "Médicos especialistas y técnicos altamente capacitados",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description:
      "Entrega ágil de resultados sin sacrificar calidad",
  },
  {
    icon: Heart,
    title: "Atención Humana",
    description:
      "Trato cercano, empático y centrado en el bienestar del paciente",
  },
  {
    icon: MapPin,
    title: "Ubicación Accesible",
    description:
      "En el corazón de Chimbote, fácil acceso desde toda la región de Áncash",
  },
  {
    icon: ShieldCheck,
    title: "Compromiso Ético",
    description:
      "Transparencia, integridad y responsabilidad en cada procedimiento",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-blue">
      <div className="container-custom">
        <SectionTitle
          title="¿Por Qué Elegir Medic Scan 360?"
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <feature.icon className="mb-4 h-8 w-8 text-blue-200" />
              <h3 className="font-heading text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
