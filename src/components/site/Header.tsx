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
      {/* Utility bar */}
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href={business.phone.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Icon name="Phone" className="size-3.5 text-accent-400" />
              {business.phone.display}
            </a>
            <a href={`mailto:${business.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Icon name="Mail" className="size-3.5 text-accent-400" />
              {business.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Icon name="Clock" className="size-3.5 text-accent-400" />
              Available 24/7
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="Star" className="size-3.5 fill-accent-400 text-accent-400" />
              <span className="font-medium text-white">5.0</span> rated
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
            : "border-transparent bg-white"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const items = dropdowns[item.href];
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              if (!items) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-brand-800" : "text-ink/80 hover:text-brand-800"
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
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-brand-800" : "text-ink/80 hover:text-brand-800"
                    )}
                  >
                    {item.label}
                    <Icon name="ChevronDown" className="size-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="grid w-64 gap-0.5 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/5">
                      {items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="rounded-xl px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-brand-50 hover:text-brand-800"
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
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-50 sm:inline-flex lg:hidden xl:inline-flex"
            >
              <Icon name="Phone" className="size-4" />
              <span className="hidden xl:inline">{business.phone.display}</span>
            </a>
            <Button href="/contact" variant="primary" size="sm" className="hidden sm:inline-flex">
              Get a free quote
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-line text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <Icon name={open ? "X" : "Menu"} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
            "absolute right-0 top-0 flex h-dvh w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-xl border border-line"
              aria-label="Close menu"
            >
              <Icon name="X" className="size-5" />
            </button>
          </div>
          <nav className="flex-1 px-5 py-4" aria-label="Mobile" onClick={() => setOpen(false)}>
            <Link href="/" className="block rounded-xl px-3 py-2.5 font-medium text-ink hover:bg-brand-50">
              Home
            </Link>
            {primaryNav.map((item) => {
              const items = dropdowns[item.href];
              return (
                <div key={item.href} className="border-t border-line/70 py-1 first:border-t-0">
                  <Link href={item.href} className="block rounded-xl px-3 py-2.5 font-medium text-ink hover:bg-brand-50">
                    {item.label}
                  </Link>
                  {items && (
                    <div className="ml-3 grid">
                      {items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-brand-50 hover:text-brand-800"
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
              Get a free quote
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
