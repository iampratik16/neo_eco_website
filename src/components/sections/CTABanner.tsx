import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function CTABanner({
  title = "Get a free site survey for your block",
  body = "Tell us about your building and we will visit, agree a clear scope and send a fixed quote. No obligation, no pressure.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-800 py-16 text-white sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-7 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-brand-700/40 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-20 left-10 size-56 rounded-full bg-accent-500/10 blur-2xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
              <p className="mt-3 text-white/80">{body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/contact" variant="accent" size="lg">
                Get a free quote
                <Icon name="ArrowRight" className="size-4" />
              </Button>
              <Button href={business.phone.href} variant="white" size="lg">
                <Icon name="Phone" className="size-4" />
                Call us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
