import { Download, ChevronRight, Globe, Layers, BarChart3, Shield } from 'lucide-react';

export default function About() {
  const projects = [
    {
      title: 'THE MGH Data Center',
      tag: 'Infrastructure',
      desc: 'Tier IV high-density neural infrastructure designed for scalable regional data sovereignty.',
      status: 'Active'
    },
    {
      title: 'MGH Garden of Eden Project',
      tag: 'Sustainability',
      desc: 'Smart-grid architectural ecosystem merging automation with sustainable resource management.',
      status: 'In-Development'
    },
    {
      title: 'MGHR – HR and Accounting Software',
      tag: 'Digital Services',
      desc: 'The central enterprise OS for vertically integrated workforce and financial logistics.',
      status: 'Operational'
    },
  ];

  return (
    <section id='about' className=" text-silver-200 font-sans min-h-screen">


      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="w-full max-w-7xl mx-auto px-6 py-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <h2 className="text-cyan-400 text-[14px]  font-bold tracking-[0.3em] uppercase">
              Strategic Holding Company
            </h2>
          </div>

          <h1 className="md:text-7xl text-5xl font-semibold uppercase text-white/90 tracking-tight leading-[0.9] mb-10">
            Marcelin Global 
            <span className="block lg:inline-flex items-center lg:ml-6 mt-4 lg:mt-0">
              
              <span className="relative">
                {/* The "Deep Silver" Gradient Text */}
                <span className="bg-gradient-to-br from-[#FFFFFF] via-[#A3A3A3] to-[#404040] bg-clip-text text-transparent font-normal tracking-[0.2em] uppercase">
                  Holdings
                </span>
                
                {/* Metallic "Sheen" Accent */}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-30"></span>
              </span>
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-cyan-200 text-[14px]  tracking-[0.3em] uppercase  leading-relaxed ">
              &ldquo;own the tech, control the system, scale aggressively—while positioning its products and services for both local leadership and regional expansion.&rdquo;
            </p>
          </div>
        </div>

        {/* --- WIDE DESCRIPTION BLOCK --- */}
        <div className="grid lg:grid-cols-12 gap-12 border-y border-white/30 py-16 mb-20 items-center">
          <div className="lg:col-span-5 text-3xl lg:text-4xl font-light text-white leading-[1.1] tracking-tight">
            Building scalable, technology-driven businesses across <span className="text-cyan-500 font-normal">robotics, smart infrastructure,</span> and digital services.
          </div>
          
          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <div className="h-24 w-[1px] bg-white/30"></div>
          </div>

          <div className="lg:col-span-6 text-neutral-200 text-xl leading-relaxed ">
            <p>
              Marcelin Global Holdings (MGH) is a Seychelles-based innovation group focused on building scalable, technology-driven businesses across robotics, smart infrastructure, digital services, and emerging industries. The company operates as a parent structure that designs, launches, and controls vertically integrated brands—prioritizing automation, efficiency, and long-term market dominance.
            </p>
          </div>
        </div>

        {/* --- ACTION SECTION --- */}
        <div className="flex flex-col items-center justify-center  border-t border-white/5">
          
          <a 
            href="/Marcelin global holdings inc brochure.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between rounded-full bg-cyan-600 text-white px-10 py-5 min-w-[320px] lg:min-w-[460px] overflow-hidden transition-all duration-500 hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.3)] border border-cyan-400/20"
          >
            {/* Sophisticated Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex items-center gap-6">
              {/* Icon Container with subtle glass effect */}
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                <Download size={20} className="group-hover:translate-y-[1px] transition-transform" />
              </div>
              
              <div className="flex flex-col items-start">
                <span className="font-bold uppercase tracking-[0.15em] text-[14px] leading-none">
                  Download Company Brochure
                </span>

              </div>
            </div>

            {/* Right Side: Dynamic Chevron */}
            <div className="relative flex items-center">
              <div className="absolute right-full mr-4 w-0 h-px bg-white/40 group-hover:w-12 transition-all duration-500 ease-out"></div>
              <div className="p-1">
                <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </div>
          </a>


        </div>
        </div>

        {/* --- BOTTOM: PROJECTS UNDER DEVELOPMENT --- */}
<div className="mt-16">
  {/* Header with a thinner, more elegant divider */}
  <div className="flex items-end justify-center mb-12">
    <h3 className="text-2xl font-medium text-white uppercase tracking-[0.2em]">
      Projects Under Development 
    </h3>

  </div>

  <div className="grid md:grid-cols-3 gap-0 border border-white/10">
    {projects.map((project, index) => (
      <div 
        key={index} 
        className="group relative p-10 border border-white/20 bg-[#0f1115] transition-all duration-500 ease-out hover:bg-cyan-500 hover:border-cyan-400 hover:-translate-y-1 overflow-hidden"
      >
        {/* Animated Accent Background - makes the hover "feel" deeper */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
        
        {/* The "Interest" Detail: A geometric corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -mr-8 -mt-8 rotate-45 group-hover:bg-black/10 transition-colors" />

        <div className="relative z-10 flex flex-col h-full">


          <h4 className="text-2xl font-bold text-white group-hover:text-black transition-colors mb-4 uppercase tracking-tighter leading-[0.9]">
            {project.title}
          </h4>
          
          <p className="text-silver-300 text-md leading-relaxed mt-2 group-hover:text-black/70 transition-colors font-medium">
            {project.desc}
          </p>


        </div>
      </div>
    ))}
  </div>
</div>
      </div>


    </section>
  );
}