import type { Metadata } from "next";
import { Package, Ship, MessageCircle, Ruler } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { BookConsultation } from "@/components/BookConsultation";

export const metadata: Metadata = {
  title: "Export & Shipping",
  description: `Domestic and international shipping information for ${site.name}.`,
  alternates: { canonical: "/export" },
};

const points = [
  {
    icon: <Ruler size={22} />,
    title: "Any size, made to order",
    text: "Idols and temple pieces are carved to the size you need — share your requirement and we'll confirm what's possible.",
  },
  {
    icon: <Package size={22} />,
    title: "Careful export packaging",
    text: "Marble pieces are wrapped, cushioned and crated for safe transit, whether shipping within India or overseas.",
  },
  {
    icon: <Ship size={22} />,
    title: "Domestic & international delivery",
    text: "We regularly ship across India and can arrange international shipping for bulk and individual export orders — share your destination and quantity for a shipping quote.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Quote on request",
    text: "Pricing depends on stone, size, finish and destination. Message us with your requirement for a detailed quote.",
  },
];

export default function ExportPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
        Export & Shipping
      </p>
      <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.6rem)", color: "var(--heading)", fontWeight: 700, marginBottom: "1rem", maxWidth: 620 }}>
        We ship across India and to buyers abroad
      </h1>
      <p style={{ color: "var(--muted)", fontSize: "15px", maxWidth: 620, marginBottom: "3rem", lineHeight: 1.7 }}>
        Whether you&apos;re a family ordering one idol for your home mandir or a business placing a bulk / export order,
        we&apos;ll work with you on sizing, packaging and delivery.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
        {points.map((p) => (
          <div key={p.title} style={{ border: "1px solid var(--border)", borderRadius: "10px", padding: "1.5rem", background: "var(--surface)" }}>
            <div style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>{p.icon}</div>
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.4rem" }}>{p.title}</h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{p.text}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", border: "1px solid var(--border)", borderRadius: "10px", padding: "2.5rem 1.5rem", background: "var(--placeholder-a)" }}>
        <h2 style={{ fontSize: "1.4rem", color: "var(--heading)", fontWeight: 700, marginBottom: "0.75rem" }}>Have a bulk or export order in mind?</h2>
        <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "1.5rem" }}>
          Share the item, quantity and delivery destination — we&apos;ll respond with pricing and lead time.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={whatsappLink("Hi, I have a bulk/export order enquiry. Item: ___ Quantity: ___ Destination: ___")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "var(--accent)", color: "#fff", padding: "12px 28px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}
          >
            Enquire on WhatsApp
          </a>
          <BookConsultation label="Book a Call Instead" />
        </div>
        <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "1rem" }}>
          Or email <a href={`mailto:${site.email}`} style={{ color: "var(--accent)" }}>{site.email}</a>
        </p>
      </div>
    </main>
  );
}
