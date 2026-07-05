import fs from "fs";
import path from "path";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function resolveSrc(src: string): string | null {
  const base = src.slice(0, src.lastIndexOf("."));
  for (const ext of EXTENSIONS) {
    const candidate = `${base}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", candidate))) {
      return candidate;
    }
  }
  return null;
}

export function ProductImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const resolved = resolveSrc(src);

  if (!resolved) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          background:
            "linear-gradient(135deg, var(--placeholder-a), var(--placeholder-b))",
          color: "var(--muted)",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <ImageIcon size={28} strokeWidth={1.5} />
        <span style={{ fontSize: "12px", lineHeight: 1.4 }}>{alt}<br />photo coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}
