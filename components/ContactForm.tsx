"use client";
import { useState } from "react";
import { site } from "@/lib/site";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "var(--bg)",
  color: "var(--text)",
  fontSize: "14px",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--heading)",
  marginBottom: "6px",
  display: "block",
};

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", country: "", quantity: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const waMessage = [
    `Hi, I'd like to enquire about your products.`,
    form.name && `Name: ${form.name}`,
    form.phone && `Phone: ${form.phone}`,
    form.country && `Country: ${form.country}`,
    form.quantity && `Quantity needed: ${form.quantity}`,
    form.message && `Message: ${form.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(waMessage)}`, "_blank");
      }}
      style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
    >
      <div>
        <label style={labelStyle}>Name</label>
        <input required style={inputStyle} value={form.name} onChange={set("name")} placeholder="Your name" />
      </div>
      <div>
        <label style={labelStyle}>Phone / WhatsApp</label>
        <input required style={inputStyle} value={form.phone} onChange={set("phone")} placeholder="e.g. +91 98XXXXXXXX" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Country</label>
          <input style={inputStyle} value={form.country} onChange={set("country")} placeholder="India / other" />
        </div>
        <div>
          <label style={labelStyle}>Quantity</label>
          <input style={inputStyle} value={form.quantity} onChange={set("quantity")} placeholder="e.g. 1 piece, bulk" />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us which product you're interested in..."
        />
      </div>
      <button
        type="submit"
        style={{
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          padding: "13px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
