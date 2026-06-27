/** Services data — source of truth for the services hub, service detail pages and cross-links. */

export type ServiceFAQ = { q: string; a: string };
export type ServiceSection = { heading: string; body: string[] };
export type ServiceBenefit = { title: string; body: string };
export type ServiceStep = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  flagship?: boolean;
  order: number;
  image: string; // asset id in /public/media/images
  icon: string; // lucide-react icon name
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opening paragraph (what a person or AI engine extracts). */
  answer: string;
  intro: string[];
  benefits: ServiceBenefit[];
  sections: ServiceSection[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  related: string[];
  keywords: string[];
  /** Areas with dedicated service-area money pages. */
  moneyAreas: string[];
};

export const services: Service[] = [
  {
    slug: "block-cleaning",
    name: "Block Cleaning",
    navLabel: "Block Cleaning",
    flagship: true,
    order: 1,
    image: "service-block-cleaning",
    icon: "Building2",
    tagline: "Communal-area cleaning for blocks of flats and managing agents.",
    metaTitle: "Block Cleaning London | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block cleaning and communal-area cleaning for managing agents and freeholders across London. Reliable, eco-friendly, 24/7. Get a free site survey.",
    h1: "Block cleaning and communal-area cleaning across London",
    answer:
      "Neo Eco Cleaning is a specialist block cleaning company that keeps the communal areas of residential blocks clean, safe and presentable for managing agents, freeholders and residents across North London, Central London and the surrounding boroughs.",
    intro: [
      "Communal areas are the first thing a resident, leaseholder or prospective buyer sees, and the part of a building a managing agent is judged on most. Tired entrances, dusty stairwells and grimy bin stores quietly undermine confidence in how a block is run. Clean, well-kept communal spaces do the opposite: they reassure leaseholders that their service charge is working and keep a development looking cared for.",
      "Block cleaning is our core service and around 70% of what we do. We look after entrances, lobbies, hallways, stairwells, lifts, bin stores, car parks and external communal areas on a planned schedule, so every visit is consistent and nothing is left to chance.",
    ],
    benefits: [
      { title: "Reliable scheduled visits", body: "A planned cleaning rota with the same high standard every visit, so your blocks always look their best and complaints stay low." },
      { title: "One contractor, every surface", body: "Floors, glass, carpets, hard external surfaces and bin stores handled by a single trusted team, with pressure washing and carpet cleaning on call when needed." },
      { title: "Before and after records", body: "We document our work so you can show leaseholders exactly where their service charge is going." },
      { title: "Eco-friendly throughout", body: "Environmentally friendly products and low-carbon methods that are safe for residents, pets and surrounding planting." },
    ],
    sections: [
      {
        heading: "What communal block cleaning covers",
        body: [
          "Our standard communal clean covers the areas residents use and judge every day: the main entrance and door glass, lobbies and hallways, staircases and handrails, lift interiors, communal windows within reach, and bin and recycling stores. We dust, vacuum, mop, sanitise touch points and remove litter, leaving shared spaces fresh.",
          "Beyond the routine, we handle the heavier work that keeps a block in good order: communal carpet cleaning, jet washing and pressure washing of paths, steps, forecourts and car parks, and stone and facade cleaning. Bundling this with your regular clean means one accountable contractor for the whole building.",
        ],
      },
      {
        heading: "Built for managing agents and freeholders",
        body: [
          "Managing agents need a contractor who turns up, communicates clearly and never becomes the reason for a leaseholder complaint. We work to a clear scope, keep to schedule, and flag issues such as blocked drains or damaged surfaces before they become expensive.",
          "We are trusted by managing agents and major residential developments, and we work alongside agents including Rendall & Rittner and MVN Block Management on communal cleaning across their portfolios.",
        ],
      },
    ],
    process: [
      { title: "Free site survey", body: "We visit the block, walk the communal areas with you and agree a clear scope and frequency." },
      { title: "A planned rota", body: "We set a schedule that suits the building and budget, from weekly communal cleans to periodic deep cleans." },
      { title: "Consistent visits", body: "The same standard every visit, with the right products and equipment for each surface." },
      { title: "Records and review", body: "Before and after records for your leaseholders, and a regular review so the service keeps pace with the building." },
    ],
    faqs: [
      { q: "What does block cleaning include?", a: "Block cleaning covers the communal areas of a residential building: entrances, lobbies, hallways, stairwells, lifts, communal windows, bin stores, car parks and external paths. We clean on a planned schedule and add communal carpet cleaning, jet washing and pressure washing as needed." },
      { q: "Do you clean communal areas for managing agents?", a: "Yes. Managing agents and freeholders are our core clients. We work to an agreed scope and schedule, keep to time, and provide before and after records so you can demonstrate value to leaseholders." },
      { q: "How much does block cleaning cost?", a: "Cost depends on the size of the block, the number of communal areas and the frequency of visits. We provide a clear fixed quote after a free site survey, with no obligation." },
      { q: "Are your cleaning products eco-friendly?", a: "Yes. We use environmentally friendly products and low-carbon methods as standard, and let technique and high-pressure water do the heavy lifting rather than harsh chemicals. Communal areas are safe for residents and pets once dry." },
      { q: "How often should communal areas be cleaned?", a: "Most blocks benefit from a weekly or fortnightly communal clean, with periodic deep cleans and an annual jet wash of external areas. We recommend a frequency at the site survey based on footfall and building type." },
    ],
    related: ["pressure-washing", "jet-washing", "carpet-cleaning"],
    keywords: ["block cleaning", "communal area cleaning", "communal cleaning", "block management cleaning", "estate cleaning", "blocks of flats cleaning", "managing agent cleaning"],
    moneyAreas: ["north-london", "central-london", "barnet", "enfield", "camden", "islington", "haringey"],
  },

  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    navLabel: "Pressure Washing",
    order: 2,
    image: "service-pressure-washing",
    icon: "SprayCan",
    tagline: "Restore communal forecourts, paths, steps and car parks.",
    metaTitle: "Pressure Washing London | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Professional communal pressure washing for residential blocks across London. Forecourts, paths, steps, car parks and facades restored. Eco-friendly. Free survey.",
    h1: "Communal pressure washing for residential blocks",
    answer:
      "Neo Eco Cleaning provides professional pressure washing for the communal hard surfaces of residential blocks across London, restoring forecourts, paths, steps, bin stores and car parks that have been dulled by dirt, algae and grime.",
    intro: [
      "Hard external surfaces take a beating from weather and footfall. Over a season or two, paths, steps and forecourts turn green, slippery and tired, dragging down the look of an otherwise well-kept block. Pressure washing strips that build-up away and resets the surface to a clean, safe finish.",
      "We use the right pressure and method for each surface, from delicate paving to robust concrete, so the result is a genuine restoration rather than a quick rinse that looks the same a fortnight later.",
    ],
    benefits: [
      { title: "Safer surfaces", body: "Removing algae and mould restores grip on steps, ramps and paths and reduces slip risk for residents." },
      { title: "Instant kerb appeal", body: "Clean forecourts and entrances lift the whole development and support property values." },
      { title: "Surface-safe method", body: "We match pressure and technique to the surface, restoring it without causing damage." },
      { title: "Low-chemical approach", body: "Physical cleaning and high-pressure water first, with light treatments only where biological growth needs it." },
    ],
    sections: [
      {
        heading: "What we pressure wash",
        body: [
          "We clean communal forecourts, entrance steps and paths, paved courtyards, bin and recycling stores, ramps, walkways and car park surfaces. We also tackle stained walls and external hard surfaces where pressure washing is the right tool.",
          "Pressure washing pairs naturally with our block cleaning and jet washing services. Many managing agents schedule an annual external wash alongside the regular communal clean to keep build-up from ever taking hold.",
        ],
      },
      {
        heading: "Pressure washing or jet washing?",
        body: [
          "The two overlap, but we treat them as distinct. Pressure washing is the broad cleaning of communal hard surfaces. Jet washing is the higher-powered, more targeted work for ingrained moss, weed growth and block paving that has been neglected for years. We recommend the right approach at the survey, and often combine both on a single visit.",
        ],
      },
    ],
    process: [
      { title: "Survey the surfaces", body: "We assess each surface, its condition and the right pressure and method." },
      { title: "Prepare and protect", body: "We clear loose debris, protect planting and drains, and treat heavy biological growth where needed." },
      { title: "Wash and finish", body: "A controlled high-pressure clean across the area for an even, restored finish." },
      { title: "Clear and check", body: "We clear run-off, check drainage and leave the area safe and tidy." },
    ],
    faqs: [
      { q: "Will pressure washing damage my paving?", a: "Not when it is done correctly. We adjust pressure and technique to suit each surface, from delicate paving to concrete, so the surface is restored without damage." },
      { q: "How often should communal hard surfaces be pressure washed?", a: "An annual wash is the baseline for most blocks, with shaded, north-facing or high-traffic areas benefiting from twice-yearly visits to keep algae and grime under control." },
      { q: "Do you use harsh chemicals?", a: "No. We rely on physical cleaning and high-pressure water, using only light, targeted treatments where biological growth genuinely needs it, which protects residents, pets and surrounding planting." },
      { q: "Can you pressure wash and clean the block on the same visit?", a: "Yes. We often combine communal pressure washing with the regular block clean and any jet washing, so you deal with one accountable contractor for the whole building." },
    ],
    related: ["jet-washing", "block-cleaning", "stone-cleaning"],
    keywords: ["pressure washing", "communal pressure washing", "forecourt cleaning", "exterior cleaning", "patio cleaning", "car park cleaning"],
    moneyAreas: ["north-london", "camden", "islington"],
  },

  {
    slug: "jet-washing",
    name: "Jet Washing",
    navLabel: "Jet Washing",
    order: 3,
    image: "service-jet-washing",
    icon: "Waves",
    tagline: "Deep restoration of communal paving, courtyards and drains.",
    metaTitle: "Jet Washing London & Watford | Communal Cleaning | Neo Eco",
    metaDescription:
      "Professional jet washing for communal courtyards, block paving, steps and drains across London and Watford. Moss removal, drain clearing, re-sanding. Free survey.",
    h1: "Jet washing for communal courtyards, paving and steps",
    answer:
      "Neo Eco Cleaning provides high-pressure jet washing for residential blocks across London, Watford and Hertfordshire, restoring communal courtyards, block paving, steps and drains where moss, weed growth and ingrained grime have taken hold.",
    intro: [
      "When communal paving is left without regular cleaning, the damage does not stay on the surface. It works into the joints, the drains and the sand bed underneath. Jet washing is the deep, targeted work that recovers a surface once maintenance has been allowed to lapse, and the planned visit that stops it happening in the first place.",
      "Our Watford projects show what this looks like in practice: at Ashleigh Court we cleared almost 60 sacks of mud and deep-rooted growth over four days to recover a courtyard that had not been jet washed in five years.",
    ],
    benefits: [
      { title: "Recovers neglected surfaces", body: "Even severely overgrown paving can usually be saved with deep cleaning, drain clearing and re-sanding, at a fraction of the cost of relaying." },
      { title: "Clears drains too", body: "We clear blocked communal drains by hand so wash water runs away properly rather than flooding the area." },
      { title: "Protects the surface", body: "We recommend re-sanding joints after a deep restoration so the result lasts and weeds do not return quickly." },
      { title: "Eco-friendly power", body: "High-pressure water and manual removal do the work, with minimal chemical input." },
    ],
    sections: [
      {
        heading: "What jet washing involves",
        body: [
          "A genuine restoration is a staged job, not a quick rinse. We remove deep-rooted moss and weed growth by hand and with specialist tools, clear the trapped mud and silt that comes up with it, clear any blocked drains, and only then carry out the high-pressure wash. Where joint sand has been lost, we recommend re-sanding to stabilise the tiles.",
        ],
      },
      {
        heading: "Why regular jet washing pays for itself",
        body: [
          "A short annual jet wash keeps moss, algae and weeds from ever establishing. Skip it for years and a routine visit becomes a multi-day excavation, with sack after sack of mud, blocked drains and lost joint sand. Regular maintenance is always cheaper, faster and kinder to the surface than restoration.",
        ],
      },
    ],
    process: [
      { title: "Assess the damage", body: "We survey the paving, joints and drains and agree the scope, from a routine wash to a full restoration." },
      { title: "Clear growth and silt", body: "We remove deep-rooted moss and weeds and clear the trapped mud and debris by hand." },
      { title: "Clear drains, then wash", body: "We clear blocked drains so water drains away, then carry out the high-pressure jet wash." },
      { title: "Re-sand and protect", body: "We recommend re-sanding compromised joints to stabilise the surface and slow regrowth." },
    ],
    faqs: [
      { q: "Can heavily neglected paving be saved without replacing it?", a: "In most cases, yes. Even severely overgrown communal areas can be restored with deep cleaning, drain clearing and re-sanding, at a fraction of the cost of relaying." },
      { q: "How often should communal paving be jet washed?", a: "For most residential blocks, once a year keeps moss, algae and weeds under control. North-facing or shaded areas may benefit from twice-yearly visits." },
      { q: "Do you clear blocked drains as part of the work?", a: "Yes. Where communal drains are blocked we clear them by hand before washing, so the wash water drains away properly rather than flooding the area." },
      { q: "What is re-sanding and do I need it?", a: "After a deep clean, much of the sand in the paving joints can be lost. Re-sanding refills those joints to stabilise the tiles and protect the surface from the next round of weed growth. We recommend it after any major restoration." },
    ],
    related: ["pressure-washing", "block-cleaning", "stone-cleaning"],
    keywords: ["jet washing", "communal jet washing", "block paving cleaning", "moss removal", "drain clearing", "courtyard cleaning"],
    moneyAreas: ["north-london", "watford", "hertfordshire"],
  },

  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    navLabel: "Carpet Cleaning",
    order: 4,
    image: "service-carpet-cleaning",
    icon: "Layers",
    tagline: "Deep cleaning for communal hallway and stairwell carpets.",
    metaTitle: "Communal Carpet Cleaning London | Block Carpets | Neo Eco",
    metaDescription:
      "Professional communal carpet cleaning for residential blocks across London. Deep clean hallway and stairwell carpets, lift embedded soil, extend carpet life. Free quote.",
    h1: "Communal carpet cleaning for residential blocks",
    answer:
      "Neo Eco Cleaning provides professional communal carpet cleaning for residential blocks across London, deep cleaning hallway and stairwell carpets to lift embedded dirt that ordinary vacuuming cannot reach.",
    intro: [
      "Communal carpets are some of the hardest-working surfaces in a managed block. Every resident, visitor, delivery and dog walks the same hallways, leaving dirt, grit and stains that dull the pile and shorten its life. A professional deep clean lifts embedded soil from deep in the fibres and lifts the whole feel of a building.",
      "At Chiswick Gate we deep cleaned the communal carpets across Blocks A, F and G in a single planned visit, bringing tired hallway carpets back to life with minimal disruption to residents.",
    ],
    benefits: [
      { title: "Protects an expensive asset", body: "Removing abrasive grit extends carpet life and delays costly replacement across the development." },
      { title: "Brighter shared spaces", body: "Refreshed carpets give hallways and stairwells a lighter, more cared-for feel that residents notice." },
      { title: "Planned around residents", body: "We work block by block and plan drying so hallways stay safe and usable throughout." },
      { title: "Eco-friendly products", body: "Safe for residents and pets, with low-impact products and methods as standard." },
    ],
    sections: [
      {
        heading: "Why communal carpets need professional cleaning",
        body: [
          "Hallway and stairwell carpets trap tracked-in dirt and grit, spills and pet accidents, and dust and allergens that settle into the pile. Left untreated this build-up dulls the carpet, wears the fibres and creates a tired first impression. A professional deep clean reaches what a domestic vacuum cannot.",
        ],
      },
      {
        heading: "A methodical approach for blocks",
        body: [
          "Cleaning communal carpets at scale needs a plan. We work block by block, treat high-traffic lanes and entrances first, and manage drying so residents can use the hallways safely. For managing agents, it is one of the most visible signs of a well-run building.",
        ],
      },
    ],
    process: [
      { title: "Survey and plan", body: "We assess the carpets, traffic patterns and drying needs and plan the visit around residents." },
      { title: "Pre-treat", body: "We treat high-traffic lanes, entrances and stains before the deep clean." },
      { title: "Deep clean", body: "A professional deep clean lifts embedded soil from deep in the pile, not just the surface." },
      { title: "Manage drying", body: "We plan the work so communal routes stay safe and are walkable again quickly." },
    ],
    faqs: [
      { q: "How often should communal carpets be professionally cleaned?", a: "For busy residential blocks, every 6 to 12 months is ideal. High-footfall entrance areas may need more frequent attention than upper-floor hallways." },
      { q: "How long do communal carpets take to dry?", a: "Drying time depends on the method and ventilation, but most communal carpets are walkable within a few hours. We plan the work to keep hallways safe and accessible." },
      { q: "Do you clean carpets in occupied blocks?", a: "Yes. We schedule communal carpet cleaning to minimise disruption to residents and keep shared routes usable throughout the visit." },
      { q: "Will deep cleaning extend the life of the carpet?", a: "Yes. Regular professional cleaning removes the abrasive grit that wears fibres down, protecting the carpet and delaying costly replacement." },
    ],
    related: ["block-cleaning", "end-of-tenancy-cleaning", "pressure-washing"],
    keywords: ["communal carpet cleaning", "carpet cleaning", "hallway carpet cleaning", "residential block carpet cleaning", "deep carpet cleaning"],
    moneyAreas: ["north-london", "west-london"],
  },

  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    navLabel: "Window Cleaning",
    order: 5,
    image: "service-window-cleaning",
    icon: "PanelsTopLeft",
    tagline: "Streak-free communal glass, entrances and external windows.",
    metaTitle: "Communal Window Cleaning London | Block Glass | Neo Eco",
    metaDescription:
      "Professional communal window and glass cleaning for residential blocks across London. Streak-free entrances, communal glass and external windows. Free quote.",
    h1: "Communal window cleaning for residential blocks",
    answer:
      "Neo Eco Cleaning provides communal window and glass cleaning for residential blocks across London, keeping entrance glass, communal windows and external glazing streak-free and bright.",
    intro: [
      "Clean glass changes how a building feels. Bright entrance doors and sparkling communal windows make a lobby feel cared for, while smeared or dusty glass undermines everything else. We keep the communal glazing of a block clean and clear as part of a planned schedule or as a standalone visit.",
      "We clean entrance and lobby glass, internal communal windows, and accessible external windows, using the right method and reach equipment for the building.",
    ],
    benefits: [
      { title: "Brighter entrances", body: "Clean entrance glass and lobby windows lift the whole arrival experience for residents and visitors." },
      { title: "Part of the routine", body: "Easily bundled with your communal clean so the whole block is handled by one team." },
      { title: "Right method, right reach", body: "We use the appropriate technique and access equipment for accessible communal and external glass." },
      { title: "Streak-free finish", body: "A clear, even finish without smears, every visit." },
    ],
    sections: [
      {
        heading: "What we clean",
        body: [
          "Our communal window cleaning covers entrance and lobby glass, communal stairwell and hallway windows, and accessible external windows. We agree the scope at survey, including which external glazing is reachable safely from the ground or with our access equipment.",
        ],
      },
    ],
    process: [
      { title: "Survey access", body: "We confirm which communal and external glass is in scope and the safe method for each." },
      { title: "Clean to a finish", body: "A streak-free clean of entrance glass, communal and accessible external windows." },
      { title: "Schedule", body: "We set a frequency that keeps the glass consistently clear, bundled with your communal clean if you wish." },
    ],
    faqs: [
      { q: "Do you clean external windows on blocks of flats?", a: "We clean accessible external windows using the right method and access equipment, agreed at the survey. We confirm exactly which glazing is safely reachable before quoting." },
      { q: "Can window cleaning be part of our regular block clean?", a: "Yes. Communal window cleaning is easily bundled with your scheduled communal clean, so one team handles the whole building." },
      { q: "How often should communal windows be cleaned?", a: "Most blocks benefit from regular visits through the year. We recommend a frequency at the survey based on the building, its surroundings and footfall." },
    ],
    related: ["block-cleaning", "pressure-washing", "stone-cleaning"],
    keywords: ["communal window cleaning", "window cleaning", "block window cleaning", "glass cleaning"],
    moneyAreas: [],
  },

  {
    slug: "end-of-tenancy-cleaning",
    name: "End-of-Tenancy Cleaning",
    navLabel: "End-of-Tenancy",
    order: 6,
    image: "service-end-of-tenancy-cleaning",
    icon: "KeyRound",
    tagline: "Thorough move-out cleans that leave a flat ready to let.",
    metaTitle: "End of Tenancy Cleaning London | Move Out Clean | Neo Eco",
    metaDescription:
      "Professional end-of-tenancy cleaning across London. Thorough move-out cleans for flats and apartments that leave the property ready to let. Eco-friendly. Free quote.",
    h1: "End-of-tenancy cleaning across London",
    answer:
      "Neo Eco Cleaning provides thorough end-of-tenancy cleaning for flats and apartments across London, leaving a property spotless and ready to let or hand back at the end of a tenancy.",
    intro: [
      "The end of a tenancy is when a property has to look its absolute best, for the next resident, for a check-out report and for the deposit. A deep end-of-tenancy clean takes a flat back to a fresh, move-in-ready condition from top to bottom.",
      "We clean kitchens and appliances, bathrooms, floors, internal glass, fittings and fixtures, working to a thorough checklist so nothing is missed.",
    ],
    benefits: [
      { title: "Move-in-ready finish", body: "A deep clean throughout that leaves the property fresh and ready to let or hand back." },
      { title: "Thorough checklist", body: "Kitchens, appliances, bathrooms, floors and fittings handled to a consistent, thorough standard." },
      { title: "Convenient for agents", body: "A reliable partner for managing agents and landlords turning around flats between tenancies." },
      { title: "Eco-friendly products", body: "Low-impact products that are safe and leave the property fresh, not chemical-heavy." },
    ],
    sections: [
      {
        heading: "What an end-of-tenancy clean covers",
        body: [
          "We deep clean the kitchen including appliances and units, bathrooms and sanitaryware, all floors, internal glass and mirrors, skirtings, switches and fittings. The goal is a property that presents at its best for the next tenant and for the check-out report.",
        ],
      },
    ],
    process: [
      { title: "Confirm scope", body: "We agree the property size, condition and any specific check-out requirements." },
      { title: "Deep clean throughout", body: "A thorough top-to-bottom clean to a consistent checklist." },
      { title: "Final check", body: "A walkthrough so the flat is left move-in-ready." },
    ],
    faqs: [
      { q: "What is included in an end-of-tenancy clean?", a: "A deep clean throughout: kitchen and appliances, bathrooms, all floors, internal glass, skirtings, switches and fittings, leaving the property move-in-ready for the next tenant." },
      { q: "Do you work with letting and managing agents?", a: "Yes. We are a reliable partner for managing agents and landlords turning flats around between tenancies, alongside our communal cleaning work." },
      { q: "Are your products safe and eco-friendly?", a: "Yes. We use low-impact, environmentally friendly products that leave the property fresh rather than heavy with chemical smell." },
    ],
    related: ["carpet-cleaning", "block-cleaning", "window-cleaning"],
    keywords: ["end of tenancy cleaning", "move out cleaning", "tenancy clean", "flat cleaning"],
    moneyAreas: [],
  },

  {
    slug: "stone-cleaning",
    name: "Stone Cleaning",
    navLabel: "Stone Cleaning",
    order: 7,
    image: "service-stone-cleaning",
    icon: "Gem",
    tagline: "Gentle restoration of stone, masonry and building facades.",
    metaTitle: "Stone Cleaning London | Facade & Masonry Cleaning | Neo Eco",
    metaDescription:
      "Professional stone and masonry cleaning for residential buildings across London. Gentle facade restoration that lifts grime without damaging the stone. Free survey.",
    h1: "Stone and facade cleaning for residential buildings",
    answer:
      "Neo Eco Cleaning provides gentle stone and masonry cleaning for residential buildings across London, lifting grime, pollution and biological staining from facades and stonework without damaging the surface.",
    intro: [
      "Stone and masonry give a building its character, but city pollution, algae and weathering dull that surface over time. The right cleaning method lifts the grime and brings the stonework back, while the wrong one can etch or damage it. We match the method to the stone for a safe, even restoration.",
      "From entrance stonework and steps to larger facade areas, we restore the appearance of a building without harsh treatment.",
    ],
    benefits: [
      { title: "Surface-appropriate method", body: "We match technique and pressure to the stone, restoring it without etching or damage." },
      { title: "Lifts pollution and staining", body: "Removes city grime, algae and biological staining for an even, restored finish." },
      { title: "Restores building character", body: "Brings tired facades and entrance stonework back to their best." },
      { title: "Low-impact approach", body: "Minimal chemical use, safe for the building and its surroundings." },
    ],
    sections: [
      {
        heading: "What we clean",
        body: [
          "We clean entrance stonework and steps, masonry detailing, and accessible facade areas. Because stone varies so much, we always survey first and test an area where needed, so the method is right for that surface before we treat the whole.",
        ],
      },
    ],
    process: [
      { title: "Survey and test", body: "We assess the stone and, where needed, test a small area to confirm the right method." },
      { title: "Treat gently", body: "We lift grime and staining with the appropriate, surface-safe technique." },
      { title: "Even finish", body: "A consistent, restored finish across the stonework or facade." },
    ],
    faqs: [
      { q: "Will cleaning damage the stone?", a: "Not when the method is matched to the surface. Stone varies, so we survey first and test where needed to confirm the right, surface-safe technique before treating the whole area." },
      { q: "Can you clean a whole facade?", a: "We clean accessible facade and masonry areas, confirmed at the survey along with the safe access method for the building." },
      { q: "Do you use harsh chemicals on stonework?", a: "We keep chemical use to a minimum and choose surface-appropriate, low-impact methods that protect the stone and its surroundings." },
    ],
    related: ["pressure-washing", "jet-washing", "block-cleaning"],
    keywords: ["stone cleaning", "facade cleaning", "masonry cleaning", "building cleaning"],
    moneyAreas: [],
  },
];

export const serviceBySlug = (slug: string): Service | undefined => services.find((s) => s.slug === slug);
export const serviceSlugs = services.map((s) => s.slug);
export const flagshipService = services.find((s) => s.flagship)!;
