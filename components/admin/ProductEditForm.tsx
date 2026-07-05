"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: "6px",
  border: "1px solid var(--border)",
  background: "var(--bg)",
  color: "var(--text)",
  fontSize: "13px",
  fontFamily: "inherit",
  marginBottom: "8px",
};

export function ProductEditForm({ categorySlug, product }: { categorySlug: string; product: Product }) {
  const router = useRouter();
  const [name, setName] = useState(product.name);
  const [size, setSize] = useState(product.size);
  const [description, setDescription] = useState(product.description);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSave() {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: categorySlug, slug: product.slug, name, size, description }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to save");
      setMessage("Saved");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("category", categorySlug);
      form.append("slug", product.slug);
      const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: form });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Upload failed");

      const res = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: categorySlug, slug: product.slug, image: uploadData.path }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to save image");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${product.name}"? This can't be undone.`)) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: categorySlug, slug: product.slug }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to delete");
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input style={inputStyle} value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size" />
      <textarea
        style={{ ...inputStyle, minHeight: "70px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} disabled={busy} style={{ fontSize: "12px" }} />
      <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
        <button
          onClick={handleSave}
          disabled={busy}
          style={{ background: "var(--accent)", color: "#fff", border: "none", padding: "7px 16px", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}
        >
          Save
        </button>
        <button
          onClick={handleDelete}
          disabled={busy}
          style={{ background: "none", color: "#c0392b", border: "1px solid #c0392b", padding: "7px 16px", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}
        >
          Delete
        </button>
      </div>
      {message && <p style={{ fontSize: "12px", color: "#2e7d32" }}>{message}</p>}
      {error && <p style={{ fontSize: "12px", color: "#c0392b" }}>{error}</p>}
    </div>
  );
}
