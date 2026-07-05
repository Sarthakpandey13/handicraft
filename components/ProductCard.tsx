import { ProductImage } from "./ProductImage";
import { whatsappLink } from "@/lib/site";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "var(--placeholder-a)" }}>
        <ProductImage src={product.image} alt={product.name} />
      </div>
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
        <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--heading)" }}>{product.name}</h3>
        <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600 }}>{product.size}</p>
        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>{product.description}</p>
        <a
          href={whatsappLink(`Hi, I'm interested in the "${product.name}". Could you share price and availability?`)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "0.5rem",
            alignSelf: "flex-start",
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </div>
  );
}
