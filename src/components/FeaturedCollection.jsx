import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import BookCover from './BookCover';

export default function FeaturedCollection({ selectedCategory = 'All' }) {
  const {
    books,
    addToCart,
    toggleWishlist,
    isBookInWishlist,
    setSelectedBook,
    setReadingBook,
    formatRupee
  } = useShop();

  const [filter, setFilter] = useState('All');

  const filteredBooks = filter === 'All'
    ? books.slice(0, 5) // Show the 5 featured books from reference image
    : books.filter(b => b.category === filter);

  return (
    <section id="featured" className="py-12 sm:py-20 bg-white text-[#0F172A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Motion */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-1">
              FEATURED BOOKS
            </span>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Handpicked Reads for You
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setFilter(filter === 'All' ? 'Self Help' : 'All')}
              className="hidden sm:flex text-xs sm:text-sm font-outfit font-semibold text-[#0F172A] hover:text-amber-700 items-center gap-1 group pb-1"
            >
              <span>View All Books</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Pagination Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 flex items-center justify-center text-slate-600 hover:text-black transition-colors"
                aria-label="Previous Books"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 flex items-center justify-center text-slate-600 hover:text-black transition-colors"
                aria-label="Next Books"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 5 Book Cards Grid with Alternating Left/Right Slide and 3D Tilt */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-6">
          {filteredBooks.map((book, idx) => {
            const inWishlist = isBookInWishlist(book.id);
            const slideFrom = idx % 2 === 0 ? -30 : 30;

            return (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, x: slideFrom, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between bg-white rounded-xl p-2 sm:p-2.5 transition-all shadow-sm hover:shadow-xl border border-slate-100 select-none relative"
              >
                {/* Book Cover Container with Wishlist Icon */}
                <div className="relative flex justify-center mb-2.5 cursor-pointer" onClick={() => setReadingBook(book)}>
                  <BookCover book={book} size="md" />

                  {/* Heart Wishlist Button at Top Right */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(book);
                    }}
                    className={`absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-md transition-transform hover:scale-110 z-20 ${
                      inWishlist ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'
                    }`}
                    title="Add to Wishlist"
                    aria-label="Wishlist toggle"
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Metadata */}
                <div className="space-y-1 text-left px-0.5">
                  <h3
                    onClick={() => setReadingBook(book)}
                    className="font-outfit font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer line-clamp-1 leading-snug"
                    title={book.title}
                  >
                    {book.title}
                  </h3>

                  <p className="font-outfit text-[10px] sm:text-xs text-slate-500 line-clamp-1">
                    {book.author}
                  </p>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-outfit font-bold text-xs sm:text-sm text-slate-900">
                      {formatRupee(book.price)}
                    </span>

                    <div className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-700">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(book)}
                  className="mt-3 w-full py-2 px-3 rounded-full bg-[#0E1526] hover:bg-[#1E293B] text-white text-[11px] sm:text-xs font-outfit font-medium flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95"
                >
                  <ShoppingBag className="w-3 h-3 text-amber-300" />
                  <span>Add to Cart</span>
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
