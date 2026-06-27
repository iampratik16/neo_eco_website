import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { serviceBySlug } from "@/data/services";
import { areaBySlug } from "@/data/areas";
import { serviceAreaBy, serviceAreaParams, serviceAreaSiblings } from "@/data/serviceAreas";
import { postsByArea } from "@/data/blog";
import { business } from "@/data/business";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceAreaParams;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; area: string }> }): Promise<Metadata> {
  const { service, area } = await params;
  const sa = serviceAreaBy(service, area);
  if (!sa) return {};
  return pageMetadata({
    title: sa.metaTitle,
    description: sa.metaDescription,
    path: `/${service}/${area}`,
    image: serviceBySlug(service)?.image ?? "og-default",
  });
}

const quickFacts = [
  "Quality Guarantee — complaints resolved at no extra cost",
  "Eco-friendly products throughout",
  "Available 24 hours, 7 days a week",
  "Block cleaning specialists since 2018",
];

export default async function ServiceAreaPage({ params }: { params: Promise<{ service: string; area: string }> }) {
  const { service, area } = await params;
  const sa = serviceAreaBy(service, area);
  const s = serviceBySlug(service);
  const a = areaBySlug(area);
  if (!sa || !s || !a) notFound();

  const siblings = serviceAreaSiblings(service, area, 4);
  const localPosts = postsByArea(area).slice(0, 3);
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: s.name, path: `/services/${s.slug}` },
    { name: a.name, path: `/${s.slug}/${a.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s, a),
          breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs]),
        ]}
      />

      <PageHero
        eyebrow={`${s.name} · ${a.name}`}
        title={sa.h1}
        intro={sa.answer}
        image={s.image}
        imageAlt={`${s.name} in ${a.name}`}
        breadcrumbs={crumbs}
      >
        <Button href="/contact" variant="accent" size="lg">
          Book a site survey
        </Button>
        <Button href={business.phone.href} variant="white" size="lg">
          <Icon name="Phone" className="size-4" />
          {business.phone.display}
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Main content */}
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{`${s.name} in ${a.name}`}</Eyebrow>
              <div className="mt-5 space-y-4 leading-relaxed text-body">
                {sa.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {sa.proof && (
              <Reveal>
                <div className="mt-8 border border-line bg-cream p-6">
                  <p className="text-sm font-medium text-brand-800">Local work</p>
                  <p className="mt-2 text-ink">{sa.proof}</p>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {`${s.name} FAQs for ${a.name}`}
                </h2>
                <div className="mt-6">
                  <FAQAccordion faqs={sa.faqs} />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-line bg-cream p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Why Neo Eco</h2>
              <ul className="mt-4 space-y-2 text-sm text-body">
                {quickFacts.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brand-600">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-6 w-full">
                Contact us
              </Button>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Explore more</h2>
              <div className="mt-4 space-y-2 text-sm">
                <Link href={`/services/${s.slug}`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-ink transition-colors hover:bg-brand-50 hover:text-brand-800">
                  All about {s.name.toLowerCase()}
                  <Icon name="ArrowUpRight" className="size-4" />
                </Link>
                <Link href={`/areas/${a.slug}`} className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-ink transition-colors hover:bg-brand-50 hover:text-brand-800">
                  Cleaning in {a.name}
                  <Icon name="ArrowUpRight" className="size-4" />
                </Link>
                {siblings.map((sib) => {
                  const ss = serviceBySlug(sib.service);
                  const aa = areaBySlug(sib.area);
                  if (!ss || !aa) return null;
                  return (
                    <Link
                      key={`${sib.service}/${sib.area}`}
                      href={`/${sib.service}/${sib.area}`}
                      className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-ink transition-colors hover:bg-brand-50 hover:text-brand-800"
                    >
                      {ss.name} in {aa.name}
                      <Icon name="ArrowUpRight" className="size-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {localPosts.length > 0 && (
        <Section tone="cream">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Our work</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Projects near {a.name}
              </h2>
            </div>
            <Button href="/our-work" variant="outline" className="shrink-0">
              See our work
              <Icon name="ArrowRight" className="size-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {localPosts.map((p) => (
              <Reveal key={p.slug}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABanner title={`Get a free ${s.name.toLowerCase()} quote in ${a.name}`} />
    </>
  );
}
