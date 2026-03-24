"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { SOCIAL, BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-blue pt-20"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark" />

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5" />
      <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-white/5" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Schedule badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
          >
            <Clock className="h-4 w-4" />
            <span>Abiertos {BUSINESS.schedule}</span>
          </motion.div>

          <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Diagnóstico por Imágenes{" "}
            <span className="text-blue-200">de Alta Precisión</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Tecnología avanzada y calidad humana para tu salud en Chimbote y
            toda la región de Áncash
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href={SOCIAL.whatsappReserva}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              Reservar Cita
            </Button>
            <Button href="#servicios" variant="outline" size="lg">
              Conocer Servicios
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "4", label: "Servicios especializados" },
            { value: "360°", label: "Cobertura diagnóstica" },
            { value: "24-48h", label: "Entrega de resultados" },
            { value: "100%", label: "Tecnología avanzada" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/10 px-4 py-4 backdrop-blur-sm"
            >
              <div className="font-heading text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
