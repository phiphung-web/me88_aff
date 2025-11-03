"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuLeft = [
    { href: "/", label: "Home" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#commission", label: "Commission Plans" },
    { href: "/#contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          me88 <span className="text-brand-500">AFFILIATE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuLeft.map((m) => (
            <Link key={m.href} href={m.href}>
              {m.label}
            </Link>
          ))}
          {/* chỉ hiển thị khi đã login */}
          {user && <Link href="/overview">Overview</Link>}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {!user ? (
            <>
              <Link
                href="/login"
                className="px-3 py-2 rounded-lg border border-border hover:opacity-90"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-3 py-2 rounded-lg bg-brand-500 hover:opacity-90 text-black font-medium"
              >
                Join Now
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/account"
                className="px-3 py-2 rounded-lg border border-border"
              >
                Account
              </Link>
              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="px-3 py-2 rounded-lg bg-brand-500 text-black font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-border px-3 py-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60">
          <div className="px-4 py-3 space-y-2">
            {menuLeft.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="block"
                onClick={() => setOpen(false)}
              >
                {m.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/overview"
                className="block"
                onClick={() => setOpen(false)}
              >
                Overview
              </Link>
            )}
            <div className="pt-2 flex gap-2">
              {!user ? (
                <>
                  <Link
                    href="/login"
                    className="px-3 py-2 rounded-lg border border-border hover:opacity-90"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-3 py-2 rounded-lg bg-brand-500 hover:opacity-90 text-black font-medium"
                  >
                    Join Now
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/account"
                    className="px-3 py-2 rounded-lg border border-border"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                      logout();
                      router.push("/");
                    }}
                    className="px-3 py-2 rounded-lg bg-brand-500 text-black font-medium"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
