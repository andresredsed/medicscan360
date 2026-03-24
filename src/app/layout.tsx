import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { BUSINESS } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.fullName} | Diagnóstico por Imágenes en Chimbote`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    "diagnóstico por imágenes chimbote",
    "resonancia magnética chimbote",
    "tomografía chimbote",
    "ecografía chimbote",
    "rayos x chimbote",
    "centro de imágenes áncash",
    "medic scan 360",
    "imágenes médicas chimbote",
    "radiólogo chimbote",
  ],
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    title: `${BUSINESS.fullName} | Diagnóstico por Imágenes en Chimbote`,
    description: BUSINESS.description,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://medic-scan.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${montserrat.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: BUSINESS.fullName,
              description: BUSINESS.description,
              url: BUSINESS.url,
              telephone: BUSINESS.phoneRaw,
              email: BUSINESS.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Bolognesi 131",
                addressLocality: "Chimbote",
                addressRegion: "Áncash",
                addressCountry: "PE",
              },
              openingHours: "Mo-Sa 08:00-20:00",
              medicalSpecialty: "Diagnostic Imaging",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Resonancia Magnética",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Tomografía Computarizada",
                },
                { "@type": "MedicalProcedure", name: "Ecografía" },
                {
                  "@type": "MedicalProcedure",
                  name: "Radiografía Digital",
                },
              ],
            }),
          }}
        />

        {/* Google Analytics placeholder */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-white font-body">{children}</body>
    </html>
  );
}
