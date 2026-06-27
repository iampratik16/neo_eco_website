import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    // Prefer modern formats for next/image optimisation.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires non-default quality values to be allow-listed.
    qualities: [70, 75],
  },

  /**
   * Redirect map. Driven by the crawl in PLAN.md.
   * Confirmed from the live GoDaddy sitemap: the old online store lived under /ols.
   * TODO: once the Google Search Console "Pages" export is provided, add a 301 for every
   * remaining indexed URL here so nothing 404s. No indexed URL may be lost.
   */
  async redirects() {
    return [
      // Old GoDaddy online store -> services hub (closest intent).
      { source: "/ols/products", destination: "/services", permanent: true },
      { source: "/ols/:path*", destination: "/services", permanent: true },
      // Common GoDaddy default path variants (safe, low-risk).
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-1", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
