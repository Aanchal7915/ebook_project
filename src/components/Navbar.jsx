import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Navbar({ onNavigate, currentSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const {
    cart,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsAuthOpen,
    setAuthMode,
    user
  } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'Explore Books', section: 'featured' },
    { name: 'Categories', section: 'categories' },
    { name: 'About Us', section: 'why-us' },
    { name: 'Contact', section: 'contact' },
  ];

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(section);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-xl'
          : 'bg-[#0B0F19] border-b border-white/5 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo matching reference */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-2 select-none shrink-0"
          >
            {/* Radiant Third Eye Logo Icon */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black/40 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
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
                <circle cx="50" cy="40" r="5" fill="#08090D" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] text-white">
                THE THIRD EYE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleLinkClick(e, link.section)}
                className={`text-[13px] font-outfit tracking-wide transition-colors ${
                  currentSection === link.section
                    ? 'text-amber-300 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Search, Wishlist, Cart, Login */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            
            {/* Search Input Bar (Matches exact pill in image) */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search Books, Authors..."
                onClick={() => setIsSearchOpen(true)}
                readOnly
                className="w-44 lg:w-56 pl-8 pr-3 py-1.5 bg-[#141A28] border border-white/10 rounded-full text-xs text-white placeholder-slate-400 cursor-pointer focus:outline-none hover:border-amber-500/40 transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            </form>

            {/* Mobile Search Icon Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-full"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-1.5 text-slate-300 hover:text-amber-300 relative transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 text-[9px] font-bold text-black flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-slate-300 hover:text-white relative transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 text-[9px] font-bold text-black flex items-center justify-center">
                {cart.length}
              </span>
            </button>

            {/* Login Button (Light cream/gold pill matching image) */}
            {user ? (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EAD8B8] text-[#1F190D] font-outfit text-xs font-semibold hover:bg-[#F3E2C4] transition-colors"
              >
                {user.name.split(' ')[0]}
              </button>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('signin');
                  setIsAuthOpen(true);
                }}
                className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#EAD8B8] text-[#1F190D] font-outfit text-xs font-semibold hover:bg-[#F3E2C4] shadow-sm transition-all"
              >
                Login
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0D15] border-b border-white/10 px-4 py-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.section}`}
              onClick={(e) => handleLinkClick(e, link.section)}
              className="block text-xs font-outfit text-slate-200 hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full py-2 px-3 bg-[#131926] rounded-lg text-xs font-outfit text-slate-300 text-left flex items-center gap-2"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search Books, Authors...</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
