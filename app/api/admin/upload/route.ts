import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { getCategorySlugs } from "@/lib/products";

const MAX_SIZE = 8 * 1024 * 1024; // 8MB
const MAX_WIDTH = 1600; // originals wider than this are downscaled; next/image still
// generates the smaller phone/tablet/desktop variants on demand from this file.
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const category = formData.get("category");
  const slug = formData.get("slug");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  if (typeof category !== "string" || !getCategorySlugs().includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }
  if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: "Only JPEG, PNG or WebP images are allowed" }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Image must be smaller than 8MB" }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "public", "products", category);
  await fs.mkdir(dir, { recursive: true });

  const existing = await fs.readdir(dir).catch(() => [] as string[]);
  await Promise.all(
    existing
      .filter((f) => f.startsWith(`${slug}.`))
      .map((f) => fs.unlink(path.join(dir, f)).catch(() => {}))
  );

  const inputBuffer = Buffer.from(await file.arrayBuffer());
  const webpBuffer = await sharp(inputBuffer)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();

  await fs.writeFile(path.join(dir, `${slug}.webp`), webpBuffer);

  return NextResponse.json({ path: `/products/${category}/${slug}.webp` });
}
