import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";
import { SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// Sora uses display:optional so the heading font never causes a late LCP repaint under slow
// networks (size-adjusted fallback keeps CLS at 0; Sora caches for the rest of the session).
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "optional", weight: ["500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} | Block Cleaning Specialists in London`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_GB", siteName: business.name, url: SITE_URL },
};

// Set the .js class before paint so reveal animations never hide content for no-JS clients.
const JS_FLAG = `document.documentElement.classList.add('js')`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-background text-body antialiased">
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
        <JsonLd data={organizationSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
