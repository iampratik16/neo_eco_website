import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Brand logo. The source PNG has a transparent background, so it sits cleanly on the
 * solid and frosted-glass header. On dark surfaces (tone="light") it sits on a white
 * badge so the navy circle outline and wordmark stay visible.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const img = (
    <Image
      src="/brand/logo.png"
      alt="Neo Eco Cleaning"
      width={249}
      height={240}
      priority
      unoptimized
      className="h-11 w-auto sm:h-14"
    />
  );
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center transition-transform hover:scale-[1.02]", className)}
    >
      {tone === "light" ? (
        <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm">{img}</span>
      ) : (
        img
      )}
    </Link>
  );
}
