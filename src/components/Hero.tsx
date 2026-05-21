import { motion } from 'motion/react';
import { ArrowDown, Compass, Play, ShieldAlert } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  activeTheme: 'mar' | 'terra' | 'balanced';
  setActiveTheme: (theme: 'mar' | 'terra' | 'balanced') => void;
  onExploreClick: () => void;
}

export default function Hero({ activeTheme, setActiveTheme, onExploreClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* 50/50 IMMERSIVE SPLIT OR COMBINED BACKDROP */}
      <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row transition-all duration-1000">
        
        {/* MAR SPIRIT SIDE */}
        <div
          onClick={() => setActiveTheme('mar')}
          className={`relative h-1/2 md:h-full transition-all duration-1000 cursor-pointer overflow-hidden ${
            activeTheme === 'mar'
              ? 'w-full md:w-[70%]'
              : activeTheme === 'terra'
              ? 'w-full md:w-[30%] opacity-40 hover:opacity-60 saturate-50'
              : 'w-full md:w-1/2'
          }`}
        >
          <img
            src={IMAGES.heroSurf}
            alt="Naruper Surfwear Spirit - Mar"
            className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/90 via-[#2D2926]/10 to-black/10" />
          
          {/* Internal watermark indicating MAR */}
          <div className="absolute bottom-10 left-10 hidden md:block pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-[1px] bg-[#2A9D8F]" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#2A9D8F] font-semibold">
                ESPORTES NÁUTICOS & BRISA DO MAR
              </span>
            </motion.div>
          </div>
        </div>

        {/* TERRA SPIRIT SIDE */}
        <div
          onClick={() => setActiveTheme('terra')}
          className={`relative h-1/2 md:h-full transition-all duration-1000 cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-[#2D2926]/10 ${
            activeTheme === 'terra'
              ? 'w-full md:w-[70%]'
              : activeTheme === 'mar'
              ? 'w-full md:w-[30%] opacity-40 hover:opacity-60 saturate-50'
              : 'w-full md:w-1/2'
          }`}
        >
          <img
            src={IMAGES.heroMountain}
            alt="Naruper Mountain Travel - Terra"
            className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/90 via-[#2D2926]/10 to-black/10" />

          {/* Internal watermark indicating TERRA */}
          <div className="absolute bottom-10 right-10 hidden md:block pointer-events-none text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-end gap-3"
            >
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#D4A373] font-semibold">
                ALTITUDE & MOUNTAIN TRAVEL WEAR
              </span>
              <div className="w-10 h-[1px] bg-[#D4A373]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FLOATING MAJESTIC TEXT AND BRAND CORE */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none mt-auto mb-auto select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#2D2926]/90 border border-[#2D2926]/20 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#D4A373] rotate-12 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#F7F3F0] font-medium">
              ALÉM DO HORIZONTE
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-5xl md:text-8xl font-black tracking-[-0.02em] text-[#F7F3F0] leading-none uppercase drop-shadow-md"
        >
          Terra <span className="font-light italic text-[#D4A373]">e</span> Mar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 font-mono text-xs md:text-sm tracking-[0.2em] text-[#F7F3F0]/90 max-w-lg mx-auto uppercase leading-relaxed font-light drop-shadow-md"
        >
          Equipamentos Premium de Surfwear e Viagem técnica estruturados para as condições reais da terra e o espírito selvagem do mar.
        </motion.p>

        {/* ACTIVE SPIRIT OVERLAY DECORATOR CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex justify-center gap-4 pointer-events-auto"
        >
          <button
            id="explore-collection-hero-btn"
            onClick={onExploreClick}
            className="group px-8 py-4 bg-[#2D2926] hover:bg-[#D4A373] text-[#F7F3F0] font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 rounded-none flex items-center gap-3 hover:shadow-[0_0_30px_rgba(212,163,115,0.25)] cursor-pointer"
          >
            Explorar Coleção
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            id="watch-manifesto-hero-btn"
            onClick={() => {
              const el = document.getElementById('manifesto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-6 py-4 bg-transparent hover:bg-[#F7F3F0]/10 text-[#F7F3F0] border border-[#F7F3F0]/25 font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 rounded-none flex items-center gap-3 backdrop-blur-md cursor-pointer"
          >
            Assista ao Manifesto
            <Play className="w-3 h-3 text-[#2A9D8F] group-hover:scale-110 transition-transform fill-[#2A9D8F]" />
          </button>
        </motion.div>
      </div>

      {/* LOWER FOOTER-HERO ANCHOR */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-8 mt-auto flex items-center justify-between pointer-events-none font-mono text-[9px] tracking-[0.25em] text-[#F7F3F0]/80 uppercase">
        <div className="flex gap-8">
          <span>MATERIAL SEGURO & ECO-RECICLADO</span>
          <span className="hidden sm:inline">TECNOLOGIA 3-LAYERS IMPERMEÁVEL</span>
        </div>
        
        {/* Dynamic theme indicators */}
        <div className="flex items-center gap-3">
          <span className={activeTheme === 'mar' ? 'text-[#2A9D8F] font-bold' : ''}>MAR</span>
          <div className="w-12 h-[2px] bg-[#F7F3F0]/20 rounded relative">
            <motion.div
              animate={{
                left: activeTheme === 'mar' ? '0%' : activeTheme === 'terra' ? '100%' : '50%'
              }}
              style={{ x: '-50%' }}
              transition={{ type: 'spring', stiffness: 100 }}
              className={`absolute top-0 w-3 h-[2px] rounded ${
                activeTheme === 'mar' ? 'bg-[#2A9D8F]' : activeTheme === 'terra' ? 'bg-[#D4A373]' : 'bg-[#2A9D8F]'
              }`}
            />
          </div>
          <span className={activeTheme === 'terra' ? 'text-[#D4A373] font-bold' : ''}>TERRA</span>
        </div>
      </div>
    </section>
  );
}
