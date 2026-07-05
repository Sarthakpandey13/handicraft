import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #faf7f1 0%, #e6ddcd 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7a1f2b",
            fontWeight: 700,
            marginBottom: 24,
            display: "flex",
          }}
        >
          {site.address.city}, {site.address.state} — Est. {site.foundedYear}
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#241d15",
            textAlign: "center",
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#7d7566",
            marginTop: 28,
            textAlign: "center",
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
