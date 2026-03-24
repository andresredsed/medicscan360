"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  if (isWhite) {
    return (
      <a href="#inicio" className={`flex items-center gap-2 ${className}`}>
        <Image
          src="/images/logo-icon.png"
          alt="Medic Scan 360"
          width={44}
          height={44}
          className="brightness-0 invert"
          style={{ height: "40px", width: "auto" }}
        />
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            Medic Scan
          </span>
          <span className="text-[10px] font-heading font-medium tracking-[0.2em] uppercase text-white/80">
            Imágenes Avanzadas
          </span>
        </div>
      </a>
    );
  }

  return (
    <a href="#inicio" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo-full.png"
        alt="Medic Scan 360 — Imágenes Avanzadas"
        width={220}
        height={60}
        priority
        style={{ height: "auto", width: "auto", maxHeight: "48px" }}
      />
    </a>
  );
}
