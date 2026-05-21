import { motion } from 'motion/react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CheckCircle, RefreshCcw } from 'lucide-react';
import { CartItem } from '../types';
import { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, size: string, color: string, q: number) => void;
  onRemoveItem: (id: string, size: string, color: string) => void;
  onClearCart: () => void;
  activeTheme: 'mar' | 'terra' | 'balanced';
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  activeTheme,
}: CartDrawerProps) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const environmentalContribution = subtotal > 0 ? 12 : 0; // Fixed eco contribution
  const total = subtotal + environmentalContribution;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
    }, 1800);
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* SHADOW OVERLAY WITH MOTION FADE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#2D2926]/45 backdrop-blur-xs"
      />

      {/* COMPACT FLOATING SLIDE DRAWER RIGHT-HAND */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-screen max-w-md bg-[#F7F3F0] border-l border-[#2D2926]/12 flex flex-col justify-between shadow-2xl relative text-[#2D2926]"
        >
          {/* DRAWER TOP BAR CONTROLS */}
          <div className="p-6 border-b border-[#2D2926]/12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black tracking-widest text-lg text-[#2D2926] uppercase">Cofre de Compras</span>
              <span className="w-1.5 h-1.5 rounded-none bg-[#D4A373] animate-pulse" />
            </div>
            
            <button
              id="close-cart-btn-drawer"
              onClick={onClose}
              className="p-2 text-[#2D2926]/60 hover:text-[#2D2926] border border-[#2D2926]/10 rounded-full hover:bg-[#2D2926]/5 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* DYNAMIC CHECKOUT COMPLETED SCREEN */}
          {checkoutComplete ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 rounded-full bg-[#2A9D8F]/10 border border-[#2A9D8F]/30 text-[#2A9D8F] flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>

              <h2 className="font-serif text-2xl font-black text-[#2D2926] uppercase leading-tight">Pedido Confirmado!</h2>
              <span className="font-mono text-[10px] text-[#2A9D8F] tracking-widest uppercase block mt-2 font-bold">
                Código: #NR-{Math.floor(Math.random() * 90000) + 10000}
              </span>

              <p className="font-sans text-[#2D2926]/75 text-sm mt-4 leading-relaxed max-w-xs mx-auto">
                Sua encomenda rumo à harmonia de terra e mar foi recebida. As fibras orgânicas ecológicas de Naruper já estão sendo preparadas!
              </p>

              <div className="mt-8 border border-[#2D2926]/12 p-4 bg-[#2D2926]/3 text-left w-full space-y-2 shadow-xs">
                <div className="flex justify-between font-mono text-[9px] uppercase text-[#2D2926]/60">
                  <span>Destinatário</span>
                  <span className="text-[#2D2926] font-bold">Explorador de Fronteiras</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] uppercase text-[#2D2926]/60">
                  <span>Contribuição Ecológica</span>
                  <span className="text-[#2A9D8F] font-bold">R$ 12,00 Ativada</span>
                </div>
                <div className="flex justify-between font-mono text-[9px] uppercase text-[#2D2926]/60">
                  <span>Entrega Est.</span>
                  <span className="text-[#2D2926] font-bold">2-4 dias úteis</span>
                </div>
              </div>

              <button
                id="reset-cart-success"
                onClick={handleReset}
                className="mt-10 px-8 py-4 bg-[#2D2926] text-[#F7F3F0] hover:bg-[#D4A373] font-mono text-xs tracking-widest uppercase font-bold w-full rounded-none flex items-center justify-center gap-3 transition-colors cursor-pointer shadow-sm"
              >
                Continuar Descobrindo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* CART LIST OR EMPTY CASE */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <span className="text-4xl mb-4">🎒</span>
                    <h3 className="font-serif text-lg font-bold text-[#2D2926] uppercase tracking-wider">Cofre de Viagem Vazio</h3>
                    <p className="text-[#2D2926]/60 font-sans text-xs mt-2 max-w-xs leading-relaxed">
                      Adicione equipamentos de alta performance do catálogo premium "Terra e Mar" para preparar sua jornada.
                    </p>
                    <button
                      id="close-empty-cart-btn"
                      onClick={onClose}
                      className="mt-6 px-6 py-3 border border-[#2D2926]/15 hover:border-[#2D2926]/35 text-[#2D2926]/80 hover:text-[#2D2926] font-mono text-xs tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      Acessar Coleções
                    </button>
                  </div>
                ) : (
                  cart.map((item) => {
                    const priceTotal = item.product.price * item.quantity;
                    return (
                      <div
                        id={`cart-item-${item.product.id}-${item.selectedSize}`}
                        key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                        className="flex gap-4 border-b border-[#2D2926]/10 pb-5"
                      >
                        {/* THUMBNAIL FRAME */}
                        <div className="w-20 h-20 bg-[#2D2926]/5 border border-[#2D2926]/10 overflow-hidden shrink-0 flex items-center justify-center relative">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* TEXT SPECS & ITEM CONTROLS */}
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-4">
                              <h4 className="font-sans text-xs font-bold text-[#2D2926] uppercase tracking-wider line-clamp-1">
                                {item.product.name}
                              </h4>
                              
                              <button
                                id={`remove-item-btn-${item.product.id}`}
                                onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                                className="text-[#2D2926]/30 hover:text-rose-500 p-1 transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="flex gap-3 text-[9px] font-mono uppercase text-[#2D2926]/50 mt-1">
                              <span>Tam: <strong className="text-[#2D2926]/80 font-bold">{item.selectedSize}</strong></span>
                              <span>Cor: <strong className="text-[#2D2926]/80 font-bold">{item.selectedColor}</strong></span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4">
                            {/* SCALE BUTTONS */}
                            <div className="flex items-center border border-[#2D2926]/12 bg-white">
                              <button
                                id={`minus-qty-btn-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                className="px-2 py-1 text-[#2D2926]/40 hover:text-[#2D2926] transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 font-mono text-xs text-[#2D2926] font-bold">{item.quantity}</span>
                              <button
                                id={`plus-qty-btn-${item.product.id}`}
                                onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                className="px-2 py-1 text-[#2D2926]/40 hover:text-[#2D2926] transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <span className="font-sans text-xs font-bold text-[#2A9D8F]">
                              R$ {priceTotal},00
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* FOOTER VALUES DISPLAY SUMMARY */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#2D2926]/10 bg-[#2D2926]/3">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#2D2926]/50 uppercase">Carrinho Subtotal</span>
                      <span className="text-[#2D2926]/80 font-bold">R$ {subtotal},00</span>
                    </div>

                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#2D2926]/50 uppercase flex items-center gap-1.5 text-[#2A9D8F] font-bold">
                        🌱 Taxa de Conservação
                      </span>
                      <span className="text-[#2A9D8F] font-bold">R$ {environmentalContribution},00</span>
                    </div>

                    <div className="h-[1px] bg-[#2D2926]/10 my-2" />

                    <div className="flex justify-between">
                      <span className="font-mono text-xs text-[#2D2926]/80 uppercase font-bold">Total de Luxo</span>
                      <span className="font-sans text-xl font-black text-[#2A9D8F]">
                        R$ {total},00
                      </span>
                    </div>
                  </div>

                  {/* SUBMIT CHECKOUT ACTOR */}
                  <button
                    id="submit-checkout-cart"
                    disabled={isProcessing}
                    onClick={handleCheckout}
                    className={`w-full py-4 bg-[#2D2926] hover:bg-[#D4A373] text-[#F7F3F0] font-mono text-xs uppercase tracking-widest font-black transition-all rounded-none flex items-center justify-center gap-3 cursor-pointer shadow-sm ${
                      isProcessing ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCcw className="w-4 h-4 animate-spin text-[#F7F3F0]" />
                        Aguarde... Processando
                      </>
                    ) : (
                      <>
                        Confirmar e Comprar
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[#2D2926]/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D2926]/30" />
                    <span>Conexão Segura Naruper TLS v1.3</span>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
