import React, { createContext, useContext, useState, useEffect } from 'react';
import { BOOKS_DATA } from '../data/books';
import confetti from 'canvas-confetti';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Cart state: array of items with { book, format: 'digital' | 'deluxe' }
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('thirdeye_cart');
      return saved ? JSON.parse(saved) : [
        { book: BOOKS_DATA[0], format: 'Collector Digital' },
        { book: BOOKS_DATA[2], format: 'Standard EPUB' }
      ];
    } catch {
      return [
        { book: BOOKS_DATA[0], format: 'Collector Digital' }
      ];
    }
  });

  // Wishlist state: array of book IDs
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('thirdeye_wishlist');
      return saved ? JSON.parse(saved) : ['book-2', 'book-4'];
    } catch {
      return ['book-2'];
    }
  });

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup'
  const [user, setUser] = useState(null); // { name: 'Karan Singhal', email: 'karan@visionary.in', memberTier: 'Inner Circle' }

  // Active viewing states
  const [selectedBook, setSelectedBook] = useState(null);
  const [readingBook, setReadingBook] = useState(null);

  // Discount / Coupon Code
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0.1); // 10% default welcome discount

  // Toast notifications
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('thirdeye_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('thirdeye_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const addToCart = (book, format = 'Collector Digital Edition') => {
    const exists = cart.find(item => item.book.id === book.id);
    if (exists) {
      showToast(`'${book.title}' is already in your Sanctum Cart`, 'info');
      setIsCartOpen(true);
      return;
    }
    setCart(prev => [...prev, { book, format }]);
    showToast(`Added '${book.title}' to your Sanctum Cart`, 'success');
  };

  const removeFromCart = (bookId) => {
    setCart(prev => prev.filter(item => item.book.id !== bookId));
    showToast('Manuscript removed from Sanctum Cart', 'info');
  };

  const toggleWishlist = (book) => {
    if (wishlist.includes(book.id)) {
      setWishlist(prev => prev.filter(id => id !== book.id));
      showToast(`Removed '${book.title}' from your Sacred Wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, book.id]);
      showToast(`Saved '${book.title}' to your Sacred Wishlist`, 'success');
    }
  };

  const isBookInWishlist = (bookId) => wishlist.includes(bookId);

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'THIRDEYE10' || clean === 'VEDIC2026' || clean === 'MOKSHA') {
      setAppliedDiscount(0.15); // 15% off
      showToast(`Code '${clean}' applied! 15% Inner Circle discount unlocked.`, 'success');
      return true;
    } else {
      showToast('Invalid coupon code. Try code: THIRDEYE10', 'error');
      return false;
    }
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.book.price, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const gstAmount = Math.round((subtotal - discountAmount) * 0.05); // 5% e-book GST in India
  const finalTotal = subtotal - discountAmount + gstAmount;

  const triggerCheckoutSuccess = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#D4AF37', '#C084FC', '#FDE047']
      });
    } catch (e) {
      // ignore
    }
    showToast('Purchase Authorized! Digital Manuscript Access Keys Transmitted.', 'success');
    setCart([]);
    setIsCartOpen(false);
  };

  const formatRupee = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <ShopContext.Provider
      value={{
        books: BOOKS_DATA,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        toggleWishlist,
        isBookInWishlist,
        subtotal,
        discountAmount,
        gstAmount,
        finalTotal,
        appliedDiscount,
        applyCoupon,
        couponCode,
        setCouponCode,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        user,
        setUser,
        selectedBook,
        setSelectedBook,
        readingBook,
        setReadingBook,
        toast,
        showToast,
        formatRupee,
        triggerCheckoutSuccess,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
