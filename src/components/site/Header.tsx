"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/business";
import { primaryNav, serviceNav, areaNav } from "@/data/nav";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const dropdowns: Record<string, { label: string; href: string }[]> = {
  "/services": serviceNav,
  "/areas": areaNav,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line bg-cream lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm text-muted">
          <div className="flex items-center gap-6">
            <a href={business.phone.href} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
              <Icon name="Phone" className="size-3.5" />
              {business.phone.display}
            </a>
            <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
              <Icon name="Mail" className="size-3.5" />
              {business.email}
            </a>
          </div>
          <p>Available 24 hours, 7 days a week</p>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-colors duration-200",
          scrolled ? "border-line bg-white/95 backdrop-blur-sm" : "border-transparent bg-white"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const items = dropdowns[item.href];
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              if (!items) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-brand-800 underline decoration-brand-400 decoration-2 underline-offset-4" : "text-ink/80 hover:text-brand-800"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-brand-800 underline decoration-brand-400 decoration-2 underline-offset-4" : "text-ink/80 hover:text-brand-800"
                    )}
                  >
                    {item.label}
                    <Icon name="ChevronDown" className="size-3.5" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-56 border border-line bg-white py-1 shadow-md">
                      {items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-brand-800"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              className="hidden items-center gap-2 px-3 py-2 text-sm font-semibold text-brand-800 sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Icon name="Phone" className="size-4" />
              <span className="hidden xl:inline">{business.phone.display}</span>
            </a>
            <Button href="/contact" variant="primary" size="sm" className="hidden sm:inline-flex">
              Contact us
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center border border-line text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "X" : "Menu"} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        inert={!open}
      >
        <div
          className={cn("absolute inset-0 bg-ink/40 transition-opacity", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-dvh w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center border border-line"
              aria-label="Close menu"
            >
              <Icon name="X" className="size-5" />
            </button>
          </div>
          <nav className="flex-1 px-5 py-4" aria-label="Mobile" onClick={() => setOpen(false)}>
            <Link href="/" className="block px-3 py-2.5 font-medium text-ink hover:bg-cream">
              Home
            </Link>
            {primaryNav.map((item) => {
              const items = dropdowns[item.href];
              return (
                <div key={item.href} className="border-t border-line/70 py-1 first:border-t-0">
                  <Link href={item.href} className="block px-3 py-2.5 font-medium text-ink hover:bg-cream">
                    {item.label}
                  </Link>
                  {items && (
                    <div className="ml-3 grid">
                      {items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="px-3 py-2 text-sm text-muted hover:bg-cream hover:text-brand-800"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="border-t border-line px-5 py-4">
            <Button href="/contact" variant="primary" className="w-full" size="lg">
              Contact us
            </Button>
            <a
              href={business.phone.href}
              className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-brand-800"
            >
              <Icon name="Phone" className="size-4" />
              {business.phone.display}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
