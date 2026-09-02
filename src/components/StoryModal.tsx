import React from 'react';
import { X, Flame, Globe2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderNow: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOrderNow }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#F9C06A]/30 flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-[#201205] to-[#341B08] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#F9C06A] font-semibold uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4" />
              <span>Our Artisanal Roastery</span>
            </div>
            <h3
              className="text-2xl font-bold tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discover The Bean Scene Craft
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#603809] font-sans-body">
          <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
            At Bean Scene, we believe that true coffee isn't merely an energy boost — it's an
            awakening ritual. Founded by passionate coffee sommeliers, we partner directly with
            high-altitude smallholder farms across Ethiopia, Colombia, and Guatemala.
          </p>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FFF9F1] p-4 rounded-2xl border border-[#F9C06A]/30">
              <div className="w-8 h-8 rounded-lg bg-[#F9C06A]/20 flex items-center justify-center text-[#603809] mb-2 font-bold">
                1
              </div>
              <h4 className="font-bold text-sm text-[#603809] mb-1">Hand-Picked Cherries</h4>
              <p className="text-xs text-[#707070] leading-relaxed">
                Only red, fully ripe cherries harvested at peak sugar concentration.
              </p>
            </div>

            <div className="bg-[#FFF9F1] p-4 rounded-2xl border border-[#F9C06A]/30">
              <div className="w-8 h-8 rounded-lg bg-[#F9C06A]/20 flex items-center justify-center text-[#603809] mb-2 font-bold">
                2
              </div>
              <h4 className="font-bold text-sm text-[#603809] mb-1">Micro-Batch Roasting</h4>
              <p className="text-xs text-[#707070] leading-relaxed">
                Slow drum roasts that preserve floral acidity and chocolate undertones.
              </p>
            </div>

            <div className="bg-[#FFF9F1] p-4 rounded-2xl border border-[#F9C06A]/30">
              <div className="w-8 h-8 rounded-lg bg-[#F9C06A]/20 flex items-center justify-center text-[#603809] mb-2 font-bold">
                3
              </div>
              <h4 className="font-bold text-sm text-[#603809] mb-1">Barista Precision</h4>
              <p className="text-xs text-[#707070] leading-relaxed">
                Poured at exact 93°C water temperature and dialed to 9.2 bars of extraction.
              </p>
            </div>
          </div>

          {/* Flavor Notes Card */}
          <div className="bg-gradient-to-r from-[#201205] to-[#2B1704] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[#F9C06A] font-semibold uppercase tracking-wider mb-1">
                Signature Blend Notes
              </div>
              <div
                className="text-lg font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Dark Chocolate, Jasmine & Honeycomb
              </div>
              <div className="text-xs text-white/70 mt-1">
                A smooth, velvety cup designed to start your morning with clarity.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOrderNow();
              }}
              className="bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full whitespace-nowrap shadow-md cursor-pointer"
            >
              Order This Blend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
