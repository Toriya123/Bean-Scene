import React, { useState } from 'react';
import { CoffeeProduct } from '../types';
import { Plus, Flame, Star, Sparkles } from 'lucide-react';

interface MenuSectionProps {
  products: CoffeeProduct[];
  onSelectProduct: (product: CoffeeProduct) => void;
  onQuickAdd: (product: CoffeeProduct) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'espresso' | 'latte' | 'brewed'>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory || (activeCategory === 'all'));

  return (
    <section id="menu" className="relative py-20 lg:py-24 bg-[#FFFDF9] overflow-hidden">
      {/* Decorative coffee splash graphic on the top-left matching the design */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-80 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" fill="#603809">
          <path d="M120,40 C190,10 240,60 290,110 C340,160 380,240 330,300 C280,360 170,390 100,340 C30,290 10,190 40,120 C70,50 50,70 120,40 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching mockup */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#603809] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Enjoy a new blend of coffee style
          </h2>
          <p className="text-[#707070] text-sm sm:text-base md:text-lg font-sans-body">
            Explore all flavours of coffee with us. There is always a new cup worth experiencing
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#603809] text-white shadow-md'
                  : 'bg-[#FFF9F1] text-[#707070] hover:text-[#603809] border border-[#603809]/15'
              }`}
            >
              All Signatures
            </button>
            <button
              onClick={() => setActiveCategory('espresso')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === 'espresso'
                  ? 'bg-[#603809] text-white shadow-md'
                  : 'bg-[#FFF9F1] text-[#707070] hover:text-[#603809] border border-[#603809]/15'
              }`}
            >
              Espresso Based
            </button>
            <button
              onClick={() => setActiveCategory('latte')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === 'latte'
                  ? 'bg-[#603809] text-white shadow-md'
                  : 'bg-[#FFF9F1] text-[#707070] hover:text-[#603809] border border-[#603809]/15'
              }`}
            >
              Chai & Lattes
            </button>
            <button
              onClick={() => setActiveCategory('brewed')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === 'brewed'
                  ? 'bg-[#603809] text-white shadow-md'
                  : 'bg-[#FFF9F1] text-[#707070] hover:text-[#603809] border border-[#603809]/15'
              }`}
            >
              Cold & Nitro
            </button>
          </div>
        </div>

        {/* Product Cards Grid matching the 4-column layout from mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`coffee-card-${product.id}`}
              className="group bg-[#FFF9F1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-[#F9C06A]/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-center relative"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-[#201205]/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Rating Badge */}
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-white text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#F9C06A] text-[#F9C06A]" />
                  <span className="font-semibold">{product.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Product Info matching mockup typography */}
              <div className="space-y-1 mb-4">
                <h3
                  className="text-lg sm:text-xl font-bold text-[#603809] tracking-tight group-hover:text-[#B36317] transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#707070] font-medium font-sans-body">
                  {product.ratio}
                </p>
                <p className="text-base sm:text-lg font-bold text-[#603809] pt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              {/* Order Now Button matching mockup (amber pill) */}
              <div className="mt-auto">
                <button
                  id={`order-btn-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="w-full bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-sm py-2.5 px-4 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
