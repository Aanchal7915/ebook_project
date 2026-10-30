import React, { useState } from 'react';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedCollection from './components/FeaturedCollection';
import WhyUsSection from './components/WhyUsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PromoBanners from './components/PromoBanners';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

// Interactive Drawers & Modals
import CartDrawer from './components/modals/CartDrawer';
import WishlistDrawer from './components/modals/WishlistDrawer';
import SearchModal from './components/modals/SearchModal';
import QuickReaderModal from './components/modals/QuickReaderModal';
import BookDetailModal from './components/modals/BookDetailModal';
import AuthModal from './components/modals/AuthModal';
import Toast from './components/Toast';

function MainApp() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catName) => {
    setActiveCategoryFilter(catName);
    scrollToSection('featured');
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-100 flex flex-col justify-between selection:bg-amber-900 selection:text-white">
      {/* Sticky Premium Navbar matching reference image */}
      <Navbar onNavigate={scrollToSection} currentSection={currentSection} />

      {/* Main Content Sections matching exact reference design flow */}
      <main className="flex-1">
        {/* 1. Hero Section: Read Beyond The Ordinary */}
        <HeroSection
          onExploreClick={() => scrollToSection('featured')}
          onTrailerClick={() => scrollToSection('why-us')}
        />

        {/* 2. Explore by Category: Find What Speaks to You */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 3. Featured Books: Handpicked Reads for You */}
        <FeaturedCollection selectedCategory={activeCategoryFilter} />

        {/* 4. Why The Third Eye: More Than Just E-Books */}
        <WhyUsSection onStoryClick={() => scrollToSection('how-it-works')} />

        {/* 5. How It Works: Get Your E-Book in 3 Simple Steps */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>

        {/* 6. Special Offer 50% Off & Pay Via UPI QR Banners */}
        <PromoBanners onShopNow={() => scrollToSection('featured')} />

        {/* 7. What Readers Say: Loved by Readers Across India */}
        <TestimonialsSection />

        {/* 8. Stay Updated: Join Our Reading Community */}
        <div id="newsletter">
          <NewsletterSection />
        </div>
      </main>

      {/* 9. Footer matching reference image */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Drawers & Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <QuickReaderModal />
      <BookDetailModal />
      <AuthModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <MainApp />
    </ShopProvider>
  );
}
