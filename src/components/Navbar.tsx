import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Beranda", href: "#top" },
  { label: "Laku Terjual", href: "#sold-stats" },
  { label: "Premium Brands", href: "#premium-brands" },
  { label: "Tipe Rumah", href: "#property-types" },
  { label: "Support KPR", href: "#support-kpr" },
  { label: "FAQ", href: "#faq" },
  { label: "Galeri", href: "#gallery" },
  { label: "Fasum", href: "#fasum" },
  { label: "Akses", href: "#akses" },
  { label: "Lokasi", href: "#location" },
  { label: "Kontak", href: "#footer" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${isSticky ? 'sticky top-4' : 'relative top-12'}  z-40`}>
      <nav className="glass-nav container mx-auto rounded-full px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <img src="/Persada.png" alt="Persada Residence" className="h-8 w-auto" />
            <div className="leading-tight">
              <span className="block font-bold text-white text-sm md:text-base">PERSADA RESIDENCE</span>
              <span className="block text-gold text-xs md:text-sm">DRAMAGA - BOGOR</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-gold hover:bg-gold/90 text-white"
              onClick={() => window.open("https://wa.me/6289649931253", "_blank")}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 glass text-white hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-gold hover:bg-gold/90 text-white"
              onClick={() => window.open("https://wa.me/6289649931253", "_blank")}
            >
              WhatsApp
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};