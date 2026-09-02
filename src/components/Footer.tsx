import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPolicyModal?: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#170C03] text-white pt-16 pb-12 overflow-hidden border-t border-[#F9C06A]/10"
    >
      {/* Background roasted coffee beans texture matching mockup */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-15 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Bio matching mockup (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <span
              className="text-white text-3xl sm:text-4xl font-normal block select-none"
              style={{ fontFamily: "'Clicker Script', 'Dancing Script', cursive" }}
            >
              Bean Scene
            </span>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans-body max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type.
            </p>

            {/* Social Icons matching mockup */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9C06A] hover:text-[#3E2305] text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9C06A] hover:text-[#3E2305] text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9C06A] hover:text-[#3E2305] text-white flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F9C06A] hover:text-[#3E2305] text-white flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: About matching mockup (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className="text-lg font-bold text-white tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              About
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('News & Blogs')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  News & Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('Help & Support')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  Help & Supports
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company matching mockup (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className="text-lg font-bold text-white tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  How we work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('Terms of Service')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  Terms of service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('Frequently Asked Questions')}
                  className="hover:text-[#F9C06A] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us matching mockup exact details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4
              className="text-lg font-bold text-white tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F9C06A] flex-shrink-0 mt-0.5" />
                <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F9C06A] flex-shrink-0" />
                <a href="tel:+12029182132" className="hover:text-[#F9C06A] transition-colors">
                  +1 202-918-2132
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F9C06A] flex-shrink-0" />
                <a href="mailto:beanscene@gmail.com" className="hover:text-[#F9C06A] transition-colors">
                  beanscene@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#F9C06A] flex-shrink-0" />
                <a href="https://www.beanscene.com" target="_blank" rel="noreferrer" className="hover:text-[#F9C06A] transition-colors">
                  www.beanscene.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bean Scene Inc. All rights reserved. Handcrafted for coffee lovers.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-white/70 hover:text-[#F9C06A] transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#F9C06A] group-hover:text-[#3E2305] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
