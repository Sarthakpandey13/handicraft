import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { addProduct, updateProduct, deleteProduct, getCategorySlugs } from "@/lib/products";
import { slugify } from "@/lib/slug";

function isValidCategory(category: unknown): category is string {
  return typeof category === "string" && getCategorySlugs().includes(category);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !isValidCategory(body.category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }
  const { category, name, size, description, image } = body;
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  const slug = slugify(name);
  if (!slug) {
    return NextResponse.json({ error: "Could not generate a slug from this name" }, { status: 400 });
  }

  try {
    addProduct(category, {
      slug,
      name: name.trim(),
      size: typeof size === "string" ? size : "",
      description: typeof description === "string" ? description : "",
      image: typeof image === "string" && image ? image : `/products/${category}/${slug}.jpg`,
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 409 });
  }
  return NextResponse.json({ ok: true, slug });
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !isValidCategory(body.category) || typeof body.slug !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { category, slug, ...updates } = body;
  try {
    updateProduct(category, slug, updates);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !isValidCategory(body.category) || typeof body.slug !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const { category, slug } = body;
  try {
    deleteProduct(category, slug);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 404 });
  }

  const dir = path.join(process.cwd(), "public", "products", category);
  const files = await fs.readdir(dir).catch(() => [] as string[]);
  await Promise.all(
    files.filter((f) => f.startsWith(`${slug}.`)).map((f) => fs.unlink(path.join(dir, f)).catch(() => {}))
  );

  return NextResponse.json({ ok: true });
}
