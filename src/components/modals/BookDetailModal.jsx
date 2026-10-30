import React from 'react';
import { X, Star, ShoppingBag, Heart, BookOpen, Volume2, ShieldCheck, Check, Sparkles, Share2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import BookCover from '../BookCover';

export default function BookDetailModal() {
  const {
    selectedBook,
    setSelectedBook,
    setReadingBook,
    addToCart,
    toggleWishlist,
    isBookInWishlist,
    formatRupee
  } = useShop();

  if (!selectedBook) return null;

  const inWishlist = isBookInWishlist(selectedBook.id);
  const discountPercent = Math.round(
    ((selectedBook.originalPrice - selectedBook.price) / selectedBook.originalPrice) * 100
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setSelectedBook(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#0D0F18] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#111422] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-semibold text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/30">
              {selectedBook.tag || selectedBook.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400 font-outfit">Edition #{selectedBook.id.replace('book-', 'TE-0')}</span>
          </div>

          <button
            onClick={() => setSelectedBook(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Row: 3D Cover + Primary Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Book Cover */}
            <div className="sm:col-span-5 flex justify-center">
              <BookCover book={selectedBook} size="lg" />
            </div>

            {/* Info */}
            <div className="sm:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white font-outfit">{selectedBook.rating}</span>
                <span className="text-slate-500">({selectedBook.reviewsCount} verified readers)</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                {selectedBook.title}
              </h2>

              <p className="font-outfit text-sm text-purple-200/90 font-light">
                {selectedBook.subtitle}
              </p>

              <div className="pt-1 text-xs text-slate-300 font-outfit">
                Authored by <span className="font-semibold text-white">{selectedBook.author}</span>
                <span className="block text-[11px] text-slate-500">{selectedBook.authorRole}</span>
              </div>

              {/* Price Bar */}
              <div className="p-3.5 rounded-xl bg-[#141726] border border-white/5 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-cinzel text-2xl font-bold text-white">
                      {formatRupee(selectedBook.price)}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {formatRupee(selectedBook.originalPrice)}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-outfit font-medium">
                    Save {discountPercent}% with instant digital keys
                  </span>
                </div>

                <span className="text-[11px] font-outfit text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  Instant Access
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => addToCart(selectedBook)}
                  className="btn-luxury flex-1 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-outfit font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Acquire Edition</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedBook(null);
                    setReadingBook(selectedBook);
                  }}
                  className="py-3 px-4 rounded-xl bg-[#181B28] hover:bg-[#202538] text-purple-300 border border-purple-500/30 text-xs font-outfit font-medium flex items-center gap-2 transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Sample</span>
                </button>

                <button
                  onClick={() => toggleWishlist(selectedBook)}
                  className={`p-3 rounded-xl border transition-colors ${
                    inWishlist
                      ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                      : 'bg-[#181B28] border-white/10 text-slate-400 hover:text-white'
                  }`}
                  title="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-amber-400' : ''}`} />
                </button>
              </div>

            </div>

          </div>

          {/* Synopsis */}
          <div className="space-y-3 border-t border-white/5 pt-6">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-amber-300">
              Manuscript Synopsis
            </h4>
            <p className="font-outfit text-sm text-slate-300 font-light leading-relaxed">
              {selectedBook.synopsis}
            </p>
          </div>

          {/* Edition Inclusions */}
          <div className="space-y-3 border-t border-white/5 pt-6">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-purple-300">
              Collector Inclusions & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedBook.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-outfit">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Manuscript Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#121522] border border-white/5 text-center text-xs font-outfit">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Format</span>
              <span className="font-semibold text-white">EPUB & Interactive PDF</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Length</span>
              <span className="font-semibold text-white">{selectedBook.pages} Pages ({selectedBook.readTime})</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Language</span>
              <span className="font-semibold text-white">{selectedBook.language}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Publication</span>
              <span className="font-semibold text-white">{selectedBook.releaseYear} Edition</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
