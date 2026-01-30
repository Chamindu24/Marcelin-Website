'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

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
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-8">
      {/* The main wide pill */}
      <div className="max-w-6xl mx-auto flex items-center px-2 py-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        <div className="flex items-center w-full">
          {/* Brand Side */}
          <div className="flex items-center gap-8 w-1/3">
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, 'Home', '#home')}
              className="pl-6 text-xl font-black tracking-tighter text-white hover:opacity-80 transition"
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
          <div className="flex items-center justify-end w-1/3">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, 'Contact', '#contact')}
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-600 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30 duration-300"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}