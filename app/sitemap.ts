import type { MetadataRoute } from "next";
import { getPostSlugs, getCategories } from "@/lib/markdown";

export const dynamic = "force-static";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://geo-info.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getPostSlugs();
  const categories = getCategories();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/topics`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const articlePages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const topicPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/topics/${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...topicPages];
}
