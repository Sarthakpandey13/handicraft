"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/export", label: "Export" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(10px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 6px 20px rgba(36, 29, 21, 0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: scrolled ? 58 : 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "height 0.3s ease",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "var(--heading)",
            textDecoration: "none",
            letterSpacing: "0.01em",
          }}
        >
          {site.shortName}
        </Link>

        <nav
          style={{ display: "flex", gap: "2.25rem" }}
          className="nav-links"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "14px",
                color: "var(--text)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phone}`}
          className="nav-cta"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Call Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="nav-toggle"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--heading)",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile"
          style={{
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            background: "var(--surface)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "var(--text)", textDecoration: "none", fontSize: "15px" }}
            >
              {l.label}
            </Link>
          ))}
          <a href={`tel:${site.phone}`} style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>
            Call {site.phoneDisplay}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
