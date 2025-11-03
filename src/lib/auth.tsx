"use client";
import { createContext, useContext, useMemo, useState, useEffect } from "react";

type User = { id: string; email: string; name?: string } | null;
type AuthCtx = {
  user: User;
  login: (input: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const STORAGE_KEY = "me88_user";
const Ctx = createContext<AuthCtx | null>(null);

function readUserFromStorage(): User {
  if (typeof window === "undefined") return null; // SSR
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // ✅ Khởi tạo từ localStorage, không cần effect để setState nữa
  const [user, setUser] = useState<User>(() => readUserFromStorage());

  // (tuỳ chọn) Đồng bộ giữa các tab
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setUser(readUserFromStorage());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = async ({ email }: { email: string; password: string }) => {
    // TODO: gọi API thật; hiện tại mock
    const u: Exclude<User, null> = { id: "u_1", email, name: email.split("@")[0] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
