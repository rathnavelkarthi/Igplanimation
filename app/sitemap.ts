import type { MetadataRoute } from "next";
import { ALL_SLUGS } from "@/lib/seo-pages";

const SITE = "https://internationalgarudas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/founders", "/services"].map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.8
  }));
  const serviceRoutes = ALL_SLUGS.map((slug) => ({
    url: `${SITE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return [...staticRoutes, ...serviceRoutes];
}
