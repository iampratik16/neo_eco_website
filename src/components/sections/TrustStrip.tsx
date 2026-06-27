import { Container } from "@/components/ui/Container";

const names = [
  "Rendall & Rittner",
  "MVN Block",
  "Chelsea Bridge Wharf",
  "Victoria Wharf",
  "Research House",
  "Chiswick Gate",
  "The Reeds, Watford",
];

/** Trusted-by marquee. Names only (no fabricated logos). */
export function TrustStrip({ tone = "cream" }: { tone?: "cream" | "white" }) {
  return (
    <section className={tone === "cream" ? "bg-cream" : "bg-surface"}>
      <Container className="py-10">
        <p className="text-center text-sm font-medium uppercase tracking-[0.18em] text-muted">
          Trusted by managing agents and major residential developments
        </p>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">
            {[...names, ...names].map((n, i) => (
              <span key={i} className="whitespace-nowrap font-display text-lg font-semibold text-ink/55">
                {n}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
