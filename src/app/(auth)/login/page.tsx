"use client";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mx-auto px-4 max-w-md py-12">
      <h1 className="text-2xl font-semibold mb-6">Login</h1>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          await login({ email, password }); // mock
          router.push("/overview");
        }}
      >
        <div>
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" type="email" value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"/>
        </div>
        <div>
          <label htmlFor="password" className="text-sm">Password</label>
          <input id="password" type="password" value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"/>
        </div>
        <button className="w-full rounded-lg bg-brand-500 py-2 text-black font-medium">Login</button>
      </form>
      <p className="mt-4 text-sm text-foreground/70">
        Don&apos;t have an account? <Link className="text-brand-500" href="/(auth)/register">Register</Link>
      </p>
    </div>
  );
}
