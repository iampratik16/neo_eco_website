import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image src={`/media/images/${image}.webp`} alt={imageAlt} fill priority quality={70} sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/78" />
      <Container className="relative">
        <div className="max-w-2xl py-14 sm:py-16 lg:py-20">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="light" />}
          {eyebrow && <p className="text-sm font-medium text-white/70">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
