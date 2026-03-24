"use client";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

function LogoIcon({ color, size = 44 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Clover/cross shape - 4 rounded lobes */}
      <path
        d="M50 2C50 2 62 2 70 10C78 18 78 30 78 30L78 38L82 38C82 38 94 38 94 50C94 62 82 62 82 62L78 62L78 66C78 66 78 78 70 86C66 90 62 92 58 94C54 96 50 96 50 96C50 96 46 96 42 94C38 92 34 90 30 86C22 78 22 66 22 66L22 62L18 62C18 62 6 62 6 50C6 38 18 38 18 38L22 38L22 30C22 30 22 18 30 10C38 2 50 2 50 2Z"
        fill={color}
      />
      {/* "3" numeral - top portion */}
      <path
        d="M32 28C32 28 36 20 44 20C48 20 52 22 52 26C52 29 50 31 47 32C51 33 54 36 54 40C54 45 50 48 44 48C37 48 33 44 32 40"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* "6" numeral - bottom left */}
      <path
        d="M38 72C38 72 38 58 44 54C46 52 48 52 48 52M36 68C36 68 36 76 42 76C48 76 48 72 48 68C48 64 48 62 42 62C36 62 36 66 36 68Z"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* "0" numeral - bottom right */}
      <ellipse
        cx="62"
        cy="68"
        rx="8"
        ry="10"
        stroke="white"
        strokeWidth="4.5"
        fill="none"
      />
      {/* Degree symbol ° */}
      <circle
        cx="72"
        cy="22"
        r="4"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const blueColor = variant === "color" ? "#315991" : "#FFFFFF";
  const grayColor = variant === "color" ? "#5a6571" : "rgba(255,255,255,0.8)";

  return (
    <a href="#inicio" className={`flex items-center gap-2 ${className}`}>
      <LogoIcon color={blueColor} />

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

export { LogoIcon };
