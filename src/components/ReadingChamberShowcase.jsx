import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Bell } from 'lucide-react';
import { ambientPlayer } from '../utils/ambientAudio';
import { useShop } from '../context/ShopContext';

export default function ReadingChamberShowcase() {
  const { books, setReadingBook } = useShop();
  const demoBook = books[0]; // Good Vibes, Good Life

  // Default to authentic Cream & Brown Book Paper!
  const [themeMode, setThemeMode] = useState('cream'); // 'cream' | 'sepia' | 'midnight' | 'slate'
  const [fontFamily, setFontFamily] = useState('serif'); // 'serif' | 'sans'
  const [fontSize, setFontSize] = useState(17);
  const [activeSound, setActiveSound] = useState('none');
  const [volume, setVolume] = useState(0.4);

  const toggleSound = (soundType) => {
    if (activeSound === soundType) {
      ambientPlayer.stop();
      setActiveSound('none');
    } else {
      if (soundType === 'drone') {
        ambientPlayer.playCosmicDrone();
      } else if (soundType === 'rain') {
        ambientPlayer.playMonsoonRain();
      }
      ambientPlayer.setVolume(volume);
      setActiveSound(soundType);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    ambientPlayer.setVolume(val);
  };

  const chamberStyles = {
    cream: {
      bg: 'bg-[#FBF8F1]',
      text: 'text-[#2C1E14]',
      heading: 'text-[#1F140C]',
      accent: 'border-[#E3D8C4]',
      barBg: 'bg-[#F1EADE]',
      controlBg: 'bg-[#E7DECE] text-[#2C1E14] border-[#D8CCB8]',
      firstLetterColor: 'text-[#8C532B]',
      epigraph: 'bg-[#F4EDE1] border-[#E2D5BF] text-[#5C3E20]'
    },
    sepia: {
      bg: 'bg-[#F4ECE1]',
      text: 'text-[#332517]',
      heading: 'text-[#241A10]',
      accent: 'border-[#D9CCBA]',
      barBg: 'bg-[#E7DCCE]',
      controlBg: 'bg-[#DFD3C3] text-[#332517] border-[#CFBFAB]',
      firstLetterColor: 'text-[#9A3412]',
      epigraph: 'bg-[#ECE0D0] border-[#D8C7B3] text-[#543D28]'
    },
    midnight: {
      bg: 'bg-[#090A0F]',
      text: 'text-slate-200',
      heading: 'text-white',
      accent: 'border-white/10',
      barBg: 'bg-[#11131C]',
      controlBg: 'bg-[#08090D] text-slate-300 border-white/10',
      firstLetterColor: 'text-amber-400',
      epigraph: 'bg-black/30 border-white/10 text-amber-300'
    },
    slate: {
      bg: 'bg-[#0F131D]',
      text: 'text-slate-100',
      heading: 'text-cyan-200',
      accent: 'border-cyan-500/30',
      barBg: 'bg-[#141A28]',
      controlBg: 'bg-[#08090D] text-slate-300 border-white/10',
      firstLetterColor: 'text-cyan-400',
      epigraph: 'bg-black/30 border-cyan-500/20 text-cyan-200'
    }
  };

  const currentStyle = chamberStyles[themeMode];

  return (
    <section id="reading-chamber" className="relative py-12 sm:py-20 bg-[#0A0C13] border-y border-white/5 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-700/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-amber-500/30 text-amber-300 text-xs font-outfit uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Proprietary E-Reader Technology</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Third Eye <span className="font-serif italic text-[#EAD8B8]">Reading Chamber</span>
          </h2>

          <p className="font-outfit text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
            Experience literature without digital fatigue. Enjoy authentic cream book paper, customized typographical line balance, and calming binaural soundscapes.
          </p>
        </div>

        {/* Live Interactive Reading Chamber Console */}
        <div className="max-w-4xl mx-auto rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] border-2 border-[#E3D8C4]/40 overflow-hidden">
          
          {/* Chamber Control Bar */}
          <div className={`${currentStyle.barBg} px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#D8CCB8] flex flex-wrap items-center justify-between gap-3`}>
            
            {/* Left: Document Info */}
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className={`font-serif text-xs sm:text-sm font-bold ${currentStyle.heading} block`}>
                  {demoBook.title}
                </span>
                <span className="font-outfit text-[10px] sm:text-[11px] text-slate-600">
                  {demoBook.sampleChapter.title} • {demoBook.author}
                </span>
              </div>
            </div>

            {/* Center: Audio Atmosphere Generator */}
            <div className={`flex items-center gap-1.5 ${currentStyle.controlBg} px-2.5 py-1 rounded-full border text-[11px] font-outfit shadow-xs`}>
              <Volume2 className="w-3.5 h-3.5 text-amber-700" />
              <button
                onClick={() => toggleSound('drone')}
                className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold transition-colors ${
                  activeSound === 'drone' ? 'bg-[#2A1D13] text-[#FAF7F0]' : 'text-slate-600 hover:text-black'
                }`}
              >
                432Hz Drone
              </button>
              <button
                onClick={() => toggleSound('rain')}
                className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold transition-colors ${
                  activeSound === 'rain' ? 'bg-cyan-800 text-white' : 'text-slate-600 hover:text-black'
                }`}
              >
                Rain
              </button>
            </div>

            {/* Right: Themes & Font Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme selectors */}
              <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-full bg-black/10 border border-black/10">
                <button
                  onClick={() => setThemeMode('cream')}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FBF8F1] border-2 shadow-xs transition-transform ${
                    themeMode === 'cream' ? 'border-[#8C532B] scale-110' : 'border-[#CBBCA8]'
                  }`}
                  title="Cream Book Paper"
                />
                <button
                  onClick={() => setThemeMode('sepia')}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#EADDCB] border transition-transform ${
                    themeMode === 'sepia' ? 'border-[#9A3412] scale-110' : 'border-[#CBBCA8]'
                  }`}
                  title="Sepia"
                />
                <button
                  onClick={() => setThemeMode('midnight')}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#090A0F] border transition-transform ${
                    themeMode === 'midnight' ? 'border-amber-400 scale-110' : 'border-white/30'
                  }`}
                  title="Midnight"
                />
                <button
                  onClick={() => setThemeMode('slate')}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#121724] border transition-transform ${
                    themeMode === 'slate' ? 'border-cyan-400 scale-110' : 'border-cyan-700/50'
                  }`}
                  title="Slate"
                />
              </div>

              {/* Typography toggle */}
              <button
                onClick={() => setFontFamily(fontFamily === 'serif' ? 'sans' : 'serif')}
                className={`px-2 py-0.5 sm:py-1 rounded-lg ${currentStyle.controlBg} border text-xs font-outfit font-medium`}
              >
                {fontFamily === 'serif' ? 'Serif' : 'Sans'}
              </button>

              {/* Fullscreen Reading Launcher */}
              <button
                onClick={() => setReadingBook(demoBook)}
                className="px-3 py-1 rounded-full bg-[#2A1D13] text-[#FAF7F0] hover:bg-black text-xs font-outfit font-semibold tracking-wide shadow-xs flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Interactive Manuscript Content Preview */}
          <div className={`${currentStyle.bg} p-6 sm:p-10 transition-colors duration-500 min-h-[340px]`}>
            
            <div className="max-w-2xl mx-auto space-y-5">
              
              {/* Epigraph Box */}
              <div className={`p-3.5 sm:p-4 rounded-xl border ${currentStyle.epigraph} text-center`}>
                <p className="font-serif italic text-xs sm:text-sm tracking-wide font-medium leading-relaxed">
                  "{demoBook.sampleChapter.epigraph}"
                </p>
              </div>

              {/* Chapter Header */}
              <div className="text-center space-y-1">
                <span className={`text-[10px] sm:text-xs font-outfit uppercase tracking-[0.25em] font-bold ${currentStyle.firstLetterColor}`}>
                  {demoBook.sampleChapter.number}
                </span>
                <h3 className={`font-serif text-xl sm:text-3xl font-bold ${currentStyle.heading}`}>
                  {demoBook.sampleChapter.title}
                </h3>
                <div className="w-12 h-[1.5px] bg-[#8C532B]/40 mx-auto" />
              </div>

              {/* Sample Paragraphs: NO big drop cap, same size font, cream and brown text */}
              <div
                className={`space-y-4 leading-relaxed font-normal ${currentStyle.text} ${
                  fontFamily === 'serif' ? 'font-serif' : 'font-outfit'
                }`}
                style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
              >
                {demoBook.sampleChapter.content.split('\n\n').map((para, idx) => {
                  const firstChar = para.charAt(0);
                  const restOfPara = para.slice(1);
                  return (
                    <p key={idx} className="indent-4 sm:indent-6">
                      <span className={`font-bold ${currentStyle.firstLetterColor}`}>
                        {firstChar}
                      </span>
                      {restOfPara}
                    </p>
                  );
                })}
              </div>

              {/* Bottom Interactive Prompt */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-slate-500">
                <span className="font-outfit text-[11px] sm:text-xs">Page 1 of {demoBook.pages} • Cream Book Paper Mode</span>
                <button
                  onClick={() => setReadingBook(demoBook)}
                  className="font-outfit font-semibold text-[#8C532B] hover:underline flex items-center gap-1 group"
                >
                  <span>Continue Reading</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
