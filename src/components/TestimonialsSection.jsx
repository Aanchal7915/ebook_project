import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/books';

export default function TestimonialsSection() {
  const avatars = {
    'Ananya Varma': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'Rohit Sharma': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'Sneha Kapoor': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
  };

  return (
    <section className="py-12 sm:py-20 bg-[#090D18] text-white border-t border-white/5 overflow-hidden relative">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title & Navigation Arrows */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.2em] text-[#EAD8B8] font-semibold block mb-1">
              WHAT READERS SAY
            </span>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Loved by Readers Across India
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-1.5"
          >
            <button
              className="w-8 h-8 rounded-full border border-white/20 hover:border-amber-400/60 flex items-center justify-center text-slate-300 hover:text-white transition-colors bg-white/5"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 rounded-full border border-white/20 hover:border-amber-400/60 flex items-center justify-center text-slate-300 hover:text-white transition-colors bg-white/5"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* 3 Review Cards: LUXURY CREAM CARDS on DARK BACKGROUND */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => {
            const slideFrom = idx % 2 === 0 ? -30 : 30;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: slideFrom, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FBF6EE] border border-[#EADBCA] shadow-xl shadow-black/40 flex flex-col justify-between space-y-4 text-left relative overflow-hidden transition-all duration-300"
              >
                {/* Burnt Amber Quote Mark */}
                <div className="text-amber-700 font-serif text-3xl sm:text-4xl leading-none">
                  “
                </div>

                {/* Quote Text in Rich Espresso Ink */}
                <p className="font-outfit text-xs sm:text-sm text-[#2A1D13] font-light leading-relaxed">
                  {t.quote}
                </p>

                {/* User Profile & Stars */}
                <div className="pt-3 border-t border-[#E8DEC8] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-[#D5C7B2]">
                      <img
                        src={avatars[t.name] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-xs sm:text-sm text-[#1F150D] leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#7A6653] font-outfit">
                        {t.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
