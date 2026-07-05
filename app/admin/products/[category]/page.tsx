import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, getCategorySlugs } from "@/lib/products";
import { ProductImage } from "@/components/ProductImage";
import { HeroImageUpload } from "@/components/admin/HeroImageUpload";
import { ProductEditForm } from "@/components/admin/ProductEditForm";
import { AddProductForm } from "@/components/admin/AddProductForm";

export const dynamic = "force-dynamic";

export default async function AdminCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!getCategorySlugs().includes(category)) notFound();
  const cat = getCategory(category)!;

  return (
    <div>
      <Link href="/admin" style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none" }}>
        ← All categories
      </Link>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--heading)", margin: "0.75rem 0 1.5rem" }}>
        {cat.name}
      </h1>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "14px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.75rem" }}>
          Category photo
        </h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ position: "relative", width: 120, height: 90, borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)", flexShrink: 0 }}>
            <ProductImage src={cat.heroImage} alt={cat.name} />
          </div>
          <HeroImageUpload categorySlug={cat.slug} />
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "14px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.75rem" }}>
          Products ({cat.items.length})
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cat.items.map((item) => (
            <div
              key={item.slug}
              style={{ display: "flex", gap: "1rem", border: "1px solid var(--border)", borderRadius: "8px", padding: "1rem", background: "var(--surface)" }}
            >
              <div style={{ position: "relative", width: 100, height: 100, borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                <ProductImage src={item.image} alt={item.name} />
              </div>
              <div style={{ flex: 1 }}>
                <ProductEditForm categorySlug={cat.slug} product={item} />
              </div>
            </div>
          ))}
          {cat.items.length === 0 && <p style={{ fontSize: "13px", color: "var(--muted)" }}>No products yet.</p>}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "14px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.75rem" }}>
          Add a product
        </h2>
        <AddProductForm categorySlug={cat.slug} />
      </section>
    </div>
  );
}
