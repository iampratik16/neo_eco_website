import { Container } from "@/components/ui/Container";

// name + an honest category/location — the specificity is what stops it reading as filler.
const portfolio = [
  { name: "Rendall & Rittner", meta: "Managing agent" },
  { name: "MVN Block", meta: "Managing agent" },
  { name: "Chelsea Bridge Wharf", meta: "Development" },
  { name: "Victoria Wharf", meta: "Development" },
  { name: "Chiswick Gate", meta: "Development" },
  { name: "Ashleigh Court", meta: "Watford" },
];

export function TrustStrip({ tone = "cream" }: { tone?: "cream" | "white" }) {
  return (
    <section className={tone === "cream" ? "bg-cream" : "bg-surface"}>
      <Container className="border-b border-line py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-16">
          <div className="lg:pt-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              Buildings we look after
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-ink">
              A few of the agents and developments on our weekly rounds across North &amp; Central London.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2">
            {portfolio.map(({ name, meta }, i) => (
              <li
                key={name}
                className={
                  "group flex items-baseline justify-between gap-4 border-t border-line py-4 " +
                  // hairline gutter between the two columns on wider screens
                  (i % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:pl-8")
                }
              >
                <span className="font-display text-lg text-ink transition-colors duration-200 group-hover:text-brand-600 sm:text-xl">
                  {name}
                </span>
                <span className="shrink-0 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                  {meta}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
