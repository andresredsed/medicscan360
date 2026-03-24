export const BUSINESS = {
  name: "Medic Scan 360",
  fullName: "Medic Scan 360 — Imágenes Avanzadas",
  tagline: "IMÁGENES AVANZADAS",
  description:
    "Centro de diagnóstico por imágenes en Chimbote, Áncash. Resonancia magnética, tomografía, ecografía y rayos X con tecnología de última generación.",
  address: "Av. Bolognesi 131, Chimbote, Áncash, Perú",
  phone: "+51 991 717 939",
  phoneRaw: "+51991717939",
  email: "informes@medic-scan.com",
  schedule: "Lunes a Sábado: 8:00 AM - 8:00 PM",
  url: "https://medicscan360.com",
} as const;

export const SOCIAL = {
  whatsapp: "https://api.whatsapp.com/send?phone=51991717939",
  whatsappReserva:
    "https://api.whatsapp.com/send?phone=51991717939&text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20Medic%20Scan%20360",
  whatsappInfo:
    "https://api.whatsapp.com/send?phone=51991717939&text=Hola%2C%20quiero%20información%20sobre%20los%20servicios%20de%20Medic%20Scan%20360",
  instagram: "https://www.instagram.com/medic.scan.360",
  facebook: "https://web.facebook.com/medic.scan.360/",
  tiktok: "https://www.tiktok.com/@medic.scan.360",
} as const;

export const MAPS_EMBED_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d-78.5143!3d-9.0747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8168a46d4139%3A0x5ffc50a8805d42cd!2sMedic%20Scan%20360%C2%B0%20-%20Centro%20de%20Diagn%C3%B3stico%20por%20Im%C3%A1genes!5e0!3m2!1ses!2spe!4v1";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;
