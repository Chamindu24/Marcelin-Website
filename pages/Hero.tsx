import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = window.innerHeight;
      const progress = Math.min(position / height, 1);
      setScroll(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isBrowser = typeof window !== 'undefined';

  return (
    <section id="home" className="relative bg-[#020202] min-h-screen selection:bg-cyan-500/30">
      {/* Full background texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated gradient orbs - adjusted for mobile */}
        <div className="absolute top-[10%] left-[5%] md:left-[15%] w-[200px] h-[200px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-500/20 md:bg-cyan-500/30 blur-[60px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[5%] md:right-[10%] w-[250px] h-[250px] md:w-[700px] md:h-[700px] rounded-full bg-cyan-600/15 md:bg-cyan-600/20 blur-[70px] md:blur-[130px] animate-float" />
        <div className="absolute top-[40%] right-[20%] md:right-[25%] w-[150px] h-[150px] md:w-[400px] md:h-[400px] rounded-full bg-cyan-400/20 md:bg-cyan-400/25 blur-[50px] md:blur-[100px] animate-drift" />
        
        {/* Base gradient layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 400px at 20% 10%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(700px 500px at 80% 80%, rgba(99,102,241,0.18), transparent 65%), linear-gradient(180deg, rgba(6,6,8,0.6), rgba(2,2,2,0.98))",
          }}
        />
        
        {/* Animated scan lines - reduced on mobile */}
        <div className="absolute inset-0 opacity-10 md:opacity-20">
          <div className="absolute w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-down" style={{ top: '20%' }} />
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan-down-delayed" style={{ top: '60%' }} />
        </div>
        
        {/* Grid overlay - lighter on mobile */}
        <div
          className="absolute inset-0 opacity-40 md:opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        
        {/* Particles - fewer on mobile */}
        <div className="absolute inset-0 opacity-30 md:opacity-40">
          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full top-[15%] left-[20%] animate-particle-1" />
          <div className="absolute w-1 h-1 bg-cyan-500 rounded-full top-[40%] right-[30%] animate-particle-2" />
          <div className="absolute w-1 h-1 bg-cyan-400 rounded-full bottom-[25%] left-[40%] animate-particle-3" />
          <div className="hidden md:block absolute w-[2px] h-[2px] bg-silver-400 rounded-full top-[60%] right-[15%] animate-particle-4" />
          <div className="hidden md:block absolute w-1 h-1 bg-silver-300 rounded-full top-[30%] left-[70%] animate-particle-1" />
        </div>
        
        {/* Vignette overlay */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] md:shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />
      </div>

      {/* THE STICKY STAGE */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10 px-4 md:px-0">
        
        {/* MOBILE: Simple centered layout without scroll animation */}
        <div className="md:hidden w-full max-w-md text-center">
          <div className="inline-block px-6 py-8 rounded-xl bg-black/30 backdrop-blur-sm">
            <div className="mb-4">
              <span className="inline-block text-[9px] font-mono text-silver-500 tracking-[0.6em] uppercase">
                Establish Connection
              </span>
            </div>

            <h1 className="text-[15vw] font-black leading-[0.85] tracking-tight text-white uppercase italic">
              Marcelin <br />
              Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-silver-600">
                Holdings.
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full transition-all duration-500 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-active:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
                
                <span className="relative z-10 flex items-center justify-center gap-2 text-white text-sm font-bold uppercase tracking-[0.15em]">
                  Explore Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 rounded-full border border-white/50 bg-white/10 backdrop-blur-md transition-all duration-300 active:bg-white/5"
              >
                <span className="relative z-10 text-silver-200 text-sm font-bold uppercase tracking-[0.15em]">
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP: Scroll-animated layout */}
        <div className="hidden md:grid w-full grid-cols-1 grid-rows-1 items-center justify-items-center">
          
          {/* --- LAYER 1: THE IMAGE (ROW 2) --- */}
          <div 
            className="col-start-1 row-start-1 w-full flex justify-center transition-all duration-300 ease-out will-change-transform"
            style={{
              transform: `translateY(${(1 - scroll) * 60}vh) perspective(2000px) rotateX(${(1 - scroll) * 15}deg)`,
              width: `${80 + scroll * 15}%`,
              height: `${50 + scroll * 35}vh`,
            }}
          >
            <div className="relative w-full h-full rounded-2xl border border-white/10 bg-[#08080a] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.8)]">
              <img
                src="/img/product/lap1.png"
                alt="System Interface"
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${0.4 + scroll * 0.6}) saturate(${scroll + 0.5})`,
                  objectPosition: 'top center'
                }}
              />
              
              {/* Asset Overlay HUD */}
              <div 
                className="absolute inset-0 z-10 transition-opacity duration-700 p-8"
                style={{ opacity: scroll > 0.8 ? 1 : 0 }}
              >
                <div className="flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4">
                    <p className="text-[10px] font-mono text-cyan-400">ACTIVE_NODE: MGH_V1</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="w-12 h-[1px] bg-white/20" />
                    <div className="w-8 h-[1px] bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- LAYER 2: THE TEXT (ROW 1) --- */}
          <div 
            className="col-start-1 row-start-1 z-20 text-center pointer-events-none transition-all duration-300 ease-out will-change-transform px-4"
            style={{ 
              transform: `translateY(${3 + scroll * 7}vh) scale(${0.9 - scroll * 0.35})`,
              filter: `drop-shadow(0 20px 30px rgba(0,0,0,${scroll}))`
            }}
          >
            <div
              className="inline-block px-8 py-6 rounded-2xl"
              style={{ backgroundColor: `rgba(2,2,2,${0.2 + scroll * 0.05})` }}
            >
              <div className="mb-6 overflow-hidden" style={{ opacity: 1 - scroll * 2 }}>
                <span className="inline-block text-[10px] font-mono text-silver-500 tracking-[1em] uppercase">
                  Establish Connection
                </span>
              </div>

              <h1 className="text-[10vw] font-black leading-[0.75] tracking-tight text-white uppercase italic">
                Marcelin <br />
                Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-silver-600">
                  Holdings.
                </span>
              </h1>

              <div 
                className="mt-16 flex gap-10 justify-center items-center" 
                style={{ opacity: 1 - scroll * 2 }}
              >
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-12 py-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(6,182,212,0.25)] overflow-hidden pointer-events-auto cursor-pointer"
                >
                  <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
                  
                  <span className="relative z-10 flex items-center gap-3 text-white text-md font-bold uppercase tracking-[0.2em]">
                    Explore Now
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-12 py-6 rounded-full border border-white/50 bg-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 pointer-events-auto cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]" />
                  
                  <span className="relative z-10 text-silver-200 group-hover:text-cyan-400 text-md font-bold uppercase tracking-[0.2em] transition-colors">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* REVEALED FOOTER CONTENT - Desktop only */}
      <div 
        className="hidden md:block fixed bottom-0 left-0 w-full p-12 z-40 transition-all duration-700 pointer-events-none"
        style={{ 
          opacity: scroll > 0.9 ? 1 : 0,
          transform: `translateY(${scroll > 0.9 ? 0 : 20}px)` 
        }}
      >
      </div>

      {/* BUFFER SPACE - Desktop only */}
      <div className="hidden md:block h-screen pointer-events-none" />

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        @keyframes scan-down {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes particle-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(20px, -60px) scale(1.5); opacity: 1; }
        }
        @keyframes particle-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-30px, -80px) scale(1.2); opacity: 1; }
        }
        @keyframes particle-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(40px, -50px) scale(1.3); opacity: 0.9; }
        }
        @keyframes particle-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(-20px, -70px) scale(1.4); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-drift {
          animation: drift 12s ease-in-out infinite;
        }
        .animate-scan-down {
          animation: scan-down 8s ease-in-out infinite;
        }
        .animate-scan-down-delayed {
          animation: scan-down 10s ease-in-out infinite 2s;
        }
        .animate-particle-1 {
          animation: particle-float-1 6s ease-in-out infinite;
        }
        .animate-particle-2 {
          animation: particle-float-2 7s ease-in-out infinite 1s;
        }
        .animate-particle-3 {
          animation: particle-float-3 8s ease-in-out infinite 2s;
        }
        .animate-particle-4 {
          animation: particle-float-4 5s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}