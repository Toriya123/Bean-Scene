import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  promoCode: string;
  onApplyPromo: (code: string) => boolean;
  onOrderCompleted?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  promoCode,
  onApplyPromo,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const isDiscounted = promoCode.toUpperCase() === 'MORNING20';
  const discountAmount = isDiscounted ? subtotal * 0.2 : 0;
  const tax = (subtotal - discountAmount) * 0.08;
  const grandTotal = Math.max(0, subtotal - discountAmount + tax);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const ok = onApplyPromo(promoInput.trim());
    if (!ok) {
      setPromoError('Invalid code. Try MORNING20');
    } else {
      setPromoError('');
    }
  };

  const handleCheckout = () => {
    const generatedOrderNum = `#BS-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setOrderConfirmed(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col border-l border-[#F9C06A]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#201205] text-white flex items-center justify-between border-b border-[#F9C06A]/20">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#F9C06A]" />
            <h3
              className="text-xl font-bold tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your Coffee Order
            </h3>
          </div>
          <button
            onClick={() => {
              setOrderConfirmed(false);
              onClose();
            }}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        {orderConfirmed ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h4
              className="text-2xl font-bold text-[#603809] mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Order Placed Successfully!
            </h4>
            <p className="text-sm text-[#707070] mb-4">
              Your barista has received your order and is handcrafting your brew right now.
            </p>
            <div className="bg-[#FFF9F1] border border-[#F9C06A]/30 p-4 rounded-2xl w-full mb-6">
              <div className="text-xs text-[#707070] uppercase tracking-wider mb-1 font-semibold">
                Order Receipt
              </div>
              <div className="text-2xl font-mono font-bold text-[#603809]">{orderNumber}</div>
              <div className="text-xs text-[#603809] mt-2 font-medium">
                Estimated Ready Time: <span className="font-bold">6 - 8 mins</span>
              </div>
              <div className="text-[11px] text-[#707070] mt-1">
                Pickup counter: Bean Scene Akshya Nagar
              </div>
            </div>
            <button
              onClick={() => {
                setOrderConfirmed(false);
                onClose();
              }}
              className="w-full bg-[#603809] hover:bg-[#482806] text-white font-bold py-3 px-6 rounded-full transition-colors cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center text-[#707070]">
            <div className="w-20 h-20 rounded-full bg-[#FFF9F1] border border-[#F9C06A]/30 flex items-center justify-center text-[#603809] mb-4">
              <ShoppingBag className="w-8 h-8 opacity-40" />
            </div>
            <h4
              className="text-xl font-bold text-[#603809] mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your order is currently empty
            </h4>
            <p className="text-sm text-[#707070] max-w-xs mb-6">
              Explore our freshly roasted menu and order your favourite cup of coffee today!
            </p>
            <button
              onClick={onClose}
              className="bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-bold py-2.5 px-6 rounded-full text-sm shadow-md transition-all cursor-pointer"
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFF9F1] border border-[#F9C06A]/25 rounded-2xl p-4 flex gap-3.5 relative"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white shadow-xs flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-sm text-[#603809] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#707070] hover:text-red-600 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-[#707070] space-y-0.5 mt-0.5">
                      <div>
                        {item.size} • {item.milk}
                      </div>
                      <div>
                        {item.sweetness} {item.extraShot ? '• +Extra Shot' : ''}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-bold text-sm text-[#603809]">
                        ${item.totalPrice.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2 bg-white px-2 py-0.5 rounded-full border border-[#603809]/15">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-[#603809] hover:text-black p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#603809] px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-[#603809] hover:text-black p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code & Totals */}
            <div className="p-5 bg-white border-t border-[#603809]/10 space-y-4">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo code (e.g. MORNING20)"
                  className="flex-1 bg-[#FFF9F1] border border-[#603809]/20 rounded-xl px-3 py-2 text-xs uppercase font-mono tracking-wider outline-none text-[#603809] placeholder:text-[#707070]"
                />
                <button
                  type="submit"
                  className="bg-[#603809] hover:bg-[#482806] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoError && (
                <p className="text-xs text-red-500 font-medium">{promoError}</p>
              )}
              {isDiscounted && (
                <div className="text-xs text-green-700 bg-green-50 p-2 rounded-lg flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>20% Morning Discount Applied!</span>
                </div>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-[#707070] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#603809]">${subtotal.toFixed(2)}</span>
                </div>
                {isDiscounted && (
                  <div className="flex justify-between text-green-700">
                    <span>Discount (20%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#603809] pt-2 border-t border-[#603809]/10">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-btn"
                onClick={handleCheckout}
                className="w-full bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
