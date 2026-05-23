import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const CAROUSEL_IMAGES = [
    "/snaxia%20carousel%20images/1.jpeg",
    "/snaxia%20carousel%20images/2.jpeg",
    "/snaxia%20carousel%20images/3.jpeg",
    "/snaxia%20carousel%20images/4.jpeg",
    "/snaxia%20carousel%20images/5.jpeg",
    "/snaxia%20carousel%20images/6.jpeg",
    "/snaxia%20carousel%20images/7.jpeg",
    "/snaxia%20carousel%20images/8.jpeg",
    "/snaxia%20carousel%20images/9.jpeg",
    "/snaxia%20carousel%20images/10.jpeg",
  ];

  // Autoplay effect
  useEffect(() => {
    if (isAutoplay && !isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
      }, 3000);
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    stopAutoplayTemporarily();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
    stopAutoplayTemporarily();
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
    stopAutoplayTemporarily();
  };

  const stopAutoplayTemporarily = () => {
    setIsAutoplay(false);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    // Resume autoplay after 6 seconds of no interactions
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoplay(true);
    }, 6000);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-[auto] xl:min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden bg-gradient-hero">
      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-8 w-16 h-16 rounded-full bg-primary/20 blur-2xl animate-float-y" />
        <div className="absolute top-40 right-16 w-24 h-24 rounded-full bg-accent/40 blur-2xl animate-float-x" />
        <div className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-primary-glow/30 blur-2xl animate-float-y" />
        <div className="absolute top-1/2 right-1/4 text-5xl animate-float-y" style={{ animationDelay: "1s" }}>🌿</div>
        <div className="absolute bottom-24 right-10 text-4xl animate-float-x" style={{ animationDelay: "0.5s" }}>🍋</div>
        <div className="absolute top-32 left-[45%] text-3xl animate-float-y" style={{ animationDelay: "1.5s" }}>🍓</div>
      </div>

      <div className="mx-auto max-w-7xl px-4 grid xl:grid-cols-2 gap-12 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-soft">
            <span className="w-2 h-2 rounded-full bg-[#ffcd00] animate-pulse-glow" />
            Fresh • Cold-pressed • Loved
          </span>
          <h1 className="mt-6 md:mt-12 ml-10 sm:ml-14 xl:ml-0 font-display font-bold leading-[0.95]">
            <span className="block tracking-tight text-[clamp(4rem,14vw,8rem)] relative whitespace-nowrap" aria-label="SNAXIA">
              {[
                { char: 'S', rotate: '-12deg', y: '-6%' },
                { char: 'N', rotate: '4deg',   y: '6%'  },
                { char: 'A', rotate: '12deg',  y: '-8%' },
                { char: 'X', rotate: '-8deg',  y: '4%'  },
                { char: 'I', rotate: '-2deg',  y: '8%' },
                { char: 'A', rotate: '8deg',   y: '-8%' },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-block relative"
                  style={{ transform: `translateY(${item.y}) rotate(${item.rotate})` }}
                >
                  {/* S — lightning bolt on left */}
                  {i === 0 && (
                    <svg
                      className="text-[#ffcd00] animate-scale-in"
                      style={{ position: 'absolute', right: '100%', top: '10%', width: '0.38em', height: '0.62em', animationDelay: '0.8s', animationFillMode: 'both' }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M13 3 L8 12 L14 14 L9 22" />
                    </svg>
                  )}
                  {/* N (index 1) — dashes above */}
                  {i === 1 && (
                    <svg
                      className="text-[#ffcd00] animate-scale-in"
                      style={{ position: 'absolute', bottom: '90%', left: '0%', width: '0.55em', height: '0.55em', animationDelay: '1s', animationFillMode: 'both' }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                    >
                      <path d="M6 14 L10 4 M14 18 L18 8" />
                    </svg>
                  )}
                  {/* I (index 4) — zigzag wave above */}
                  {i === 4 && (
                    <svg
                      className="text-[#ffcd00] animate-scale-in"
                      style={{ position: 'absolute', bottom: '95%', left: '-0.7em', width: '1.3em', height: '0.4em', animationDelay: '1.2s', animationFillMode: 'both' }}
                      viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M4 14 L12 6 L20 16 L28 8 L36 14" />
                    </svg>
                  )}
                  {/* Last A (index 5) — two parallel angle dashes on right */}
                  {i === 5 && (
                    <svg
                      className="text-[#ffcd00] animate-scale-in"
                      style={{ position: 'absolute', left: '100%', top: '20%', width: '0.4em', height: '0.5em', animationDelay: '1.4s', animationFillMode: 'both' }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                    >
                      <path d="M4 12 L14 6 M4 16 L14 20" />
                    </svg>
                  )}
                  <span
                    className="snaxia-letter block"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      fontFamily: '"Montserrat", "Segoe UI Black", Impact, sans-serif'
                    }}
                  >
                    {item.char}
                  </span>
                </span>
              ))}
            </span>
            <span className="mt-4 inline-block border-2 border-[#ffcd00] text-white rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg font-semibold">
              Quick bites, Lasting flavours
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
            A modern snack & beverage bar serving handcrafted shakes, juices,
            mojitos and lassis. Real fruits. Real fresh. Real fun.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-[#ffcd00] text-primary-deep px-7 py-4 font-semibold shadow-glow hover:scale-105 hover:bg-[#ffe169] transition-bounce"
            >
              Explore Menu →
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "100+", l: "Drinks" },
              { n: "9", l: "Categories" },
              { n: "2", l: "Branches" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center shadow-soft">
                <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                <div className="text-xs text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="relative animate-scale-in group/carousel"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsAutoplay(true);
          }}
        >
          <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="absolute inset-0 animate-spin-slow opacity-50">
            <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30" />
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-glow glass p-2">
            <div className="relative aspect-[6/5] rounded-[2.5rem] overflow-hidden bg-black/5">
              {CAROUSEL_IMAGES.map((imgSrc, idx) => (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt={`Snaxia beverage ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass hover:bg-white flex items-center justify-center shadow-card opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass hover:bg-white flex items-center justify-center shadow-card opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {CAROUSEL_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDotClick(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card animate-float-y z-30">
            <div className="flex items-center gap-2">
              <div className="text-2xl">⭐</div>
              <div>
                <div className="text-sm font-bold">4.8 / 5</div>
                <div className="text-xs text-muted-foreground">Loved locally</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
