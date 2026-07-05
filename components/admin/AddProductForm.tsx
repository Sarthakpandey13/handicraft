"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: "6px",
  border: "1px solid var(--border)",
  background: "var(--bg)",
  color: "var(--text)",
  fontSize: "13px",
  fontFamily: "inherit",
};

export function AddProductForm({ categorySlug }: { categorySlug: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: categorySlug, name, size, description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add product");
      setName("");
      setSize("");
      setDescription("");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: 420 }}>
      <input style={inputStyle} required value={name} onChange={(e) => setName(e.target.value)} placeholder="Product name" />
      <input style={inputStyle} value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size (e.g. 12 inch / 18 inch)" />
      <textarea
        style={{ ...inputStyle, minHeight: "70px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button
        type="submit"
        disabled={busy}
        style={{
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          padding: "9px 18px",
          borderRadius: "6px",
          fontSize: "13px",
          cursor: "pointer",
          alignSelf: "flex-start",
        }}
      >
        {busy ? "Adding…" : "Add product"}
      </button>
      {error && <p style={{ fontSize: "12px", color: "#c0392b" }}>{error}</p>}
    </form>
  );
}
