import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function CTABanner({
  title = "Tell us about your block",
  body = "We will visit, walk the communal areas with you, and send a fixed quote. No sales pressure.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line bg-cream py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 border border-line bg-white p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
            <p className="mt-3 text-body">{body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="lg">
              Book a site survey
            </Button>
            <Button href={business.phone.href} variant="outline" size="lg">
              <Icon name="Phone" className="size-4" />
              {business.phone.display}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
