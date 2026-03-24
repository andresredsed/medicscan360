"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <a href="#inicio" className={`flex items-center ${className}`}>
      <Image
        src={isWhite ? "/images/logo-full.png" : "/images/logo-full.png"}
        alt="Medic Scan 360 — Imágenes Avanzadas"
        width={220}
        height={60}
        priority
        className={isWhite ? "brightness-0 invert" : ""}
        style={{ height: "auto", width: "auto", maxHeight: "48px" }}
      />
    </a>
  );
}
