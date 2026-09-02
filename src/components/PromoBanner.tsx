import React, { useState } from 'react';
import { Sparkles, Copy, Check, ArrowRight } from 'lucide-react';

interface PromoBannerProps {
  onOrderNow: () => void;
  onApplyPromo?: (code: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOrderNow, onApplyPromo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('MORNING20');
    setCopied(true);
    if (onApplyPromo) onApplyPromo('MORNING20');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#231307] text-white overflow-hidden">
      {/* Background with roasted coffee beans pattern and radial gradients */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C0D03] via-[#2A1406]/90 to-[#190C03]/95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column matching mockup */}
          <div className="lg:col-span-7 space-y-6">
            {/* Promo Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9C06A]/15 border border-[#F9C06A]/30 text-[#F9C06A] text-xs sm:text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Morning Perks & Discounts</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get a chance to have an <br className="hidden sm:inline" />
              Amazing morning
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-lg font-sans-body">
              We are giving you an one time opportunity to experience a better life with coffee.
            </p>

            {/* Interactive Coupon Box */}
            <div className="inline-flex items-center gap-3 bg-black/40 border border-[#F9C06A]/30 px-4 py-2.5 rounded-xl backdrop-blur-sm">
              <span className="text-xs sm:text-sm text-white/70">Promo code:</span>
              <span className="font-mono font-bold text-[#F9C06A] text-sm sm:text-base tracking-wider">
                MORNING20
              </span>
              <button
                onClick={handleCopyCode}
                className="text-xs bg-[#F9C06A]/20 hover:bg-[#F9C06A]/30 text-[#F9C06A] px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy promo code"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Order Now Button matching mockup */}
            <div className="pt-2">
              <button
                id="promo-order-now-btn"
                onClick={onOrderNow}
                className="group bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-base px-9 py-3.5 rounded-full shadow-lg hover:shadow-[#F9C06A]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Takeaway coffee cup with beans matching mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-64 sm:w-80 aspect-[4/5] flex items-center justify-center">
              {/* Warm glow behind cup */}
              <div className="absolute inset-0 bg-[#F9C06A]/20 rounded-full blur-3xl -z-10" />

              {/* Realistic takeaway cup with kraft sleeve matching mockup */}
              <div className="relative group w-full h-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80"
                  alt="Takeaway Coffee Cup surrounded by roasted coffee beans"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cup Sleeve Badge */}
                <div className="absolute inset-x-8 bottom-8 bg-[#2A1406]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#F9C06A]/30 text-center shadow-lg">
                  <span
                    className="text-[#F9C06A] text-2xl font-normal block"
                    style={{ fontFamily: "'Dancing Script', 'Clicker Script', cursive" }}
                  >
                    Bean Scene
                  </span>
                  <span className="text-white/80 text-xs tracking-wider uppercase font-medium">
                    Freshly Brewed To Go
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
