export type Product = {
  slug: string;
  name: string;
  size: string;
  description: string;
  image: string; // path under /public/products/<category>/, drop real photos here
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  heroImage: string;
  items: Product[];
};

export const categories: Category[] = [
  {
    slug: "ganesh-idols",
    name: "Ganesh Idols",
    shortName: "Ganesh Idols",
    description:
      "Hand-carved marble Ganesh murtis in a range of sizes and finishes, from plain white marble to fully jewelled and gold-leaf work — for home mandirs, housewarmings, offices and gifting.",
    heroImage: "/products/ganesh-idols/hero.jpg",
    items: [
      {
        slug: "classic-white-marble-ganesh",
        name: "Classic White Marble Ganesh",
        size: "12 inch / 18 inch / 24 inch",
        description:
          "Traditional seated Ganesh, hand-carved from pure white marble with a polished finish. Our most popular piece for home pooja rooms.",
        image: "/products/ganesh-idols/classic-white.jpg",
      },
      {
        slug: "jewelled-crown-ganesh",
        name: "Jewelled Crown Ganesh",
        size: "18 inch / 24 inch",
        description:
          "Ganesh murti adorned with a stone-studded crown and ornaments, gold-leaf detailing on the drape — a statement piece for festivals and gifting.",
        image: "/products/ganesh-idols/jewelled-crown.jpg",
      },
      {
        slug: "sitting-ganesh-natural-stone",
        name: "Natural Stone Ganesh",
        size: "9 inch / 12 inch",
        description:
          "Compact hand-carved Ganesh in natural stone tone, well-suited for study tables, entrances and smaller mandirs.",
        image: "/products/ganesh-idols/natural-stone.jpg",
      },
    ],
  },
  {
    slug: "pooja-murtis",
    name: "Pooja Murtis & Deities",
    shortName: "Pooja Murtis",
    description:
      "A wide range of hand-carved deity idols — Ram Darbar, Radha Krishna, Sai Baba and more — finished with fine detailing for daily worship and temple installation.",
    heroImage: "/products/pooja-murtis/hero.jpg",
    items: [
      {
        slug: "ram-darbar",
        name: "Ram Darbar (Ram–Sita–Lakshman)",
        size: "18 inch / 24 inch / 36 inch",
        description:
          "Complete Ram Darbar set hand-carved in white marble with painted detailing and gold accents, made to order in your preferred size.",
        image: "/products/pooja-murtis/ram-darbar.jpg",
      },
      {
        slug: "sai-baba",
        name: "Sai Baba Murti",
        size: "18 inch / 24 inch / life-size",
        description:
          "Finely detailed Sai Baba idol with painted robe and lifelike facial carving, built for home mandirs and temple installations.",
        image: "/products/pooja-murtis/sai-baba.jpg",
      },
      {
        slug: "radha-krishna",
        name: "Radha Krishna",
        size: "12 inch / 18 inch / 24 inch",
        description:
          "Elegant Radha Krishna pair, hand-carved and hand-painted, available in plain marble or fully decorated finish.",
        image: "/products/pooja-murtis/radha-krishna.jpg",
      },
    ],
  },
  {
    slug: "home-temples",
    name: "Home Temples & Mandir",
    shortName: "Home Temples",
    description:
      "Custom marble temple structures and mandir units for home pooja rooms — carved pillars, jaali lattice work and arched niches built to your space.",
    heroImage: "/products/home-temples/hero.jpg",
    items: [
      {
        slug: "pillar-arch-mandir",
        name: "Carved Pillar Arch Mandir",
        size: "Made to measure",
        description:
          "Marble temple unit with hand-carved pillars and an arched crown, designed to fit an alcove or wall-mounted mandir space.",
        image: "/products/home-temples/pillar-arch.jpg",
      },
      {
        slug: "jaali-lattice-temple",
        name: "Jaali Lattice Temple Niche",
        size: "Made to measure",
        description:
          "Fine lattice (jaali) work framing the deity niche, combining traditional stone-carving technique with a modern home fit.",
        image: "/products/home-temples/jaali-lattice.jpg",
      },
      {
        slug: "compact-tabletop-mandir",
        name: "Compact Tabletop Mandir",
        size: "2 ft / 3 ft",
        description:
          "Smaller free-standing marble mandir for apartments and offices — full carving detail in a space-saving footprint.",
        image: "/products/home-temples/tabletop.jpg",
      },
    ],
  },
  {
    slug: "custom-bulk-orders",
    name: "Custom & Bulk Orders",
    shortName: "Custom Orders",
    description:
      "Made-to-order murtis, temple installations and bulk orders for temples, event decorators, gifting companies and export buyers — any size, any deity, any quantity.",
    heroImage: "/products/custom-bulk-orders/hero.jpg",
    items: [
      {
        slug: "temple-installation",
        name: "Temple Installation Projects",
        size: "Custom",
        description:
          "Large-scale murti carving and on-site installation for temples, including custom deity designs and specific stone requirements.",
        image: "/products/custom-bulk-orders/temple-installation.jpg",
      },
      {
        slug: "corporate-bulk-gifting",
        name: "Corporate & Wedding Bulk Gifting",
        size: "Custom",
        description:
          "Smaller idols and decor pieces produced in bulk for weddings, housewarmings and corporate gifting, with consistent finish across the order.",
        image: "/products/custom-bulk-orders/bulk-gifting.jpg",
      },
      {
        slug: "export-orders",
        name: "Export & Wholesale Orders",
        size: "Custom",
        description:
          "Container-load and wholesale orders for overseas buyers, with export-grade packaging and crating for safe transit.",
        image: "/products/custom-bulk-orders/export-orders.jpg",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
