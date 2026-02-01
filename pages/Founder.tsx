export default function Founder() {
  return (
    <section id="founder" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          
          {/* Left Column: Refined Image Frame */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative group">
              {/* Subtle background glow for depth */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-800/20 to-transparent rounded-3xl blur-2xl transition-opacity group-hover:opacity-50" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <img 
                  src="/img/founder.jpeg" 
                  alt="Danio Elson Gamayel Marcelin" 
                  className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-700 ease-out scale-105"
                />
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 border-r-2 border-b-2 border-zinc-700/50 rounded-br-3xl hidden lg:block" />
            </div>
          </div>

          {/* Right Column: High-End Typography */}
          <div className="lg:col-span-7 lg:-ml-12 relative z-20">
            <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 p-2 lg:p-16 rounded-2xl shadow-2xl">
              
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-cyan-500"></span>
                  <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-cyan-500">
                    Leadership Profile
                  </span>
                </div>

                <h2 className="text-4xl lg:text-6xl font-light tracking-tight ">
                  <span className="font-medium bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">Danio Elson</span> 
                  <span className="block  font-medium bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
                    Gamayel Marcelin
                  </span>
                </h2>
                
                <p className="mt-2 text-zinc-500 font-medium italic">
                  Founder & Chief Executive Officer
                </p>
              </header>

              <div className="space-y-6">
                <p className="text-xl lg:text-[1.4em] leading-relaxed text-zinc-200 font-light">
                  Danio Elson Gamayel Marcelin is a Seychelles-born entrepreneur and technology innovator best known as the founder and CEO of <span className="text-white border-b border-zinc-500">Marcelin Global Holdings (MGH)</span> and its technology arm, <span className="text-white border-b border-zinc-700">Marcel Robotics</span>.
                </p>

                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-zinc-600">
                  <p className="text-zinc-300/90 leading-relaxed text-lg">
                    He entered the tech scene as a young founder, launching his first robotics and automation venture in his early twenties with a mission to modernize agriculture and other sectors through intelligent systems and scalable solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}