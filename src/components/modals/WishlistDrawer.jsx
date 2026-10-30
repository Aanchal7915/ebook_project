import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import BookCover from '../BookCover';

export default function WishlistDrawer() {
  const {
    wishlist,
    books,
    addToCart,
    toggleWishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    formatRupee
  } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistBooks = books.filter(b => wishlist.includes(b.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#0D0F17] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#11131E]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Heart className="w-4 h-4 fill-amber-300" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold text-white">
                Sacred Wishlist
              </h3>
              <p className="text-[11px] font-outfit text-slate-400">
                {wishlistBooks.length} Saved Manuscripts
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close wishlist drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistBooks.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-cinzel text-lg font-bold text-white">
                  Your Wishlist is Empty
                </h4>
                <p className="font-outfit text-xs text-slate-400 mt-1 max-w-xs">
                  Save manuscripts you wish to study during upcoming lunar reading cycles.
                </p>
              </div>
            </div>
          ) : (
            wishlistBooks.map((book) => (
              <div
                key={book.id}
                className="p-4 rounded-xl bg-[#131622] border border-white/5 flex gap-4 items-center justify-between group hover:border-amber-500/30 transition-all"
              >
                <div className="flex gap-3.5 items-center">
                  <div className="scale-75 origin-left -mr-4">
                    <BookCover book={book} size="sm" />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="font-cinzel text-xs font-bold text-white line-clamp-1">
                      {book.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-outfit">
                      {book.author}
                    </p>
                    <div className="text-xs font-cinzel font-bold text-amber-300 pt-0.5">
                      {formatRupee(book.price)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      addToCart(book);
                      toggleWishlist(book);
                    }}
                    className="p-2.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white text-xs transition-colors"
                    title="Move to Cart"
                    aria-label="Move to cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleWishlist(book)}
                    className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-white/5 transition-colors"
                    title="Remove from wishlist"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistBooks.length > 0 && (
          <div className="p-6 bg-[#11131E] border-t border-white/10">
            <button
              onClick={() => {
                wishlistBooks.forEach(b => addToCart(b));
                setIsWishlistOpen(false);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-black font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30 hover:scale-[1.01] transition-transform"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>Move All to Sanctum Cart</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
