import type { MetadataRoute } from "next";
import { getAllProducts } from "@/src/services/catalog";
import { SITE_URL } from "@/src/lib/site";
import { POLICY_SLUGS } from "@/src/data/policies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...getAllProducts().map((p) => ({
      url: `${SITE_URL}/shop/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POLICY_SLUGS.map((slug) => ({ url: `${SITE_URL}/${slug}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
