"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./LogoutButton";
import { site } from "@/lib/site";

export function AdminHeader() {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "0 1.5rem",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/admin" style={{ fontWeight: 700, color: "var(--heading)", textDecoration: "none" }}>
        {site.shortName} · Admin
      </Link>
      {!isLogin && <LogoutButton />}
    </header>
  );
}
