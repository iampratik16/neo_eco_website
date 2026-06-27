import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Icon } from "@/components/ui/Icon";

/**
 * Floating action stack shown on every page (bottom-right): a quick enquiry
 * button that opens the quote form, and a WhatsApp click-to-chat button.
 * Pure CSS so it works without JS and respects reduced-motion. z-30 keeps the
 * stack under the mobile menu drawer (z-40), which covers it while open.
 *
 * The site identity stays blue/aqua; only the WhatsApp control uses WhatsApp's
 * own green so it reads instantly as WhatsApp.
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Enquiry / quote form */}
      <Link href="/contact" aria-label="Get a free quote" className="group relative grid size-14 place-items-center">
        <span className="pointer-events-none absolute right-[4.25rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink/90 px-3.5 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Get a free quote
        </span>
        <span className="grid size-14 place-items-center rounded-full bg-brand-800 text-white shadow-[0_10px_30px_-6px_rgba(15,40,80,0.45)] ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
          <Icon name="MessageSquareText" className="size-6" />
        </span>
      </Link>

      {/* WhatsApp click-to-chat */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Neo Eco Cleaning on WhatsApp"
        className="group relative grid size-14 place-items-center"
      >
        <span className="pointer-events-none absolute right-[4.25rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink/90 px-3.5 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
        {/* Gentle attention pulse (paused for reduced-motion) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping" aria-hidden="true" />
        <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.5)] ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
          <WhatsAppIcon className="size-7" />
        </span>
      </a>
    </div>
  );
}
