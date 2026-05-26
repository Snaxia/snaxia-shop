import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { OrderModal } from "./OrderModal";

const links = [
  { href: "#about", label: "About" },
  { href: "#locations", label: "Locations" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function BrandPill({ size = "md" }: { size?: "sm" | "md" }) {
  const isSm = size === "sm";
  return (
    <a href="/" className="flex items-center group" aria-label="Snaxia home">
      <img
        src="/snaxia-logo.png"
        alt="Snaxia logo"
        className={`object-contain rounded-full ${isSm ? "h-11 w-11" : "h-14 w-14"}`}
      />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-smooth ${scrolled ? "py-2" : "py-2 md:py-4"}`}>
        <div className="mx-auto max-w-7xl px-3 md:px-4">
          {/* Mobile bar */}
          <div className="md:hidden flex items-center justify-between rounded-2xl bg-white shadow-card border border-border px-2 py-2">
            <BrandPill size="sm" />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOrderOpen(true)}
                className="rounded-full bg-gradient-primary text-primary-foreground px-3 py-2 text-xs font-semibold shadow-glow"
              >
                Order
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-full bg-secondary text-foreground"
                aria-label="Menu"
              >
                {open ? <X size={18} /> : <MenuIcon size={18} />}
              </button>
            </div>
          </div>

          {/* Desktop bar */}
          <div className={`hidden md:flex items-center justify-between rounded-full px-3 py-2 transition-smooth ${scrolled ? "glass shadow-soft" : "bg-white/60 backdrop-blur"}`}>
            <BrandPill />
            <nav className="flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setOrderOpen(true)}
              className="inline-flex items-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:scale-105 transition-bounce"
            >
              Order Now
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-2 bg-white rounded-2xl p-3 shadow-card border border-border animate-fade-up">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/10 text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setOpen(false); setOrderOpen(true); }}
                className="mt-2 w-full text-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 font-semibold text-sm"
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </header>
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
}
