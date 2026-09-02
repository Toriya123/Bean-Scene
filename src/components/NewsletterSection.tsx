import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface NewsletterSectionProps {
  onSubscribeSuccess?: (email: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ onSubscribeSuccess }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      if (onSubscribeSuccess) onSubscribeSuccess(email);
    }, 800);
  };

  return (
    <section className="relative py-20 lg:py-24 bg-[#1E0F04] text-white overflow-hidden">
      {/* Background coffee beans image with dark overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#170C03] via-[#221206]/95 to-[#170C03]" />

      {/* Coffee cups with splashes on left & right matching mockup */}
      <div className="absolute left-[-40px] sm:left-4 top-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-60 aspect-square opacity-40 lg:opacity-85 pointer-events-none transition-transform duration-700 hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80"
          alt="Coffee splash left"
          className="w-full h-full object-contain drop-shadow-2xl rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute right-[-40px] sm:right-4 top-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-60 aspect-square opacity-40 lg:opacity-85 pointer-events-none transition-transform duration-700 hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80"
          alt="Coffee splash right"
          className="w-full h-full object-contain drop-shadow-2xl rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9C06A]/10 border border-[#F9C06A]/20 text-[#F9C06A] text-xs sm:text-sm font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exclusive Weekly Roasts & Perks</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Subscribe to get the Latest News
        </h2>

        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto font-sans-body">
          Don't miss out on our latest news, updates, tips and special offers.
        </p>

        {status === 'success' ? (
          <div className="bg-[#2A1406]/90 border border-[#F9C06A]/40 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-md animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-[#F9C06A]/20 text-[#F9C06A] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7 text-[#F9C06A]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-1">Welcome to the Club!</h4>
            <p className="text-sm text-white/80 mb-3">
              We've sent a 15% discount voucher to <span className="text-[#F9C06A] font-semibold">{email}</span>.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setEmail('');
              }}
              className="text-xs text-[#F9C06A] underline hover:text-white transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white/10 sm:bg-white p-1.5 rounded-2xl sm:rounded-full border border-white/20 sm:border-none shadow-2xl backdrop-blur-md"
          >
            <div className="relative flex-1 w-full flex items-center pl-4 pr-2">
              <Mail className="w-5 h-5 text-[#707070] mr-3 hidden sm:block" />
              <input
                id="newsletter-email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your mail"
                className="w-full bg-transparent text-[#3E2305] placeholder-[#707070] py-3 text-sm sm:text-base outline-none font-sans-body"
              />
            </div>

            <button
              id="newsletter-subscribe-btn"
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl sm:rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
            >
              {status === 'loading' ? (
                <span>Subscribing...</span>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs sm:text-sm mt-3 font-medium animate-pulse">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
};
