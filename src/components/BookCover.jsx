import React from 'react';

export default function BookCover({ book, size = 'md', className = '' }) {
  // Mobile-first compact sizing
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';
  const isHero = size === 'hero';

  const sizeClasses = isHero
    ? 'w-64 h-96 sm:w-80 sm:h-[440px]'
    : isLarge
    ? 'w-44 h-64 sm:w-56 sm:h-80'
    : isSmall
    ? 'w-16 h-24'
    : 'w-full aspect-[2/3] max-w-[170px] sm:max-w-[190px]';

  const type = book.coverStyle?.type || 'generic';

  // Render individual realistic cover styles matching reference image
  const renderCoverArtwork = () => {
    switch (type) {
      case 'good-vibes':
        return (
          <div className="w-full h-full bg-[#FAF7F2] p-3 flex flex-col justify-between items-center text-center border border-[#E8E1D5] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#d6c7b2_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
            <div className="text-[7px] sm:text-[9px] uppercase tracking-[0.25em] text-[#8C7A6B] font-serif pt-1 font-semibold">
              #1 Sunday Times Bestseller
            </div>
            <div className="my-auto space-y-1 z-10">
              <h3 className="font-serif font-black text-xs sm:text-base tracking-[0.18em] text-[#3D2E1E] leading-tight uppercase">
                GOOD VIBES,<br />GOOD LIFE
              </h3>
              <p className="text-[6px] sm:text-[8px] text-[#8C7A6B] font-sans font-medium uppercase tracking-widest mt-1">
                How Self-Love Is The Key
              </p>
            </div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-serif font-bold text-[#3D2E1E] pb-1 z-10">
              VEX KING
            </div>
          </div>
        );

      case 'ikigai':
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#EBF5FB] via-[#E2F0F9] to-[#D5E8F5] p-3 flex flex-col justify-between items-center text-center border border-[#BCD9EB] relative overflow-hidden">
            {/* Cherry blossom branch graphic */}
            <div className="absolute top-2 left-0 right-0 h-28 opacity-70 pointer-events-none">
              <svg viewBox="0 0 100 60" fill="none" className="w-full h-full">
                <path d="M0 15 Q40 18 60 8 T100 2" stroke="#5C3A21" strokeWidth="1.5" />
                <path d="M30 17 Q50 30 70 20" stroke="#5C3A21" strokeWidth="1" />
                <circle cx="25" cy="14" r="2.5" fill="#E11D48" opacity="0.8" />
                <circle cx="38" cy="18" r="3" fill="#FB7185" opacity="0.9" />
                <circle cx="52" cy="11" r="2.8" fill="#E11D48" opacity="0.85" />
                <circle cx="68" cy="21" r="3.2" fill="#FDA4AF" opacity="0.95" />
                <circle cx="82" cy="7" r="2.5" fill="#E11D48" opacity="0.8" />
              </svg>
            </div>

            {/* Mt Fuji silhouette base */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-16 opacity-30">
              <svg viewBox="0 0 100 50" fill="none" className="w-full h-full">
                <polygon points="50,5 20,50 80,50" fill="#3B82F6" />
                <polygon points="50,5 38,22 62,22" fill="#FFFFFF" />
              </svg>
            </div>

            <div className="pt-2 z-10 text-[7px] sm:text-[8px] uppercase tracking-widest text-[#2563EB] font-sans">
              Japanese Secret
            </div>

            <div className="my-auto z-10 space-y-0.5">
              <h3 className="font-serif font-light text-base sm:text-2xl text-[#1E3A8A] tracking-[0.25em] uppercase">
                IKIGAI
              </h3>
              <p className="text-[6px] sm:text-[8px] text-[#475569] font-sans max-w-[120px] mx-auto leading-tight">
                The Japanese Secret to a Long and Happy Life
              </p>
            </div>

            <div className="text-[7px] sm:text-[9px] uppercase tracking-wider text-[#1E3A8A] font-serif font-semibold pb-1 z-10">
              Héctor García & Francesc Miralles
            </div>
          </div>
        );

      case 'atomic-habits':
        return (
          <div className="w-full h-full bg-[#FFFDF9] p-3 flex flex-col justify-between items-center text-center border border-[#EADBCA] relative overflow-hidden">
            {/* Tiny atomic dots pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#C2410C_1px,transparent_1px)] [background-size:10px_10px] opacity-15" />
            <div className="text-[7px] sm:text-[8px] uppercase tracking-widest text-[#9A3412] font-sans pt-1 font-bold">
              Over 15 Million Copies Sold
            </div>

            <div className="my-auto z-10 space-y-1">
              <h3 className="font-serif font-black text-sm sm:text-lg text-[#C2410C] tracking-tight uppercase leading-none">
                Atomic<br />
                <span className="text-base sm:text-2xl tracking-normal text-[#9A3412]">Habits</span>
              </h3>
              <div className="w-8 h-[1px] bg-[#EA580C]/40 mx-auto" />
              <p className="text-[6px] sm:text-[8px] text-[#78350F] font-sans max-w-[110px] mx-auto leading-tight">
                Tiny Changes, Remarkable Results
              </p>
            </div>

            <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-[#9A3412] font-serif font-bold pb-1 z-10">
              James Clear
            </div>
          </div>
        );

      case 'mountain':
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#0B1A28] via-[#0E2438] to-[#040A10] p-3 flex flex-col justify-between items-center text-center border border-[#1E3A5F] relative overflow-hidden">
            {/* Sunlit Golden Mountain Peak Graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-75">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                <polygon points="50,22 15,90 85,90" fill="#0A1624" />
                <polygon points="50,22 42,40 50,45 58,38" fill="#F59E0B" opacity="0.9" />
                <polygon points="50,45 42,65 50,72 58,62" fill="#D97706" opacity="0.6" />
                <circle cx="50" cy="18" r="8" fill="#FCD34D" opacity="0.4" filter="blur(2px)" />
              </svg>
            </div>

            <div className="text-[7px] sm:text-[8px] uppercase tracking-widest text-slate-400 font-sans pt-1 z-10">
              International Bestseller
            </div>

            <div className="my-auto z-10 space-y-1 pt-6">
              <h3 className="font-serif font-bold text-xs sm:text-base text-white tracking-[0.2em] uppercase leading-tight">
                THE MOUNTAIN<br />IS YOU
              </h3>
              <p className="text-[6px] sm:text-[8px] text-amber-200/80 font-sans tracking-wide">
                Transforming Self-Sabotage Into Self-Mastery
              </p>
            </div>

            <div className="text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-300 font-serif font-medium pb-1 z-10">
              Brianna Wiest
            </div>
          </div>
        );

      case 'monk':
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#3B1D28] p-3 flex flex-col justify-between items-center text-center border border-[#334155] relative overflow-hidden">
            {/* Meditating monk silhouette against warm golden sun */}
            <div className="absolute inset-x-0 bottom-8 h-28 flex justify-center items-center opacity-85">
              <div className="w-20 h-20 rounded-full bg-gradient-to-t from-amber-500 to-amber-200 blur-sm opacity-50 absolute" />
              <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20 z-10">
                <circle cx="50" cy="40" r="8" fill="#0F172A" />
                <path d="M38 68 C38 52 62 52 62 68 Z" fill="#0F172A" />
                <path d="M30 72 Q50 68 70 72" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="text-[7px] sm:text-[8px] uppercase tracking-widest text-amber-300 font-sans pt-1 z-10">
              Global Phenomenon
            </div>

            <div className="my-auto z-10 space-y-0.5">
              <h3 className="font-serif font-black text-xs sm:text-base text-white tracking-[0.18em] uppercase leading-tight">
                THINK<br />LIKE A MONK
              </h3>
              <p className="text-[6px] sm:text-[8px] text-amber-100 font-sans">
                Train Your Mind for Peace Every Day
              </p>
            </div>

            <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-amber-300 font-serif font-bold pb-1 z-10">
              JAY SHETTY
            </div>
          </div>
        );

      default:
        // Flagship "The Third Eye" Cover (as shown in the reference hero image)
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#0B0F19] via-[#08090E] to-[#120F1D] p-4 flex flex-col justify-between items-center text-center border-2 border-amber-500/40 relative overflow-hidden shadow-2xl">
            {/* Cosmic starry dust */}
            <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px] opacity-20" />
            
            {/* Radiant Golden Third Eye Graphic */}
            <div className="my-auto flex flex-col items-center z-10 space-y-4">
              <div className="relative w-28 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
                
                {/* Sunburst radiant rays */}
                <svg viewBox="0 0 100 80" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]">
                  {/* Outer radiant lines */}
                  {[...Array(16)].map((_, i) => {
                    const angle = (i * Math.PI) / 15;
                    const x1 = 50 + Math.cos(angle) * 32;
                    const y1 = 40 - Math.sin(angle) * 25;
                    const x2 = 50 + Math.cos(angle) * 40;
                    const y2 = 40 - Math.sin(angle) * 32;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FCD34D" strokeWidth="1.2" />;
                  })}
                  {/* Almond eye outline */}
                  <path d="M10 40 Q50 15 90 40 Q50 65 10 40 Z" stroke="#F59E0B" strokeWidth="2.5" />
                  <circle cx="50" cy="40" r="13" fill="#D97706" />
                  <circle cx="50" cy="40" r="7" fill="#08090D" />
                  <circle cx="48" cy="38" r="2.5" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="space-y-1">
                <h3 className="font-cinzel font-bold text-base sm:text-xl text-white tracking-[0.25em] uppercase drop-shadow-md">
                  THE THIRD EYE
                </h3>
                <div className="w-12 h-[1px] bg-amber-400/60 mx-auto" />
                <p className="font-outfit text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-300/90 font-medium">
                  Knowledge Beyond The Ordinary
                </p>
              </div>
            </div>

            <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-400 font-cinzel pb-1 z-10">
              The Digital Sanctuary
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative group/cover perspective-[1000px] select-none ${className}`}>
      {/* 3D Realistic Book Shell */}
      <div className={`relative ${sizeClasses} rounded-r-md rounded-l-[2px] shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.65)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between`}>
        
        {/* Book Left Spine Shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-20" />
        <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/20 pointer-events-none z-20" />

        {/* Outer subtle page edge */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-20" />

        {/* Cover Artwork Content */}
        {renderCoverArtwork()}

        {/* Specular Sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/cover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
}
