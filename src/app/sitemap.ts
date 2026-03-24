import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://medic-scan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}
