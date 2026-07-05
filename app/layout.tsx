import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { Invocation } from "@/components/Invocation";
import { site } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "marble handicrafts",
    "marble Ganesh statue",
    "marble idols",
    "pooja murti",
    "home temple marble",
    site.address.city,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    siteName: site.name,
    title: site.name,
    description: site.tagline,
    type: "website",
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pincode,
    addressCountry: "IN",
  },
  openingHours: site.hours,
  sameAs: Object.values(site.social),
  foundingDate: String(site.foundedYear),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema} />
        <Invocation />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
