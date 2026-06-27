import type { Metadata } from "next";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/sections/QuoteForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Get a Free Block Cleaning Quote",
  description:
    "Get a free, no-obligation site survey and quote for block cleaning across London. Call 07768 066860, email hello@neoecocleaning.co.uk, or send us a message. Available 24/7.",
  path: "/contact",
  image: "hero-lobby",
});

const methods: { icon: IconName; label: string; value: string; href: string }[] = [
  { icon: "Phone", label: "Call us", value: business.phone.display, href: business.phone.href },
  { icon: "Mail", label: "Email us", value: business.email, href: `mailto:${business.email}` },
  { icon: "Clock", label: "Availability", value: business.hours.humanLabel, href: "#" },
  { icon: "MapPin", label: "Service area", value: "London & surrounding areas", href: "/areas" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />

      <PageHero
        eyebrow="Get in touch"
        eyebrowIcon="Phone"
        title="Get a free site survey and quote"
        intro="Tell us about your block and we will visit, agree a clear scope and send a fixed quote. No obligation, no pressure."
        image="hero-lobby"
        imageAlt="Clean communal lobby of a residential block"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: contact details */}
          <div>
            <Eyebrow>Contact details</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Talk to a block cleaning specialist
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Whether you manage a single block or a portfolio, we would be glad to help. Reach us any way you like, we
              are available 24/7.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <Reveal key={m.label}>
                  <a
                    href={m.href}
                    className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-900/5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon name={m.icon} className="size-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted">{m.label}</span>
                      <span className="mt-1 block font-medium text-ink">{m.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Map (keyless OpenStreetMap embed). TODO: swap for Google Maps embed if an API key is provided. */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Neo Eco Cleaning service area, North London"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.34%2C51.49%2C0.06%2C51.66&layer=mapnik"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-line bg-cream p-6 shadow-xl shadow-brand-900/5 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Request a free quote</h2>
            <p className="mt-1 text-sm text-body">We aim to respond the same day.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
