import { useEffect, useState } from "react";
import { menuData } from "@/lib/menu-data";
import { Star, Plus, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { supabase } from "@/lib/supabase";

type Review = { name: string; rating: number; text: string; ts?: number };



function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          type="button"
          key={n}
          onClick={() => onChange(n)}
          className="transition-bounce hover:scale-110"
          aria-label={`Rate ${n} star`}
        >
          <Star
            size={26}
            className={n <= value ? "fill-accent text-accent" : "text-muted-foreground/40"}
          />
        </button>
      ))}
    </div>
  );
}

function WriteReviewDialog({ open, onClose, onSubmit }: { open: boolean; onClose: () => void; onSubmit: (r: Review) => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim() || !text.trim()) return;
          onSubmit({ name: name.trim().slice(0, 40), rating, text: text.trim().slice(0, 400), ts: Date.now() });
          setName(""); setText(""); setRating(5);
          onClose();
        }}
        className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-card animate-scale-in"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-primary/10 flex items-center justify-center">
          <X size={18} />
        </button>
        <div className="font-display text-2xl font-bold">Write a review</div>
        <div className="text-sm text-muted-foreground">Share your Snaxia experience</div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-sm font-semibold">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} required className="mt-1 w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-semibold">Rating</label>
            <div className="mt-1"><StarPicker value={rating} onChange={setRating} /></div>
          </div>
          <div>
            <label className="text-sm font-semibold">Your experience</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} maxLength={400} required className="mt-1 w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Tell us what you loved…" />
          </div>
        </div>
        <button type="submit" className="mt-5 w-full rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 font-semibold shadow-glow">
          Submit review
        </button>
      </form>
    </div>
  );
}

function AllReviewsDialog({ open, onClose, items }: { open: boolean; onClose: () => void; items: Review[] }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[80vh] flex flex-col bg-white rounded-3xl shadow-card animate-scale-in">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <div className="font-display text-xl font-bold">All reviews</div>
            <div className="text-xs text-muted-foreground">{items.length} total</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full hover:bg-primary/10 flex items-center justify-center">
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto p-5 space-y-3">
          {items.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border p-4 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={13} className="fill-accent text-accent" />)}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const [items, setItems] = useState<Review[]>([]);
  const [writeOpen, setWriteOpen] = useState(false);
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        const formatted = data.map((d: any) => ({
          name: d.name,
          rating: d.rating,
          text: d.text,
          ts: new Date(d.created_at).getTime(),
        }));
        setItems(formatted);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (r: Review) => {
    setItems((prev) => [r, ...prev]);
    await supabase.from("reviews").insert([
      { name: r.name, rating: r.rating, text: r.text },
    ]);
  };

  const top5 = items.slice(0, 5);
  const gallery = menuData.slice(0, 6);

  return (
    <section id="reviews" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-start">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-primary-deep font-semibold uppercase tracking-wider text-xs md:text-sm">Reviews</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold">Loved by <span className="text-gradient">our regulars</span></h2>
              </div>
              <button
                onClick={() => setWriteOpen(true)}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-primary-foreground px-4 py-2.5 text-xs md:text-sm font-semibold shadow-glow hover:scale-105 transition-bounce"
              >
                <Plus size={16} /> Write a review
              </button>
            </div>
            <div className="mt-6 glass rounded-3xl p-5 md:p-6 shadow-card flex items-center gap-5">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">4.8</div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-accent text-accent" />)}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Based on Google reviews</div>
              </div>
            </div>
            <div className="mt-6 space-y-3 md:space-y-4">
              {top5.map((r, i) => (
                <Reveal key={(r.ts ?? 0) + r.name + i} variant="up" delay={i * 90}>
                  <div className="glass rounded-2xl p-4 md:p-5 shadow-soft hover-lift">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-sm md:text-base truncate">{r.name}</div>
                      <div className="flex gap-0.5 shrink-0">
                        {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="fill-accent text-accent" />)}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">"{r.text}"</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <button
              onClick={() => setAllOpen(true)}
              className="mt-5 w-full md:w-auto inline-flex items-center justify-center rounded-full glass border border-primary/20 text-primary-deep px-6 py-3 font-semibold hover:bg-primary/10 transition-smooth"
            >
              View all reviews ({items.length})
            </button>
          </div>

          <div>
            <span className="text-primary-deep font-semibold uppercase tracking-wider text-xs md:text-sm">Gallery</span>
            <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold">A peek inside the bar</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((g, i) => (
                <Reveal key={g.id} variant="zoom" delay={i * 80} className={`relative rounded-2xl overflow-hidden glass shadow-card hover-lift ${i % 3 === 0 ? "row-span-2" : ""}`}>
                  <img
                    src={g.image}
                    alt={g.category}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-square"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="text-white text-xs md:text-sm font-semibold">{g.category}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WriteReviewDialog open={writeOpen} onClose={() => setWriteOpen(false)} onSubmit={handleSubmit} />
      <AllReviewsDialog open={allOpen} onClose={() => setAllOpen(false)} items={items} />
    </section>
  );
}
