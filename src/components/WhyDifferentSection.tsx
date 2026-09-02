import React from 'react';
import { FEATURES } from '../data/coffeeData';
import { Award, Coffee, Coins, Sparkles } from 'lucide-react';

interface WhyDifferentSectionProps {
  onJoinUs: () => void;
}

export const WhyDifferentSection: React.FC<WhyDifferentSectionProps> = ({ onJoinUs }) => {
  // Renders custom icon matching the mockup design
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'beans':
        return (
          <div className="w-16 h-16 rounded-full bg-[#FFF9F1] border-2 border-[#F9C06A]/40 flex items-center justify-center text-[#603809] shadow-sm">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-[1.75]">
              <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z" />
              <path d="M12 3C10 7 10 17 12 21" />
              <path d="M8 8C9 10 9 14 8 16" />
              <path d="M16 8C15 10 15 14 16 16" />
            </svg>
          </div>
        );
      case 'medal':
        return (
          <div className="w-16 h-16 rounded-full bg-[#FFF9F1] border-2 border-[#F9C06A]/40 flex items-center justify-center text-[#603809] shadow-sm">
            <Award className="w-8 h-8 stroke-[1.75]" />
          </div>
        );
      case 'cup':
        return (
          <div className="w-16 h-16 rounded-full bg-[#FFF9F1] border-2 border-[#F9C06A]/40 flex items-center justify-center text-[#603809] shadow-sm">
            <Coffee className="w-8 h-8 stroke-[1.75]" />
          </div>
        );
      case 'price':
        return (
          <div className="w-16 h-16 rounded-full bg-[#FFF9F1] border-2 border-[#F9C06A]/40 flex items-center justify-center text-[#603809] shadow-sm">
            <Coins className="w-8 h-8 stroke-[1.75]" />
          </div>
        );
      default:
        return <Sparkles className="w-8 h-8 text-[#603809]" />;
    }
  };

  return (
    <section className="relative py-20 lg:py-24 bg-[#FFFDF9] overflow-hidden">
      {/* Decorative coffee splash on the right matching mockup */}
      <div className="absolute top-12 right-0 translate-x-1/4 w-96 h-96 opacity-25 pointer-events-none">
        <svg viewBox="0 0 300 300" fill="#603809">
          <path d="M48.1,-63.3C61.4,-56.3,70.5,-41.8,75.4,-26.3C80.3,-10.7,81.1,5.9,76.5,21.5C72,37.1,62.1,51.8,48.7,61.9C35.2,71.9,18.1,77.3,1.3,75.5C-15.6,73.7,-32.1,64.7,-46.8,53.4C-61.6,42.1,-74.6,28.5,-79.1,12.2C-83.5,-4.1,-79.5,-23.1,-69.8,-37.7C-60,-52.3,-44.6,-62.5,-29.4,-68.6C-14.2,-74.8,0.7,-76.8,15.6,-74.9C30.5,-73,45.4,-67.2,48.1,-63.3Z" transform="translate(150 150)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#603809] tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why are we different?
          </h2>
          <p className="text-[#707070] text-sm sm:text-base md:text-lg font-sans-body">
            We don't just make your coffee, we make your day!
          </p>
        </div>

        {/* 4 Feature Cards matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className="bg-[#FFF9F1] rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center border border-[#F9C06A]/30 hover:border-[#F9C06A] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5">{renderIcon(feature.iconName)}</div>
              <h3
                className="text-xl font-bold text-[#603809] mb-2 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-[#707070] leading-relaxed font-sans-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA block matching mockup */}
        <div className="text-center max-w-xl mx-auto pt-2">
          <p className="text-sm sm:text-base text-[#707070] mb-2 font-sans-body">
            Great ideas start with great coffee, Let's help you achieve that
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold text-[#603809] mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Get started today.
          </h3>
          <button
            id="why-join-us-btn"
            onClick={onJoinUs}
            className="bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-sm sm:text-base px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
};
