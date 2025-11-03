export default function Footer() {
  return (
    <footer className="border-t border-border mt-12" id="contact">
      <div className="container mx-auto px-4 py-8 text-sm text-foreground/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} me88 Affiliate. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#contact">Contact Us</a>
            <a href="#!">T&Cs</a>
            <a href="#!">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
