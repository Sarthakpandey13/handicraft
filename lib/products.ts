import fs from "fs";
import path from "path";

export type Product = {
  slug: string;
  name: string;
  size: string;
  description: string;
  image: string; // path under /public/products/<category>/
};

export type CategoryMeta = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export type Category = CategoryMeta & {
  heroImage: string;
  items: Product[];
};

// Fixed, structural category metadata — not editable from the admin panel.
// Changing these affects nav, sitemap, JSON-LD and llms.txt, so keep them stable.
export const CATEGORY_META: CategoryMeta[] = [
  {
    slug: "ganesh-idols",
    name: "Ganesh Idols",
    shortName: "Ganesh Idols",
    description:
      "Hand-carved marble Ganesh murtis in a range of sizes and finishes, from plain white marble to fully jewelled and gold-leaf work — for home mandirs, housewarmings, offices and gifting.",
  },
  {
    slug: "pooja-murtis",
    name: "Pooja Murtis & Deities",
    shortName: "Pooja Murtis",
    description:
      "A wide range of hand-carved deity idols — Ram Darbar, Radha Krishna, Sai Baba and more — finished with fine detailing for daily worship and temple installation.",
  },
  {
    slug: "home-temples",
    name: "Home Temples & Mandir",
    shortName: "Home Temples",
    description:
      "Custom marble temple structures and mandir units for home pooja rooms — carved pillars, jaali lattice work and arched niches built to your space.",
  },
  {
    slug: "custom-bulk-orders",
    name: "Custom & Bulk Orders",
    shortName: "Custom Orders",
    description:
      "Made-to-order murtis, temple installations and bulk orders for temples, event decorators, gifting companies and export buyers — any size, any deity, any quantity.",
  },
];

type ProductStore = Record<string, { heroImage: string; items: Product[] }>;

const DATA_PATH = path.join(process.cwd(), "data", "products.json");

function readStore(): ProductStore {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

function writeStore(store: ProductStore) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(store, null, 2) + "\n");
}

export function getCategorySlugs(): string[] {
  return CATEGORY_META.map((c) => c.slug);
}

export function getCategories(): Category[] {
  const store = readStore();
  return CATEGORY_META.map((meta) => ({
    ...meta,
    heroImage: store[meta.slug]?.heroImage ?? "",
    items: store[meta.slug]?.items ?? [],
  }));
}

export function getCategory(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

function requireCategory(store: ProductStore, categorySlug: string) {
  const entry = store[categorySlug];
  if (!entry) throw new Error(`Unknown category: ${categorySlug}`);
  return entry;
}

export function addProduct(categorySlug: string, product: Product) {
  const store = readStore();
  const entry = requireCategory(store, categorySlug);
  if (entry.items.some((p) => p.slug === product.slug)) {
    throw new Error("A product with this slug already exists in this category");
  }
  entry.items.push(product);
  writeStore(store);
}

export function updateProduct(
  categorySlug: string,
  productSlug: string,
  updates: Partial<Omit<Product, "slug">>
) {
  const store = readStore();
  const entry = requireCategory(store, categorySlug);
  const idx = entry.items.findIndex((p) => p.slug === productSlug);
  if (idx === -1) throw new Error("Product not found");
  entry.items[idx] = { ...entry.items[idx], ...updates };
  writeStore(store);
}

export function deleteProduct(categorySlug: string, productSlug: string) {
  const store = readStore();
  const entry = requireCategory(store, categorySlug);
  entry.items = entry.items.filter((p) => p.slug !== productSlug);
  writeStore(store);
}

export function setCategoryHero(categorySlug: string, heroImage: string) {
  const store = readStore();
  const entry = requireCategory(store, categorySlug);
  entry.heroImage = heroImage;
  writeStore(store);
}
