import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAuth,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C0F05]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#F9C06A]/15'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left transition-transform hover:scale-105"
          >
            <span
              className="text-white text-3xl sm:text-4xl font-normal tracking-wide select-none"
              style={{ fontFamily: "'Clicker Script', 'Dancing Script', cursive" }}
            >
              Bean Scene
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className="text-white/90 hover:text-[#F9C06A] text-[15px] font-medium transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F9C06A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full text-white/90 hover:text-[#F9C06A] hover:bg-white/10 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F9C06A] text-[#3E2305] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Sign In */}
            <button
              id="header-signin-btn"
              onClick={() => onOpenAuth('signin')}
              className="text-white/90 hover:text-[#F9C06A] text-[15px] font-medium px-3 py-1.5 transition-colors"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <button
              id="header-signup-btn"
              onClick={() => onOpenAuth('signup')}
              className="bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-lg hover:shadow-[#F9C06A]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              SignUp
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2 rounded-full text-white hover:text-[#F9C06A]"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F9C06A] text-[#3E2305] font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F9C06A]" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#201205] border-b border-[#F9C06A]/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-white/90 hover:text-[#F9C06A] text-base font-medium py-2 border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => {
                  onOpenAuth('signin');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 rounded-full border border-[#F9C06A]/40 text-white text-sm font-medium hover:bg-white/5"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  onOpenAuth('signup');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#F9C06A] text-[#3E2305] text-sm font-semibold hover:bg-[#eab35f]"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
