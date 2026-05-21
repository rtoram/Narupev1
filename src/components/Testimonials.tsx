import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-32 border-t border-[#2D2926]/10 bg-transparent overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 font-sans font-black text-[20vw] leading-none text-[#2D2926]/3 pointer-events-none select-none uppercase">
        Vozes
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <Quote className="w-12 h-12 text-[#2A9D8F] opacity-60" />
        </div>

        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#D4A373] font-bold block mb-4">
          Comunidade Global & Atletas
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl font-black text-[#2D2926] tracking-tight leading-tight uppercase">
          Testados na Linha de Frente
        </h2>

        {/* TESTIMONIAL VIEWPORT */}
        <div className="mt-14 min-h-[250px] relative flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>

              <blockquote className="font-sans text-lg md:text-2xl text-[#2D2926]/90 leading-relaxed max-w-2xl font-light italic">
                "{TESTIMONIALS[current].quote}"
              </blockquote>

              {/* AUTHORS METRICS */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={TESTIMONIALS[current].avatar}
                  alt={TESTIMONIALS[current].name}
                  className="w-12 h-12 rounded-full object-cover border border-[#2A9D8F]/20 ring-4 ring-[#F7F3F0]"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <cite className="font-sans text-sm font-bold text-[#2D2926] uppercase not-italic block">
                    {TESTIMONIALS[current].name}
                  </cite>
                  <span className="font-mono text-[10px] text-[#2D2926]/50 uppercase tracking-widest block font-bold">
                    {TESTIMONIALS[current].role} — <span className="text-[#2A9D8F]">{TESTIMONIALS[current].location}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SLIDE NAVIGATION CONTROLS */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            id="prev-testimonial-btn"
            onClick={prev}
            className="p-3 border border-[#2D2926]/12 text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5 rounded-full transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                id={`dot-testimonial-btn-${idx}`}
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  current === idx ? 'bg-[#2A9D8F] w-6' : 'bg-[#2D2926]/15 hover:bg-[#2D2926]/30'
                }`}
              />
            ))}
          </div>

          <button
            id="next-testimonial-btn"
            onClick={next}
            className="p-3 border border-[#2D2926]/12 text-[#2D2926]/40 hover:text-[#2D2926] hover:bg-[#2D2926]/5 rounded-full transition-colors focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
