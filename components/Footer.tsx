export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} GroovinFly. All rights reserved.</p>

        <nav className="flex gap-5 text-sm text-white/80">
          <a href="/tos" className="hover:text-fuchsia-400">Terms of Service</a>
          <a href="/privacy" className="hover:text-fuchsia-400">Privacy Policy</a>
          <a href="/contact" className="hover:text-fuchsia-400">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}