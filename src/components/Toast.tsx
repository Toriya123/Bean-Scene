import React from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#201205] text-white border border-[#F9C06A]/40 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-[#F9C06A]/20 flex items-center justify-center text-[#F9C06A] flex-shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium pr-2 text-white/95">{message}</p>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
