import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-muted";
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 place-items-center rounded-xl bg-brand-800 text-white shadow-sm transition-transform group-hover:scale-105">
        {/* Leaf mark */}
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
          <path
            d="M5 19c0-7 5.5-13 14-13 0 8.5-6 14-14 13Z"
            fill="currentColor"
            className="text-accent-400"
          />
          <path d="M5 19C9 14 13 11 18 9" stroke="#0e5c39" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-semibold tracking-tight", text)}>Neo Eco</span>
        <span className={cn("text-[0.68rem] font-medium uppercase tracking-[0.2em]", sub)}>Cleaning</span>
      </span>
    </Link>
  );
}
