import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Star, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import BookCover from '../BookCover';

export default function SearchModal() {
  const {
    isSearchOpen,
    setIsSearchOpen,
    books,
    setSelectedBook,
    setReadingBook,
    formatRupee
  } = useShop();

  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Global Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      } else if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : books.filter(b => {
        const q = query.toLowerCase();
        return (
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.synopsis.toLowerCase().includes(q) ||
          b.subtitle.toLowerCase().includes(q)
        );
      });

  const popularTags = [
    'Vedic Futurism',
    'Cyberpunk',
    'Titan Wealth',
    'Awakening',
    'Kashmir Shaivism',
    'Chiranjivi'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0F111A] border border-purple-500/30 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#131622]">
          <Search className="w-5 h-5 text-purple-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by title, author, concept, or sacred category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white font-outfit text-sm placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white text-xs px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-[#0A0C13] border-b border-white/5 flex flex-wrap items-center gap-2 text-xs font-outfit text-slate-400">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            Trending:
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-md bg-[#161824] hover:bg-purple-950/60 hover:text-purple-300 border border-white/5 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-slate-500 text-xs font-outfit">
              Type keywords above to search across our complete sacred catalog.
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs font-outfit">
              No manuscripts found matching "{query}". Try searching for "Vedic" or "Tara".
            </div>
          ) : (
            filtered.map((book) => (
              <div
                key={book.id}
                onClick={() => {
                  setSelectedBook(book);
                  setIsSearchOpen(false);
                }}
                className="p-3.5 rounded-xl bg-[#141724] border border-white/5 hover:border-purple-500/40 cursor-pointer flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="scale-75 origin-left -mr-4">
                    <BookCover book={book} size="sm" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-semibold text-purple-300 px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30">
                        {book.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{book.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-outfit">
                      By {book.author}
                    </p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-3">
                  <span className="font-cinzel font-bold text-sm text-amber-300">
                    {formatRupee(book.price)}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-purple-600 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-[#090A10] border-t border-white/5 flex items-center justify-between text-[11px] font-outfit text-slate-500">
          <span>Tip: Press ESC to exit</span>
          <span>THE THIRD EYE INDEX ENGINE</span>
        </div>

      </div>
    </div>
  );
}
