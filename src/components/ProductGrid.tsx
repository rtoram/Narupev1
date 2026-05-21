import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, Eye, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductGridProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  activeTheme: 'mar' | 'terra' | 'balanced';
}

export default function ProductGrid({ onQuickView, onAddToCart, activeTheme }: ProductGridProps) {
  const [filter, setFilter] = useState<'all' | 'mar' | 'terra' | 'travel'>('all');
  const [sort, setSort] = useState<'featured' | 'low-high' | 'high-low'>('featured');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  }).sort((a, b) => {
    if (sort === 'low-high') return a.price - b.price;
    if (sort === 'high-low') return b.price - a.price;
    return 0; // standard order
  });

  const getAccentColor = (category: string) => {
    if (category === 'mar') return { text: 'text-[#2A9D8F]', bg: 'bg-[#2A9D8F]/10 border-[#2A9D8F]/20' };
    if (category === 'terra') return { text: 'text-[#D4A373]', bg: 'bg-[#D4A373]/10 border-[#D4A373]/20' };
    return { text: 'text-[#2A9D8F]', bg: 'bg-[#2A9D8F]/10 border-[#D4A373]/20' };
  };

  return (
    <section id="catalog" className="relative py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#D4A373] font-semibold">
            Equipamentos de Aventura
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tight text-[#2D2926] mt-3 uppercase">
            O Catálogo Naruper
          </h2>
          <p className="font-sans text-[#2D2926]/75 mt-4 max-w-lg text-sm md:text-base leading-relaxed">
            Unindo a precisão térmica necessária nas montanhas com a elasticidade hidrofóbica vital no surf.
          </p>
        </div>

        {/* ACTIVE SPIRIT DECORATORS */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-[#2D2926]/60 bg-[#2D2926]/5 p-1.5 rounded-none border border-[#2D2926]/10">
          <span className="px-2 py-1 bg-[#2D2926] text-[#F7F3F0] rounded-none">Exibindo {filteredProducts.length} itens</span>
          <span className="px-2 py-1">Naruer Labs V2.0</span>
        </div>
      </div>

      {/* FILTER & SORT CONTROLS PANEL */}
      <div className="border border-[#2D2926]/15 bg-white/40 backdrop-blur-md p-6 flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
        <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
          <span className="font-mono text-xs text-[#2D2926]/55 uppercase flex items-center gap-2 mr-3">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filtrar:
          </span>
          <button
            id="filter-all-btn"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-[#2D2926] text-[#F7F3F0] font-bold'
                : 'text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5'
            }`}
          >
            Tudo
          </button>
          <button
            id="filter-mar-btn"
            onClick={() => setFilter('mar')}
            className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === 'mar'
                ? 'bg-[#2A9D8F]/15 text-[#2A9D8F] border border-[#2A9D8F]/30 font-bold'
                : 'text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5'
            }`}
          >
            🌊 Coleção MAR
          </button>
          <button
            id="filter-terra-btn"
            onClick={() => setFilter('terra')}
            className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === 'terra'
                ? 'bg-[#D4A373]/15 text-[#D4A373] border border-[#D4A373]/30 font-bold'
                : 'text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5'
            }`}
          >
            ⛰️ Coleção TERRA
          </button>
          <button
            id="filter-travel-btn"
            onClick={() => setFilter('travel')}
            className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              filter === 'travel'
                ? 'bg-[#2A9D8F]/15 text-[#2A9D8F] border border-[#2A9D8F]/20 font-bold'
                : 'text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5'
            }`}
          >
            🧭 Travel wear
          </button>
        </div>

        {/* SORT TOGGLER */}
        <div className="flex gap-3 items-center w-full md:w-auto justify-end">
          <span className="font-mono text-xs text-[#2D2926]/60 uppercase">Ordenar:</span>
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as any)}
            className="bg-[#F7F3F0] border border-[#2D2926]/12 text-[#2D2926] text-xs font-mono py-2 px-3 rounded-none focus:outline-none focus:border-[#D4A373] transition-colors cursor-pointer"
          >
            <option value="featured">Padrão Naruper</option>
            <option value="low-high">Menor Preço</option>
            <option value="high-low">Maior Preço</option>
          </select>
        </div>
      </div>

      {/* ASYMMETRIC OR MODERN GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => {
            const accent = getAccentColor(product.category);
            const currentSelectedSize = selectedSizes[product.id] || 'M';

            return (
              <motion.div
                id={`product-card-${product.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={product.id}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col border border-[#2D2926]/12 bg-white/40 hover:border-[#2D2926]/25 hover:bg-white transition-all duration-500 overflow-hidden shadow-sm"
              >
                
                {/* CATEGORY TAG BADGE */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase font-semibold border ${accent.bg} ${accent.text}`}>
                    {product.category === 'mar' ? '🌊 Mar' : product.category === 'terra' ? '⛰️ Terra' : '🧭 Travel'}
                  </span>
                </div>

                {/* IMAGE FRAME */}
                <div className="relative aspect-square w-full bg-[#2D2926]/5 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* FLOATING ACTION OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2D2926]/45 backdrop-blur-subtle">
                    <button
                      id={`qv-${product.id}`}
                      onClick={() => onQuickView(product)}
                      className="p-3 bg-[#F7F3F0] text-[#2D2926] hover:bg-[#2D2926] hover:text-[#F7F3F0] font-mono text-xs flex items-center gap-2 transition-transform duration-300 translate-y-4 group-hover:translate-y-0 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Visualizar
                    </button>
                    
                    <button
                      id={`atc-${product.id}`}
                      onClick={() => onAddToCart(product, currentSelectedSize, product.colors[0].name)}
                      className="p-3 bg-[#2D2926] text-[#F7F3F0] hover:bg-[#D4A373] font-mono text-xs flex items-center gap-2 transition-transform duration-300 translate-y-4 group-hover:translate-y-0 delay-75 cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4 text-[#2A9D8F]" />
                      Adicionar
                    </button>
                  </div>
                </div>

                {/* TEXT INFO CONTAINER */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#2D2926]/50 font-mono text-[9px] tracking-widest uppercase mb-2">
                      <span>{product.slogan}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#D4A373] text-[#D4A373]" />
                        <span className="text-[#2D2926]/75">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-lg font-bold text-[#2D2926] group-hover:text-[#D4A373] transition-colors duration-300 uppercase">
                      {product.name}
                    </h3>
                    
                    <p className="text-[#2D2926]/70 font-sans text-xs mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* BOTTOM INFO, COLOR SWATCH & PRICE */}
                  <div className="mt-6 pt-5 border-t border-[#2D2926]/12 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#2D2926]/54 uppercase block mb-1">Preço Premium</span>
                      <span className="font-sans text-[#2D2926] text-xl font-extrabold tracking-tight">
                        R$ {product.price},00
                      </span>
                    </div>

                    {/* SIZE SELECTOR COMPONENT RIGHT ON THE CARD */}
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-[9px] text-[#2D2926]/60 uppercase mb-1">Tamanho</span>
                      <div className="flex gap-1.5">
                        {['P', 'M', 'G', 'GG'].map((size) => (
                          <button
                            id={`size-${product.id}-${size}`}
                            key={size}
                            onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                            className={`w-5 h-5 rounded-none font-mono text-[9px] flex items-center justify-center border transition-all cursor-pointer ${
                              currentSelectedSize === size
                                ? 'bg-[#2D2926] text-[#F7F3F0] border-[#2D2926]'
                                : 'text-[#2D2926]/60 border-[#2D2926]/15 hover:border-[#2D2926]/50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
}
