import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "outline" | "white" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand-800 text-white hover:bg-brand-900 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  accent: "bg-accent-500 text-brand-950 hover:bg-accent-400 shadow-sm hover:shadow-md hover:-translate-y-0.5",
  outline: "border border-brand-200 text-brand-800 hover:border-brand-400 hover:bg-brand-50",
  white: "bg-white text-brand-900 hover:bg-cream shadow-sm hover:shadow-md hover:-translate-y-0.5",
  ghost: "text-brand-800 hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string; children: React.ReactNode };
type AnchorRest = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & { href: string } & AnchorRest) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

/** Button-styled element for real <button> use (e.g. form submit). */
export function ButtonEl({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
