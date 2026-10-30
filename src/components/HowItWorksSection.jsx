import React from 'react';
import { ShoppingBag, CreditCard, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      icon: ShoppingBag,
      title: 'Choose a Book',
      desc: 'Browse and select your favorite e-book.'
    },
    {
      num: '2',
      icon: CreditCard,
      title: 'Make Payment',
      desc: 'Pay securely via UPI, card or net banking.'
    },
    {
      num: '3',
      icon: Download,
      title: 'Get Instant Access',
      desc: 'Receive your e-book directly in your account.'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white text-[#0F172A] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 sm:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-1">
            HOW IT WORKS
          </span>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
            Get Your E-Book in 3 Simple Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 3 Steps sliding in from Left */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex items-start gap-3.5 sm:gap-5 text-left group"
                >
                  {/* Step Number Badge & Icon Circle */}
                  <div className="relative shrink-0">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0E1526] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                    </div>
                    {/* Small number badge on top left */}
                    <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#EAD8B8] text-[#1E190E] text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {step.num}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div className="pt-0.5 space-y-0.5 sm:space-y-1">
                    <h3 className="font-outfit font-bold text-sm sm:text-base text-slate-900 group-hover:text-amber-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-outfit text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Tablet Mockup sliding in from Right with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center perspective-[1000px]"
          >
            <div className="relative w-full max-w-sm aspect-[4/3] sm:aspect-[1.3/1] rounded-2xl bg-[#0C111C] p-3 sm:p-4 shadow-2xl border-4 border-[#1E293B] hover:rotate-y-[-5deg] transition-transform duration-500">
              
              {/* Tablet Screen */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#FAF8F5] to-[#EFE9DF] p-4 sm:p-6 flex flex-col justify-between text-center border border-slate-300 relative overflow-hidden select-none">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-slate-400 font-mono">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <span>100%</span>
                  </div>
                </div>

                {/* Tablet Display Content */}
                <div className="my-auto space-y-2">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-700 font-serif font-bold">
                    The Third Eye Sanctuary Reader
                  </span>
                  <h4 className="font-serif text-lg sm:text-2xl font-bold text-[#1F190D] leading-tight">
                    Read Anywhere<br />Anytime
                  </h4>
                  <div className="w-10 h-[1.5px] bg-amber-600/50 mx-auto" />
                  <p className="text-[10px] sm:text-xs text-slate-600 font-outfit max-w-xs mx-auto leading-relaxed">
                    Instant sync across phone, tablet, Kindle and desktop with zero distractions.
                  </p>
                </div>

                {/* Bottom page bar */}
                <div className="text-[8px] sm:text-[9px] text-slate-400 font-outfit">
                  Page 42 of 288 • Continuous Reading Mode
                </div>
              </div>

              {/* Decorative mini potted plant */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-emerald-900/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg pointer-events-none">
                🌱
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
