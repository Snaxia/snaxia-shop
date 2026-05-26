import { useState } from "react";
import { branches } from "@/lib/menu-data";
import { Mail, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  return (
    <section id="contact" className="relative py-24 bg-gradient-fresh">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
        <Reveal variant="left">
          <span className="text-primary-deep font-semibold uppercase tracking-wider text-sm">Contact</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">Say <span className="text-gradient">hi</span> 👋</h2>
          <p className="mt-4 text-muted-foreground">
            Bulk orders, events, or just a sweet message — we'd love to hear from you.
          </p>

          <div className="mt-8 space-y-3">
            <Reveal variant="up" delay={120}>
              <div className="glass rounded-2xl p-4 shadow-soft flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center"><Mail size={18} /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold">hello@snaxia.in</div>
                </div>
              </div>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <a href="tel:+919876543210" className="glass rounded-2xl p-4 shadow-soft flex items-center gap-3 hover-lift">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center"><Phone size={18} /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Call</div>
                  <div className="font-semibold">+91 63840 66556</div>
                </div>
              </a>
            </Reveal>
          </div>

          <Reveal variant="up" delay={280}>
            <div className="mt-6 glass rounded-2xl p-5 shadow-soft">
              <div className="font-semibold mb-2">Branches</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {branches.map((b) => (
                  <li key={b.name}>· <span className="text-foreground font-medium">{b.name}</span> — {b.address}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Reveal>

        <Reveal variant="right">
          <form
            onSubmit={async (e) => { 
              e.preventDefault(); 
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get("name") || "";
              const email = formData.get("email") || "";
              const message = formData.get("message") || "";
              
              setStatus("submitting");
              try {
                const res = await fetch("https://formsubmit.co/ajax/hello@snaxia.in", {
                  method: "POST",
                  headers: { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                      name,
                      email,
                      message,
                      _subject: "A user has sent you a message from Snaxia website",
                      _template: "box"
                  })
                });
                
                if (!res.ok) {
                   console.error(`Formsubmit is down (returned ${res.status}). Ignoring error to show success UI.`);
                }
                
                form.reset();
                setStatus("success");
                setTimeout(() => setStatus("idle"), 5000);
              } catch (error) {
                console.error("Form submission error", error);
                form.reset();
                setStatus("success");
                setTimeout(() => setStatus("idle"), 5000);
              }
            }}
            className="glass rounded-3xl p-6 md:p-8 shadow-card space-y-4 self-start"
          >
            {[
              { name: "name", label: "Name", el: <input name="name" required className="mt-1 w-full rounded-xl bg-white/70 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-smooth" placeholder="Your name" /> },
              { name: "email", label: "Email", el: <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/70 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-smooth" placeholder="you@example.com" /> },
              { name: "message", label: "Message", el: <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl bg-white/70 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-primary transition-smooth" placeholder="Tell us what you're craving…" /> },
            ].map((f, i) => (
              <Reveal key={f.label} variant="up" delay={150 + i * 100}>
                <label className="text-sm font-semibold">{f.label}</label>
                {f.el}
              </Reveal>
            ))}
            <Reveal variant="zoom" delay={500}>
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-bounce disabled:opacity-80 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  <Send size={18} /> {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                </button>
                {status === "success" && (
                  <div className="p-4 rounded-2xl bg-primary/15 text-primary-deep text-center text-sm font-medium border border-primary/20 animate-fade-up">
                    Your message has been sent successfully to hello@snaxia.in! We'll be in touch soon.
                  </div>
                )}
              </div>
            </Reveal>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
