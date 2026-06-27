import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="bg-eco-gradient">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-semibold text-brand-800">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          We could not find that page
        </h1>
        <p className="mt-3 max-w-md text-body">
          The page may have moved. Try one of our main pages, or get in touch and we will point you the right way.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
            <Icon name="ArrowRight" className="size-4" />
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {services.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-200 hover:text-brand-800"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
