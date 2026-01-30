'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Founder', href: '#founder' },
  ];

  useEffect(() => {
    const sectionIds = ['home', 'about', 'products', 'services', 'founder', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = 'Home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollPos >= top) {
          const link = navLinks.find((l) => l.href === `#${id}`);
          if (link) current = link.name;
          if (id === 'contact') current = 'Contact';
        }
      }

      setActiveTab(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveTab(name);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 lg:p-8">
      {/* The main wide pill */}
      <div className="max-w-6xl mx-auto flex items-center px-2 py-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        <div className="flex items-center w-full">
          {/* Brand Side */}
          <div className="flex items-center gap-4 sm:gap-8 w-1/2 lg:w-1/3">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'Home', '#home')}
              className="pl-4 sm:pl-6 text-lg sm:text-xl font-black tracking-tighter text-white hover:opacity-80 transition"
            >
              MGH<span className="text-cyan-500">.</span>
            </a>
          </div>

          {/* Middle: Nav Items Group */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 p-1 bg-black/20 rounded-full border border-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.name, link.href)}
                  className={`relative px-5 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-full ${
                    activeTab === link.name 
                    ? 'text-black bg-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: CTA */}
          <div className="flex items-center justify-end w-1/2 lg:w-1/3 gap-2">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'Contact', '#contact')}
              className="hidden sm:inline-flex px-5 sm:px-8 py-2.5 sm:py-3 bg-cyan-600 hover:bg-cyan-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] sm:tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30 duration-300"
            >
              Contact Now
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={`lg:hidden max-w-6xl ml-auto w-5/8 mt-3 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-3 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.name, link.href)}
                className={`px-4 py-3 text-[11px] uppercase tracking-[0.2em] font-bold rounded-2xl  text-left transition-all ${
                  activeTab === link.name
                    ? 'bg-white  text-black'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'Contact', '#contact')}
              className="mt-1 px-4 py-3 text-[11px] uppercase tracking-[0.25em] font-bold rounded-2xl text-center bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}