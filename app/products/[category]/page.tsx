import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { categories, getCategory } from "@/lib/products";
import { site } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: `/products/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: cat.name, item: `${site.url}/products/${cat.slug}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    itemListElement: cat.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.description,
        url: `${site.url}/products/${cat.slug}#${item.slug}`,
        brand: { "@type": "Brand", name: site.name },
      },
    })),
  };

  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <Link href="/products" style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
        ← All Products
      </Link>
      <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.6rem)", color: "var(--heading)", fontWeight: 700, margin: "1rem 0 0.75rem" }}>
        {cat.name}
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: 640, marginBottom: "3rem" }}>{cat.description}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {cat.items.map((item) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
    </main>
  );
}
