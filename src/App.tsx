import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ShoppingBag, ArrowUp, Sparkles, Check } from 'lucide-react';
import Header from './components/Header';
import InteractiveHorizon from './components/InteractiveHorizon';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductQuickView from './components/ProductQuickView';
import StoriesSection from './components/StoriesSection';
import TechFabricSection from './components/TechFabricSection';
import ManifestoSection from './components/ManifestoSection';
import Testimonials from './components/Testimonials';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Product, CartItem } from './types';

export default function App() {
  const [activeTheme, setActiveTheme] = useState<'mar' | 'terra' | 'balanced'>('balanced');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<{ id: string; message: string; sub: string }[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft Auto-Theme shifting depending on scroll position to showcase Awwwards creativity!
  useEffect(() => {
    const handleScrollPos = () => {
      const scrollY = window.scrollY;
      const catalogEl = document.getElementById('catalog');
      const storiesEl = document.getElementById('stories');
      
      if (storiesEl && scrollY >= storiesEl.offsetTop - 300) {
        // lower sections default to balanced
        setActiveTheme('balanced');
      } else if (catalogEl && scrollY >= catalogEl.offsetTop - 300) {
        // catalog matches current user selection, so we don't force override
      } else {
        // top section matches hero theme
      }
    };
    window.addEventListener('scroll', handleScrollPos);
    return () => window.removeEventListener('scroll', handleScrollPos);
  }, []);

  const triggerToast = (message: string, sub: string) => {
    const id = Math.random().toString();
    setToasts((prev) => [...prev, { id, message, sub }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      }

      return [
        ...prevCart,
        {
          product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
        },
      ];
    });

    triggerToast(
      `Equipamento Adicionado!`,
      `${product.name} (Tam: ${size} / ${color})`
    );
  };

  const handleUpdateQuantity = (
    id: string,
    size: string,
    color: string,
    q: number
  ) => {
    if (q <= 0) {
      handleRemoveItem(id, size, color);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity: q }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
    triggerToast('Item Removido', 'O equipamento foi retirado docofre.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F7F3F0] text-[#2D2926] min-h-screen selection:bg-[#D4A373]/30 selection:text-[#2D2926] font-sans leading-normal overflow-hidden relative">
      
      {/* 1. DYNAMIC COLOR GRADIENTS IN THE COMPOSER GLASS BACKGROUND */}
      <InteractiveHorizon activeTheme={activeTheme} />

      {/* 2. MAIN HEADER STICKY MENU */}
      <Header
        onNavClick={handleNavClick}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
      />

      {/* 3. HERO SPLIT SECTION */}
      <Hero
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        onExploreClick={() => handleNavClick('catalog')}
      />

      {/* 4. FABRIC TECHNOLOGY HIGHLIGHT SECTION */}
      <TechFabricSection />

      {/* 5. ASYMMETRIC PREMIUM CATALOG GRID SECTION */}
      <ProductGrid
        onQuickView={setQuickViewProduct}
        onAddToCart={handleAddToCart}
        activeTheme={activeTheme}
      />

      {/* 6. IMMERSIVE BRAND MANIFESTO STORY POP */}
      <ManifestoSection />

      {/* 7. RECENT CRONICAL EDITORIALS STORIES SECTION */}
      <StoriesSection />

      {/* 8. ELITE TESTIMONIALS SLIDER SECTION */}
      <Testimonials />

      {/* 9. GLOBAL FOOTER CORES */}
      <Footer onNavClick={handleNavClick} activeTheme={activeTheme} />

      {/* ==================== PORTALS OR DRAWERS ==================== */}

      {/* SHOPPING CART OVERLAY CANVAS */}
      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            activeTheme={activeTheme}
          />
        )}
      </AnimatePresence>

      {/* PRODUCT DETAILED QUICK VIEW DIALOG */}
      <AnimatePresence>
        {quickViewProduct && (
          <ProductQuickView
            product={quickViewProduct}
            onClose={() => setQuickViewProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* TOAST SYSTEM (MULTI FEEDBACK FLYOUT) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              id={`toast-elem-${toast.id}`}
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-[#F7F3F0] border border-[#2D2926] p-4 shadow-2xl flex items-start gap-3 w-80 backdrop-blur-md rounded-none"
            >
              <div className="w-6 h-6 rounded-none bg-[#2A9D8F]/10 border border-[#2A9D8F]/30 text-[#2A9D8F] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h5 className="font-mono font-bold text-xs text-[#2D2926] uppercase tracking-wider">{toast.message}</h5>
                <p className="font-sans text-[10.5px] text-[#2D2926]/70 mt-1">{toast.sub}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* BACK TO TOP FLOATING ACTOR */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 p-3 bg-[#F7F3F0] hover:bg-[#2D2926] border border-[#2D2926]/20 rounded-none text-[#2D2926] hover:text-[#F7F3F0] transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
