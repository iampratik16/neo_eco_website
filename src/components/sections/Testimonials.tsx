import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";
import { Icon } from "@/components/ui/Icon";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex min-w-[85%] snap-start flex-col rounded-3xl border border-line bg-surface p-7 sm:min-w-0 sm:p-9">
      <Icon name="Quote" className="size-9 text-brand-200" />
      <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink">{t.quote}</blockquote>
      <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <div>
          <div className="font-semibold text-ink">{t.source}</div>
          <div className="text-sm text-muted">{t.location}</div>
        </div>
        <div className="flex" role="img" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Icon key={i} name="Star" className="size-4 fill-accent-500 text-accent-500" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ items = defaultTestimonials }: { items?: Testimonial[] }) {
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible">
      {items.map((t) => (
        <Card key={t.source} t={t} />
      ))}
    </div>
  );
}
