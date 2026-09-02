import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface DiscoverSectionProps {
  onLearnMore: () => void;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FFFDF9] overflow-hidden">
      {/* Coffee Splash accent graphics (top-left decorative element from mockup) */}
      <div className="absolute -top-12 -left-12 w-48 h-48 opacity-25 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="#603809" className="w-full h-full transform -rotate-45">
          <path d="M43.3,-60.7C55.4,-52.1,64.2,-39.2,69.5,-24.8C74.8,-10.3,76.5,5.8,71.7,19.9C66.9,34,55.5,46.1,42.5,54.7C29.5,63.3,14.8,68.4,-0.4,68.9C-15.5,69.5,-31.1,65.4,-44.7,56.7C-58.4,48,-70.2,34.7,-74.6,18.9C-79,3.1,-76,-15.3,-68.2,-29.9C-60.4,-44.4,-47.9,-55.1,-34.5,-63.1C-21.2,-71,-6.9,-76.3,4.1,-82.2C15.2,-88.1,31.2,-69.3,43.3,-60.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#603809] tracking-tight leading-[1.2]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discover the best coffee
            </h2>

            <p className="text-[#707070] text-base sm:text-lg leading-relaxed font-sans-body max-w-xl">
              Bean Scene is a coffee shop that provides you with quality coffee that helps boost
              your productivity and helps build your mood. Having a cup of coffee is good, but having
              a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2.5 text-[#603809] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9C06A] flex-shrink-0" />
                <span>Direct trade with smallholder farms</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#603809] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9C06A] flex-shrink-0" />
                <span>Small batch micro-roasting daily</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#603809] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9C06A] flex-shrink-0" />
                <span>Custom grind sizes for any brew</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#603809] text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9C06A] flex-shrink-0" />
                <span>Zero artificial additives or syrups</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="discover-learn-more-btn"
                onClick={onLearnMore}
                className="group bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-sm sm:text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Coffee beans arranged in cup shape matching mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square rounded-3xl p-4 flex items-center justify-center">
              {/* Decorative radial soft backlight */}
              <div className="absolute inset-0 bg-[#F9C06A]/15 rounded-full blur-3xl -z-10" />

              {/* Coffee bean cup art image from mockup */}
              <div className="relative w-full h-full group">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80"
                  alt="Coffee beans shaped like a cup"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-2 sm:right-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#F9C06A]/30 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F9C06A]/20 flex items-center justify-center text-[#603809] font-bold text-lg">
                    ☕
                  </div>
                  <div>
                    <div className="text-xs text-[#707070] font-medium">Aroma & Body</div>
                    <div className="text-sm font-bold text-[#603809]">Grade A+ Arabica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
