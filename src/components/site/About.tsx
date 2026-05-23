
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const features = [
    { icon: "🌿", title: "100% Fresh", desc: "Made on order with hand-picked fruits, daily." },
    { icon: "🧊", title: "Premium Quality", desc: "Pure milk, real ingredients, zero shortcuts." },
    { icon: "💚", title: "Crafted with Love", desc: "Every glass made the Snaxia way — fun, fresh, full of flavor." },
  ];
  const left = useReveal<HTMLDivElement>(0.15);
  const right = useReveal<HTMLDivElement>(0.15);
  const bottom = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div
          ref={left.ref}
          className={`relative ${left.shown ? "md:animate-slide-in-left animate-fade-up" : "md:reveal-init"}`}
        >
          <div className="absolute -inset-6 bg-gradient-fresh opacity-60 blur-2xl rounded-full" />
          <div className="relative glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-card">
            <img src="/snaxia-logo.png" alt="Snaxia brand" className="w-44 h-44 md:w-60 md:h-60 mx-auto rounded-full shadow-glow animate-float-y object-contain" />
            <div className="mt-6 text-center">
              <div className="font-display text-xl md:text-2xl font-bold text-gradient">snaxia.in</div>
              <div className="text-xs md:text-sm text-muted-foreground">Snack shop · Juice bar · Café vibes</div>
            </div>
          </div>
        </div>
        <div
          ref={right.ref}
          className={`${right.shown ? "md:animate-slide-in-right animate-fade-up" : "md:reveal-init"}`}
        >
          <span className="inline-block text-primary-deep font-semibold uppercase tracking-wider text-xs md:text-sm">
            About Snaxia
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            More than a drink — <span className="text-gradient">it's a vibe.</span>
          </h2>
          <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg">
            Snaxia is a modern snack and beverage brand built around three things:
            freshness, flavor, and fun. From thick shakes to zingy mojitos, every
            sip is crafted to brighten your day.
          </p>
          <div
            ref={bottom.ref}
            className={`mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 ${
              bottom.shown ? "md:animate-slide-in-bottom animate-fade-up" : "md:reveal-init"
            }`}
          >
            {features.map((f) => (
              <div key={f.title} className="glass rounded-2xl p-5 shadow-soft hover-lift">
                <div className="text-3xl">{f.icon}</div>
                <div className="mt-2 font-display text-lg font-semibold">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
