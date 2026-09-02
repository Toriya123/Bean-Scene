import React from 'react';
import { ArrowRight, Sparkles, Flame } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onExploreRoast: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onExploreRoast }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start overflow-hidden bg-[#1A0E05]"
    >
      {/* Background Image with Dark Vignette Overlay matching mockup */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000 scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&auto=format&fit=crop&q=85')`,
        }}
      >
        {/* Dark radial and gradient overlays to ensure text readability while preserving the cup and beans on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#170C04]/95 via-[#170C04]/80 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#170C04] via-transparent to-black/50" />
      </div>

      {/* Floating steam and warmth particles (CSS animation) */}
      <div className="absolute right-[15%] top-[25%] pointer-events-none hidden lg:block z-10 opacity-70">
        <div className="relative w-32 h-44">
          <div className="absolute inset-0 animate-pulse blur-xl bg-[#F9C06A]/20 rounded-full" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9C06A]/10 border border-[#F9C06A]/20 text-[#F9C06A] text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
            <Flame className="w-3.5 h-3.5 text-[#F9C06A]" />
            <span>Freshly Roasted Daily • Single Origin Beans</span>
          </div>

          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-light tracking-wide mb-1 font-sans-body">
            We've got your morning covered with
          </p>

          {/* Cursive Display Word: Coffee */}
          <h1
            className="text-white text-7xl sm:text-8xl md:text-9xl font-normal leading-[1.05] drop-shadow-2xl my-2 select-none"
            style={{ fontFamily: "'Dancing Script', 'Clicker Script', cursive" }}
          >
            Coffee
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl mb-8 font-sans-body">
            It is best to start your day with a cup of coffee. Discover the best flavours coffee
            you will ever have. We provide the best for our customers.
          </p>

          {/* Action Button & Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              id="hero-order-now-btn"
              onClick={onOrderNow}
              className="group bg-[#F9C06A] hover:bg-[#e6ab52] text-[#3E2305] font-bold text-base sm:text-lg px-9 py-3.5 rounded-full shadow-xl hover:shadow-[#F9C06A]/30 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-roast-btn"
              onClick={onExploreRoast}
              className="text-white/90 hover:text-[#F9C06A] text-sm sm:text-base font-medium px-5 py-3 rounded-full border border-white/20 hover:border-[#F9C06A]/50 bg-white/5 backdrop-blur-sm transition-all"
            >
              Explore Roasts
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F9C06A] font-serif-heading">100%</div>
              <div className="text-xs sm:text-sm text-white/70">Organic Arabica</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F9C06A] font-serif-heading">24h</div>
              <div className="text-xs sm:text-sm text-white/70">Roast to Cup</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#F9C06A] font-serif-heading">4.9★</div>
              <div className="text-xs sm:text-sm text-white/70">Customer Love</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom curve separator */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFFDF9] to-transparent z-20 pointer-events-none" />
    </section>
  );
};
