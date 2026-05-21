import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Heart, ShieldAlert, Award } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  activeTheme: 'mar' | 'terra' | 'balanced';
}

export default function Footer({ onNavClick, activeTheme }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);

  const getAccentClass = () => {
    if (activeTheme === 'mar') return 'text-[#2A9D8F] focus:border-[#2A9D8F]';
    if (activeTheme === 'terra') return 'text-[#D4A373] focus:border-[#D4A373]';
    return 'text-[#2A9D8F] focus:border-[#2A9D8F]';
  };

  return (
    <footer id="footer" className="relative bg-transparent border-t border-[#2D2926]/10 pt-24 pb-12 overflow-hidden">
      
      {/* DECORATIVE LIGHT FLARE */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4A373]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#2D2926]/12">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <button
              id="footer-logo-btn"
              onClick={() => onNavClick('hero')}
              className="text-left group flex flex-col items-start focus:outline-none cursor-pointer"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-black tracking-[0.25em] text-2xl text-[#2D2926] group-hover:text-[#D4A373] transition-colors">
                  NARUPER
                </span>
                <span className="w-1.5 h-1.5 rounded-none bg-[#D4A373]" />
              </div>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#2D2926]/40 mt-0.5">
                TERRA E MAR
              </span>
            </button>
            <p className="font-sans text-xs text-[#2D2926]/70 leading-relaxed max-w-xs mt-4">
              Uma marca disruptiva de surfwear, mountain e travel wear premium que celebra os limites poéticos entre o cume gelado e a arrebentação dourada.
            </p>
          </div>

          {/* QUICK LINKS CONTAINER */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#2D2926] uppercase tracking-widest font-extrabold font-bold">Navegação</h4>
            <div className="flex flex-col gap-2 text-xs font-sans">
              <button
                id="footer-nav-catalog"
                onClick={() => onNavClick('catalog')}
                className="text-[#2D2926]/60 hover:text-[#2D2926] transition-colors text-left font-mono cursor-pointer"
              >
                — Coleção Completa
              </button>
              <button
                id="footer-nav-stories"
                onClick={() => onNavClick('stories')}
                className="text-[#2D2926]/60 hover:text-[#2D2926] transition-colors text-left font-mono cursor-pointer"
              >
                — Histórias / Diários
              </button>
              <button
                id="footer-nav-tech"
                onClick={() => onNavClick('tech')}
                className="text-[#2D2926]/60 hover:text-[#2D2926] transition-colors text-left font-mono cursor-pointer"
              >
                — Tecnologia de Tecido
              </button>
              <button
                id="footer-nav-manifesto"
                onClick={() => onNavClick('manifesto')}
                className="text-[#2D2926]/60 hover:text-[#2D2926] transition-colors text-left font-mono cursor-pointer"
              >
                — Nosso Manifesto
              </button>
            </div>
          </div>

          {/* CONTACT INFO / STORES */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#2D2926] uppercase tracking-widest font-extrabold font-bold">Fronteiras</h4>
            <div className="space-y-2 font-mono text-xs text-[#2D2926]/60">
              <p>📍 Naruper Flagship Store — São Paulo, BR</p>
              <p>📍 Refúgio Patagonia Camp — Chalten, AR</p>
              <p>📍 Surf Lab Fernando de Noronha — PE, BR</p>
              <p className="text-[#2D2926]/40 mt-2">✉ atendimento@naruper.com.br</p>
            </div>
          </div>

          {/* NEWSLETTER COLUMN */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#2D2926] uppercase tracking-widest font-bold">Unidade de Descoberta</h4>
            <p className="font-sans text-xs text-[#2D2926]/70 leading-relaxed">
              Assine nosso correio premium para receber convites privados de novos lançamentos e expedições pelo mundo.
            </p>
            {subscribed ? (
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#2A9D8F] border border-[#2A9D8F]/20 bg-[#2A9D8F]/5 p-3 rounded-none">
                ✓ Correio de expedição ativo no sistema!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                  (e.target as HTMLFormElement).reset();
                }}
                className="flex mt-3 border border-[#2D2926]/12"
              >
                <input
                  type="email"
                  placeholder="Insira seu correio..."
                  required
                  className="bg-[#2D2926]/5 text-[#2D2926] font-mono text-xs px-4 py-3 placeholder-[#2D2926]/30 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className={`px-4 bg-[#2D2926] hover:bg-[#D4A373] text-[#F7F3F0] transition-colors flex items-center justify-center cursor-pointer`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* BOTTOM METRICS AND AWWARDS BADGE CRITERIA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[9.5px] uppercase tracking-[0.25em] text-[#2D2926]/50 bg-[#2D2926]/3 p-6 border border-[#2D2926]/12">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <span>© 2026 Naruper inc. Todos Direitos Reservados.</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
              <span>Nível Awwwards Site of the Year 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Criado estrategicamente por </span>
            <span className="text-[#2D2926] font-black hover:text-[#D4A373] transition-colors cursor-pointer flex items-center gap-1">
              Memora Labs <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
