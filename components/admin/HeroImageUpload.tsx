"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function HeroImageUpload({ categorySlug }: { categorySlug: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("category", categorySlug);
      form.append("slug", "hero");
      const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: form });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Upload failed");

      const heroRes = await fetch("/api/admin/category-hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: categorySlug, heroImage: uploadData.path }),
      });
      if (!heroRes.ok) throw new Error((await heroRes.json()).error || "Failed to save");

      router.refresh();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleChange}
        disabled={busy}
        style={{ fontSize: "13px" }}
      />
      {busy && <p style={{ fontSize: "12px", color: "var(--muted)" }}>Uploading…</p>}
      {error && <p style={{ fontSize: "12px", color: "#c0392b" }}>{error}</p>}
    </div>
  );
}
