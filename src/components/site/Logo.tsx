import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import logoDark from "../../../public/neo-eco-logo.png"; // dark text — for light backgrounds
import logoLight from "../../../public/neo-eco-logo-light.png"; // white text — for the dark footer

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const src = tone === "light" ? logoLight : logoDark;
  return (
    <Link href="/" aria-label="Neo Eco Cleaning — home" className={cn("group inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Neo Eco Cleaning"
        priority
        className="h-16 w-auto sm:h-20"
      />
    </Link>
  );
}
