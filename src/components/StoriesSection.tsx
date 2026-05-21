import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, Play } from 'lucide-react';
import { STORIES } from '../data';

export default function StoriesSection() {
  return (
    <section id="stories" className="relative py-32 border-t border-[#2D2926]/10 bg-transparent scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#D4A373] font-bold">
              Diário de Sobrevivência Poética
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight text-[#2D2926] mt-3 uppercase">
              Histórias da Fronteira
            </h2>
            <p className="font-sans text-[#2D2926]/75 mt-4 max-w-lg text-sm md:text-base">
              Nossa equipe viaja aos limites geográficos da Terra para documentar o encontro do mar severo com as montanhas indomáveis.
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#2D2926]/40 uppercase">
            <span>NARUPER CHRONICLES vol. 03</span>
          </div>
        </div>

        {/* STORIES LAYOUT - EDITORIAL STYLE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {STORIES.map((story, idx) => {
            const isFirst = idx === 0;
            const borderAccent = 'border-[#2D2926]/12 hover:border-[#2D2926]/25';
            const textAccent = isFirst ? 'text-[#2A9D8F]' : 'text-[#D4A373]';
            const btnAccent = 'bg-[#2D2926] text-[#F7F3F0] hover:bg-[#D4A373]';

            return (
              <motion.article
                id={`story-${story.id}`}
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`group flex flex-col border p-6 md:p-8 bg-white/40 backdrop-blur-sm transition-all duration-500 shadow-sm ${borderAccent}`}
              >
                {/* PHOTO FRAME */}
                <div className="relative aspect-[16/10] w-full bg-[#2D2926]/5 overflow-hidden mb-8">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/60 via-[#2D2926]/10 to-transparent" />
                  
                  {/* PLAY OR VIEW WATERMARK ACCENT */}
                  <div className="absolute top-4 right-4 bg-[#F7F3F0]/90 backdrop-blur-md px-3 py-1 font-mono text-[9px] text-[#2D2926]/70 tracking-widest uppercase border border-[#2D2926]/10">
                    {story.category === 'mar' ? 'Oceano' : 'Montanha'}
                  </div>
                </div>

                {/* META INFO */}
                <div className="flex flex-wrap gap-6 items-center text-[#2D2926]/50 font-mono text-[10px] uppercase tracking-wider mb-4 border-b border-[#2D2926]/10 pb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2D2926]/40" />
                    {story.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#2D2926]/40" />
                    {story.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2D2926]/40" />
                    {story.readTime}
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <span className={`font-mono text-xs uppercase tracking-widest font-bold ${textAccent}`}>
                  {story.subtitle}
                </span>
                
                <h3 className="font-serif text-2xl md:text-3xl font-black text-[#2D2926] mt-3 mb-4 leading-tight group-hover:text-[#D4A373] transition-colors uppercase">
                  {story.title}
                </h3>
                
                <p className="text-[#2D2926]/75 font-sans text-sm leading-relaxed flex-grow">
                  {story.description}
                </p>

                {/* READ BUTTON CONTROL */}
                <div className="mt-8 pt-6 border-t border-[#2D2926]/10 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#2D2926]/40 uppercase tracking-widest">
                    Naruper Chronicles
                  </span>
                  
                  <button
                    id={`story-btn-${story.id}`}
                    className={`px-5 py-3 font-mono text-xs tracking-widest uppercase font-bold flex items-center gap-2.5 transition-all cursor-pointer ${btnAccent}`}
                  >
                    Ler Crônica
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ECO LOGO OR SPECIAL BADGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border border-[#2D2926]/12 p-8 flex flex-col md:flex-row items-center justify-between bg-[#2D2926]/5 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <span className="text-3xl">🌱</span>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#2D2926] uppercase tracking-wider">
                Compromisso Azul e Verde
              </h4>
              <p className="text-[#2D2926]/60 font-sans text-xs mt-1">
                Doamos 1% do faturamento de cada peça vendida para a restauração do ecossistema costeiro e florestal brasileiro.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#2A9D8F] border border-[#2A9D8F]/20 bg-[#2A9D8F]/5 px-3 py-1.5 font-bold">
              100% RECYCLED FIBERS
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4A373] border border-[#D4A373]/20 bg-[#D4A373]/5 px-3 py-1.5 font-bold">
              PLASTIC FREE PACKAGING
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
