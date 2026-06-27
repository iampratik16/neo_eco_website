import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, serviceBySlug, serviceSlugs } from "@/data/services";
import { areaBySlug } from "@/data/areas";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}`, image: s.image });
}


export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();

  const moneyAreas = s.moneyAreas.map((slug) => areaBySlug(slug)).filter((a) => a !== undefined);
  const related = s.related.map((slug) => serviceBySlug(slug)).filter((x) => x !== undefined);
  const crumbs = [
    { name: "Services", path: "/services" },
    { name: s.name, path: `/services/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(s),
          breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs]),
        ]}
      />

      <PageHero
        eyebrow={s.flagship ? "Main service" : "Services"}
        title={s.h1}
        intro={s.tagline}
        image={s.image}
        imageAlt={`${s.name} for residential blocks`}
        breadcrumbs={crumbs}
      >
        <Button href="/contact" variant="accent" size="lg">
          Book a site survey
        </Button>
      </PageHero>

      {/* Answer-first intro + image */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-4 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">{s.answer}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-body">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <MediaImage
              id={s.image}
              alt={`${s.name} in progress`}
              ratio="4 / 3"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-line"
            />
          </Reveal>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="cream">
        <SectionLite eyebrow="Why it matters" title={`The benefits of ${s.name.toLowerCase()}`} />
        <div className="mt-12">
          <FeatureCards
            items={s.benefits.map((b) => ({ title: b.title, body: b.body }))}
          />
        </div>
      </Section>

      {/* Detail sections */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {s.sections.map((sec) => (
            <Reveal key={sec.heading}>
              <article>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{sec.heading}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-body">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="ink">
        <SectionLite eyebrow="How we work" title="A clear, reliable process" tone="light" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.process.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 70}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-semibold text-accent-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Areas with money pages */}
      {moneyAreas.length > 0 && (
        <Section tone="cream">
          <SectionLite
            eyebrow="Local pages"
            title={`${s.name} near you`}
            intro={`See how we deliver ${s.name.toLowerCase()} in these areas.`}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {moneyAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/${s.slug}/${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-800"
              >
                <Icon name="MapPin" className="size-4 text-brand-600" />
                {s.name} in {a.name}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionLite align="left" eyebrow="Questions" title={`${s.name} FAQs`} />
          <FAQAccordion faqs={s.faqs} />
        </div>
      </Section>

      {/* Related services */}
      {related.length > 0 && (
        <Section tone="cream">
          <SectionLite eyebrow="Related" title="You might also need" align="left" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} index={services.findIndex((x) => x.slug === r.slug)} />
            ))}
          </div>
        </Section>
      )}

      <CTABanner title={`Discuss ${s.name.toLowerCase()} for your block`} />
    </>
  );
}

/** Local lightweight heading to avoid importing the client Reveal twice in some spots. */
function SectionLite({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "default" | "light";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone === "light" ? "white" : "brand"}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className={`mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${tone === "light" ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${tone === "light" ? "text-white/80" : "text-body"}`}>{intro}</p>}
    </div>
  );
}
