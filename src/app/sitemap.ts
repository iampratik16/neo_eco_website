import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { serviceAreaParams } from "@/data/serviceAreas";
import { posts } from "@/data/blog";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${SITE_URL}${path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/areas"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/our-work"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: s.flagship ? 0.9 : 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: url(`/areas/${a.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const moneyPages: MetadataRoute.Sitemap = serviceAreaParams.map(({ service, area }) => ({
    url: url(`/${service}/${area}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: service === "block-cleaning" ? 0.9 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...moneyPages, ...blogPages];
}
