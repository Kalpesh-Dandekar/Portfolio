import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/` },
    ...featuredProjects.map(({ slug }) => ({
      url: `${siteUrl}/work/${slug}`,
    })),
  ];
}
