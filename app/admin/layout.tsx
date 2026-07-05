import type { Metadata } from "next";
import { AdminHeader } from "@/components/admin/AdminHeader";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <AdminHeader />
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1.5rem" }}>{children}</main>
    </div>
  );
}
