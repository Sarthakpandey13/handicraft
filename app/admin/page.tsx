import Link from "next/link";
import { getCategories } from "@/lib/products";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const categories = getCategories();
  return (
    <div>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--heading)", marginBottom: "1.5rem" }}>
        Products
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/admin/products/${cat.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "1.25rem", background: "var(--surface)" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.3rem" }}>
                {cat.name}
              </h2>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>{cat.items.length} products</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
