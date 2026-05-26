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

export default function App() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      history.replaceState(null, "", window.location.pathname);
    } catch {}
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
