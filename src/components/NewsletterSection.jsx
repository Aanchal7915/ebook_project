import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

export default function NewsletterSection() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Thank you! You are now subscribed to The Third Eye community.`, 'success');
    setEmail('');
  };

  return (
    <section className="relative py-14 sm:py-20 bg-[#090E1A] text-white overflow-hidden">
      
      {/* Background Starry Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Form sliding in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-3 sm:space-y-4 text-left"
          >
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] text-[#EAD8B8] font-semibold block">
              STAY UPDATED
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Join Our Reading Community
            </h2>

            <p className="font-outfit text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
              Get the latest books, offers and recommendations delivered to your inbox.
            </p>

            {/* Email Subscribe Pill Bar */}
            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 rounded-full bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-outfit focus:outline-none shadow-sm"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full bg-[#EAD8B8] hover:bg-[#F3E2C4] text-[#1F190D] font-outfit font-semibold text-xs sm:text-sm tracking-wide shrink-0 transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-105 active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Quote sliding in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 text-left lg:text-right"
          >
            <p className="font-serif italic text-sm sm:text-lg text-slate-300 leading-relaxed font-light border-l-2 lg:border-l-0 lg:border-r-2 border-amber-400/60 pl-4 lg:pl-0 lg:pr-4">
              "Books open the third eye they help us see beyond what we already know."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
