import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'Explore Books', section: 'featured' },
    { name: 'Categories', section: 'categories' },
    { name: 'About Us', section: 'why-us' },
    { name: 'Contact', section: 'newsletter' },
  ];

  const categories = [
    'Spirituality',
    'Self Help',
    'Mental Wellness',
    'Business & Career',
    'Relationships',
    'Fiction',
  ];

  const support = [
    'FAQ',
    'Shipping & Delivery',
    'Refund Policy',
    'Privacy Policy',
    'Terms & Conditions',
  ];

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060910] text-slate-400 font-outfit pt-12 sm:pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Column 1: Brand Info & REAL COLOR Social Icons */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              {/* Radiant Eye Icon */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black/60 border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                <svg viewBox="0 0 100 80" fill="none" className="w-6 h-6">
                  {[...Array(14)].map((_, i) => {
                    const angle = (i * Math.PI) / 13;
                    const x1 = 50 + Math.cos(angle) * 30;
                    const y1 = 40 - Math.sin(angle) * 22;
                    const x2 = 50 + Math.cos(angle) * 40;
                    const y2 = 40 - Math.sin(angle) * 30;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FCD34D" strokeWidth="2.5" />;
                  })}
                  <path d="M15 40 Q50 18 85 40 Q50 62 15 40 Z" stroke="#F59E0B" strokeWidth="4" />
                  <circle cx="50" cy="40" r="11" fill="#D97706" />
                </svg>
              </div>

              <span className="font-cinzel font-bold text-base text-white tracking-[0.2em]">
                THIRD EYE
              </span>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              A digital bookstore for curious minds. Read, learn and grow with books that open new perspectives.
            </p>

            {/* REAL-COLOR Social Icons (High Contrast, Clearly Visible!) */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Connect With Us:
              </span>
              <div className="flex items-center gap-3">
                {/* 1. Instagram: Real Gradient (Red/Pink/Purple) */}
                <a
                  href="#instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-md shadow-[#E1306C]/40 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* 2. Facebook: Real Royal Blue */}
                <a
                  href="#facebook"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md shadow-[#1877F2]/40 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>

                {/* 3. Twitter / X: Real Crisp Dark Pill with Bright White Border & White X */}
                <a
                  href="#twitter"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#000000] border-2 border-slate-300 hover:border-white text-white flex items-center justify-center shadow-md shadow-white/10 hover:scale-110 active:scale-95 transition-all"
                  aria-label="Twitter X"
                  title="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* 4. YouTube: Real YouTube Vibrant Red */}
                <a
                  href="#youtube"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-md shadow-[#FF0000]/40 hover:scale-110 active:scale-95 transition-all"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 5. LinkedIn: Real Professional Blue */}
                <a
                  href="#linkedin"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-[#0A66C2]/40 hover:scale-110 active:scale-95 transition-all"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.section}`}
                    onClick={(e) => handleLinkClick(e, link.section)}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    onClick={(e) => handleLinkClick(e, 'categories')}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              {support.map((item) => (
                <li key={item}>
                  <a href="#support" className="hover:text-amber-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Made with Love in India */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2024 The Third Eye. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>in India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
