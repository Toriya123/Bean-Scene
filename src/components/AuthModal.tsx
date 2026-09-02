import React, { useState } from 'react';
import { X, Mail, Lock, User, Sparkles, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  onClose: () => void;
  onSuccess: (userName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(mode === 'signup' && name ? name : 'Coffee Lover');
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FFFDF9] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#F9C06A]/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-[#201205] text-white flex items-center justify-between border-b border-[#F9C06A]/20">
          <div>
            <span
              className="text-[#F9C06A] text-2xl font-normal block"
              style={{ fontFamily: "'Clicker Script', 'Dancing Script', cursive" }}
            >
              Bean Scene
            </span>
            <h3
              className="text-lg font-bold tracking-tight text-white mt-0.5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {mode === 'signin' ? 'Welcome Back' : 'Create Coffee Account'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#603809]/10 bg-[#FFF9F1]">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${
              mode === 'signin'
                ? 'text-[#603809] border-b-2 border-[#603809] bg-white'
                : 'text-[#707070] hover:text-[#603809]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${
              mode === 'signup'
                ? 'text-[#603809] border-b-2 border-[#603809] bg-white'
                : 'text-[#707070] hover:text-[#603809]'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#603809]">
                {mode === 'signin' ? 'Signed in successfully!' : 'Account registered!'}
              </h4>
              <p className="text-sm text-[#707070] mt-1">Enjoy your morning brew at Bean Scene.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-[#603809] uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-[#707070] absolute left-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jonny Thomas"
                      className="w-full bg-white border border-[#603809]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#603809] outline-none focus:border-[#603809]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#603809] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-[#707070] absolute left-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-[#603809]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#603809] outline-none focus:border-[#603809]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#603809] uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-[#707070] absolute left-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white border border-[#603809]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#603809] outline-none focus:border-[#603809]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F9C06A] hover:bg-[#eab35f] text-[#3E2305] font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 text-sm cursor-pointer mt-2"
              >
                {mode === 'signin' ? 'Sign In' : 'Create Free Account'}
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#707070]">
                  By continuing, you agree to Bean Scene's Terms & Rewards Program.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
