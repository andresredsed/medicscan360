"use client";

import { MessageCircle } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SOCIAL.whatsappInfo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />

      {/* Pulse animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        ¿Necesitas ayuda? Escríbenos
      </span>
    </a>
  );
}
