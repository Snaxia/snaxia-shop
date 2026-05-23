import { useState } from "react";
import { menuData, type MenuCategory, type MenuItem } from "@/lib/menu-data";
import { Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Reveal } from "./Reveal";

const tagStyles: Record<string, string> = {
  Popular: "bg-accent/60 text-accent-foreground",
  Bestseller: "bg-gradient-primary text-primary-foreground",
  New: "bg-primary/15 text-primary-deep",
  Recommended: "bg-secondary text-secondary-foreground",
};

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-start sm:items-center justify-between gap-2 sm:gap-4 rounded-2xl px-2 sm:px-4 py-3 hover:bg-primary/5 transition-smooth">
      <div className="flex items-start sm:items-center gap-2 sm:gap-3 min-w-0 flex-1 pt-0.5 sm:pt-0">
        <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-bounce shrink-0 mt-1.5 sm:mt-0" />
        <span className="font-medium leading-tight break-words pr-2">{item.name}</span>
        {item.tag && (
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 mt-0.5 sm:mt-0 ${tagStyles[item.tag]}`}>
            {item.tag}
          </span>
        )}
      </div>
      <span className="font-display font-bold text-primary-deep shrink-0 ml-1">₹{item.price}</span>
    </div>
  );
}

function CategoryView({ cat }: { cat: MenuCategory }) {
  return (
    <div key={cat.id} className="animate-fade-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Reveal variant="left" className="relative order-2 md:order-1 block">
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-[2.5rem] overflow-hidden glass p-2 shadow-glow">
            <img
              src={cat.image}
              alt={cat.category}
              className="w-full h-auto rounded-[2rem] hover:scale-105 transition-bounce"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </Reveal>
        <Reveal variant="right" className="order-1 md:order-2 block">
          <div className="inline-flex items-center gap-2 text-primary-deep font-semibold text-sm uppercase tracking-wider">
            <Sparkles size={14} /> Category
          </div>
          <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold">{cat.category}</h3>
          <p className="mt-2 text-muted-foreground">{cat.description}</p>
        </Reveal>
      </div>
      <div className="mt-8 glass rounded-3xl p-3 md:p-5 shadow-card">
        <div className="grid sm:grid-cols-2 gap-1">
          {cat.items.map((it, i) => (
            <Reveal key={it.name} variant="up" delay={i * 40} threshold={0.05}>
              <ItemRow item={it} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Menu() {
  const [activeId, setActiveId] = useState(menuData[0].id);
  const active = menuData.find((c) => c.id === activeId)!;
  const head = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="menu" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div ref={head.ref} className={`text-center max-w-2xl mx-auto ${head.shown ? "animate-fade-up" : "reveal-init"}`}>
          <span className="text-primary-deep font-semibold uppercase tracking-wider text-sm">The Menu</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Pick your <span className="text-gradient">flavor</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Explore 9 categories of handcrafted drinks.</p>
        </div>

        {/* Mobile: horizontal scroll tabs */}
        <div className="mt-10 md:hidden -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-2 pb-2 min-w-max">
            {menuData.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth ${
                  activeId === c.id
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass text-foreground/80"
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid md:grid-cols-[260px_1fr] gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block">
            <div className="sticky top-28 glass rounded-3xl p-3 shadow-card max-h-[calc(100vh-8rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <ul className="space-y-1">
                {menuData.map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => setActiveId(c.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-smooth flex items-center justify-between ${
                        activeId === c.id
                          ? "bg-gradient-primary text-primary-foreground shadow-glow"
                          : "text-foreground/80 hover:bg-primary/10"
                      }`}
                    >
                      <span>{c.category}</span>
                      <span className="text-xs opacity-70">{c.items.length}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div key={active.id}>
            <CategoryView cat={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
