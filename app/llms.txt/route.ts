import { site } from "@/lib/site";
import { CATEGORY_META } from "@/lib/products";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `This file is a machine-readable summary of the site for AI assistants and answer engines. All URLs below are relative to ${site.url}`,
    "",
    "## Pages",
    "",
    "- [Home](/): Overview, category grid, why-choose-us.",
    "- [About](/about): Business history, craftsmanship, years of experience.",
    "- [Products](/products): All product categories.",
    ...CATEGORY_META.map(
      (c) => `- [${c.name}](/products/${c.slug}): ${c.description}`
    ),
    "- [Export & Shipping](/export): Domestic and international shipping, custom sizing, packaging.",
    "- [Contact](/contact): Phone, WhatsApp, email, address, enquiry form.",
    "",
    "## Key facts",
    "",
    `- Location: ${site.address.city}, ${site.address.state}, ${site.address.country}.`,
    `- Founded: ${site.foundedYear}.`,
    "- Products are hand-carved to order; pricing depends on size, stone and finish (available on enquiry, not listed publicly).",
    "- Ships domestically across India and internationally for export/bulk orders.",
    "- Primary contact channel: WhatsApp (see /contact for number).",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
