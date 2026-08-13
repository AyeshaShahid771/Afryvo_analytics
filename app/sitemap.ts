import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.afryvoanalytics.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
