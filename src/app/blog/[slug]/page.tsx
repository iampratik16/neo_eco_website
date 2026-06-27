import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { postBySlug, postSlugs, posts } from "@/data/blog";
import { serviceBySlug } from "@/data/services";
import { areaBySlug } from "@/data/areas";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamicParams = false;
export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const service = serviceBySlug(post.service);
  const area = areaBySlug(post.area);
  const related = posts.filter((p) => p.slug !== post.slug && p.area === post.area).slice(0, 3);
  const dateLabel = new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  const crumbs = [
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[articleSchema(post), breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])]} />

      {/* Header */}
      <section className="bg-cream pt-10">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                {post.category.replace(/^Case Studies\s*\/\s*/i, "")}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="Clock" className="size-4" />
                {post.readingMinutes} min read
              </span>
              <span>{dateLabel}</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
          </div>
        </Container>
        <Container className="mt-10">
          <MediaImage
            id={post.image}
            alt={post.title}
            ratio="16 / 9"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="mx-auto max-w-4xl rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-line"
          />
        </Container>
      </section>

      {/* Body */}
      <Section>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="article-body max-w-2xl" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h2 className="font-display text-base font-semibold text-ink">Related services</h2>
              <div className="mt-3 space-y-2 text-sm">
                {service && (
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-2 font-medium text-brand-800 hover:underline">
                    <Icon name={service.icon as IconName} className="size-4" />
                    {service.name}
                  </Link>
                )}
                {area && (
                  <Link href={`/areas/${area.slug}`} className="flex items-center gap-2 font-medium text-brand-800 hover:underline">
                    <Icon name="MapPin" className="size-4" />
                    Cleaning in {area.name}
                  </Link>
                )}
                {service && area && serviceBySlug(service.slug)?.moneyAreas.includes(area.slug) && (
                  <Link href={`/${service.slug}/${area.slug}`} className="flex items-center gap-2 font-medium text-brand-800 hover:underline">
                    <Icon name="ArrowUpRight" className="size-4" />
                    {service.name} in {area.name}
                  </Link>
                )}
              </div>
            </div>
            <div className="rounded-2xl bg-brand-800 p-6 text-white">
              <h2 className="font-display text-base font-semibold text-white">Get a free survey</h2>
              <p className="mt-2 text-sm text-white/80">For your block, anywhere in London and the surrounding areas.</p>
              <Button href="/contact" variant="accent" size="sm" className="mt-4 w-full">
                Get a quote
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="cream">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">More case studies</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Reveal key={p.slug}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}
