import type { Metadata } from "next";
import { business } from "@/data/business";

export const SITE_URL = business.url;

export function absoluteUrl(pathname = "/"): string {
  if (pathname.startsWith("http")) return pathname;
  return `${SITE_URL}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

/** Absolute URL for a generated media image id (defaults to the og-ready jpg). */
export function mediaUrl(id: string, ext = "jpg"): string {
  return absoluteUrl(`/media/images/${id}.${ext}`);
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string; // asset id
  type?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "og-default",
  type = "website",
  noindex = false,
  publishedTime,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = mediaUrl(image);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: business.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
