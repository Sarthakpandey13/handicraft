import type { Metadata } from "next";
import { site } from "@/lib/site";
import { invocation, prosperityMantra } from "@/lib/vedic";
import { ProductImage } from "@/components/ProductImage";
import { OmWatermark } from "@/components/OmWatermark";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${site.name}, ${site.yearsOfExperience} years of marble handicraft in ${site.address.city}.`,
  alternates: { canonical: "/about" },
};

const stats = [
  { n: `${site.yearsOfExperience}+`, l: "Years of craftsmanship" },
  { n: "1000+", l: "Murtis carved" },
  { n: "India +", l: "Domestic & export orders" },
];

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "4rem 1.5rem", position: "relative" }}>
      <OmWatermark />
      <div style={{ position: "relative", zIndex: 1 }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
        About Us
      </p>
      <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.8rem)", color: "var(--heading)", fontWeight: 700, marginBottom: "2.5rem", maxWidth: 700 }}>
        A family workshop dedicated to the art of marble carving
      </h1>

      <FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "3.5rem" }}>
        <div>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px", marginBottom: "1.25rem" }}>
            Founded in {site.foundedYear} in {site.address.city}, {site.address.state} — a region long known for its
            marble — {site.shortName} has spent {site.yearsOfExperience} years hand-carving idols, pooja murtis and
            home temples for families and temples across India.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px", marginBottom: "1.25rem" }}>
            Every piece is carved by hand by our artisans, from rough stone to the finished, polished murti — a
            process that can take anywhere from a few days to several weeks depending on size and detail.
          </p>
          <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px" }}>
            Today we serve customers across India and take on export and bulk orders for overseas buyers, temples,
            event decorators and gifting companies — while keeping the same hand-finished quality that started this
            workshop.
          </p>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--accent)" }}>{s.n}</div>
                <div style={{ fontSize: "12px", color: "var(--muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)" }}>
          <ProductImage src="/about/workshop.jpg" alt="Our artisans at work" />
        </div>
      </div>
      </FadeIn>

      <FadeIn>
      <div style={{ border: "1px solid var(--border)", borderRadius: "10px", padding: "2rem", background: "var(--surface)" }}>
        <h2 style={{ fontSize: "1.4rem", color: "var(--heading)", fontWeight: 700, marginBottom: "1rem" }}>
          Rooted in Vedic tradition
        </h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "15px", marginBottom: "1.5rem" }}>
          In Hindu tradition, any new undertaking begins with an invocation to Lord Ganesh, remover of obstacles —
          which is why his murti is often the first piece an artisan learns to carve, and the first idol a family
          brings home. Lakshmi Mata, goddess of prosperity, is invoked alongside him for wealth and well-being. Our
          work — and the idols we carve — follow that same order.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          <div>
            <p style={{ fontSize: "16px", color: "var(--accent)", fontWeight: 600 }}>
              <span lang="sa">{invocation.sanskrit}</span>
            </p>
            <p style={{ fontSize: "12px", color: "var(--muted)" }}>
              {invocation.transliteration} — {invocation.meaning}
            </p>
          </div>
          <div>
            <p style={{ fontSize: "16px", color: "var(--accent)", fontWeight: 600 }}>
              <span lang="sa">{prosperityMantra.sanskrit}</span>
            </p>
            <p style={{ fontSize: "12px", color: "var(--muted)" }}>
              {prosperityMantra.transliteration} — {prosperityMantra.meaning}
            </p>
          </div>
        </div>
      </div>
      </FadeIn>
      </div>
    </main>
  );
}
