import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3DVideo from './Hero3DVideo';
import VideoModal from './modals/VideoModal';
import { useShop } from '../context/ShopContext';

export default function HeroSection({ onExploreClick }) {
  const { books, setReadingBook } = useShop();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleLaunchReader = () => {
    setReadingBook(books[0]);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[88vh] sm:min-h-[92vh] pt-20 sm:pt-24 pb-12 sm:pb-16 flex items-center bg-[#070A12] overflow-hidden"
    >
      {/* Clean Luxury Night Sky Background (No clutter/lines behind video) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Cosmic Radial Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
        
        {/* Subtle Stardust particles */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtext, Buttons, Stats with Framer Motion slide-in */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-left"
          >
            {/* Small Top Tagline (Exact from reference) */}
            <div className="text-[10px] sm:text-xs font-outfit uppercase tracking-[0.28em] text-[#EAD8B8] font-semibold flex items-center gap-2">
              <span>BOOKS</span>
              <span className="text-amber-500/60">•</span>
              <span>IDEAS</span>
              <span className="text-amber-500/60">•</span>
              <span>INNER GROWTH</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[1.12]">
              Read Beyond<br />
              <span className="font-serif italic font-normal text-[#EAD8B8] drop-shadow-md">
                The Ordinary
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-outfit text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed font-light">
              Discover a world of e-books that inspire, heal, and transform. Explore new perspectives and unlock the power of knowledge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              {/* Button 1: Solid Gold Pill */}
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#EAD8B8] hover:bg-[#F5E5C9] text-[#1E190E] font-outfit font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2 group hover:scale-105"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Watch Trailer (Plays video with audio modal) */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/20 hover:border-amber-400/50 text-slate-200 hover:text-white font-outfit text-xs sm:text-sm font-medium transition-all flex items-center gap-2 bg-black/40 backdrop-blur-sm shadow-md hover:scale-105"
              >
                <div className="w-4 h-4 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-amber-300 text-amber-300 ml-0.5" />
                </div>
                <span>Watch Trailer</span>
              </button>

              {/* Button 3: Sample Reader Trigger */}
              <button
                onClick={handleLaunchReader}
                className="text-xs font-outfit text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-500/40 py-2 flex items-center gap-1.5 ml-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Sample Chapter</span>
              </button>
            </div>

            {/* Stats Row (Mobile-first compact 4-column layout) */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-4 gap-2 sm:gap-6 max-w-lg text-left">
              <div>
                <div className="font-serif text-base sm:text-xl font-bold text-white">500+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-outfit">E-Books</div>
              </div>
              <div>
                <div className="font-serif text-base sm:text-xl font-bold text-white">50+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-outfit">Authors</div>
              </div>
              <div>
                <div className="font-serif text-base sm:text-xl font-bold text-white">20+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-outfit">Categories</div>
              </div>
              <div>
                <div className="font-serif text-base sm:text-xl font-bold text-white">10K+</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-outfit">Happy Readers</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Floating Video with slide-in from right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative pt-4 sm:pt-0"
          >
            <Hero3DVideo onExpand={() => setIsVideoModalOpen(true)} />
          </motion.div>

        </div>
      </div>

      {/* Video Cinema Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </section>
  );
}
