import { useState } from 'react';
import { motion } from 'motion/react';
import { X, ShoppingCart, Shield } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function ProductQuickView({ product, onClose, onAddToCart }: ProductQuickViewProps) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState<'desc' | 'specs'>('desc');

  const selectedColorHex = product.colors.find(c => c.name === selectedColor)?.hex || '#000';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* SHADOW OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#2D2926]/45 backdrop-blur-xs"
      />

      {/* MODAL MAIN FRAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#F7F3F0] border border-[#2D2926]/15 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none flex flex-col md:flex-row shadow-[0_24px_60px_rgba(45,41,38,0.18)] text-[#2D2926] z-10"
      >
        {/* CLOSE CONTROL */}
        <button
          id="close-qv-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#2D2926]/60 hover:text-[#2D2926] hover:bg-[#2D2926]/5 border border-[#2D2926]/12 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE LEFT BLOCK */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-[500px] bg-[#2D2926]/3 border-r border-[#2D2926]/10 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Active Color accent ring in corner */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#F7F3F0]/95 backdrop-blur-md px-3.5 py-1.5 border border-[#2D2926]/10 shadow-xs">
            <span className="w-3 h-3 rounded-full border border-[#2D2926]/10" style={{ backgroundColor: selectedColorHex }} />
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#2D2926]/80 font-bold">{selectedColor}</span>
          </div>
        </div>

        {/* TEXT DETAILS RIGHT BLOCK */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#2A9D8F] font-bold px-2 py-0.5 bg-[#2A9D8F]/10 border border-[#2A9D8F]/20">
                LABS DESIGN
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#2D2926]/50">
                Ref: {product.id}
              </span>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-black text-[#2D2926] mt-4 tracking-tight uppercase leading-tight">
              {product.name}
            </h2>
            <p className="font-mono text-xs text-[#2D2926]/50 mt-1 uppercase tracking-wider">{product.slogan}</p>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="font-sans text-3xl font-extrabold text-[#2A9D8F]">R$ {product.price},00</span>
              <span className="font-mono text-[10px] text-[#2D2926]/50 font-medium whitespace-nowrap">Ou 10x de R$ {product.price / 10},00 sem juros</span>
            </div>

            {/* TAB SELECTORS DESCRIPTION / TECH SPECS */}
            <div className="flex border-b border-[#2D2926]/10 mt-8 mb-6">
              <button
                id="tab-desc-btn"
                onClick={() => setActiveTab('desc')}
                className={`pb-3 font-mono text-xs uppercase tracking-widest relative mr-6 transition-colors cursor-pointer ${
                  activeTab === 'desc' ? 'text-[#2D2926] font-bold' : 'text-[#2D2926]/40 hover:text-[#2D2926]'
                }`}
              >
                Informações
                {activeTab === 'desc' && (
                  <motion.div layoutId="modal-tab-indicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2A9D8F]" />
                )}
              </button>
              <button
                id="tab-specs-btn"
                onClick={() => setActiveTab('specs')}
                className={`pb-3 font-mono text-xs uppercase tracking-widest relative transition-colors cursor-pointer ${
                  activeTab === 'specs' ? 'text-[#2D2926] font-bold' : 'text-[#2D2926]/40 hover:text-[#2D2926]'
                }`}
              >
                Especificações Técnicas
                {activeTab === 'specs' && (
                  <motion.div layoutId="modal-tab-indicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2A9D8F]" />
                )}
              </button>
            </div>

            {/* TAB CONTENT DESCRIPTIONS */}
            {activeTab === 'desc' ? (
              <div className="space-y-4">
                <p className="text-[#2D2926]/80 font-sans text-sm leading-relaxed">{product.description}</p>
                <ul className="space-y-2 mt-4">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2D2926]/70 font-sans text-xs">
                      <span className="text-[#2A9D8F] mt-1 shrink-0">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="border border-[#2D2926]/10 rounded-none overflow-hidden">
                {Object.entries(product.specs).map(([key, value], idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between p-3 text-xs font-mono Richmond ${
                      idx % 2 === 0 ? 'bg-[#2D2926]/3' : 'bg-transparent'
                    }`}
                  >
                    <span className="text-[#2D2926]/40 uppercase tracking-wider">{key}</span>
                    <span className="text-[#2D2926]/80 text-right">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* MULTI COLOR PICKERS */}
            <div className="mt-8">
              <span className="font-mono text-[10px] tracking-widest text-[#2D2926]/40 uppercase block mb-3">
                Cor Disponível
              </span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    id={`color-opt-${color.name}`}
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 border transition-all rounded-none cursor-pointer ${
                      selectedColor === color.name
                        ? 'border-[#2D2926] text-[#2D2926] bg-[#2D2926]/5 font-bold'
                        : 'border-[#2D2926]/12 text-[#2D2926]/50 hover:border-[#2D2926]/30 hover:text-[#2D2926]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
                    <span className="font-mono text-[10.5px] uppercase">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTORS */}
            <div className="mt-6">
              <span className="font-mono text-[10px] tracking-widest text-[#2D2926]/40 uppercase block mb-3">
                Selecionar Tamanho
              </span>
              <div className="flex gap-2">
                {['P', 'M', 'G', 'GG'].map((size) => (
                  <button
                    id={`size-opt-${size}`}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border font-mono text-xs flex items-center justify-center transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'border-[#2D2926] text-[#D4A373] bg-[#2D2926]/5 font-extrabold'
                        : 'border-[#2D2926]/12 text-[#2D2926]/50 hover:border-[#2D2926]/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* BUY PANEL ACTIONS */}
          <div className="mt-10 pt-6 border-t border-[#2D2926]/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3 text-[#2D2926]/50 font-mono text-[10px] tracking-wider uppercase">
              <Shield className="w-4 h-4 text-[#2A9D8F]" />
              <span>Garantia de Adaptação 30 dias</span>
            </div>

            <button
              id="add-to-cart-qv"
              onClick={() => {
                onAddToCart(product, selectedSize, selectedColor);
                onClose();
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#2D2926] hover:bg-[#D4A373] text-[#F7F3F0] font-mono text-xs tracking-widest uppercase font-black transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm"
            >
              Adicionar ao Carrinho
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
