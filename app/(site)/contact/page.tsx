import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { site, mapsDirectionsLink } from "@/lib/site";
import { prosperityMantra } from "@/lib/vedic";
import { ContactForm } from "@/components/ContactForm";
import { DiyaFlame } from "@/components/DiyaFlame";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} for enquiries, custom orders and bulk/export orders.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>
        Contact
      </p>
      <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 2.6rem)", color: "var(--heading)", fontWeight: 700, marginBottom: "0.6rem", maxWidth: 620 }}>
        Get in touch
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "3rem" }}>
        <DiyaFlame size={26} />
        <p style={{ fontSize: "13px", color: "var(--accent2)", fontStyle: "italic" }}>
          <span lang="sa">{prosperityMantra.sanskrit}</span> — {prosperityMantra.meaning}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <MapPin size={18} style={{ marginTop: "3px", color: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontSize: "14px", color: "var(--text)" }}>
                {site.address.line1}, {site.address.city}, {site.address.state} {site.address.pincode}, {site.address.country}
              </span>
            </div>
            <a href={`tel:${site.phone}`} style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", color: "var(--text)" }}>
              <Phone size={18} style={{ color: "var(--accent)" }} /> <span style={{ fontSize: "14px" }}>{site.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.email}`} style={{ display: "flex", gap: "12px", alignItems: "center", textDecoration: "none", color: "var(--text)" }}>
              <Mail size={18} style={{ color: "var(--accent)" }} /> <span style={{ fontSize: "14px" }}>{site.email}</span>
            </a>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <Clock size={18} style={{ color: "var(--accent)" }} /> <span style={{ fontSize: "14px", color: "var(--text)" }}>{site.hours}</span>
            </div>
          </div>

          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "1.75rem",
              background: "var(--placeholder-a)",
              textAlign: "center",
            }}
          >
            <MapPin size={26} style={{ color: "var(--accent)", marginBottom: "0.6rem" }} />
            <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "1rem" }}>
              {site.address.city}, {site.address.state}
            </p>
            <a
              href={mapsDirectionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}
            >
              <Navigation size={14} /> Get Directions
            </a>
          </div>
        </div>

        <div style={{ border: "1px solid var(--border)", borderRadius: "10px", padding: "1.75rem", background: "var(--surface)" }}>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
