"use client";
import Script from "next/script";
import { site } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function BookConsultation({ label = "Book a Consultation Call" }: { label?: string }) {
  function openCalendly() {
    window.Calendly?.initPopupWidget({ url: site.calendlyUrl });
  }

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <button
        onClick={openCalendly}
        style={{
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          padding: "12px 28px",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {label}
      </button>
    </>
  );
}
