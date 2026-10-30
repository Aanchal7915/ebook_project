import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUsSection({ onStoryClick }) {
  const features = [
    {
      icon: Zap,
      title: 'Instant Access',
      desc: 'Reads immediately after purchase'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      desc: '100% safe & secure transactions'
    },
    {
      icon: Smartphone,
      title: 'Read Anywhere',
      desc: 'On any device you love'
    },
    {
      icon: Sparkles,
      title: 'Curated Collection',
      desc: 'Thoughtfully chosen books for you'
    }
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-20 bg-[#0A0E18] text-white overflow-hidden">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#131D30] via-[#0F1726] to-transparent" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Button sliding in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-3 sm:space-y-5 text-left"
          >
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] text-[#EAD8B8] font-semibold block">
              WHY THE THIRD EYE
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              More Than Just E-Books
            </h2>

            <p className="font-outfit text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-light">
              We believe in the power of books to create clarity, inner growth and a better tomorrow. Access your favorite reads instantly, anytime, anywhere.
            </p>

            <div className="pt-2">
              <button
                onClick={onStoryClick}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#EAD8B8] hover:bg-[#F5E5C9] text-[#1E190E] font-outfit font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2 group hover:scale-105"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: 4 Feature Icon Badges sliding in from Right with 3D tilt */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#111726]/80 border border-white/5 backdrop-blur-sm flex flex-col justify-center items-center text-center space-y-2 group hover:border-amber-400/40 transition-all shadow-md"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#1A233A] flex items-center justify-center text-amber-300 border border-white/10 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <h3 className="font-outfit font-bold text-xs sm:text-sm text-white leading-tight">
                    {f.title}
                  </h3>

                  <p className="font-outfit text-[10px] sm:text-xs text-slate-400 font-light leading-snug">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
