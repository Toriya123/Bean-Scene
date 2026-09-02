import React, { useState } from 'react';
import { COFFEE_PRODUCTS } from './data/coffeeData';
import { CoffeeProduct, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DiscoverSection } from './components/DiscoverSection';
import { MenuSection } from './components/MenuSection';
import { WhyDifferentSection } from './components/WhyDifferentSection';
import { PromoBanner } from './components/PromoBanner';
import { TestimonialSection } from './components/TestimonialSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { OrderCustomizerModal } from './components/OrderCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { StoryModal } from './components/StoryModal';
import { PolicyModal } from './components/PolicyModal';
import { Toast } from './components/Toast';

export default function App() {
  // Cart & Order State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<CoffeeProduct | null>(null);
  const [promoCode, setPromoCode] = useState('MORNING20');

  // Modals State
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin',
  });
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  // Feedback Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  // Cart operations
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.product.id === item.product.id &&
          i.size === item.size &&
          i.milk === item.milk &&
          i.sweetness === item.sweetness &&
          i.extraShot === item.extraShot
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        const current = updated[existingIndex];
        const newQty = current.quantity + item.quantity;
        updated[existingIndex] = {
          ...current,
          quantity: newQty,
          totalPrice: newQty * current.unitPrice,
        };
        return updated;
      }
      return [...prev, item];
    });
    showToast(`☕ ${item.product.name} added to your order!`);
  };

  const handleQuickAdd = (product: CoffeeProduct) => {
    const defaultItem: CartItem = {
      id: `${product.id}-quick-${Date.now()}`,
      product,
      size: 'Regular',
      milk: 'Whole Milk',
      sweetness: 'Normal (50%)',
      extraShot: false,
      quantity: 1,
      unitPrice: product.price,
      totalPrice: product.price,
    };
    handleAddToCart(defaultItem);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleApplyPromo = (code: string) => {
    if (code.toUpperCase() === 'MORNING20') {
      setPromoCode('MORNING20');
      showToast('🎉 Promo code MORNING20 applied! 20% discount granted.');
      return true;
    }
    return false;
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#603809] flex flex-col font-sans selection:bg-[#F9C06A] selection:text-[#3B2005]">
      {/* Navigation Header */}
      <Header
        cartCount={totalItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onOrderNow={() => {
          const cappuccino = COFFEE_PRODUCTS[0];
          setSelectedProduct(cappuccino);
        }}
        onExploreRoast={() => setIsStoryModalOpen(true)}
      />

      {/* Section 2: Discover The Best Coffee */}
      <DiscoverSection onLearnMore={() => setIsStoryModalOpen(true)} />

      {/* Section 3: Enjoy a new blend of coffee style (Menu) */}
      <MenuSection
        products={COFFEE_PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onQuickAdd={handleQuickAdd}
      />

      {/* Section 4: Why are we different? */}
      <WhyDifferentSection onJoinUs={() => setAuthModal({ isOpen: true, mode: 'signup' })} />

      {/* Section 5: Get a chance to have an Amazing morning */}
      <PromoBanner
        onOrderNow={() => {
          const espresso = COFFEE_PRODUCTS.find((p) => p.id === 'espresso') || COFFEE_PRODUCTS[0];
          setSelectedProduct(espresso);
        }}
        onApplyPromo={(code) => {
          handleApplyPromo(code);
        }}
      />

      {/* Section 6: Our coffee perfection feedback */}
      <TestimonialSection />

      {/* Section 7: Subscribe to get the Latest News */}
      <NewsletterSection
        onSubscribeSuccess={(email) => {
          showToast(`✨ Welcome! 15% discount sent to ${email}`);
        }}
      />

      {/* Section 8: Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPolicyModal={(title) => setPolicyModal({ isOpen: true, title })}
      />

      {/* Interactive Modals */}
      <OrderCustomizerModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        promoCode={promoCode}
        onApplyPromo={handleApplyPromo}
      />

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'signin' })}
        onSuccess={(userName) => {
          showToast(`Welcome to Bean Scene, ${userName}! 👋`);
        }}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onOrderNow={() => {
          setIsStoryModalOpen(false);
          setSelectedProduct(COFFEE_PRODUCTS[0]);
        }}
      />

      <PolicyModal
        isOpen={policyModal.isOpen}
        title={policyModal.title}
        onClose={() => setPolicyModal({ isOpen: false, title: '' })}
      />

      {/* Toast Alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
