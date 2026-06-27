import { business } from "@/data/business";

/**
 * Build a WhatsApp click-to-chat URL for the business number, with an optional
 * pre-filled message. Falls back to the default enquiry message.
 * The number is in wa.me format (international, digits only, no "+" or leading 0).
 */
export function whatsappUrl(message?: string): string {
  const text = message ?? business.whatsapp.defaultMessage;
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
