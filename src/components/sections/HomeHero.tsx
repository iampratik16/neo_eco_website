import Image from "next/image";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroVideo } from "./HeroVideo";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* LCP poster image */}
      <Image
        src="/media/images/hero-lobby-poster.jpg"
        alt="Pristine, freshly cleaned communal lobby of a modern London residential block"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover"
      />
      {/* Motion enhancement: video sits above the poster, below the scrims */}
      <HeroVideo id="hero-lobby" className="absolute inset-0 z-[1] size-full object-cover" />
      {/* Scrims for legibility */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />

      <Container className="relative z-10">
        <div className="flex min-h-[88vh] max-w-2xl flex-col justify-center py-24">
          <span className="glass-dark inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white">
            <Icon name="Leaf" className="size-4 text-accent-400" />
            Block cleaning specialists, North London
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Communal areas that make your block <span className="text-accent-400">shine</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Neo Eco Cleaning keeps the communal areas of residential blocks clean, safe and presentable for managing
            agents and freeholders across North London, Central London and the surrounding boroughs. Reliable,
            eco-friendly and available 24/7.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="accent" size="lg">
              Get a free quote
              <Icon name="ArrowRight" className="size-4" />
            </Button>
            <Button href={business.phone.href} variant="white" size="lg">
              <Icon name="Phone" className="size-4" />
              {business.phone.display}
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="Star" className="size-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <span className="text-white/80">
                <span className="font-semibold text-white">5.0</span> Google rating
              </span>
            </div>
            <div className="h-5 w-px bg-white/20" aria-hidden="true" />
            <p className="text-white/80">Trusted by Rendall &amp; Rittner and MVN Block</p>
            <div className="h-5 w-px bg-white/20" aria-hidden="true" />
            <p className="flex items-center gap-2 text-white/80">
              <Icon name="ShieldCheck" className="size-4 text-accent-400" />
              Quality Guarantee
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
