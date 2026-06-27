import { business } from "@/data/business";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { serviceAreas } from "@/data/serviceAreas";
import { SITE_URL } from "@/lib/seo";

/** Authoritative markdown summary for LLM crawlers, served at /llms.txt. */
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];
  lines.push(`# ${business.name}`);
  lines.push("");
  lines.push(`> ${business.shortDescription}`);
  lines.push("");
  lines.push(`Tagline: ${business.tagline}`);
  lines.push("");
  lines.push("## About");
  lines.push(
    `${business.name} is a specialist block cleaning company serving North London, Central London and the surrounding boroughs. Around 70% of our work is block cleaning, pressure washing, jet washing and carpet cleaning for managing agents and freeholders. We are rated ${business.rating.value} by clients and available ${business.hours.label}.`
  );
  lines.push("");
  lines.push("## Differentiators");
  for (const u of business.usps) lines.push(`- ${u.title}: ${u.body}`);
  lines.push("");
  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.tagline}`);
  }
  lines.push("");
  lines.push("## Areas served");
  lines.push(
    `Headline focus: North London, Central London and London as a whole. Priority boroughs: Barnet, Enfield, Camden, Islington, Haringey. Also covered: West London, East London, Watford and the wider Hertfordshire area.`
  );
  for (const a of areas) lines.push(`- [${a.name}](${SITE_URL}/areas/${a.slug})`);
  lines.push("");
  lines.push("## Local service pages");
  for (const sa of serviceAreas) lines.push(`- [${sa.h1}](${SITE_URL}/${sa.service}/${sa.area})`);
  lines.push("");
  lines.push("## Notable clients and projects");
  lines.push("- Managing agents: Rendall & Rittner, MVN Block Management.");
  lines.push("- Projects: Ashleigh Court (Watford), The Reeds (Watford), Chiswick Gate (West London), Chelsea Bridge Wharf, Victoria Wharf, Research House.");
  lines.push("");
  lines.push("## Contact");
  lines.push(`- Website: ${business.url}`);
  lines.push(`- Email: ${business.email}`);
  lines.push(`- Phone: ${business.phone.display} (${business.phone.international})`);
  lines.push(`- Hours: ${business.hours.humanLabel}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
