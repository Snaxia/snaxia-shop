import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ShopVideo } from "@/components/site/ShopVideo";
import { About } from "@/components/site/About";
import { Locations } from "@/components/site/Locations";
import { Menu } from "@/components/site/Menu";

import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snaxia - Fresh Juices, Shakes & Mojitos" },
      { name: "description", content: "Snaxia is a modern snack & beverage bar serving handcrafted shakes, fresh juices, mojitos and lassis. Real fruits. Real fresh." },
      { property: "og:title", content: "Snaxia — Sip the vibe" },
      { property: "og:description", content: "Handcrafted shakes, juices and mojitos. Three branches, one fresh experience." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try { history.replaceState(null, "", window.location.pathname); } catch {}
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ShopVideo />
      <About />
      <Locations />
      <Menu />

      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
