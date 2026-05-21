import { motion } from 'motion/react';
import { Compass, Anchor, ChevronDown, Award } from 'lucide-react';
import { IMAGES } from '../data';

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-32 bg-transparent border-t border-[#2D2926]/10 scroll-mt-20 overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-10 right-10 opacity-5">
        <Compass className="w-[500px] h-[500px] text-[#2D2926] rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#D4A373] font-black">
            Nossa Ideologia Vital
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-[#2D2926] mt-4 tracking-tight uppercase">
            Manifesto Terra <span className="font-light italic text-[#D4A373]">e</span> Mar
          </h2>
        </div>

        {/* DOUBLE COLUMN LAYOUT FOR MANIFESTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* PHOTO BOX */}
          <div className="relative aspect-[4/5] bg-[#2D2926]/5 border border-[#2D2926]/15 overflow-hidden">
            <img
              src={IMAGES.prodMountain}
              alt="Naruper Mountain Travel Explorer"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2926]/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#F7F3F0]/90 border border-[#2D2926]/10 backdrop-blur-md">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4A373] font-bold block mb-1">
                EXPOSIÇÃO EXTREMA
              </span>
              <p className="font-sans text-xs text-[#2D2926]/90">
                "Não existem climas hostis demais, existem apenas equipamentos vestuários errados." — Naruper Design Corp.
              </p>
            </div>
          </div>

          {/* POETIC PARAGRAPHS */}
          <div className="space-y-8 font-sans text-[#2D2926]/80 text-sm md:text-base leading-relaxed font-light">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#D4A373] first-letter:mr-3 first-letter:float-left">
              Acreditamos que a verdadeira aventura não se contenta em escolher caminhos lineares. Quem se aventura no mar sabe que a onda é uma montanha líquida de energia efêmera. Quem escala as montanhas sabe que o vento gelado do cume é o mesmo vento que impulsiona os veleiros nas correntes costeiras.
            </p>

            <p>
              A <strong className="text-[#2D2926] font-bold">Naruper</strong> nasceu dessa fusão geográfica absoluta. Criamos equipamentos têxteis pensados para indivíduos que se recusam a aceitar rótulos ou fronteiras comuns de atividade. Se você surfa ao amanhecer nas costas acidentadas de Santa Catarina e viaja no final do ano para as trilhas do Fitz Roy, nós vestimos a sua jornada.
            </p>

            <blockquote className="border-l-2 border-[#2A9D8F] pl-4 py-1 italic text-[#2D2926]/90 mt-6 font-medium">
              "Terra é o nosso alicerce físico, o cume sobre as nuvens. O Mar é a nossa liberdade indomável, o movimento contínuo da maré salgada. Nós somos a costura poética e técnica entre esses dois mundos."
            </blockquote>

            <p className="text-xs font-mono text-[#2D2926]/40 uppercase tracking-widest mt-8">
              🌊 DE OLHO NAS MARÉS, ⛰️ DE PÉ NAS MONTANHAS.
            </p>

            {/* EMBLEMS DECORATIVE RINGS */}
            <div className="pt-8 border-t border-[#2D2926]/12 flex gap-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#2D2926]/70">
                <div className="w-8 h-8 rounded-none border border-[#2D2926]/15 flex items-center justify-center text-[#D4A373] bg-[#2D2926]/5">
                  ⛰️
                </div>
                <span>Altitude</span>
              </div>
              
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#2D2926]/70">
                <div className="w-8 h-8 rounded-none border border-[#2D2926]/15 flex items-center justify-center text-[#2A9D8F] bg-[#2D2926]/5">
                  🌊
                </div>
                <span>Oceano</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-[#2D2926]/70">
                <div className="w-8 h-8 rounded-none border border-[#2D2926]/15 flex items-center justify-center text-[#D4A373] bg-[#2D2926]/5">
                  🧭
                </div>
                <span>Viagem</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
