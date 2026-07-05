import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { Invocation } from "@/components/Invocation";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/lib/site";

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

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Invocation />
      <Nav />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
