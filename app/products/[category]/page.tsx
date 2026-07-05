import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { categories, getCategory } from "@/lib/products";
import { site } from "@/lib/site";
import { ProductCard } from "@/components/ProductCard";

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
    title: `${cat.name} — ${site.name}`,
    description: cat.description,
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

  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "4rem 1.5rem" }}>
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
