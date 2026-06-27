/** Managing agents and clients. Logos are real assets to be supplied (do not fabricate). */

export type Client = {
  name: string;
  url?: string;
  /** Path to a real logo asset once supplied. Until then the name renders as a wordmark. */
  logo?: string;
  note?: string;
};

export const clients: Client[] = [
  {
    name: "Rendall & Rittner",
    url: "https://www.rendallandrittner.co.uk",
    note: "Managing agent we work with on communal cleaning and jet washing across multiple developments.",
    // logo: "/media/logos/rendall-and-rittner.svg", // TODO: supply real logo asset
  },
  {
    name: "MVN Block",
    url: "https://www.mvnblock.co.uk",
    note: "Block management agent we work with on communal cleaning.",
    // logo: "/media/logos/mvn-block.svg", // TODO: supply real logo asset
  },
];
