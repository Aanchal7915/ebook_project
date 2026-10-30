import React, { useRef } from 'react';
import { ArrowRight, Leaf, Heart, TrendingUp, BookOpen, Mountain, Activity, Flower2, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/books';

export default function CategoriesSection({ onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const getIcon = (name) => {
    switch (name) {
      case 'Lotus':
        return <Flower2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Brain':
        return <Brain className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Heart':
        return <Heart className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const handleCategoryClick = (catName) => {
    if (onSelectCategory) {
      onSelectCategory(catName);
    }
    const el = document.getElementById('featured');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-10 sm:py-16 bg-[#FAFAF8] text-[#0F172A] border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Scroll Controls */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div className="text-left">
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-1">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">
              Find What Speaks to You
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCategoryClick('All')}
              className="hidden md:flex text-xs sm:text-sm font-outfit font-semibold text-[#0F172A] hover:text-amber-800 items-center gap-1 group pb-1"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Desktop Horizontal Scroll Arrows */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={scrollLeft}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 flex items-center justify-center text-slate-600 hover:text-black transition-colors bg-white shadow-xs"
                title="Scroll Left"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 flex items-center justify-center text-slate-600 hover:text-black transition-colors bg-white shadow-xs"
                title="Scroll Right"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 
          LAYOUT REQUIREMENTS:
          1. Mobile: Exactly 4 items per row (grid grid-cols-4)
          2. Desktop: Single continuous line with smooth horizontal scroll
        */}

        {/* Mobile View: 4 items in one line (2 neat rows of 4) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center sm:hidden">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="group cursor-pointer flex flex-col items-center select-none py-1.5 px-0.5 rounded-xl active:bg-slate-100 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.bg} ${cat.text} ${cat.borderColor} border shadow-xs transition-transform active:scale-90 group-hover:scale-105 mb-1.5`}
              >
                {getIcon(cat.icon)}
              </div>
              <span className="font-outfit text-[10px] font-semibold text-slate-800 leading-tight line-clamp-1">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop View: Single continuous line with smooth horizontal scrolling */}
        <div
          ref={scrollContainerRef}
          onWheel={(e) => {
            if (e.deltaY !== 0 && scrollContainerRef.current) {
              scrollContainerRef.current.scrollBy({ left: e.deltaY * 1.5, behavior: 'smooth' });
            }
          }}
          className="hidden sm:flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="group cursor-pointer flex flex-col items-center select-none shrink-0 min-w-[96px] md:min-w-[110px] py-1 transition-transform"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${cat.bg} ${cat.text} ${cat.borderColor} border transition-all duration-300 group-hover:scale-110 group-hover:shadow-md mb-2`}
              >
                {getIcon(cat.icon)}
              </div>
              <span className="font-outfit text-xs font-semibold text-slate-700 group-hover:text-black leading-tight whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
