import { useEffect } from "react";
import { X } from "lucide-react";

const SWIGGY = "https://www.swiggy.com/city/chennai/snaxia-juice-and-cafe-annanagar-rest1365574?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder";
const ZOMATO = "https://www.zomato.com/chennai/snaxia-quick-bites-lasting-flavours-anna-nagar-west/order";

export function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-up" onClick={onClose} />
      <div className="relative w-full max-w-md glass rounded-3xl p-6 shadow-card animate-scale-in bg-white">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full hover:bg-primary/10 flex items-center justify-center transition-smooth">
          <X size={18} />
        </button>
        <div className="font-display text-2xl font-bold">Order online</div>
        <div className="text-sm text-muted-foreground">Snaxia — Café & Juice</div>
        <div className="mt-5 text-sm font-semibold text-foreground">Place order with:</div>

        <a href={ZOMATO} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-4 p-4 rounded-2xl border border-border hover:bg-primary/5 transition-smooth hover-lift">
          <div className="w-11 h-11 rounded-xl bg-[#E23744] text-white flex items-center justify-center font-bold text-xs">Z</div>
          <div className="flex-1">
            <div className="font-semibold">Zomato</div>
            <div className="text-xs text-muted-foreground">Delivery fee ₹40–₹60 · Service fee may apply</div>
            <div className="text-xs text-muted-foreground">Delivers in 30–40 min</div>
          </div>
          <span className="text-muted-foreground">›</span>
        </a>

        <a href={SWIGGY} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-4 p-4 rounded-2xl border border-border hover:bg-primary/5 transition-smooth hover-lift">
          <div className="w-11 h-11 rounded-xl bg-[#FC8019] text-white flex items-center justify-center font-bold">S</div>
          <div className="flex-1">
            <div className="font-semibold">Swiggy</div>
            <div className="text-xs text-muted-foreground">Fees may apply</div>
          </div>
          <span className="text-muted-foreground">›</span>
        </a>
      </div>
    </div>
  );
}
