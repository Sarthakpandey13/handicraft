"use client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--text)",
        padding: "7px 16px",
        borderRadius: "6px",
        fontSize: "13px",
        cursor: "pointer",
      }}
    >
      Log out
    </button>
  );
}
