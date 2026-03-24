"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 text-center ${className}`}
    >
      <h2
        className={`font-heading text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-brand-blue"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-white/80" : "text-brand-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
