export function ShopVideo() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent pb-12 md:pb-16 -mt-8 relative z-20" id="video">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-glow glass border border-white/20 bg-white/5 p-2 animate-fade-up">
          <div className="relative aspect-video w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black/20">
            <video
              src="/snaxia-shop-video/snacks-final-reel-corrected.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Snaxia shop experience video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
