import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";
import { ProductImage } from "@/components/ProductImage";

export const metadata: Metadata = {
  title: `Products — ${site.name}`,
  description: `Browse marble idols, pooja murtis, home temples and custom orders from ${site.name}.`,
};

export default function ProductsPage() {
  return (
    <main style={{ maxWidth: 1180, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
        Products
      </p>
      <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.8rem)", color: "var(--heading)", fontWeight: 700, marginBottom: "1rem", maxWidth: 700 }}>
        Our Collections
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: 620, marginBottom: "3rem" }}>
        Every piece is hand-carved to order. Prices depend on size, stone and finish — enquire on WhatsApp for a quote
        on any item.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.75rem" }}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/products/${cat.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden", background: "var(--surface)", height: "100%" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                <ProductImage src={cat.heroImage} alt={cat.name} />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h2 style={{ fontSize: "19px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.5rem" }}>{cat.name}</h2>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{cat.description}</p>
                <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, display: "inline-block", marginTop: "0.9rem" }}>
                  View {cat.items.length} items →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
