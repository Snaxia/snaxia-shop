
import { Instagram, Facebook } from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/snaxia.chennai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61580378783673";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 grid gap-10 md:gap-8 md:grid-cols-3 items-center text-center">
        {/* LEFT — Connect with us */}
        <div className="flex flex-col items-center md:items-start gap-3 order-2 md:order-1">
          <div className="text-sm font-semibold text-foreground">Connect with us</div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-glow hover:scale-105 transition-bounce"
              aria-label="Snaxia on Instagram"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-glow hover:scale-105 transition-bounce"
              aria-label="Snaxia on Facebook"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-smooth"
            >
              @snaxia.chennai (Instagram)
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-smooth"
            >
              @snaxia.chennai (Facebook)
            </a>
          </div>
        </div>

        {/* CENTER — Logo */}
        <div className="flex flex-col items-center gap-2 order-1 md:order-2">
          <img
            src="/snaxia-logo.png"
            alt="Snaxia logo"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain rounded-full"
          />
          <div className="text-xs sm:text-sm text-muted-foreground italic">
            "Quick bites, Lasting flavours"
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Snaxia. All rights reserved.
          </div>
        </div>

        {/* RIGHT — Explore */}
        <div className="flex flex-col items-center md:items-end gap-3 order-3">
          <div className="text-sm font-semibold text-foreground">Explore</div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground justify-center md:justify-end">
            <a href="#menu" className="hover:text-primary transition-smooth">Menu</a>
            <span>·</span>
            <a href="#locations" className="hover:text-primary transition-smooth">Locations</a>
            <span>·</span>
            <a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
            <span>·</span>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
