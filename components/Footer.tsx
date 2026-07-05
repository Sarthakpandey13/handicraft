import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", marginTop: "5rem" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
        }}
      >
        <div>
          <h3 style={{ fontSize: "22px", color: "var(--heading)", marginBottom: "0.75rem" }}>
            {site.shortName}
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, maxWidth: 280 }}>{site.description}</p>
        </div>

        <div>
          <h4 style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
            Explore
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/products", "Products"],
              ["/export", "Export Info"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ color: "var(--text)", fontSize: "14px", textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "14px", color: "var(--text)" }}>
            <span style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <MapPin size={16} style={{ marginTop: "2px", flexShrink: 0, color: "var(--muted)" }} />
              {site.address.line1}, {site.address.city}, {site.address.state} {site.address.pincode}, {site.address.country}
            </span>
            <a href={`tel:${site.phone}`} style={{ display: "flex", gap: "8px", alignItems: "center", color: "var(--text)", textDecoration: "none" }}>
              <Phone size={16} style={{ color: "var(--muted)" }} /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} style={{ display: "flex", gap: "8px", alignItems: "center", color: "var(--text)", textDecoration: "none" }}>
              <Mail size={16} style={{ color: "var(--muted)" }} /> {site.email}
            </a>
            <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Clock size={16} style={{ color: "var(--muted)" }} /> {site.hours}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          padding: "1.25rem",
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
