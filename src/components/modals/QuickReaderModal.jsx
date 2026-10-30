import React, { useState } from 'react';
import { X, Volume2, Bookmark, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { ambientPlayer } from '../../utils/ambientAudio';

export default function QuickReaderModal() {
  const { readingBook, setReadingBook, addToCart, formatRupee } = useShop();

  // Authentic Cream Book Paper Theme
  const [theme, setTheme] = useState('cream'); // 'cream' | 'sepia' | 'midnight' | 'slate'
  const [fontSize, setFontSize] = useState(18);
  const [fontStyle, setFontStyle] = useState('serif'); // 'serif' | 'sans'
  const [activeSound, setActiveSound] = useState('none');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  if (!readingBook) return null;

  const toggleSound = (soundType) => {
    if (activeSound === soundType) {
      ambientPlayer.stop();
      setActiveSound('none');
    } else {
      if (soundType === 'drone') ambientPlayer.playCosmicDrone();
      if (soundType === 'rain') ambientPlayer.playMonsoonRain();
      setActiveSound(soundType);
    }
  };

  const handleClose = () => {
    ambientPlayer.stop();
    setReadingBook(null);
  };

  // Authentic Cream & Warm Brown Book Themes
  const themeClasses = {
    // 1. Cream Book Paper (Cream background with rich espresso & brown text)
    cream: {
      bg: 'bg-[#FBF8F1]',
      card: 'bg-[#F1EADE]',
      text: 'text-[#2C1E14]', // Warm dark brown ink
      heading: 'text-[#1F140C]', // Deep walnut title
      sub: 'text-[#6D5541]', // Warm hazel brown
      border: 'border-[#E3D8C4]',
      accent: 'text-[#8C532B]', // Warm terracotta brown
      epigraphBg: 'bg-[#F4EDE1] border-[#E2D5BF] text-[#5C3E20]',
      btnBg: 'bg-[#2A1D13] text-[#FAF7F0] hover:bg-[#3D2C1E]',
      controlBg: 'bg-[#E7DECE] text-[#2C1E14] border-[#D8CCB8]',
      firstLetterColor: 'text-[#8C532B]', // Same size as text, just warm brown color
      shadow: 'shadow-[0_20px_60px_rgba(40,30,20,0.35)]'
    },
    // 2. Soft Warm Sepia
    sepia: {
      bg: 'bg-[#F4ECE1]',
      card: 'bg-[#E7DCCE]',
      text: 'text-[#332517]',
      heading: 'text-[#241A10]',
      sub: 'text-[#7D6B58]',
      border: 'border-[#D9CCBA]',
      accent: 'text-[#9A3412]',
      epigraphBg: 'bg-[#ECE0D0] border-[#D8C7B3] text-[#543D28]',
      btnBg: 'bg-[#8B3512] text-white hover:bg-[#6D280B]',
      controlBg: 'bg-[#DFD3C3] text-[#332517] border-[#CFBFAB]',
      firstLetterColor: 'text-[#9A3412]',
      shadow: 'shadow-[0_20px_60px_rgba(45,30,15,0.4)]'
    },
    // 3. Midnight OLED
    midnight: {
      bg: 'bg-[#08090D]',
      card: 'bg-[#0F111A]',
      text: 'text-[#E2E8F0]',
      heading: 'text-white',
      sub: 'text-slate-400',
      border: 'border-white/10',
      accent: 'text-amber-400',
      epigraphBg: 'bg-black/40 border-white/10 text-amber-300',
      btnBg: 'bg-amber-500 text-black hover:bg-amber-400',
      controlBg: 'bg-black/40 text-slate-300 border-white/10',
      firstLetterColor: 'text-amber-400',
      shadow: 'shadow-[0_25px_80px_rgba(0,0,0,0.95)]'
    },
    // 4. Celestial Slate
    slate: {
      bg: 'bg-[#0B101B]',
      card: 'bg-[#12192A]',
      text: 'text-[#F1F5F9]',
      heading: 'text-white',
      sub: 'text-slate-400',
      border: 'border-cyan-900/40',
      accent: 'text-cyan-400',
      epigraphBg: 'bg-black/40 border-cyan-500/20 text-cyan-200',
      btnBg: 'bg-cyan-600 text-white hover:bg-cyan-500',
      controlBg: 'bg-black/40 text-slate-300 border-white/10',
      firstLetterColor: 'text-cyan-400',
      shadow: 'shadow-[0_25px_80px_rgba(0,0,0,0.95)]'
    }
  };

  const curr = themeClasses[theme];
  const chapter = readingBook.sampleChapter;
  const isLight = theme === 'cream' || theme === 'sepia';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden select-none">
      {/* Dark backdrop */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
      />

      {/* Book Container with Realistic Spine and Page Layers */}
      <div className={`relative w-full max-w-3xl h-full sm:h-[90vh] ${curr.bg} border-2 ${curr.border} sm:rounded-2xl ${curr.shadow} z-10 flex flex-col justify-between overflow-hidden transition-colors duration-300`}>
        
        {/* Subtle Book Spine Shadow on Left Edge */}
        {isLight && (
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/8 via-black/3 to-transparent pointer-events-none z-20" />
        )}

        {/* Top Control Bar */}
        <div className={`px-3 sm:px-6 py-2.5 sm:py-3 border-b ${curr.border} ${curr.card} flex flex-wrap items-center justify-between gap-2.5 select-none z-30`}>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className={`p-1.5 rounded-lg hover:bg-black/10 transition-colors ${curr.sub} hover:${curr.heading}`}
              title="Close Reader"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div>
              <h4 className={`font-serif text-xs sm:text-sm font-bold ${curr.heading} line-clamp-1`}>
                {readingBook.title}
              </h4>
              <p className={`text-[10px] sm:text-[11px] font-outfit ${curr.sub}`}>
                {chapter.title} • {readingBook.author}
              </p>
            </div>
          </div>

          {/* Center: Audio Atmosphere Generator */}
          <div className={`flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-full ${curr.controlBg} border text-[10px] sm:text-[11px] font-outfit shadow-xs`}>
            <Volume2 className="w-3 h-3 text-amber-700" />
            <button
              onClick={() => toggleSound('drone')}
              className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-semibold transition-colors ${
                activeSound === 'drone' ? 'bg-[#2A1D13] text-[#FAF7F0]' : `${curr.sub} hover:${curr.heading}`
              }`}
            >
              432Hz Drone
            </button>
            <button
              onClick={() => toggleSound('rain')}
              className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-semibold transition-colors ${
                activeSound === 'rain' ? 'bg-cyan-800 text-white' : `${curr.sub} hover:${curr.heading}`
              }`}
            >
              Rain
            </button>
          </div>

          {/* Right: Typography & Themes */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Font Size (+ / -) */}
            <div className={`flex items-center gap-0.5 px-1.5 py-0.5 sm:py-1 rounded-lg ${curr.controlBg} border text-xs`}>
              <button
                onClick={() => setFontSize(prev => Math.max(14, prev - 1))}
                className="px-1 text-slate-500 hover:text-black font-semibold text-[11px]"
                title="Decrease font size"
              >
                A-
              </button>
              <span className="text-[10px] sm:text-[11px] font-mono w-4 text-center font-bold">
                {fontSize}
              </span>
              <button
                onClick={() => setFontSize(prev => Math.min(24, prev + 1))}
                className="px-1 text-slate-500 hover:text-black font-semibold text-[11px]"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Font Serif / Sans */}
            <button
              onClick={() => setFontStyle(fontStyle === 'serif' ? 'sans' : 'serif')}
              className={`px-2 py-0.5 sm:py-1 rounded-lg ${curr.controlBg} border text-[10px] sm:text-xs font-medium`}
            >
              {fontStyle === 'serif' ? 'Serif' : 'Sans'}
            </button>

            {/* 4 Theme Circles (Cream Book Paper is primary) */}
            <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-full bg-black/10 border border-black/10">
              {/* Cream Book Paper */}
              <button
                onClick={() => setTheme('cream')}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FBF8F1] border-2 shadow-xs transition-transform ${
                  theme === 'cream' ? 'border-[#8C532B] scale-110' : 'border-[#CBBCA8]'
                }`}
                title="Cream Book Paper"
              />
              {/* Sepia */}
              <button
                onClick={() => setTheme('sepia')}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EADDCB] border transition-transform ${
                  theme === 'sepia' ? 'border-[#9A3412] scale-110' : 'border-[#CBBCA8]'
                }`}
                title="Sepia"
              />
              {/* Midnight */}
              <button
                onClick={() => setTheme('midnight')}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#08090D] border transition-transform ${
                  theme === 'midnight' ? 'border-amber-400 scale-110' : 'border-white/30'
                }`}
                title="Midnight"
              />
              {/* Slate */}
              <button
                onClick={() => setTheme('slate')}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#121B2C] border transition-transform ${
                  theme === 'slate' ? 'border-cyan-400 scale-110' : 'border-cyan-700/50'
                }`}
                title="Slate"
              />
            </div>

            {/* Bookmark */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1 rounded-lg transition-colors ${
                isBookmarked ? 'text-[#8C532B]' : `${curr.sub} hover:${curr.heading}`
              }`}
              title="Bookmark Passage"
            >
              <Bookmark className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isBookmarked ? 'fill-[#8C532B]' : ''}`} />
            </button>
          </div>

        </div>

        {/* Reading Body Content: Standard Same Letter Size, Cream & Warm Brown Text */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-12 md:px-16 py-6 sm:py-10 max-w-2xl mx-auto space-y-6 select-text">
          
          {/* Chapter Opening */}
          <div className="text-center space-y-1.5">
            <span className={`text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] font-bold ${curr.accent}`}>
              {chapter.number}
            </span>
            <h1 className={`font-serif text-xl sm:text-3xl font-bold ${curr.heading} tracking-tight`}>
              {chapter.title}
            </h1>
            <div className="w-12 h-[1.5px] bg-[#8C532B]/40 mx-auto" />
          </div>

          {/* Epigraph Box (Warm Cream & Brown) */}
          {chapter.epigraph && (
            <div className={`p-3.5 sm:p-4 rounded-xl border ${curr.epigraphBg} text-center my-4 shadow-xs`}>
              <p className="font-serif italic text-xs sm:text-sm tracking-wide font-medium leading-relaxed">
                "{chapter.epigraph}"
              </p>
            </div>
          )}

          {/* Clean Manuscript Paragraphs: Same Letter Size (NO massive drop caps!), Cream & Brown Palette */}
          <div
            className={`space-y-4 sm:space-y-5 leading-relaxed font-normal ${curr.text} ${
              fontStyle === 'serif' ? 'font-serif' : 'font-outfit'
            }`}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
          >
            {chapter.content.split('\n\n').map((para, idx) => {
              // Highlight only the first letter with a warm brown/terracotta color, KEEPING SAME FONT SIZE
              const firstChar = para.charAt(0);
              const restOfPara = para.slice(1);

              return (
                <p key={idx} className="indent-4 sm:indent-6">
                  <span className={`font-bold ${curr.firstLetterColor}`}>
                    {firstChar}
                  </span>
                  {restOfPara}
                </p>
              );
            })}

            <p className="indent-4 sm:indent-6">
              When you hold a book and read with quiet awareness, the mind naturally settles. The rush of digital notifications dissolves, leaving behind the timeless clarity that only authentic literature can provide.
            </p>
          </div>

          {/* End of Preview Callout */}
          <div className={`p-4 sm:p-6 rounded-xl border ${curr.border} ${curr.card} text-center space-y-2.5 mt-8 shadow-xs`}>
            <span className="text-[10px] sm:text-xs font-outfit uppercase tracking-widest text-[#8C532B] font-bold block">
              End of Sanctum Sample
            </span>
            <p className={`text-xs font-outfit ${curr.sub} max-w-sm mx-auto leading-relaxed`}>
              Unlock all {readingBook.pages} pages, chapter notes, and spatial audio edition by adding this book to your collection.
            </p>
            <button
              onClick={() => addToCart(readingBook)}
              className={`px-5 py-2 rounded-full ${curr.btnBg} font-outfit text-xs font-semibold tracking-wide shadow-sm inline-flex items-center gap-1.5 transition-transform hover:scale-105`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Acquire Full Edition ({formatRupee(readingBook.price)})</span>
            </button>
          </div>

        </div>

        {/* Bottom Navigation & Progress Bar */}
        <div className={`px-4 sm:px-6 py-2 border-t ${curr.border} ${curr.card} flex items-center justify-between text-xs font-outfit select-none z-30`}>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] sm:text-xs ${curr.sub}`}>
              Page {currentPage} of 14 • Sample Edition
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`p-1 rounded ${curr.sub} hover:${curr.heading} disabled:opacity-30`}
              title="Previous Page"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className={`font-mono text-xs font-bold ${curr.heading}`}>
              {Math.round((currentPage / 14) * 100)}%
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(14, prev + 1))}
              disabled={currentPage === 14}
              className={`p-1 rounded ${curr.sub} hover:${curr.heading} disabled:opacity-30`}
              title="Next Page"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div>
            <button
              onClick={() => addToCart(readingBook)}
              className={`px-3 py-1 rounded-full ${curr.btnBg} text-[11px] font-semibold shadow-xs flex items-center gap-1 transition-transform hover:scale-105`}
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Acquire ({formatRupee(readingBook.price)})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
