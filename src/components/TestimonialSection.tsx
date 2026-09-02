import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/coffeeData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative py-20 lg:py-28 bg-[#FFFDF9] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative coffee splashes from mockup */}
      <div className="absolute top-1/4 right-0 translate-x-1/3 w-80 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="#603809">
          <path d="M43.3,-60.7C55.4,-52.1,64.2,-39.2,69.5,-24.8C74.8,-10.3,76.5,5.8,71.7,19.9C66.9,34,55.5,46.1,42.5,54.7C29.5,63.3,14.8,68.4,-0.4,68.9C-15.5,69.5,-31.1,65.4,-44.7,56.7C-58.4,48,-70.2,34.7,-74.6,18.9C-79,3.1,-76,-15.3,-68.2,-29.9C-60.4,-44.4,-47.9,-55.1,-34.5,-63.1C-21.2,-71,-6.9,-76.3,4.1,-82.2C15.2,-88.1,31.2,-69.3,43.3,-60.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 -translate-x-1/3 w-72 h-72 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="#603809">
          <path d="M37.8,-53.4C50.2,-46.8,62.2,-37.5,67.6,-25.1C73.1,-12.7,72,2.8,67.4,17.4C62.7,32,54.6,45.7,42.8,55.3C31.1,64.9,15.5,70.5,-0.5,71.2C-16.6,71.9,-33.2,67.8,-46.3,58.3C-59.5,48.8,-69.2,33.9,-73.4,17.7C-77.6,1.4,-76.3,-16.2,-69,-30.8C-61.7,-45.5,-48.4,-57.2,-34.2,-63C-19.9,-68.7,-4.8,-68.4,7.8,-67.2C20.3,-66.1,25.4,-60.1,37.8,-53.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching mockup */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#603809] tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our coffee perfection feedback
          </h2>
          <p className="text-[#707070] text-sm sm:text-base md:text-lg font-sans-body">
            Our customers has amazing things to say about us
          </p>
        </div>

        {/* Testimonial Card with Left/Right Arrows matching mockup */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button matching mockup (amber square with rounded corners) */}
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            aria-label="Previous review"
            className="absolute -left-2 sm:-left-6 lg:-left-12 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Testimonial Content Box */}
          <div className="w-full bg-[#FFF9F1] border border-[#F9C06A]/30 rounded-3xl p-6 sm:p-10 md:p-14 shadow-md text-center relative max-w-3xl">
            {/* Big quote symbol matching mockup */}
            <div
              className="text-6xl sm:text-7xl md:text-8xl text-[#F9C06A] font-serif leading-none select-none -mt-4 mb-2 opacity-80"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              “
            </div>

            {/* Testimonial Text */}
            <p className="text-[#707070] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-sans-body">
              {current.quote}
            </p>

            {/* Author Details matching mockup */}
            <div className="flex flex-col items-center">
              <h4
                className="text-xl sm:text-2xl font-bold text-[#603809] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {current.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#707070] font-medium mb-4 font-sans-body">
                {current.role}
              </p>

              {/* Author Avatar in rounded square matching mockup */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md border-2 border-[#F9C06A]">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F9C06A] text-[#F9C06A]" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow Button matching mockup (amber square with rounded corners) */}
          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            aria-label="Next review"
            className="absolute -right-2 sm:-right-6 lg:-right-12 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#603809]'
                  : 'w-2.5 bg-[#F9C06A]/40 hover:bg-[#F9C06A]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
