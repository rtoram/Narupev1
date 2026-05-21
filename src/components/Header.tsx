import { motion } from 'motion/react';
import { ShoppingBag, Globe, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  activeTheme: 'mar' | 'terra' | 'balanced';
  setActiveTheme: (theme: 'mar' | 'terra' | 'balanced') => void;
}

export default function Header({
  onNavClick,
  cart,
  setIsCartOpen,
  activeTheme,
  setActiveTheme,
}: HeaderProps) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const getThemeColors = () => {
    switch (activeTheme) {
      case 'mar':
        return {
          accent: 'text-[#2A9D8F]',
          border: 'border-[#2A9D8F]/20',
          badge: 'bg-[#2A9D8F] text-white',
          indicator: 'bg-[#2A9D8F]',
        };
      case 'terra':
        return {
          accent: 'text-[#D4A373]',
          border: 'border-[#D4A373]/20',
          badge: 'bg-[#D4A373] text-[#F7F3F0]',
          indicator: 'bg-[#D4A373]',
        };
      default:
        return {
          accent: 'text-[#2A9D8F]',
          border: 'border-[#2D2926]/10',
          badge: 'bg-[#2D2926] text-[#F7F3F0]',
          indicator: 'bg-[#D4A373]',
        };
    }
  };

  const colors = getThemeColors();

  return (
    <motion.header
      id="main-nav-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 border-b ${colors.border} bg-[#F7F3F0]/80 backdrop-blur-xl transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO & BRADING */}
        <div className="flex items-center gap-12">
          <button
            id="logo-button"
            onClick={() => onNavClick('hero')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif font-black tracking-[0.2em] text-2.5xl text-[#2D2926] group-hover:text-[#D4A373] transition-colors duration-300">
                NARUPER
              </span>
              <span className={`w-2 h-2 rounded-full ${colors.indicator} animate-pulse`} />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#2D2926]/60">
                TERRA E MAR
              </span>
            </div>
          </button>

          {/* SPIRIT TOGGLE - INNOVATIVE INTERACTION */}
          <div className="hidden md:flex items-center bg-[#2D2926]/5 rounded-none p-1 border border-[#2D2926]/10">
            <button
              id="toggle-mar-btn"
              onClick={() => setActiveTheme('mar')}
              className={`px-4 py-1.5 rounded-none font-mono text-[10px] tracking-wider uppercase transition-all duration-300 ${
                activeTheme === 'mar'
                  ? 'bg-[#2A9D8F]/10 text-[#2A9D8F] font-bold border border-[#2A9D8F]/30'
                  : 'text-[#2D2926]/60 hover:text-[#2D2926]'
              }`}
            >
              🌊 Mar
            </button>
            <button
              id="toggle-balanced-btn"
              onClick={() => setActiveTheme('balanced')}
              className={`px-4 py-1.5 rounded-none font-mono text-[10px] tracking-wider uppercase transition-all duration-300 ${
                activeTheme === 'balanced'
                  ? 'bg-[#D4A373]/10 text-[#D4A373] font-bold border border-[#D4A373]/30'
                  : 'text-[#2D2926]/60 hover:text-[#2D2926]'
              }`}
            >
              🧭 Híbrido
            </button>
            <button
              id="toggle-terra-btn"
              onClick={() => setActiveTheme('terra')}
              className={`px-4 py-1.5 rounded-none font-mono text-[10px] tracking-wider uppercase transition-all duration-300 ${
                activeTheme === 'terra'
                  ? 'bg-[#D4A373]/20 text-[#8B4513] font-bold border border-[#D4A373]/30'
                  : 'text-[#2D2926]/60 hover:text-[#2D2926]'
              }`}
            >
              ⛰️ Terra
            </button>
          </div>
        </div>

        {/* WEB DESIGN NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          <button
            id="nav-catalog-btn"
            onClick={() => onNavClick('catalog')}
            className="group relative font-mono text-xs tracking-widest text-[#2D2926]/80 hover:text-[#2D2926] uppercase transition-colors"
          >
            Coleções
            <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] ${colors.indicator} transition-all duration-300 group-hover:w-full`} />
          </button>
          <button
            id="nav-stories-btn"
            onClick={() => onNavClick('stories')}
            className="group relative font-mono text-xs tracking-widest text-[#2D2926]/80 hover:text-[#2D2926] uppercase transition-colors"
          >
            Histórias
            <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] ${colors.indicator} transition-all duration-300 group-hover:w-full`} />
          </button>
          <button
            id="nav-tech-btn"
            onClick={() => onNavClick('tech')}
            className="group relative font-mono text-xs tracking-widest text-[#2D2926]/80 hover:text-[#2D2926] uppercase transition-colors"
          >
            Tecnologia
            <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] ${colors.indicator} transition-all duration-300 group-hover:w-full`} />
          </button>
          <button
            id="nav-manifesto-btn"
            onClick={() => onNavClick('manifesto')}
            className="group relative font-mono text-xs tracking-widest text-[#2D2926]/80 hover:text-[#2D2926] uppercase transition-colors"
          >
            Manifesto
            <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] ${colors.indicator} transition-all duration-300 group-hover:w-full`} />
          </button>
        </nav>

        {/* CONTROL PANEL UTILITIES */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-[#2D2926]/70 bg-[#2D2926]/5 px-3 py-1.5 rounded-none border border-[#2D2926]/10">
            <Globe className="w-3.5 h-3.5 animate-spin-slow text-[#2D2926]/40" />
            <span>UTC -3 | BR</span>
          </div>

          {/* SHOPPING BAG */}
          <button
            id="open-cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-none border border-[#2D2926]/10 hover:bg-[#2D2926]/5 text-[#2D2926]/80 hover:text-[#2D2926] transition-all group"
          >
            <ShoppingBag className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            {totalItems > 0 && (
              <motion.span
                id="cart-count-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${colors.badge}`}
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
