import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';

export default function PromoBanners({ onShopNow }) {
  const { setIsCartOpen } = useShop();

  return (
    <section className="py-8 sm:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1 (Left): SPECIAL OFFER sliding in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-gradient-to-br from-[#FBF6EE] via-[#F8F1E4] to-[#F1E7D5] p-5 sm:p-7 border border-[#EADBCA] flex flex-col justify-between relative overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="space-y-2 z-10 max-w-xs sm:max-w-sm">
              <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] text-[#9A6738] font-bold block">
                SPECIAL OFFER
              </span>

              <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#2A1E12] tracking-tight leading-tight">
                Flat 50% Off<br />on Selected Titles
              </h3>

              <p className="font-outfit text-xs sm:text-sm text-[#6C5844] font-light leading-relaxed">
                Limited time offer. Don't miss out on your favorite books!
              </p>

              <div className="pt-2">
                <button
                  onClick={onShopNow}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#EAD8B8] hover:bg-[#F3E2C4] text-[#1F190D] font-outfit font-semibold text-xs sm:text-sm tracking-wide shadow-sm transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Book Stack Graphic Right */}
            <div className="absolute right-2 -bottom-2 w-32 sm:w-44 h-32 sm:h-44 opacity-85 pointer-events-none flex items-end justify-end">
              <div className="relative w-28 sm:w-36 h-24 sm:h-32">
                <div className="absolute bottom-0 inset-x-0 h-7 bg-[#2E3C4D] rounded-sm shadow-md border-t border-[#455A75]" />
                <div className="absolute bottom-5 inset-x-2 h-6 bg-[#6E3C2B] rounded-sm shadow-md border-t border-[#8B4D37]" />
                <div className="absolute bottom-10 inset-x-4 h-6 bg-[#B58A42] rounded-sm shadow-md border-t border-[#D4AF37]" />
                <div className="absolute -top-1 right-2 text-2xl sm:text-3xl">🪴</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Right): PAY VIA UPI sliding in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#090D18] p-5 sm:p-7 border border-[#1E293D] flex items-center justify-between gap-4 relative overflow-hidden text-left shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="space-y-2 z-10 max-w-[220px] sm:max-w-xs">
              <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] text-[#EAD8B8] font-semibold block">
                PAY VIA UPI
              </span>

              <h3 className="font-serif text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                Quick. Secure. Easy.
              </h3>

              <p className="font-outfit text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Scan the QR code to make payment and get your e-book instantly.
              </p>

              {/* UPI Logos Row */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center p-1 shadow-sm" title="Google Pay">
                  <span className="text-[9px] font-bold text-blue-600">GPay</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#5F259F] text-white flex items-center justify-center text-[8px] font-bold shadow-sm" title="PhonePe">
                  पे
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00BAF2] text-white flex items-center justify-center text-[7px] font-bold shadow-sm" title="Paytm">
                  Paytm
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white flex items-center justify-center text-[8px] font-bold shadow-sm" title="BHIM UPI">
                  UPI
                </div>
              </div>
            </div>

            {/* QR Code Container Right */}
            <div 
              onClick={() => setIsCartOpen(true)}
              className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 flex flex-col items-center justify-center shadow-lg shrink-0 cursor-pointer hover:scale-105 transition-transform"
            >
              <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24">
                <rect width="100" height="100" fill="#FFFFFF" />
                <rect x="5" y="5" width="28" height="28" fill="#000000" />
                <rect x="9" y="9" width="20" height="20" fill="#FFFFFF" />
                <rect x="13" y="13" width="12" height="12" fill="#000000" />

                <rect x="67" y="5" width="28" height="28" fill="#000000" />
                <rect x="71" y="9" width="20" height="20" fill="#FFFFFF" />
                <rect x="75" y="13" width="12" height="12" fill="#000000" />

                <rect x="5" y="67" width="28" height="28" fill="#000000" />
                <rect x="9" y="71" width="20" height="20" fill="#FFFFFF" />
                <rect x="13" y="75" width="12" height="12" fill="#000000" />

                <rect x="40" y="8" width="6" height="6" fill="#000" />
                <rect x="50" y="12" width="6" height="6" fill="#000" />
                <rect x="42" y="24" width="6" height="6" fill="#000" />
                <rect x="52" y="32" width="6" height="6" fill="#000" />
                <rect x="12" y="42" width="6" height="6" fill="#000" />
                <rect x="22" y="48" width="6" height="6" fill="#000" />
                <rect x="34" y="44" width="6" height="6" fill="#000" />
                <rect x="44" y="44" width="12" height="12" fill="#000" />
                <rect x="60" y="42" width="6" height="6" fill="#000" />
                <rect x="72" y="48" width="6" height="6" fill="#000" />
                <rect x="84" y="42" width="6" height="6" fill="#000" />
                <rect x="40" y="62" width="6" height="6" fill="#000" />
                <rect x="52" y="68" width="6" height="6" fill="#000" />
                <rect x="68" y="64" width="6" height="6" fill="#000" />
                <rect x="78" y="74" width="8" height="8" fill="#000" />
                <rect x="40" y="82" width="6" height="6" fill="#000" />
                <rect x="52" y="86" width="6" height="6" fill="#000" />
                <rect x="64" y="82" width="6" height="6" fill="#000" />
                <rect x="86" y="86" width="6" height="6" fill="#000" />
              </svg>

              <div className="text-[9px] font-outfit font-bold text-slate-800 uppercase tracking-wider mt-1">
                Scan & Pay
              </div>
              <div className="text-[8px] font-mono font-bold text-green-700">
                UPI ENABLED
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
