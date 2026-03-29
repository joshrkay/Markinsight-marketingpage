import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllCompetitorSlugs } from "@/lib/competitors";

const baseUrl = "https://markinsight.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const competitors = getAllCompetitorSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const competitorPages: MetadataRoute.Sitemap = competitors.map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...competitorPages, ...blogPages];
}
