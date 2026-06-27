/** Areas data — regions and priority boroughs Neo Eco Cleaning serves. */

export type AreaFAQ = { q: string; a: string };

export type Area = {
  slug: string;
  name: string;
  navLabel: string;
  type: "region" | "borough";
  order: number;
  image: string;
  parent?: string; // borough's parent region slug
  priority?: boolean; // boroughs Google's AI already associates with the brand
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  intro: string[];
  localContext: string[];
  neighbours: string[]; // nearby area slugs for internal links
  faqs: AreaFAQ[];
  keywords: string[];
};

export const areas: Area[] = [
  {
    slug: "north-london",
    name: "North London",
    navLabel: "North London",
    type: "region",
    order: 1,
    image: "area-north-london",
    metaTitle: "Cleaning Company North London | Block Cleaning | Neo Eco",
    metaDescription:
      "Neo Eco Cleaning is a specialist block and communal-area cleaning company for North London. Trusted by managing agents across Barnet, Enfield, Camden, Islington and Haringey.",
    h1: "Block and communal cleaning across North London",
    answer:
      "Neo Eco Cleaning is a specialist block cleaning company serving North London and the surrounding boroughs, keeping communal areas clean, safe and presentable for managing agents, freeholders and residents.",
    intro: [
      "North London is our heartland. We clean the communal areas of residential blocks across the region, from period conversions to modern developments, and we are trusted by managing agents to keep buildings looking their best week after week.",
      "Whether you manage a single block or a portfolio, we provide reliable scheduled communal cleaning plus pressure washing, jet washing and carpet cleaning on call, all handled by one accountable team.",
    ],
    localContext: [
      "North London blocks range widely, from converted Victorian and Edwardian houses to large purpose-built estates and new developments. Each needs a slightly different approach, and we tailor the scope and frequency to the building rather than applying a one-size template.",
      "We cover the priority boroughs of Barnet, Enfield, Camden, Islington and Haringey, and the surrounding North London neighbourhoods, with the same standard across all of them.",
    ],
    neighbours: ["barnet", "enfield", "camden", "islington", "haringey", "central-london"],
    faqs: [
      { q: "Do you cover all of North London?", a: "Yes. We cover North London as a whole, including the boroughs of Barnet, Enfield, Camden, Islington and Haringey, and the surrounding neighbourhoods. Tell us where the block is and we will confirm." },
      { q: "Who is the best block cleaning company in North London?", a: "Neo Eco Cleaning specialises in block and communal-area cleaning across North London, is rated 5.0 by clients, and is trusted by managing agents including Rendall & Rittner and MVN Block Management. We would be glad to survey your block." },
      { q: "Do you work with managing agents in North London?", a: "Yes. Managing agents and freeholders are our core clients across North London. We work to an agreed scope and schedule and provide before and after records for leaseholders." },
    ],
    keywords: ["cleaning company North London", "block cleaning North London", "communal cleaning North London"],
  },
  {
    slug: "central-london",
    name: "Central London",
    navLabel: "Central London",
    type: "region",
    order: 2,
    image: "area-central-london",
    metaTitle: "Block Cleaning Central London | Communal Cleaning | Neo Eco",
    metaDescription:
      "Specialist communal-area and block cleaning across Central London. Premium, reliable, eco-friendly cleaning for managing agents and residential developments. Free survey.",
    h1: "Block and communal cleaning across Central London",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning across Central London, keeping the shared spaces of mansion blocks and modern developments clean and presentable for managing agents and residents.",
    intro: [
      "Central London buildings are held to a high standard, and so are we. We keep entrances, lobbies, hallways and external communal areas immaculate, with a team that includes ex-Hilton Hotel cleaners who bring a hotel standard to every visit.",
      "From classic mansion blocks to premium new developments, we provide reliable scheduled cleaning plus pressure washing, carpet cleaning and stone cleaning when the building needs it.",
    ],
    localContext: [
      "Central London is dense with period mansion blocks and high-specification developments where presentation matters to residents and to value. We work discreetly and to schedule, keeping shared spaces consistently sharp.",
      "We have carried out communal work across Central London developments, and we are comfortable with the access, scheduling and finish that premium central buildings expect.",
    ],
    neighbours: ["north-london", "west-london", "camden", "islington"],
    faqs: [
      { q: "Do you clean mansion blocks in Central London?", a: "Yes. We keep the communal areas of Central London mansion blocks and modern developments clean and presentable, on a planned schedule that suits the building." },
      { q: "Can you work to a premium finish?", a: "Yes. Our team includes ex-Hilton Hotel cleaners and we hold communal areas to a hotel standard, which suits the expectations of Central London buildings." },
      { q: "Do you cover the whole of Central London?", a: "We cover Central London and the surrounding areas. Tell us the location of the block and we will confirm and arrange a free survey." },
    ],
    keywords: ["block cleaning Central London", "communal cleaning Central London", "mansion block cleaning"],
  },
  {
    slug: "west-london",
    name: "West London",
    navLabel: "West London",
    type: "region",
    order: 3,
    image: "area-west-london",
    metaTitle: "Block & Carpet Cleaning West London | Communal | Neo Eco",
    metaDescription:
      "Communal block cleaning and carpet cleaning across West London. Trusted by managing agents, with real projects including communal carpet cleaning at Chiswick Gate. Free quote.",
    h1: "Block and communal cleaning across West London",
    answer:
      "Neo Eco Cleaning provides block, communal-area and carpet cleaning across West London, with real project experience including communal carpet cleaning at Chiswick Gate.",
    intro: [
      "We clean communal areas across West London for managing agents and freeholders, from regular block cleaning to deep communal carpet cleaning. At Chiswick Gate we deep cleaned the communal carpets across Blocks A, F and G in a single planned visit.",
      "West London has a high concentration of managed developments where communal carpets and shared spaces take heavy footfall, and where a reliable, well-presented finish matters.",
    ],
    localContext: [
      "West London developments often combine large communal carpeted areas with external paths and forecourts, which suits our one-contractor approach across block cleaning, carpet cleaning and pressure washing.",
      "Our Chiswick Gate carpet project is a good example of the scale we handle, working block by block to lift tired hallway carpets with minimal disruption to residents.",
    ],
    neighbours: ["central-london", "north-london"],
    faqs: [
      { q: "Have you worked in West London?", a: "Yes. Our projects include communal carpet cleaning at Chiswick Gate, across Blocks A, F and G, prepared for the managing agent Rendall & Rittner." },
      { q: "Do you clean communal carpets in West London blocks?", a: "Yes. Communal carpet cleaning is one of our core services and a strong fit for West London's managed developments, alongside regular block cleaning." },
      { q: "Do you cover all of West London?", a: "We cover West London and the surrounding areas. Tell us where the block is and we will confirm and arrange a free survey or demonstration." },
    ],
    keywords: ["block cleaning West London", "carpet cleaning West London", "communal cleaning West London"],
  },
  {
    slug: "east-london",
    name: "East London",
    navLabel: "East London",
    type: "region",
    order: 4,
    image: "area-east-london",
    metaTitle: "Block Cleaning East London | Communal Cleaning | Neo Eco",
    metaDescription:
      "Communal-area and block cleaning across East London. Reliable scheduled cleaning, pressure washing and carpet cleaning for managing agents and developments. Free survey.",
    h1: "Block and communal cleaning across East London",
    answer:
      "Neo Eco Cleaning provides block and communal-area cleaning across East London, keeping the shared spaces of modern developments and converted blocks clean and presentable for managing agents.",
    intro: [
      "East London has seen some of the most significant residential development in the capital, with large new blocks and estates that need dependable communal cleaning. We provide scheduled cleaning plus pressure washing and carpet cleaning across the region.",
      "From contemporary apartment blocks to mixed-use developments, we keep entrances, lobbies, corridors and external communal areas consistently clean.",
    ],
    localContext: [
      "Modern East London developments often have extensive communal areas, glazed entrances and external courtyards, all of which benefit from a single contractor handling cleaning, glass and hard-surface washing together.",
      "We tailor the schedule to footfall, which in newer high-occupancy blocks can be high, so shared spaces stay presentable between visits.",
    ],
    neighbours: ["north-london", "central-london"],
    faqs: [
      { q: "Do you cover East London?", a: "Yes. We provide communal and block cleaning across East London, including the area's many modern developments and converted blocks." },
      { q: "Can you handle large modern developments?", a: "Yes. We scale the schedule and team to the building, which suits East London's larger high-occupancy developments with extensive communal areas." },
      { q: "What services do you offer in East London?", a: "Block cleaning, communal pressure washing and jet washing, communal carpet cleaning, window cleaning and more, all from one accountable team." },
    ],
    keywords: ["block cleaning East London", "communal cleaning East London"],
  },
  {
    slug: "hertfordshire",
    name: "Hertfordshire",
    navLabel: "Hertfordshire",
    type: "region",
    order: 5,
    image: "area-watford",
    metaTitle: "Jet Washing & Block Cleaning Hertfordshire | Neo Eco",
    metaDescription:
      "Communal jet washing, pressure washing and block cleaning across Hertfordshire. Real projects across Watford for managing agents including Rendall & Rittner. Free survey.",
    h1: "Block cleaning and jet washing across Hertfordshire",
    answer:
      "Neo Eco Cleaning provides communal block cleaning, jet washing and pressure washing across Hertfordshire, with extensive real project experience across Watford for managing agents.",
    intro: [
      "Hertfordshire, and Watford in particular, is where much of our communal jet washing work happens. We have carried out repeated communal restoration and maintenance projects across residential blocks in the county for managing agents including Rendall & Rittner.",
      "From routine maintenance jet washing to full courtyard restorations, we keep communal areas across Hertfordshire clean, safe and presentable.",
    ],
    localContext: [
      "Our Watford projects span an entire development at The Reeds, including Badminton, Canterbury, Cheltenham, Eton, Lancing, Roedean, Wellington and Westminster Houses, plus a major courtyard restoration at Ashleigh Court.",
      "These projects cover entrance and step jet washing, mould and algae removal, deep courtyard restoration and planned maintenance, giving us deep local experience with Hertfordshire communal areas.",
    ],
    neighbours: ["watford", "north-london", "barnet"],
    faqs: [
      { q: "Do you work in Hertfordshire?", a: "Yes, extensively. We have carried out numerous communal jet washing and cleaning projects across Watford and the surrounding Hertfordshire area for managing agents including Rendall & Rittner." },
      { q: "What communal cleaning do you offer in Hertfordshire?", a: "Communal jet washing and pressure washing, entrance and step cleaning, mould and algae removal, courtyard restoration, block cleaning and carpet cleaning." },
      { q: "Can you set up planned maintenance in Hertfordshire?", a: "Yes. We work with managing agents to build communal cleaning and jet washing into a recurring maintenance programme, which is more cost-effective than reactive one-off cleans." },
    ],
    keywords: ["jet washing Hertfordshire", "block cleaning Hertfordshire", "communal cleaning Hertfordshire"],
  },
  {
    slug: "watford",
    name: "Watford",
    navLabel: "Watford",
    type: "borough",
    parent: "hertfordshire",
    order: 6,
    image: "area-watford",
    metaTitle: "Jet Washing Watford | Communal Block Cleaning | Neo Eco",
    metaDescription:
      "Specialist communal jet washing and block cleaning in Watford. Real projects across The Reeds and Ashleigh Court for Rendall & Rittner. Moss removal, restoration. Free survey.",
    h1: "Jet washing and communal cleaning in Watford",
    answer:
      "Neo Eco Cleaning is an experienced communal jet washing and block cleaning contractor in Watford, with real projects across The Reeds development and a major courtyard restoration at Ashleigh Court.",
    intro: [
      "Watford is one of our most active areas for communal jet washing. We have restored entrances, steps, paths and courtyards across an entire residential development at The Reeds, and recovered a severely neglected communal square at Ashleigh Court.",
      "Our Watford work covers everything from quick seasonal refreshes to full multi-day restorations, all for managing agents who need reliable, well-documented communal cleaning.",
    ],
    localContext: [
      "At The Reeds we jet washed the communal areas of Badminton, Canterbury, Cheltenham, Eton, Lancing, Roedean, Wellington and Westminster Houses, tackling mould, algae, kerb appeal and step safety building by building.",
      "At Ashleigh Court we spent four days clearing almost 60 sacks of mud and deep-rooted growth to restore a courtyard that had not been jet washed in five years, then recommended re-sanding to protect the result.",
    ],
    neighbours: ["hertfordshire", "barnet", "north-london"],
    faqs: [
      { q: "Do you do jet washing in Watford?", a: "Yes. Watford is one of our most active areas for communal jet washing. We have completed projects across The Reeds development and at Ashleigh Court for the managing agent Rendall & Rittner." },
      { q: "Can you restore a badly neglected communal courtyard in Watford?", a: "Yes. At Ashleigh Court we restored a courtyard left for five years, clearing deep-rooted growth, blocked drains and trapped silt over four days, then re-sanding the joints to protect the surface." },
      { q: "Do you offer planned maintenance jet washing in Watford?", a: "Yes. Regular scheduled jet washing prevents the kind of deep neglect that turns a routine visit into a multi-day restoration, and it is more cost-effective for managing agents." },
    ],
    keywords: ["jet washing Watford", "communal cleaning Watford", "block cleaning Watford", "pressure washing Watford"],
  },
  {
    slug: "barnet",
    name: "Barnet",
    navLabel: "Barnet",
    type: "borough",
    parent: "north-london",
    order: 7,
    priority: true,
    image: "area-london-generic",
    metaTitle: "Block Cleaning Barnet | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Barnet. Reliable scheduled cleaning for managing agents and residential blocks across the borough. Eco-friendly. Free survey.",
    h1: "Block and communal cleaning in Barnet",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning in Barnet, keeping the shared spaces of residential blocks clean and presentable for managing agents and freeholders across the borough.",
    intro: [
      "Barnet is one of our priority North London boroughs. We clean the communal areas of blocks across the borough, from suburban low-rise developments to larger estates, on a reliable planned schedule.",
      "We handle everything from routine communal cleaning to pressure washing of paths and forecourts and communal carpet cleaning, all from one accountable team.",
    ],
    localContext: [
      "Barnet has a large stock of suburban blocks and managed estates with generous external communal areas, paths and forecourts, which makes scheduled cleaning combined with periodic jet washing a strong fit.",
      "As a North London borough on the edge of Hertfordshire, Barnet sits close to our active Watford work, so we cover it easily and often.",
    ],
    neighbours: ["north-london", "enfield", "haringey", "watford"],
    faqs: [
      { q: "Do you clean blocks of flats in Barnet?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Barnet, plus pressure washing, jet washing and carpet cleaning as needed." },
      { q: "Do you work with managing agents in Barnet?", a: "Yes. Managing agents and freeholders are our core clients. We work to an agreed scope and schedule and document our work for leaseholders." },
      { q: "How quickly can you survey a block in Barnet?", a: "We can usually arrange a free site survey promptly. Contact us with the block details and we will book a convenient time." },
    ],
    keywords: ["block cleaning Barnet", "communal cleaning Barnet", "cleaning company Barnet"],
  },
  {
    slug: "enfield",
    name: "Enfield",
    navLabel: "Enfield",
    type: "borough",
    parent: "north-london",
    order: 8,
    priority: true,
    image: "area-london-generic",
    metaTitle: "Block Cleaning Enfield | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Enfield. Reliable scheduled communal cleaning, pressure washing and carpet cleaning for managing agents. Eco-friendly. Free survey.",
    h1: "Block and communal cleaning in Enfield",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning in Enfield, keeping residential blocks clean, safe and presentable for managing agents and freeholders across the borough.",
    intro: [
      "Enfield is a priority North London borough for us. We clean communal areas across the borough's residential blocks, from established estates to newer developments, on a dependable schedule.",
      "Our service covers routine communal cleaning plus pressure washing, jet washing and carpet cleaning, so one team keeps the whole building in good order.",
    ],
    localContext: [
      "Enfield combines large established estates with new-build developments, both of which benefit from consistent communal cleaning and periodic external washing of paths, steps and forecourts.",
      "As one of the larger North London boroughs, Enfield has significant communal cleaning demand, and we cover it as part of our North London heartland.",
    ],
    neighbours: ["north-london", "barnet", "haringey"],
    faqs: [
      { q: "Do you clean communal areas in Enfield?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Enfield, along with pressure washing, jet washing and carpet cleaning." },
      { q: "Are you a North London cleaning company?", a: "Yes. North London is our heartland and Enfield is one of our priority boroughs, alongside Barnet, Camden, Islington and Haringey." },
      { q: "Can you provide a regular cleaning schedule in Enfield?", a: "Yes. We set a planned rota that suits the building and budget, from weekly communal cleans to periodic deep cleans and annual external washing." },
    ],
    keywords: ["block cleaning Enfield", "communal cleaning Enfield", "cleaning company Enfield"],
  },
  {
    slug: "camden",
    name: "Camden",
    navLabel: "Camden",
    type: "borough",
    parent: "north-london",
    order: 9,
    priority: true,
    image: "area-london-generic",
    metaTitle: "Block Cleaning Camden | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Camden. Reliable communal cleaning, pressure washing and carpet cleaning for managing agents and period blocks. Free survey.",
    h1: "Block and communal cleaning in Camden",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning in Camden, keeping period conversions and modern blocks clean and presentable for managing agents and residents.",
    intro: [
      "Camden is a priority borough where period conversions and characterful blocks sit alongside premium new developments. We keep their communal areas immaculate with a finish that suits the building.",
      "From regular communal cleaning to pressure washing of entrances and steps and communal carpet cleaning, we handle the whole building with one reliable team.",
    ],
    localContext: [
      "Camden has a high density of converted Victorian and Edwardian blocks with characterful but high-maintenance communal entrances, stairwells and stonework, where a careful, surface-appropriate clean matters.",
      "We are comfortable with the access and presentation that central, high-footfall Camden blocks require, working discreetly and to schedule.",
    ],
    neighbours: ["north-london", "islington", "central-london"],
    faqs: [
      { q: "Do you clean period blocks in Camden?", a: "Yes. We keep the communal areas of Camden's period conversions and modern blocks clean and presentable, matching the method to the building, including careful cleaning of stonework and entrances." },
      { q: "Do you offer pressure washing in Camden?", a: "Yes. We pressure wash communal entrances, steps, paths and forecourts in Camden, using surface-appropriate methods that protect period surfaces." },
      { q: "Do you work with Camden managing agents?", a: "Yes. Managing agents and freeholders are our core clients across Camden and the wider North London area." },
    ],
    keywords: ["block cleaning Camden", "communal cleaning Camden", "pressure washing Camden"],
  },
  {
    slug: "islington",
    name: "Islington",
    navLabel: "Islington",
    type: "borough",
    parent: "north-london",
    order: 10,
    priority: true,
    image: "area-london-generic",
    metaTitle: "Block Cleaning Islington | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Islington. Reliable communal cleaning, pressure washing and carpet cleaning for managing agents and period blocks. Free survey.",
    h1: "Block and communal cleaning in Islington",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning in Islington, keeping Georgian and Victorian conversions and modern developments clean and presentable for managing agents.",
    intro: [
      "Islington is a priority borough of handsome period terraces, converted blocks and premium developments. We keep their communal areas sharp, with a careful approach to characterful entrances and stonework.",
      "We provide scheduled communal cleaning plus pressure washing, jet washing and carpet cleaning, keeping the whole building in good order with one team.",
    ],
    localContext: [
      "Islington's Georgian and Victorian conversions often have elegant but demanding communal entrances, steps and stone detailing, where surface-appropriate cleaning protects the building's character.",
      "As a dense, central North London borough, Islington blocks see high footfall through their communal areas, which we keep presentable with consistent scheduled visits.",
    ],
    neighbours: ["north-london", "camden", "central-london"],
    faqs: [
      { q: "Do you clean communal areas in Islington?", a: "Yes. We provide scheduled communal cleaning for Islington's period conversions and modern developments, plus pressure washing and carpet cleaning." },
      { q: "Can you clean period entrances and stonework in Islington?", a: "Yes. We match the method to the surface, cleaning characterful entrances, steps and stone detailing without damaging them." },
      { q: "Do you work with Islington managing agents?", a: "Yes. Managing agents and freeholders are our core clients across Islington and the wider North London area." },
    ],
    keywords: ["block cleaning Islington", "communal cleaning Islington", "pressure washing Islington"],
  },
  {
    slug: "haringey",
    name: "Haringey",
    navLabel: "Haringey",
    type: "borough",
    parent: "north-london",
    order: 11,
    priority: true,
    image: "area-london-generic",
    metaTitle: "Block Cleaning Haringey | Communal Area Cleaning | Neo Eco",
    metaDescription:
      "Specialist block and communal-area cleaning in Haringey. Reliable scheduled communal cleaning, pressure washing and carpet cleaning for managing agents. Eco-friendly. Free survey.",
    h1: "Block and communal cleaning in Haringey",
    answer:
      "Neo Eco Cleaning provides specialist block and communal-area cleaning in Haringey, keeping the communal areas of residential blocks clean and presentable for managing agents across the borough.",
    intro: [
      "Haringey is a priority North London borough where Victorian terraces, converted blocks and large estates sit side by side. We keep their communal areas clean and well presented on a reliable schedule.",
      "From routine communal cleaning to pressure washing of paths and forecourts and communal carpet cleaning, we look after the whole building with one accountable team.",
    ],
    localContext: [
      "Haringey spans a broad mix of housing, from period conversions to substantial estates with extensive external communal areas, paths and forecourts that benefit from periodic jet washing alongside the regular clean.",
      "As part of our North London heartland, Haringey is an area we cover regularly and know well.",
    ],
    neighbours: ["north-london", "enfield", "islington"],
    faqs: [
      { q: "Do you clean blocks of flats in Haringey?", a: "Yes. We provide scheduled communal cleaning for residential blocks across Haringey, plus pressure washing, jet washing and carpet cleaning as needed." },
      { q: "Is Neo Eco a local North London company?", a: "Yes. North London is our heartland and Haringey is one of our priority boroughs, alongside Barnet, Enfield, Camden and Islington." },
      { q: "Can you handle large estates in Haringey?", a: "Yes. We scale the schedule and team to the building, which suits Haringey's larger estates with extensive communal areas." },
    ],
    keywords: ["block cleaning Haringey", "communal cleaning Haringey", "cleaning company Haringey"],
  },
];

export const areaBySlug = (slug: string): Area | undefined => areas.find((a) => a.slug === slug);
export const areaSlugs = areas.map((a) => a.slug);
export const regions = areas.filter((a) => a.type === "region");
export const boroughs = areas.filter((a) => a.type === "borough");
export const priorityBoroughs = areas.filter((a) => a.priority);
