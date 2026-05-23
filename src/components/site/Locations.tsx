import { branches } from "@/lib/menu-data";
import { MapPin, Navigation } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

function BranchCard({ b, delay }: { b: (typeof branches)[number]; delay: number }) {
  const r = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={r.ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`glass rounded-3xl p-6 shadow-card hover-lift flex flex-col ${
        r.shown ? "animate-slide-in-bottom" : "reveal-init"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
          <MapPin size={22} />
        </div>
        <h3 className="font-display text-lg font-bold">{b.name}</h3>
      </div>
      <p className="mt-4 text-muted-foreground text-sm flex-1">{b.address}</p>
      <a
        href={b.maps}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground py-3 px-5 font-semibold shadow-glow hover:scale-105 transition-bounce"
      >
        <Navigation size={16} /> Get Directions
      </a>
    </div>
  );
}

export function Locations() {
  const head = useReveal<HTMLDivElement>(0.2);
  return (
    <section id="locations" className="relative py-16 md:py-24 bg-gradient-fresh">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={head.ref}
          className={`text-center max-w-2xl mx-auto ${head.shown ? "animate-fade-up" : "reveal-init"}`}
        >
          <span className="text-primary-deep font-semibold uppercase tracking-wider text-xs md:text-sm">Find Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold">Our <span className="text-gradient">branches</span></h2>
          <p className="mt-4 text-muted-foreground">Two cozy spots, same great Snaxia experience.</p>
        </div>
        <div className="mt-10 md:mt-12 grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {branches.map((b, i) => (
            <BranchCard key={b.name} b={b} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
