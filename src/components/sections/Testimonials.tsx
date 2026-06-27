import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex flex-col border border-line bg-surface p-6 sm:p-8">
      <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-5 border-t border-line pt-4 text-sm">
        <div className="font-semibold text-ink">{t.source}</div>
        <div className="text-muted">{t.location}</div>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ items = defaultTestimonials }: { items?: Testimonial[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((t) => (
        <Card key={t.source} t={t} />
      ))}
    </div>
  );
}
