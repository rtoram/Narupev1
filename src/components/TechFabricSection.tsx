import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Wind, ShieldCheck, Sun, Pocket, RefreshCw } from 'lucide-react';

export default function TechFabricSection() {
  const [activeMaterial, setActiveMaterial] = useState<'hydro' | 'breath' | 'merino'>('hydro');

  const materials = {
    hydro: {
      title: 'Oceanic HydroKnit®',
      badge: 'PRODUTO MAR',
      desc: 'Um tricô técnico hidrofóbico desenvolvido com polímeros provenientes de resíduos plásticos recolhidos do litoral brasileiro. Projetado especificamente para esportes de alta tração marinha.',
      features: [
        { icon: Wind, text: 'Secagem instantânea acelerada sob brisa natural' },
        { icon: Zap, text: 'Película hidrofóbica que repele crostas de sal' },
        { icon: Sun, text: 'Isolamento UV-Ray Shield com proteção SPF 50+' }
      ],
      pct: '60% poliamida oceânica, 40% algodão biológico',
      temp: 'Confortável entre 16°C e 28°C'
    },
    breath: {
      title: 'BreathableForce Shell®',
      badge: 'PRODUTO TERRA',
      desc: 'Uma membrana de três camadas impermeabilizada a laser com microperfurações nanométricas. Deixa o vapor de suor escapar enquanto bloqueia rajadas severas de vento gelado.',
      features: [
        { icon: ShieldCheck, text: 'Coluna de impermeabilidade 20.000mm extrema' },
        { icon: Wind, text: 'Camada interna respirável de textura escovada' },
        { icon: Pocket, text: 'Vedação por termofusão de costuras axiais' }
      ],
      pct: '100% poliéster eco-reciclado de alta densidade',
      temp: 'Confortável entre -10°C e 15°C'
    },
    merino: {
      title: 'Travel Merino MultiClimate®',
      badge: 'PRODUTO TRAVEL',
      desc: 'Fio nobre orgânico importado com estrutura celular helicoidal que expande ou contrai de acordo com o calor da pele. Ideal para aeroportos, estradas e mudanças drásticas de fuso geográfico.',
      features: [
        { icon: RefreshCw, text: 'Uso contínuo sem fragrância de suor por até 5 dias' },
        { icon: ShieldCheck, text: 'Hipoalergênico e extremamente sedoso' },
        { icon: Zap, text: 'Combustivo celular térmico autoregular' }
      ],
      pct: '85% lã merino extra-fine, 15% polímeros técnicos',
      temp: 'Confortável entre 5°C e 25°C'
    }
  };

  const curr = materials[activeMaterial];

  return (
    <section id="tech" className="relative py-32 bg-transparent border-t border-[#2D2926]/10 scroll-mt-20">
      
      {/* Background circular graphic decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4A373]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ROW FLEX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* TEXT COL AND SWITCHER */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#D4A373] font-bold block mb-3">
                Biomimética e Ciências de Fibras
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#2D2926] tracking-tight leading-tight uppercase">
                Tecnologia Têxtil Revolucionária
              </h2>
              <p className="font-sans text-[#2D2926]/70 text-sm mt-4 leading-relaxed">
                Desenvolvemos membranas biocompatíveis de alta durabilidade combinando tecidos ancestrais orgânicos e filamentos criogênicos industriais.
              </p>
            </div>
 
            {/* TAB SELECTORS */}
            <div className="flex flex-col gap-4 border-l-2 border-[#2D2926]/15 pl-4">
              {(Object.keys(materials) as Array<keyof typeof materials>).map((key) => {
                const isActive = activeMaterial === key;
                return (
                  <button
                    id={`tech-select-${key}`}
                    key={key}
                    onClick={() => setActiveMaterial(key)}
                    className="group font-mono text-left focus:outline-none cursor-pointer"
                  >
                    <span className={`block text-xs uppercase tracking-widest text-[#2D2926]/40 transition-all ${
                      isActive ? 'text-[#2A9D8F] font-black pl-2' : 'group-hover:text-[#2D2926]/80'
                    }`}>
                      {key === 'hydro' ? '01 // OCEANIC HYDROKNIT' : key === 'breath' ? '02 // BREATHABLEFORCE SHELL' : '03 // MULTICLIMATE MERINO'}
                    </span>
                    <span className={`block font-serif text-lg font-bold mt-1 transition-colors ${
                      isActive ? 'text-[#2D2926]' : 'text-[#2D2926]/50 hover:text-[#2D2926]/80'
                    }`}>
                      {materials[key].title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE GRAPHIC PREVIEW TABLE */}
          <div className="lg:col-span-7 bg-[#2D2926]/5 border border-[#2D2926]/10 rounded-none p-8 md:p-12 backdrop-blur-sm relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            
            {/* Watermark background icon */}
            <div className="absolute right-4 bottom-4 font-sans font-black text-8xl text-[#2D2926]/5 pointer-events-none select-none uppercase">
              {activeMaterial}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] tracking-widest font-black uppercase border border-[#2D2926]/10 px-2 py-0.5 text-[#2D2926]/70 bg-[#F7F3F0]">
                    {curr.badge}
                  </span>
                  <span className="font-mono text-[9px] text-[#2D2926]/40">LAB_REPORT_#2026</span>
                </div>

                <h3 className="font-serif text-2xl md:text-3.5xl font-black text-[#2D2926] uppercase">
                  {curr.title}
                </h3>
                
                <p className="font-sans text-[#2D2926]/80 text-sm leading-relaxed max-w-xl">
                  {curr.desc}
                </p>

                {/* DYNAMIC LIST */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#2D2926]/10">
                  {curr.features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="w-8 h-8 rounded-none bg-[#2A9D8F]/10 flex items-center justify-center text-[#2A9D8F] border border-[#2A9D8F]/20">
                          <Icon className="w-4 h-4" />
                        </div>
                        <p className="font-sans text-[#2D2926]/75 text-xs leading-relaxed">
                          {feat.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-[#2D2926]/10 flex flex-wrap justify-between items-baseline gap-4 font-mono text-[10.5px] text-[#2D2926]/60 uppercase">
                  <div>
                    <span>Composição: </span>
                    <strong className="text-[#2D2926]">{curr.pct}</strong>
                  </div>
                  <div>
                    <span>Regulação Térmica: </span>
                    <strong className="text-[#2A9D8F]">{curr.temp}</strong>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
