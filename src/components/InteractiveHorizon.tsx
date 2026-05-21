import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

interface InteractiveHorizonProps {
  activeTheme: 'mar' | 'terra' | 'balanced';
}

export default function InteractiveHorizon({ activeTheme }: InteractiveHorizonProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Ambient styling base on core chosen theme
  const getGradient = () => {
    switch (activeTheme) {
      case 'mar':
        return 'from-[#2A9D8F]/15 via-[#2A9D8F]/5 to-[#F7F3F0]';
      case 'terra':
        return 'from-[#D4A373]/20 via-[#D4A373]/5 to-[#F7F3F0]';
      default:
        return 'from-[#D4A373]/10 via-[#2A9D8F]/5 to-[#F7F3F0]';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#F7F3F0] bg-gradient-to-b ${getGradient()} transition-all duration-1000`}
    >
      {/* Bioluminescent and magma glow rings */}
      <motion.div
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
          background: activeTheme === 'mar'
            ? 'radial-gradient(circle, rgba(42,157,143,0.15) 0%, rgba(247,243,240,0) 70%)'
            : activeTheme === 'terra'
            ? 'radial-gradient(circle, rgba(212,163,115,0.18) 0%, rgba(247,243,240,0) 70%)'
            : 'radial-gradient(circle, rgba(42,157,143,0.1) 0%, rgba(247,243,240,0) 70%)'
        }}
        transition={{ type: 'spring', stiffness: 20, damping: 40 }}
        className="absolute top-1/4 left-1/3 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
      />

      <motion.div
        animate={{
          x: mousePos.x * -70,
          y: mousePos.y * -70,
          background: activeTheme === 'mar'
            ? 'radial-gradient(circle, rgba(42,157,143,0.12) 0%, rgba(247,243,240,0) 60%)'
            : activeTheme === 'terra'
            ? 'radial-gradient(circle, rgba(212,163,115,0.15) 0%, rgba(247,243,240,0) 60%)'
            : 'radial-gradient(circle, rgba(42,157,143,0.08) 0%, rgba(247,243,240,0) 60%)'
        }}
        transition={{ type: 'spring', stiffness: 15, damping: 50 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]"
      />

      {/* Grid of micro lines representing topographic and waves structures */}
      <div 
        className="absolute inset-0 opacity-[0.25] transition-all duration-1000"
        style={{
          backgroundImage: `radial-gradient(${activeTheme === 'mar' ? '#2A9D8F' : activeTheme === 'terra' ? '#D4A373' : '#D4A373'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Interactive Wave/Horizon Lines at the background bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[30vh] text-[#2D2926]/5 fill-none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
      >
        <motion.path
          animate={{
            d: activeTheme === 'mar' 
              ? 'M0,130 C360,180 720,100 1080,160 L1440,110 L1440,200 L0,200 Z'
              : activeTheme === 'terra'
              ? 'M0,150 L200,90 L500,160 L800,100 L1100,150 L1440,70 L1440,200 L0,200 Z'
              : 'M0,140 C400,100 800,180 1200,120 L1440,140 L1440,200 L0,200 Z'
          }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          fill="currentColor"
        />
        <motion.path
          className="text-[#2D2926]/3"
          animate={{
            d: activeTheme === 'mar' 
              ? 'M0,160 C300,120 600,190 900,130 L1440,170 L1440,200 L0,200 Z'
              : activeTheme === 'terra'
              ? 'M0,170 L300,120 L600,180 L950,110 L1250,160 L1440,130 L1440,200 L0,200 Z'
              : 'M0,160 C350,180 750,110 1150,150 L1440,120 L1440,200 L0,200 Z'
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
