import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Icon, type IconName } from "@/components/ui/Icon";

export function PageHero({
  eyebrow,
  eyebrowIcon = "Leaf",
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  eyebrowIcon?: IconName;
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
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/78 to-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
      <Container className="relative">
        <div className="max-w-3xl py-14 sm:py-16 lg:py-20">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="light" />}
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Icon name={eyebrowIcon} className="size-4 text-accent-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
