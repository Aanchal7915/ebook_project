import React, { useState } from 'react';
import { X, Lock, Mail, User, Shield, Sparkles, ArrowRight, LogOut, CheckCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function AuthModal() {
  const { isAuthOpen, setIsAuthOpen, authMode, setAuthMode, user, setUser, showToast } = useShop();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isAuthOpen) return null;

  const handleDemoLogin = () => {
    setUser({
      name: 'Karan Singhal',
      email: 'karan@visionary.in',
      memberTier: 'Inner Circle Patron',
      memberId: 'TE-8842-IND'
    });
    showToast('Authenticated as Karan Singhal (Inner Circle Patron)', 'success');
    setIsAuthOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: name || email.split('@')[0] || 'Visionary Reader',
      email: email || 'patron@thirdeye.in',
      memberTier: 'Patron Member',
      memberId: 'TE-3104-IND'
    });
    showToast(`Welcome to The Third Eye, ${name || 'Seeker'}.`, 'success');
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    showToast('Signed out of Sanctum', 'info');
    setIsAuthOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsAuthOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#0D0F18] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden">
        
        {/* Top Close */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#111422]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-white">
              SANCTUARY PORTAL
            </span>
          </div>
          <button
            onClick={() => setIsAuthOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          
          {user ? (
            /* Already logged in profile view */
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 mx-auto flex items-center justify-center text-xl font-cinzel font-bold text-white shadow-xl">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  {user.name}
                </h3>
                <p className="text-xs text-purple-300 font-outfit mt-0.5">
                  {user.memberTier} • {user.email}
                </p>
                <span className="inline-block mt-2 font-mono text-[11px] text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                  Access Key: {user.memberId || 'TE-9921-IND'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#131624] border border-white/5 text-left text-xs font-outfit text-slate-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Cloud Library</span>
                  <span className="font-semibold text-white">8 Manuscripts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Audio Marginalia</span>
                  <span className="font-semibold text-emerald-400">Unlocked</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Next Digital Salon</span>
                  <span className="font-semibold text-amber-300">Nov 12, 2026</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full py-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 text-xs font-outfit font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Disconnect Sanctuary Session</span>
              </button>
            </div>
          ) : (
            <>
              {/* Tab Switcher */}
              <div className="flex rounded-xl bg-[#08090D] p-1 border border-white/5">
                <button
                  onClick={() => setAuthMode('signin')}
                  className={`flex-1 py-2 rounded-lg text-xs font-outfit font-semibold transition-all ${
                    authMode === 'signin'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-2 rounded-lg text-xs font-outfit font-semibold transition-all ${
                    authMode === 'signup'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Join Inner Circle
                </button>
              </div>

              {/* Instant 1-Click Demo Login (Great for client review!) */}
              <button
                onClick={handleDemoLogin}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600/30 to-purple-600/30 hover:from-amber-600/40 hover:to-purple-600/40 border border-amber-400/40 text-amber-200 text-xs font-outfit font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>One-Click Client Demo Login (Patron)</span>
              </button>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-white/10 w-full" />
                <span className="bg-[#0D0F18] px-3 text-[10px] uppercase tracking-wider text-slate-500 font-outfit absolute">
                  Or enter credentials
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="text-[11px] font-outfit uppercase tracking-wider text-slate-400 block mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. Vikram Malhotra"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#08090D] border border-white/10 rounded-xl text-xs font-outfit text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-[11px] font-outfit uppercase tracking-wider text-slate-400 block mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="seeker@realm.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#08090D] border border-white/10 rounded-xl text-xs font-outfit text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-outfit uppercase tracking-wider text-slate-400 block mb-1.5">
                    Security Key (Password)
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#08090D] border border-white/10 rounded-xl text-xs font-outfit text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-luxury w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-outfit font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 mt-2"
                >
                  <span>{authMode === 'signin' ? 'Access Sanctuary' : 'Initiate Membership'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
