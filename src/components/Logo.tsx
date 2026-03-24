"use client";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const blueColor = variant === "color" ? "#315991" : "#FFFFFF";
  const grayColor = variant === "color" ? "#5a6571" : "rgba(255,255,255,0.8)";

  return (
    <a href="#inicio" className={`flex items-center gap-2 ${className}`}>
      {/* 360 Symbol with medical cross */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Circle representing 360° */}
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke={blueColor}
          strokeWidth="2.5"
          fill="none"
        />
        {/* Opening gap for 360° feel */}
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke={variant === "color" ? "#FFFFFF" : "transparent"}
          strokeWidth="3"
          fill="none"
          strokeDasharray="4 115.5"
          strokeDashoffset="2"
        />
        {/* Medical cross */}
        <rect x="19" y="12" width="6" height="20" rx="1" fill={blueColor} />
        <rect x="12" y="19" width="20" height="6" rx="1" fill={blueColor} />
        {/* 360° arc indicator */}
        <path
          d="M38 8 L41 5 M41 5 L38 5 M41 5 L41 8"
          stroke={blueColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Brand text */}
      <div className="flex flex-col leading-tight">
        <span
          className="font-heading text-xl font-bold tracking-tight"
          style={{ color: blueColor }}
        >
          Medic Scan
        </span>
        <span
          className="text-[10px] font-heading font-medium tracking-[0.2em] uppercase"
          style={{ color: grayColor }}
        >
          Imágenes Avanzadas
        </span>
      </div>
    </a>
  );
}
