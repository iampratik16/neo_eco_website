import Link from "next/link";
import { business } from "@/data/business";
import { footerColumns } from "@/data/nav";
import { Logo } from "./Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{business.shortDescription}</p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={business.phone.href} className="flex items-center gap-3 transition-colors hover:text-white">
              <Icon name="Phone" className="size-4 shrink-0" />
              {business.phone.display}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
              <Icon name="Mail" className="size-4 shrink-0" />
              {business.email}
            </a>
            <p className="flex items-center gap-3">
              <Icon name="MapPin" className="size-4 shrink-0" />
              North London and the surrounding areas
            </p>
            <p className="flex items-center gap-3">
              <Icon name="Clock" className="size-4 shrink-0" />
              {business.hours.humanLabel}
            </p>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h2 className="font-display text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/areas" className="hover:text-white">
              Service areas
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
