export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 max-w-2xl py-12">
      <h1 className="text-2xl font-semibold mb-6">Create Account</h1>
      <form className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="text-sm">Username *</label>
          <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" placeholder="yourname" />
        </div>
        <div>
          <label className="text-sm">Password *</label>
          <input type="password" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Confirm Password *</label>
          <input type="password" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm">Email Address *</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm">Preferred Currency *</label>
          <select className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2">
            <option>MYR</option><option>USD</option><option>VND</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Full Name *</label>
          <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm">Website URL</label>
          <input className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2" placeholder="https://..." />
        </div>
        <div className="md:col-span-2 pt-2">
          <button className="w-full rounded-lg bg-brand-500 py-2 text-black font-medium">Register</button>
        </div>
      </form>
    </div>
  );
}
