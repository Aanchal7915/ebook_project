import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import BookCover from '../BookCover';

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    discountAmount,
    gstAmount,
    finalTotal,
    appliedDiscount,
    applyCoupon,
    formatRupee,
    triggerCheckoutSuccess,
  } = useShop();

  const [inputCoupon, setInputCoupon] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('upi');

  if (!isCartOpen) return null;

  const handleApply = (e) => {
    e.preventDefault();
    if (!inputCoupon) return;
    applyCoupon(inputCoupon);
    setInputCoupon('');
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      triggerCheckoutSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#0D0F17] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#11131E]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-white">
                Sanctum Cart
              </h3>
              <p className="text-[11px] font-outfit text-slate-400">
                {cart.length} {cart.length === 1 ? 'Manuscript' : 'Manuscripts'} Selected
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-cinzel text-lg font-bold text-white">
                  Your Sanctum Cart is Empty
                </h4>
                <p className="font-outfit text-xs text-slate-400 mt-1 max-w-xs">
                  Discover transformative Indian speculative and philosophical e-books in our curated collection.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-outfit font-semibold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/40"
              >
                Browse Featured Works
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.book.id}
                className="p-4 rounded-xl bg-[#131622] border border-white/5 flex gap-4 items-center justify-between group hover:border-purple-500/30 transition-all"
              >
                <div className="flex gap-3.5 items-center">
                  <div className="scale-75 origin-left -mr-4">
                    <BookCover book={item.book} size="sm" />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-cinzel text-xs font-bold text-white line-clamp-1">
                      {item.book.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-outfit">
                      {item.book.author}
                    </p>
                    <span className="text-[10px] text-purple-300 font-outfit block">
                      {item.format}
                    </span>
                    <div className="text-xs font-cinzel font-bold text-amber-300 pt-0.5">
                      {formatRupee(item.book.price)}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.book.id)}
                  className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors"
                  title="Remove from cart"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Financial Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#11131E] border-t border-white/10 space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApply} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Promo Code (try THIRDEYE10)"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 bg-[#08090D] border border-white/10 rounded-lg text-xs font-outfit text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 rounded-lg bg-surface-card border border-purple-500/40 text-purple-200 text-xs font-outfit font-medium hover:bg-purple-950 transition-colors"
              >
                Apply
              </button>
            </form>

            {/* Price Breakdown */}
            <div className="space-y-2 text-xs font-outfit text-slate-400 border-t border-white/5 pt-3">
              <div className="flex justify-between">
                <span>Catalog Subtotal</span>
                <span className="text-white">{formatRupee(subtotal)}</span>
              </div>
              
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Inner Circle Discount ({appliedDiscount * 100}%)</span>
                  <span>-{formatRupee(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>E-Book GST (5% India)</span>
                <span className="text-white">{formatRupee(gstAmount)}</span>
              </div>

              <div className="flex justify-between text-base font-cinzel font-bold text-white pt-2 border-t border-white/10">
                <span>Final Investment</span>
                <span className="text-amber-300">{formatRupee(finalTotal)}</span>
              </div>
            </div>

            {/* Indian Payment Options Selector */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-outfit block">
                Preferred Instant Payment:
              </span>
              <div className="grid grid-cols-3 gap-2 text-[11px] font-outfit">
                {[
                  { id: 'upi', label: 'UPI / QR', sub: 'PhonePe / GPay' },
                  { id: 'card', label: 'Cards', sub: 'RuPay / Visa' },
                  { id: 'netbank', label: 'NetBanking', sub: 'All Indian Banks' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPayment(p.id)}
                    className={`p-2 rounded-lg text-left border transition-all ${
                      selectedPayment === p.id
                        ? 'border-purple-500 bg-purple-950/40 text-white'
                        : 'border-white/5 bg-[#090A10] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold">{p.label}</div>
                    <div className="text-[9px] text-slate-500">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="btn-luxury w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white font-outfit font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authorizing Indian Banking Gateway...</span>
                </>
              ) : (
                <>
                  <span>Authorize & Instant Download ({formatRupee(finalTotal)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-outfit">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-Bit SSL Encrypted • Instant Lifetime Download</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
