import React from 'react';
import { X, HelpCircle, FileText, Newspaper, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, title, onClose }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (title) {
      case 'Frequently Asked Questions':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-[#603809] text-sm">Where are your beans sourced?</h4>
              <p className="text-xs text-[#707070] mt-1">
                We source directly from fair-trade certified farms in Yirgacheffe (Ethiopia), Huila (Colombia), and Antigua (Guatemala).
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#603809] text-sm">Can I order online for pickup?</h4>
              <p className="text-xs text-[#707070] mt-1">
                Yes! When you order through our Bean Scene web app, your drink is freshly prepared within 6-8 minutes for pickup at our counter.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#603809] text-sm">Do you offer dairy-free alternatives?</h4>
              <p className="text-xs text-[#707070] mt-1">
                We offer premium Oatly Oat Milk, organic Almond Milk, and artisan Soy Milk on all signature and espresso drinks.
              </p>
            </div>
          </div>
        );
      case 'News & Blogs':
        return (
          <div className="space-y-4">
            <div className="border-b border-[#603809]/10 pb-3">
              <span className="text-[11px] text-[#F9C06A] font-bold uppercase tracking-wider">Coffee Culture • Sept 2026</span>
              <h4 className="font-bold text-[#603809] text-sm mt-0.5">The Secret to the Perfect Pour-Over Extraction</h4>
              <p className="text-xs text-[#707070] mt-1">
                Water temperature, grind uniformity, and blooming time play vital roles in unlocking floral notes.
              </p>
            </div>
            <div className="border-b border-[#603809]/10 pb-3">
              <span className="text-[11px] text-[#F9C06A] font-bold uppercase tracking-wider">Origin Stories • Aug 2026</span>
              <h4 className="font-bold text-[#603809] text-sm mt-0.5">Meeting Our Ethiopian Smallholder Partners</h4>
              <p className="text-xs text-[#707070] mt-1">
                Behind the scenes of sustainable regenerative farming at 2,100 meters elevation.
              </p>
            </div>
          </div>
        );
      case 'Help & Support':
        return (
          <div className="space-y-3">
            <p className="text-xs text-[#707070]">
              Need help with your order or have inquiries about catering and bulk bean orders?
            </p>
            <div className="bg-[#FFF9F1] p-4 rounded-xl border border-[#F9C06A]/30 text-xs space-y-2 text-[#603809]">
              <div><strong>Customer Support Phone:</strong> +1 202-918-2132 (Mon-Sun: 7am - 8pm)</div>
              <div><strong>Email Support:</strong> beanscene@gmail.com</div>
              <div><strong>Flagship Cafe:</strong> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-xs text-[#707070] space-y-2">
            <p>
              Bean Scene operates with strict standards of quality, transparency, and ethical coffee sourcing.
              All customer data is handled in compliance with privacy regulations.
            </p>
            <p>
              Refunds and order adjustments can be processed directly at the counter or via support email within 24 hours of purchase.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#F9C06A]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 bg-[#201205] text-white flex items-center justify-between">
          <h3
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 font-sans-body">{getContent()}</div>
      </div>
    </div>
  );
};
