// PLACEHOLDER BUSINESS INFO — replace every value below with the real details.
export const site = {
  // Real production domain — update once the site has one, then update NEXT_PUBLIC_SITE_URL too.
  url: "https://www.shreeganeshmarble.com",
  name: "Shree Ganesh Marble Arts",
  tagline: "Hand-carved marble idols & temple art, crafted in Rajasthan",
  shortName: "Shree Ganesh Marble Arts",
  foundedYear: 1995,
  yearsOfExperience: new Date().getFullYear() - 1995,
  description:
    "Family-run marble handicraft workshop specializing in hand-carved idols, pooja murtis and home temples, serving customers across India and buyers abroad.",
  phone: "+91 98XXXXXXXX",
  phoneDisplay: "+91 98XXX XXXXX",
  whatsapp: "919800000000", // digits only, country code, no + or spaces
  email: "info@shreeganeshmarble.com",
  address: {
    line1: "Workshop No. 12, Marble Market Road",
    city: "Makrana",
    state: "Rajasthan",
    pincode: "341505",
    country: "India",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  hours: "Mon – Sat, 9:00 AM – 7:00 PM (IST)",
  // Replace with your real Calendly scheduling link (calendly.com/your-name/consultation).
  calendlyUrl: "https://calendly.com/shreeganeshmarble/consultation",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsDirectionsLink() {
  const query = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.pincode}, ${site.address.country}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
