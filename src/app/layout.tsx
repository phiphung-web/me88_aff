import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";

export const metadata = {
  title: "Affiliate Program",
  description: "Asia's trusted affiliate program",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh flex flex-col bg-background text-foreground">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
