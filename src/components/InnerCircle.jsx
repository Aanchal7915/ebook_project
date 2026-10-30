import React, { useState } from 'react';
import { Sparkles, Crown, Key, Headphones, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/books';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';

export default function InnerCircle() {
  const { showToast, setUser, user } = useShop();
  const [isMemberClaimed, setIsMemberClaimed] = useState(false);

  const handleClaimPass = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#8B5CF6', '#FCD34D', '#A855F7']
      });
    } catch (e) {
      // ignore
    }
    setIsMemberClaimed(true);
    setUser({
      name: 'Karan Singhal',
      email: 'karan@visionary.in',
      memberTier: 'Inner Circle Patron',
      memberId: 'TE-8842-IND'
    });
    showToast('Welcome to The Inner Circle. Your Patron Credentials are now active.', 'success');
  };

  const perks = [
    {
      icon: Key,
      title: 'Unreleased Manuscripts',
      description: 'Receive confidential pre-print chapters 14 days before global release.'
    },
    {
      icon: Headphones,
      title: 'Author Audio Marginalia',
      description: 'Exclusive voice notes and philosophical commentaries recorded directly by authors.'
    },
    {
      icon: Crown,
      title: 'Private Digital Salons',
      description: 'Monthly live deep-dive video symposiums with leading Indologists and philosophers.'
    },
    {
      icon: Shield,
      title: 'Encrypted Sovereign Vault',
      description: 'Permanent offline preservation in high-fidelity interactive digital formats.'
    }
  ];

  return (
    <section id="inner-circle" className="relative py-24 bg-[#08090D] overflow-hidden">
      
      {/* Background Gold & Violet Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-purple-700/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-amber-500/40 text-amber-300 text-xs font-outfit uppercase tracking-[0.25em] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>The Patron Society</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The <span className="text-gradient-gold">Inner Circle</span>
          </h2>

          <p className="font-outfit text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A private fellowship for those who seek to read beyond reality. Limited to ten thousand patrons worldwide.
          </p>
        </div>

        {/* 2-Column Membership Pass Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: 3D Holographic VIP Membership Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[1.58/1] rounded-2xl p-7 glass-panel-gold shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.25)] border border-amber-400/40 flex flex-col justify-between overflow-hidden group select-none transition-transform hover:scale-[1.03] duration-500">
              
              {/* Metallic Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
              
              {/* Watermark Third Eye in background */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="2">
                  <path d="M10 50 Q50 10 90 50 Q50 90 10 50 Z" />
                  <circle cx="50" cy="50" r="18" />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 flex items-center justify-center text-black font-cinzel font-bold text-xs shadow-md">
                    👁
                  </div>
                  <div>
                    <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-white block">
                      THE THIRD EYE
                    </span>
                    <span className="text-[9px] font-outfit uppercase tracking-widest text-amber-300/80">
                      Sanctuary Access Key
                    </span>
                  </div>
                </div>

                <Crown className="w-6 h-6 text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
              </div>

              {/* Card Chip Simulation */}
              <div className="relative z-10 flex items-center gap-3 my-2">
                <div className="w-11 h-8 rounded-md bg-gradient-to-br from-amber-300 to-amber-600 p-0.5 shadow-inner">
                  <div className="w-full h-full border border-amber-800/40 rounded flex items-center justify-center">
                    <div className="w-5 h-4 border-t border-b border-amber-900/40" />
                  </div>
                </div>
                <span className="text-[10px] font-outfit font-mono text-amber-200/60 tracking-widest">
                  RFID ENCRYPTED • IND-2026
                </span>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 flex items-end justify-between border-t border-amber-500/20 pt-3">
                <div>
                  <div className="text-[9px] font-outfit uppercase tracking-wider text-amber-300/60">
                    Patron Holder
                  </div>
                  <div className="font-cinzel text-sm font-bold text-white tracking-wide">
                    {user ? user.name : 'KARAN SINGHAL'}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[9px] font-outfit uppercase tracking-wider text-amber-300/60">
                    Patron ID
                  </div>
                  <div className="font-mono text-xs font-semibold text-amber-300 tracking-wider">
                    #0412 / 10,000
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Perks & Interactive CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-snug">
              Elevate Your Intellectual Sanctuary
            </h3>

            <p className="font-outfit text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Traditional publishing rushes manuscripts to meet quarterly cycles. The Third Eye crafts enduring literary artifacts. As an Inner Circle member, you directly support visionary Indian thinkers and receive lifetime priority benefits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#11131C] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2.5 text-amber-400 font-cinzel text-sm font-semibold">
                      <Icon className="w-4 h-4" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-outfit font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleClaimPass}
                className="btn-luxury px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black font-outfit font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>{isMemberClaimed ? 'Inner Circle Pass Active' : 'Claim Complimentary Patron Pass'}</span>
                {isMemberClaimed ? <CheckCircle className="w-4 h-4 text-black" /> : <ArrowRight className="w-4 h-4 text-black" />}
              </button>

              <span className="text-xs text-slate-400 font-outfit">
                Instant digital delivery • Zero annual fees
              </span>
            </div>
          </div>

        </div>

        {/* Reader Testimonials & Acclaim */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs font-outfit uppercase tracking-[0.25em] text-slate-400">
              Critical Acclaim & Reader Testimonials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="font-outfit text-sm text-slate-300 font-light italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-purple-300 font-outfit">
                      {t.role} • {t.city}
                    </p>
                  </div>
                  <span className="text-[10px] font-outfit px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    Verified Patron
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
