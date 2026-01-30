import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-[#e5e5e5] z-50 ">

      {/* Precision Accent Bar */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-80" />

      <div className="max-w-[1440px] mx-auto px-10 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16">
          
          {/* Column 1: Identity (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 md:space-y-10 -mt-0 md:-mt-12">
            <div className="">
              <div className="relative h-32 w-32 sm:h-40 md:h-48 sm:w-40 md:w-48">
                <Image
                  src="/mghlogo2.png"
                  alt="MGH Logo"
                  fill
                  className="object-contain object-left  "
                />
              </div>
              <div className=" border-t border-zinc-900">
                <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.15em] sm:tracking-[0.25em] text-white uppercase leading-tight">
                  Marcelin <span className="font-bold text-cyan-500">Global</span>
                </h2>
                <p className="text-[10px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.4em] text-zinc-300 uppercase mt-2 font-medium">
                  Holdings & Investments
                </p>
              </div>
            </div>
            
            <div className="inline-block px-3 sm:px-4 py-2 border border-zinc-600 rounded-sm">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 font-bold ">
                Tomorrow built today
              </p>
            </div>
          </div>

          {/* Column 2: Capabilities (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-10 text-cyan-600">
              Capabilities
            </h3>
            <ul className="space-y-3 sm:space-y-5 text-[12px] sm:text-[14px] font-medium text-zinc-300/90">
              <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group">
                Custom Computing & Display Solutions
              </li>
              <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group">
                Biotechnology Services & Tools
              </li>
              <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group">
                Digital Ecosystems & Smart Infrastructure
              </li>
              <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group">
                Consulting & Advisory Services
              </li>
              <li className="hover:text-white transition-all cursor-pointer flex items-center gap-3 group">
                Server Farms & Digital Storage
              </li>
            </ul>
          </div>

          {/* Column 3: Organization (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-10">
              Organization
            </h3>
            <ul className="space-y-3 sm:space-y-5 text-[12px] sm:text-[14px] font-medium text-zinc-300/90">
              <li><Link href="#" className="hover:text-cyan-300 transition-colors">About the Founder</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors">Our Promise</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors">Why Choose Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors">How We Work</Link></li>
              <li><Link href="#" className="hover:text-cyan-300 transition-colors">Key Clients</Link></li>
            </ul>
          </div>

          {/* Column 4: Connectivity (Spans 3 columns) */}
          <div className="lg:col-span-3 lg:pl-10 space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-white text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8 flex items-center gap-3">
                Connectivity
                <span className="h-[1px] w-8 bg-zinc-800"></span>
              </h3>
              
              <div className="flex flex-wrap gap-4 sm:gap-4 items-center">
                {/* Instagram Tile */}
                <a 
                  href="https://www.instagram.com/marcelin_global_holdings_inc_" 
                  target="_blank"
                  className="group relative p-3 border border-zinc-600 rounded-xl hover:border-cyan-500/50 hover:bg-zinc-900/50 transition-all duration-500"
                >
                  <div className="absolute -inset-0.5 bg-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <svg className="relative w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>

                {/* Facebook Tile */}
                <a 
                  href="https://www.facebook.com/share/1DRhgrha6v/" 
                  target="_blank"
                  className="group relative p-3 border border-zinc-600 rounded-xl hover:border-cyan-500/50 hover:bg-zinc-900/50 transition-all duration-500"
                >
                  <div className="absolute -inset-0.5 bg-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <svg className="relative w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* Email Tile */}
                <a 
                  href="mailto:info@marcelinglobalholdings@gmail.com" 
                  className="group relative p-3 border border-zinc-600 rounded-xl hover:border-cyan-500/50 hover:bg-zinc-900/50 transition-all duration-500"
                >
                  <div className="absolute -inset-0.5 bg-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                  <svg className="relative w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>


            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-zinc-900">
              <span className="text-[10px] sm:text-[12px] text-zinc-300 uppercase tracking-[0.2em] sm:tracking-[0.3em] block font-bold">Registration Office</span>
              <p className="text-md sm:text-md text-zinc-300  leading-relaxed">
                Mahe, Victoria<br />
                <span className="text-cyan-500 font-medium">Republic of Seychelles</span>
              </p>
            </div>
          </div>

        </div>

        {/* Global Utility Bar */}
        <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-2 sm:gap-y-4 text-[10px] sm:text-[12px] text-zinc-600 uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold">
            <span className="text-zinc-400">&copy; {currentYear} Marcelin Global Holdings</span>

          </div>
          
          <div className="flex flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-2 sm:gap-y-4 text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold">
            <Link href="#" className="hover:text-cyan-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-cyan-500 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-cyan-500 transition-colors">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}