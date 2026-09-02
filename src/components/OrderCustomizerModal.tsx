import React, { useState } from 'react';
import { CoffeeProduct, CupSize, MilkType, SweetnessLevel, CartItem } from '../types';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';

interface OrderCustomizerModalProps {
  product: CoffeeProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const OrderCustomizerModal: React.FC<OrderCustomizerModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen || !product) return null;

  const [size, setSize] = useState<CupSize>('Regular');
  const [milk, setMilk] = useState<MilkType>('Whole Milk');
  const [sweetness, setSweetness] = useState<SweetnessLevel>('Normal (50%)');
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Hot');
  const [extraShot, setExtraShot] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Price calculation
  let calculatedUnitPrice = product.price;
  if (size === 'Small') calculatedUnitPrice -= 1.0;
  if (size === 'Large') calculatedUnitPrice += 1.0;
  if (milk === 'Oat Milk' || milk === 'Almond Milk') calculatedUnitPrice += 0.5;
  if (extraShot) calculatedUnitPrice += 1.0;

  const totalPrice = calculatedUnitPrice * quantity;

  const handleAdd = () => {
    const item: CartItem = {
      id: `${product.id}-${size}-${milk}-${temperature}-${extraShot ? 'shot' : 'norm'}-${Date.now()}`,
      product,
      size,
      milk,
      sweetness,
      extraShot,
      quantity,
      unitPrice: calculatedUnitPrice,
      totalPrice,
    };
    onAddToCart(item);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#F9C06A]/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 pb-4 bg-gradient-to-r from-[#201205] to-[#341B08] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#F9C06A]/40 flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3
                className="text-xl font-bold tracking-wide"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Customize {product.name}
              </h3>
              <p className="text-xs text-[#F9C06A]">{product.ratio}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Customization Options */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#603809]">
          {/* Temperature */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#707070] block mb-2">
              Temperature
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {(['Hot', 'Iced'] as const).map((temp) => (
                <button
                  key={temp}
                  type="button"
                  onClick={() => setTemperature(temp)}
                  className={`py-2 px-4 rounded-xl text-sm font-semibold border transition-all flex items-center justify-center gap-2 ${
                    temperature === temp
                      ? 'bg-[#603809] text-white border-[#603809] shadow-sm'
                      : 'bg-white text-[#603809] border-[#603809]/20 hover:border-[#603809]/50'
                  }`}
                >
                  <span>{temp === 'Hot' ? '☕ Hot Steam' : '🧊 Refreshing Iced'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Cup Size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#707070] block mb-2">
              Cup Size
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {(
                [
                  { label: 'Small', oz: '8 oz', diff: '-$1.00' },
                  { label: 'Regular', oz: '12 oz', diff: 'Standard' },
                  { label: 'Large', oz: '16 oz', diff: '+$1.00' },
                ] as const
              ).map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setSize(item.label as CupSize)}
                  className={`p-3 rounded-xl text-center border transition-all ${
                    size === item.label
                      ? 'bg-[#603809] text-white border-[#603809] shadow-sm'
                      : 'bg-white text-[#603809] border-[#603809]/20 hover:border-[#603809]/50'
                  }`}
                >
                  <div className="text-sm font-bold">{item.label}</div>
                  <div className="text-xs opacity-75">{item.oz}</div>
                  <div className="text-[11px] font-medium mt-1 text-[#F9C06A]">{item.diff}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Milk Choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#707070] block mb-2">
              Milk Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { name: 'Whole Milk', tag: 'Standard' },
                  { name: 'Oat Milk', tag: '+$0.50' },
                  { name: 'Almond Milk', tag: '+$0.50' },
                  { name: 'Soy Milk', tag: 'No extra' },
                ] as const
              ).map((m) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setMilk(m.name as MilkType)}
                  className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-medium border flex items-center justify-between transition-all ${
                    milk === m.name
                      ? 'bg-[#FFF3DF] border-[#F9C06A] text-[#603809] font-bold'
                      : 'bg-white border-[#603809]/15 text-[#707070]'
                  }`}
                >
                  <span>{m.name}</span>
                  <span className="text-[11px] opacity-70">{m.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sweetness */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#707070] block mb-2">
              Sweetness Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['No Sugar', 'Normal (50%)', 'Extra Sweet (100%)'] as const).map((sweet) => (
                <button
                  key={sweet}
                  type="button"
                  onClick={() => setSweetness(sweet)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all ${
                    sweetness === sweet
                      ? 'bg-[#603809] text-white border-[#603809]'
                      : 'bg-white text-[#707070] border-[#603809]/15'
                  }`}
                >
                  {sweet}
                </button>
              ))}
            </div>
          </div>

          {/* Extra shot addon */}
          <div className="pt-1">
            <label className="flex items-center justify-between p-3 rounded-xl border border-[#603809]/15 bg-white cursor-pointer hover:border-[#F9C06A]">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={extraShot}
                  onChange={(e) => setExtraShot(e.target.checked)}
                  className="w-4 h-4 accent-[#603809] rounded"
                />
                <span className="text-sm font-semibold text-[#603809]">
                  Add Extra Espresso Shot
                </span>
              </div>
              <span className="text-xs font-bold text-[#603809] bg-[#FFF9F1] px-2 py-1 rounded-md border border-[#F9C06A]/30">
                +$1.00
              </span>
            </label>
          </div>
        </div>

        {/* Footer & Add to Order */}
        <div className="p-5 bg-white border-t border-[#603809]/10 flex items-center justify-between gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-[#FFF9F1] px-3 py-1.5 rounded-full border border-[#603809]/15">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-full bg-white text-[#603809] flex items-center justify-center shadow-xs hover:bg-[#F9C06A] transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-bold text-sm text-[#603809] min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 rounded-full bg-white text-[#603809] flex items-center justify-center shadow-xs hover:bg-[#F9C06A] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to order button with total */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-between cursor-pointer"
          >
            <span>Add to Order</span>
            <span className="text-base">${totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
