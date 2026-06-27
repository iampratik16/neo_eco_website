import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="bg-cream">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-6xl font-semibold text-brand-800">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-body">
          That link may be out of date. Try the homepage, or call us and we will help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {services.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-brand-300 hover:bg-white"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
