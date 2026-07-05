import Link from "next/link";
import { Gem, Hammer, Globe2, ShieldCheck } from "lucide-react";
import { getCategories } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { categoryMantras } from "@/lib/vedic";
import { ProductImage } from "@/components/ProductImage";
import { MandalaBackdrop } from "@/components/MandalaBackdrop";
import { DiyaFlame } from "@/components/DiyaFlame";
import { FadeIn } from "@/components/FadeIn";

const whyUs = [
  { icon: <Hammer size={22} />, title: "Hand-carved craftsmanship", text: `${site.yearsOfExperience}+ years of family expertise, every piece carved and finished by hand.` },
  { icon: <Gem size={22} />, title: "Quality marble & stone", text: "Sourced from trusted quarries, polished to a lasting finish." },
  { icon: <Globe2 size={22} />, title: "Domestic & export orders", text: "We ship across India and pack for safe delivery overseas." },
  { icon: <ShieldCheck size={22} />, title: "Custom made-to-order", text: "Any size, any deity, any finish — built to your requirement." },
];

export const dynamic = "force-dynamic";

export default function Home() {
  const categories = getCategories();
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
          background: "linear-gradient(180deg, var(--placeholder-a) 0%, var(--bg) 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <MandalaBackdrop />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "1rem" }}>
            {site.address.city}, {site.address.state} — Est. {site.foundedYear}
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", fontWeight: 700, color: "var(--heading)", lineHeight: 1.15, maxWidth: 760, margin: "0 auto 1.25rem" }}>
            Hand-carved marble idols &amp; temple art, made with devotion
          </h1>
          <p style={{ maxWidth: 560, margin: "0 auto 2.25rem", color: "var(--muted)", fontSize: "16px", lineHeight: 1.7 }}>
            {site.description}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products"
              style={{ background: "var(--accent)", color: "#fff", padding: "13px 30px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}
            >
              View Products
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to enquire about your marble handicraft products.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ border: "1px solid var(--border)", color: "var(--text)", padding: "13px 30px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section style={{ padding: "4.5rem 1.5rem", maxWidth: 1180, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
              Our Work
            </p>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)", color: "var(--heading)", fontWeight: 700 }}>Explore by category</h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {categories.map((cat, i) => (
            <FadeIn key={cat.slug} delay={i * 0.08}>
              <Link
                href={`/products/${cat.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden", background: "var(--surface)", height: "100%" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                    <ProductImage src={cat.heroImage} alt={cat.name} />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.3rem" }}>{cat.shortName}</h3>
                    {categoryMantras[cat.slug] && (
                      <p style={{ fontSize: "12px", color: "var(--accent2)", fontStyle: "italic", marginBottom: "0.5rem" }}>
                        <span lang="sa">{categoryMantras[cat.slug].sanskrit}</span>
                      </p>
                    )}
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{cat.description}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "4.5rem 1.5rem", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
                Why Choose Us
              </p>
              <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)", color: "var(--heading)", fontWeight: 700 }}>Built on {site.yearsOfExperience}+ years of craft</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {whyUs.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.08}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--placeholder-a)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                    {w.icon}
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--heading)", marginBottom: "0.4rem" }}>{w.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{w.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
            <DiyaFlame size={36} />
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "var(--heading)", fontWeight: 700, marginBottom: "1rem" }}>
            Looking for a custom piece or bulk order?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "2rem" }}>Tell us the deity, size and quantity — we&apos;ll get back with a quote.</p>
          <Link
            href="/contact"
            style={{ background: "var(--accent)", color: "#fff", padding: "13px 32px", borderRadius: "999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}
          >
            Contact Us
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
