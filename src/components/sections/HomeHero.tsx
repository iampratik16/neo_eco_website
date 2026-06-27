import Image from "next/image";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HeroVideo } from "./HeroVideo";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/media/images/hero-lobby-poster.jpg"
        alt="Communal lobby of a London residential block after cleaning"
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover"
      />
      <HeroVideo id="hero-lobby" className="absolute inset-0 -z-[1] size-full object-cover" />
      <div className="absolute inset-0 bg-ink/75" />

      <Container className="relative">
        <div className="flex min-h-[75vh] items-end py-16 lg:items-center lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-white/70">Block cleaning · North London · Since {business.founded}</p>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
              Communal cleaning for blocks that need to look cared for, every week.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white/85">
              We work with managing agents and freeholders across North London, Central London and the surrounding
              boroughs. Lobbies, stairwells, lifts, bin stores — one team, on a schedule you can rely on.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="accent" size="lg">
                Book a site survey
              </Button>
              <Button href={business.phone.href} variant="white" size="lg">
                <Icon name="Phone" className="size-4" />
                {business.phone.display}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
