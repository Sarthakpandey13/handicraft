import { NextResponse } from "next/server";
import { setCategoryHero, getCategorySlugs } from "@/lib/products";

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  if (
    !body ||
    typeof body.category !== "string" ||
    !getCategorySlugs().includes(body.category) ||
    typeof body.heroImage !== "string"
  ) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  setCategoryHero(body.category, body.heroImage);
  return NextResponse.json({ ok: true });
}
