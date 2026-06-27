import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areaBySlug, areaSlugs } from "@/data/areas";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { postsByArea } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section, Eyebrow } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { PageHero } from "@/components/sections/PageHero";
import { AreaList } from "@/components/sections/AreaList";
import { BlogCard } from "@/components/sections/BlogCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamicParams = false;
export function generateStaticParams() {
  return areaSlugs.map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const a = areaBySlug(area);
  if (!a) return {};
  return pageMetadata({ title: a.metaTitle, description: a.metaDescription, path: `/areas/${a.slug}`, image: a.image });
}

export default async function AreaDetailPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const a = areaBySlug(area);
  if (!a) notFound();

  const moneyPages = serviceAreas.filter((sa) => sa.area === a.slug);
  const moneyServiceSlugs = new Set(moneyPages.map((m) => m.service));
  const neighbours = a.neighbours.map((slug) => areaBySlug(slug)).filter((x) => x !== undefined);
  const localPosts = postsByArea(a.slug).slice(0, 3);
  const crumbs = [
    { name: "Areas", path: "/areas" },
    { name: a.name, path: `/areas/${a.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs]),
          serviceSchema(services[0], a),
        ]}
      />

      <PageHero
        eyebrow={a.type === "borough" ? "Borough" : "Region"}
        title={a.h1}
        intro={a.answer}
        image={a.image}
        imageAlt={`${a.name} residential area`}
        breadcrumbs={crumbs}
      >
        <Button href="/contact" variant="accent" size="lg">
          Book a site survey
        </Button>
      </PageHero>

      {/* Answer-first intro */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{a.name}</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Your local communal cleaning team in {a.name}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-body">
              {a.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MediaImage
              id={a.image}
              alt={`${a.name} residential area`}
              ratio="4 / 3"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-line"
            />
          </Reveal>
        </div>
      </Section>

      {/* Local context */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading align="left" eyebrow="Local knowledge" title={`Cleaning blocks in ${a.name}`} />
          <div className="mt-6 space-y-4 leading-relaxed text-body">
            {a.localContext.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Services in this area */}
      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title={`Our services in ${a.name}`}
          intro={`One accountable team for every communal surface in ${a.name}.`}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const hasMoney = moneyServiceSlugs.has(s.slug);
            const href = hasMoney ? `/${s.slug}/${a.slug}` : `/services/${s.slug}`;
            return (
              <Reveal key={s.slug}>
                <Link
                  href={href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md hover:shadow-brand-900/5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-800 group-hover:text-white">
                    <Icon name={s.icon as IconName} className="size-6" />
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-display font-semibold text-ink">
                      {s.name}
                      {hasMoney && <Icon name="MapPin" className="size-3.5 text-brand-500" />}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-body">
                      {hasMoney ? `${s.name} in ${a.name}` : s.tagline}
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Local case studies */}
      {localPosts.length > 0 && (
        <Section tone="cream">
          <SectionHeading align="left" eyebrow="Our work" title={`Recent projects near ${a.name}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {localPosts.map((p) => (
              <Reveal key={p.slug}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading align="left" eyebrow="Questions" title={`${a.name} cleaning FAQs`} />
          <FAQAccordion faqs={a.faqs} />
        </div>
      </Section>

      {/* Nearby areas */}
      {neighbours.length > 0 && (
        <Section tone="cream">
          <SectionHeading align="left" eyebrow="Nearby" title="Areas nearby" />
          <div className="mt-10">
            <AreaList items={neighbours} />
          </div>
        </Section>
      )}

      <CTABanner title={`Get a free site survey in ${a.name}`} />
    </>
  );
}
