/**
 * Service x Area money pages — the single biggest SEO lever.
 * Each entry is genuinely unique and locally useful (no template-spinning).
 * Route: /[service]/[area]. generateStaticParams reads from this list, dynamicParams = false.
 */

export type ServiceAreaFAQ = { q: string; a: string };

export type ServiceArea = {
  service: string; // service slug
  area: string; // area slug
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opening paragraph. */
  answer: string;
  body: string[];
  /** Truthful local proof point, where one exists. */
  proof?: string;
  faqs: ServiceAreaFAQ[];
};

export const serviceAreas: ServiceArea[] = [
  // ---------------- BLOCK CLEANING ----------------
  {
    service: "block-cleaning",
    area: "north-london",
    metaTitle: "Block Cleaning North London | Communal Cleaning | Neo Eco",
    metaDescription:
      "The specialist block cleaning company for North London. Reliable communal-area cleaning for managing agents across Barnet, Enfield, Camden, Islington and Haringey. Free survey.",
    h1: "Block cleaning in North London",
    answer:
      "Neo Eco Cleaning is the specialist block cleaning company for North London, keeping the communal areas of residential blocks clean, safe and presentable for managing agents and freeholders across the region and its boroughs.",
    body: [
      "North London is our heartland and block cleaning is our specialism. We look after the communal areas that define how a building feels: entrances, lobbies, hallways, stairwells, lifts, bin stores and external courtyards, on a planned schedule with a consistent standard every visit.",
      "North London blocks vary enormously, from converted Victorian and Edwardian houses to large purpose-built estates and modern developments. We tailor the scope and frequency to each building rather than applying a template, and we bring pressure washing, jet washing and communal carpet cleaning to the same contract when the building needs them.",
    ],
    proof:
      "We are trusted by managing agents including Rendall & Rittner and MVN Block Management, and rated 5.0 by clients.",
    faqs: [
      { q: "Who is the best block cleaning company in North London?", a: "Neo Eco Cleaning specialises in block and communal-area cleaning across North London, is rated 5.0 by clients, and is trusted by managing agents including Rendall & Rittner and MVN Block Management. We would be glad to survey your block." },
      { q: "How much does block cleaning cost in North London?", a: "Cost depends on the size of the block, the number of communal areas and the frequency of visits. We provide a clear fixed quote after a free, no-obligation site survey." },
      { q: "Do you clean communal areas for North London managing agents?", a: "Yes. Managing agents and freeholders are our core clients across North London. We work to an agreed scope and schedule and provide before and after records for leaseholders." },
      { q: "Which North London areas do you cover?", a: "All of North London, including the boroughs of Barnet, Enfield, Camden, Islington and Haringey, and the surrounding neighbourhoods." },
    ],
  },
  {
    service: "block-cleaning",
    area: "central-london",
    metaTitle: "Block Cleaning Central London | Communal Cleaning | Neo Eco",
    metaDescription:
      "Premium communal block cleaning across Central London. Hotel-standard cleaning for mansion blocks and developments, for managing agents and freeholders. Free survey.",
    h1: "Block cleaning in Central London",
    answer:
      "Neo Eco Cleaning provides premium communal block cleaning across Central London, keeping the shared spaces of mansion blocks and high-specification developments immaculate for managing agents and residents.",
    body: [
      "Central London buildings are held to a high standard, and our team meets it. With ex-Hilton Hotel cleaners on the team, we bring a hotel standard to communal entrances, lobbies, hallways and external areas, working discreetly and to schedule.",
      "We keep the whole building in order, combining regular communal cleaning with stone cleaning, communal carpet cleaning and pressure washing where premium central blocks need them.",
    ],
    proof:
      "Our team includes ex-Hilton Hotel cleaners, and we hold communal areas to a hotel standard that suits Central London's expectations.",
    faqs: [
      { q: "Do you clean mansion blocks in Central London?", a: "Yes. We keep the communal areas of Central London mansion blocks and modern developments immaculate, on a planned schedule that suits the building and its residents." },
      { q: "How much does block cleaning cost in Central London?", a: "We quote a clear fixed price after a free survey, based on the size of the block, the communal areas in scope and the visit frequency." },
      { q: "Can you deliver a premium, hotel-standard finish?", a: "Yes. Our team includes ex-Hilton Hotel cleaners, so we are well suited to the presentation premium Central London buildings expect." },
    ],
  },
  {
    service: "block-cleaning",
    area: "barnet",
    metaTitle: "Block Cleaning Barnet | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Barnet. Reliable scheduled communal cleaning for managing agents and residential blocks across the borough. Free survey.",
    h1: "Block cleaning in Barnet",
    answer:
      "Neo Eco Cleaning provides specialist block cleaning in Barnet, keeping the communal areas of the borough's residential blocks and estates clean and presentable for managing agents and freeholders.",
    body: [
      "Barnet is one of our priority North London boroughs. We clean communal entrances, hallways, stairwells, bin stores and external areas across the borough's suburban blocks and managed estates, on a reliable planned schedule.",
      "Barnet's blocks often have generous external communal areas, paths and forecourts, so we frequently combine scheduled communal cleaning with periodic pressure washing and jet washing to keep the whole site presentable. Barnet also sits close to our active Watford work, so we cover it easily and often.",
    ],
    faqs: [
      { q: "Do you clean blocks of flats in Barnet?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Barnet, plus pressure washing, jet washing and carpet cleaning as needed." },
      { q: "How much does block cleaning cost in Barnet?", a: "We provide a clear fixed quote after a free site survey, based on the size of the block, the communal areas and how often you need us." },
      { q: "Do you work with managing agents in Barnet?", a: "Yes. Managing agents and freeholders are our core clients. We work to an agreed scope and schedule and document our work for leaseholders." },
    ],
  },
  {
    service: "block-cleaning",
    area: "enfield",
    metaTitle: "Block Cleaning Enfield | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Enfield. Reliable scheduled cleaning for managing agents and residential blocks across the borough. Eco-friendly. Free survey.",
    h1: "Block cleaning in Enfield",
    answer:
      "Neo Eco Cleaning provides specialist block cleaning in Enfield, keeping residential blocks and estates clean, safe and presentable for managing agents and freeholders across the borough.",
    body: [
      "Enfield is a priority North London borough for us, combining large established estates with newer developments. We clean communal entrances, hallways, stairwells and external areas across both, on a dependable schedule with a consistent standard.",
      "In higher-occupancy Enfield blocks the communal areas take heavy footfall, so we set a frequency that keeps shared spaces presentable between visits, and add pressure washing and carpet cleaning when the building needs them.",
    ],
    faqs: [
      { q: "Do you clean communal areas in Enfield?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Enfield, along with pressure washing, jet washing and carpet cleaning." },
      { q: "How much does block cleaning cost in Enfield?", a: "We quote a clear fixed price after a free survey, based on the block size, the communal areas in scope and the visit frequency." },
      { q: "Can you provide a regular cleaning schedule in Enfield?", a: "Yes. We set a planned rota that suits the building and budget, from weekly communal cleans to periodic deep cleans and annual external washing." },
    ],
  },
  {
    service: "block-cleaning",
    area: "camden",
    metaTitle: "Block Cleaning Camden | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Camden. Careful communal cleaning for period conversions and modern blocks, for managing agents. Eco-friendly. Free survey.",
    h1: "Block cleaning in Camden",
    answer:
      "Neo Eco Cleaning provides specialist block cleaning in Camden, keeping period conversions and modern developments clean and presentable for managing agents and residents across the borough.",
    body: [
      "Camden is a priority borough of characterful period conversions and premium new developments. Its communal entrances, stairwells and stone detailing are handsome but high-maintenance, so we match the method to the surface for a careful, surface-appropriate clean.",
      "We keep the whole building in order, combining regular communal cleaning with pressure washing of entrances and steps, communal carpet cleaning and careful stone cleaning where Camden's period blocks need it.",
    ],
    faqs: [
      { q: "Do you clean period blocks in Camden?", a: "Yes. We keep the communal areas of Camden's period conversions and modern blocks clean and presentable, matching the method to the building, including careful cleaning of stonework and entrances." },
      { q: "How much does block cleaning cost in Camden?", a: "We provide a clear fixed quote after a free site survey, based on the block size, communal areas and visit frequency." },
      { q: "Do you work with Camden managing agents?", a: "Yes. Managing agents and freeholders are our core clients across Camden and the wider North London area." },
    ],
  },
  {
    service: "block-cleaning",
    area: "islington",
    metaTitle: "Block Cleaning Islington | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Islington. Careful communal cleaning for Georgian and Victorian conversions and modern blocks. Eco-friendly. Free survey.",
    h1: "Block cleaning in Islington",
    answer:
      "Neo Eco Cleaning provides specialist block cleaning in Islington, keeping Georgian and Victorian conversions and modern developments clean and presentable for managing agents across the borough.",
    body: [
      "Islington is a priority borough of handsome period terraces, elegant conversions and premium developments. Its communal entrances, steps and stone detailing are characterful but demanding, so we clean them carefully with surface-appropriate methods that protect the building.",
      "Islington blocks are dense and high-footfall, so we keep their communal areas sharp with consistent scheduled visits, adding pressure washing, jet washing and carpet cleaning when needed.",
    ],
    faqs: [
      { q: "Do you clean communal areas in Islington?", a: "Yes. We provide scheduled communal cleaning for Islington's period conversions and modern developments, plus pressure washing and carpet cleaning." },
      { q: "How much does block cleaning cost in Islington?", a: "We quote a clear fixed price after a free survey, based on the block size, the communal areas in scope and the visit frequency." },
      { q: "Can you clean period entrances and stonework in Islington?", a: "Yes. We match the method to the surface, cleaning characterful entrances, steps and stone detailing without damaging them." },
    ],
  },
  {
    service: "block-cleaning",
    area: "haringey",
    metaTitle: "Block Cleaning Haringey | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Haringey. Reliable scheduled communal cleaning for managing agents and estates across the borough. Eco-friendly. Free survey.",
    h1: "Block cleaning in Haringey",
    answer:
      "Neo Eco Cleaning provides specialist block cleaning in Haringey, keeping the communal areas of residential blocks and estates clean and presentable for managing agents across the borough.",
    body: [
      "Haringey is a priority North London borough with a broad mix of housing, from Victorian conversions to substantial estates with extensive external communal areas. We clean their entrances, hallways, stairwells and external spaces on a reliable schedule.",
      "Haringey's larger estates have generous paths, forecourts and bin areas, so we often pair scheduled communal cleaning with periodic jet washing and pressure washing to keep the whole site presentable.",
    ],
    faqs: [
      { q: "Do you clean blocks of flats in Haringey?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Haringey, plus pressure washing, jet washing and carpet cleaning as needed." },
      { q: "How much does block cleaning cost in Haringey?", a: "We provide a clear fixed quote after a free site survey, based on the block size, the communal areas and how often you need us." },
      { q: "Can you handle large estates in Haringey?", a: "Yes. We scale the schedule and team to the building, which suits Haringey's larger estates with extensive communal areas." },
    ],
  },

  // ---------------- PRESSURE WASHING ----------------
  {
    service: "pressure-washing",
    area: "north-london",
    metaTitle: "Pressure Washing North London | Communal Areas | Neo Eco",
    metaDescription:
      "Communal pressure washing across North London. Restore forecourts, paths, steps and car parks for residential blocks and managing agents. Eco-friendly. Free survey.",
    h1: "Pressure washing in North London",
    answer:
      "Neo Eco Cleaning provides professional communal pressure washing across North London, restoring the forecourts, paths, steps, bin stores and car parks of residential blocks that have been dulled by dirt, algae and grime.",
    body: [
      "North London's blocks have a lot of hard external surface, from entrance steps and paths to paved courtyards and car parks, and all of it greens up and tires over a season or two. Our pressure washing strips that build-up away and resets the surface to a clean, safe finish.",
      "We match pressure and method to each surface, from delicate paving to robust concrete, and often combine pressure washing with the regular communal clean and any jet washing so one team handles the whole block.",
    ],
    faqs: [
      { q: "How often should communal hard surfaces be pressure washed in North London?", a: "An annual wash is the baseline for most North London blocks, with shaded, north-facing or high-traffic areas benefiting from twice-yearly visits to keep algae and grime under control." },
      { q: "Will pressure washing damage my paving?", a: "Not when it is done correctly. We adjust pressure and technique to suit each surface, restoring it without damage." },
      { q: "Can you pressure wash and clean the block on the same visit?", a: "Yes. We often combine communal pressure washing with the regular block clean and any jet washing, so you deal with one accountable contractor." },
    ],
  },
  {
    service: "pressure-washing",
    area: "camden",
    metaTitle: "Pressure Washing Camden | Communal Areas | Neo Eco",
    metaDescription:
      "Communal pressure washing in Camden. Restore entrances, steps, paths and forecourts on period and modern blocks, with surface-safe methods. Free survey.",
    h1: "Pressure washing in Camden",
    answer:
      "Neo Eco Cleaning provides communal pressure washing in Camden, restoring the entrances, steps, paths and forecourts of period and modern residential blocks with surface-appropriate methods.",
    body: [
      "Camden's period blocks have characterful entrances, steps and stone detailing that collect algae and grime but cannot take an aggressive blast. We match pressure and method carefully so the surface is restored without being damaged.",
      "From Victorian conversion entrances to modern development forecourts, we clean Camden's communal hard surfaces and combine the work with the regular block clean and careful stone cleaning where needed.",
    ],
    faqs: [
      { q: "Is pressure washing safe for Camden's period surfaces?", a: "Yes, when matched to the surface. We adjust pressure and technique for delicate period paving and stonework, restoring them without etching or damage." },
      { q: "How often should communal areas in Camden be pressure washed?", a: "An annual wash is the baseline, with shaded or high-traffic Camden entrances and steps benefiting from twice-yearly visits." },
      { q: "Can you pressure wash and clean stonework together in Camden?", a: "Yes. We combine communal pressure washing with careful stone cleaning, using surface-appropriate methods on Camden's period buildings." },
    ],
  },
  {
    service: "pressure-washing",
    area: "islington",
    metaTitle: "Pressure Washing Islington | Communal Areas | Neo Eco",
    metaDescription:
      "Communal pressure washing in Islington. Restore entrances, steps, paths and forecourts on Georgian and Victorian blocks, with surface-safe methods. Free survey.",
    h1: "Pressure washing in Islington",
    answer:
      "Neo Eco Cleaning provides communal pressure washing in Islington, restoring the entrances, steps, paths and forecourts of Georgian and Victorian blocks and modern developments with surface-safe methods.",
    body: [
      "Islington's elegant period terraces and conversions have beautiful but demanding communal steps, paths and stone entrances that gather algae and grime in the shade. We clean them with carefully matched pressure so the surface and its character are protected.",
      "We handle Islington's communal hard surfaces from period steps to modern forecourts, combining pressure washing with the regular block clean and jet washing where deeper restoration is needed.",
    ],
    faqs: [
      { q: "Can you pressure wash Islington's period steps and paths safely?", a: "Yes. We match pressure and technique to the surface, restoring algae-covered period steps and paths without damaging them." },
      { q: "How often should Islington communal areas be pressure washed?", a: "An annual wash suits most blocks, with shaded, north-facing entrances and steps benefiting from twice-yearly visits." },
      { q: "Do you combine pressure washing with block cleaning in Islington?", a: "Yes. One team can handle the communal clean, pressure washing and any jet washing across your Islington block." },
    ],
  },

  // ---------------- JET WASHING ----------------
  {
    service: "jet-washing",
    area: "north-london",
    metaTitle: "Jet Washing North London | Communal Restoration | Neo Eco",
    metaDescription:
      "Communal jet washing across North London. Deep restoration of courtyards, block paving, steps and drains, with moss removal and re-sanding. Free survey.",
    h1: "Jet washing in North London",
    answer:
      "Neo Eco Cleaning provides high-pressure communal jet washing across North London, restoring courtyards, block paving, steps and drains where moss, weed growth and ingrained grime have taken hold.",
    body: [
      "When North London communal paving is left without regular cleaning, the damage works into the joints, the drains and the sand bed underneath. Our jet washing is the deep, targeted work that recovers a neglected surface, and the planned visit that stops it getting that bad in the first place.",
      "A genuine restoration is a staged job: we remove deep-rooted growth and trapped silt, clear blocked drains so the water runs away, carry out the high-pressure wash, and recommend re-sanding the joints where they have been compromised.",
    ],
    proof:
      "Our nearby Watford restorations, including Ashleigh Court, show what deep communal jet washing recovers, from blocked drains to lost joint sand.",
    faqs: [
      { q: "Can heavily neglected North London paving be saved without replacing it?", a: "In most cases, yes. Even severely overgrown communal areas can be restored with deep cleaning, drain clearing and re-sanding, at a fraction of the cost of relaying." },
      { q: "How often should communal paving be jet washed?", a: "For most blocks, once a year keeps moss, algae and weeds under control. North-facing or shaded areas may benefit from twice-yearly visits." },
      { q: "Do you clear blocked communal drains too?", a: "Yes. Where communal drains are blocked we clear them by hand before washing, so the wash water drains away properly rather than flooding the area." },
    ],
  },
  {
    service: "jet-washing",
    area: "watford",
    metaTitle: "Jet Washing Watford | Communal Restoration | Neo Eco",
    metaDescription:
      "Specialist communal jet washing in Watford. Real projects across The Reeds and a major courtyard restoration at Ashleigh Court for Rendall & Rittner. Free survey.",
    h1: "Jet washing in Watford",
    answer:
      "Neo Eco Cleaning is an experienced communal jet washing contractor in Watford, with real projects across The Reeds development and a major four-day courtyard restoration at Ashleigh Court.",
    body: [
      "Watford is one of our most active areas for communal jet washing. We have restored entrances, steps, paths and courtyards across an entire residential development at The Reeds, tackling mould, algae, kerb appeal and step safety building by building, from Badminton House to Westminster House.",
      "At Ashleigh Court we recovered a communal square that had not been jet washed in five years, clearing almost 60 sacks of mud and deep-rooted growth over four days, clearing blocked drains, then recommending re-sanding to protect the result.",
    ],
    proof:
      "Our Watford work was carried out for Ms Jennifer Mann, Senior Property Manager at Rendall & Rittner, across multiple buildings at The Reeds and at Ashleigh Court.",
    faqs: [
      { q: "Do you do jet washing in Watford?", a: "Yes. Watford is one of our most active areas. We have completed communal jet washing across The Reeds development and a full courtyard restoration at Ashleigh Court for the managing agent Rendall & Rittner." },
      { q: "Can you restore a badly neglected communal courtyard in Watford?", a: "Yes. At Ashleigh Court we restored a courtyard left for five years, clearing deep-rooted growth, blocked drains and trapped silt over four days, then re-sanding the joints to protect the surface." },
      { q: "Do you offer planned maintenance jet washing in Watford?", a: "Yes. Regular scheduled jet washing prevents the kind of deep neglect that turns a routine visit into a multi-day restoration, and it is more cost-effective for managing agents." },
      { q: "How much does jet washing cost in Watford?", a: "It depends on the size and condition of the area. A routine maintenance wash is straightforward to quote; a deep restoration is priced after a survey. Either way we quote clearly with no obligation." },
    ],
  },
  {
    service: "jet-washing",
    area: "hertfordshire",
    metaTitle: "Jet Washing Hertfordshire | Communal Cleaning | Neo Eco",
    metaDescription:
      "Communal jet washing and pressure washing across Hertfordshire. Real Watford projects for managing agents including Rendall & Rittner. Restoration and maintenance. Free survey.",
    h1: "Jet washing in Hertfordshire",
    answer:
      "Neo Eco Cleaning provides communal jet washing and pressure washing across Hertfordshire, with extensive real project experience across Watford for managing agents and freeholders.",
    body: [
      "Hertfordshire, and Watford in particular, is where much of our communal jet washing work happens. We carry out everything from routine maintenance washing to full courtyard restorations across residential blocks in the county.",
      "Our Hertfordshire projects span an entire development at The Reeds in Watford, covering entrance and step jet washing, mould and algae removal, kerb-appeal refreshes and a major restoration at Ashleigh Court, giving us deep local experience with the county's communal areas.",
    ],
    proof:
      "Our Hertfordshire work includes repeated communal jet washing across Watford for managing agents including Rendall & Rittner.",
    faqs: [
      { q: "Do you work in Hertfordshire?", a: "Yes, extensively. We have carried out numerous communal jet washing and cleaning projects across Watford and the surrounding Hertfordshire area for managing agents including Rendall & Rittner." },
      { q: "What communal jet washing do you offer in Hertfordshire?", a: "Entrance and step jet washing, mould and algae removal, deep courtyard restoration, drain clearing and re-sanding, plus planned maintenance washing." },
      { q: "Can you set up planned maintenance in Hertfordshire?", a: "Yes. We work with managing agents to build communal jet washing into a recurring maintenance programme, which is more cost-effective than reactive one-off cleans." },
    ],
  },

  // ---------------- CARPET CLEANING ----------------
  {
    service: "carpet-cleaning",
    area: "north-london",
    metaTitle: "Communal Carpet Cleaning North London | Neo Eco",
    metaDescription:
      "Professional communal carpet cleaning across North London. Deep clean hallway and stairwell carpets in residential blocks, lift embedded soil, extend carpet life. Free quote.",
    h1: "Communal carpet cleaning in North London",
    answer:
      "Neo Eco Cleaning provides professional communal carpet cleaning across North London, deep cleaning hallway and stairwell carpets in residential blocks to lift embedded dirt that ordinary vacuuming cannot reach.",
    body: [
      "Communal carpets in North London blocks are some of the hardest-working surfaces in the building. Every resident, visitor and delivery walks the same hallways, leaving dirt, grit and stains that dull the pile and shorten its life. A professional deep clean reaches what a domestic vacuum cannot.",
      "We work block by block, treat high-traffic lanes and entrances first, and plan drying so residents can use the hallways safely. For managing agents it is one of the most visible signs of a well-run building, and it protects an expensive communal asset.",
    ],
    faqs: [
      { q: "How often should communal carpets be cleaned in North London?", a: "For busy North London blocks, every 6 to 12 months is ideal. High-footfall entrance areas may need more frequent attention than upper-floor hallways." },
      { q: "Do you clean carpets in occupied North London blocks?", a: "Yes. We schedule communal carpet cleaning to minimise disruption and keep shared routes usable throughout the visit." },
      { q: "Will deep cleaning extend the life of our communal carpets?", a: "Yes. Regular professional cleaning removes the abrasive grit that wears fibres down, protecting the carpet and delaying costly replacement." },
    ],
  },
  {
    service: "carpet-cleaning",
    area: "west-london",
    metaTitle: "Communal Carpet Cleaning West London | Chiswick | Neo Eco",
    metaDescription:
      "Professional communal carpet cleaning across West London. Real project at Chiswick Gate, Blocks A, F and G, for Rendall & Rittner. Deep clean hallway carpets. Free quote.",
    h1: "Communal carpet cleaning in West London",
    answer:
      "Neo Eco Cleaning provides professional communal carpet cleaning across West London, with a real project at Chiswick Gate where we deep cleaned the communal carpets across Blocks A, F and G in a single planned visit.",
    body: [
      "West London has a high concentration of managed developments with large communal carpeted areas that take heavy footfall. We deep clean hallway and stairwell carpets to lift embedded soil, working block by block and planning drying so residents can use the hallways safely.",
      "At Chiswick Gate we cleaned communal carpets across three blocks in one visit for the managing agent, bringing tired hallway carpets back to life with minimal disruption to residents.",
    ],
    proof:
      "Our Chiswick Gate project covered communal carpet cleaning across Blocks A, F and G, prepared for Ms Jennifer Mann, Senior Property Manager at Rendall & Rittner.",
    faqs: [
      { q: "Have you cleaned communal carpets in West London?", a: "Yes. At Chiswick Gate we deep cleaned the communal carpets across Blocks A, F and G in a single planned visit for the managing agent Rendall & Rittner." },
      { q: "How long do communal carpets take to dry?", a: "Most communal carpets are walkable within a few hours. We plan the work to keep hallways safe and accessible throughout." },
      { q: "How often should West London communal carpets be cleaned?", a: "For busy managed blocks, every 6 to 12 months is ideal, with high-footfall entrance areas cleaned more often." },
    ],
  },
];

/** Lookup helpers */
export const serviceAreaKey = (service: string, area: string) => `${service}/${area}`;
export const serviceAreaBy = (service: string, area: string): ServiceArea | undefined =>
  serviceAreas.find((sa) => sa.service === service && sa.area === area);
export const serviceAreaParams = serviceAreas.map((sa) => ({ service: sa.service, area: sa.area }));

/** Sibling money pages for internal linking (same service first, then same area). */
export function serviceAreaSiblings(service: string, area: string, limit = 3): ServiceArea[] {
  const sameService = serviceAreas.filter((sa) => sa.service === service && sa.area !== area);
  const sameArea = serviceAreas.filter((sa) => sa.area === area && sa.service !== service);
  const seen = new Set<string>();
  const out: ServiceArea[] = [];
  for (const sa of [...sameService, ...sameArea]) {
    const k = serviceAreaKey(sa.service, sa.area);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(sa);
    if (out.length >= limit) break;
  }
  return out;
}
