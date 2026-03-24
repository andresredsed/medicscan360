"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl bg-white p-6 shadow-md ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
