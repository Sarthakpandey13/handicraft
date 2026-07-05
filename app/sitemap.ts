import type { MetadataRoute } from "next";
import { CATEGORY_META } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/export`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORY_META.map((cat) => ({
    url: `${site.url}/products/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
