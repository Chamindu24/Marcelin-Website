import React from 'react';

const services = [
  {
    title: "Smart Agriculture Solutions",
    category: "Agri-Tech / Bio-Automation",
    description: "Technology-driven agriculture systems including precision farming, automation, and smart monitoring.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  },
  {
    title: "IoT Systems Development",
    category: "Connectivity / Smart Systems",
    description: "Design and development of smart IoT ecosystems for connected devices and intelligent environments.",
    icon: <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m9.022 9.022l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  },
  {
    title: "Network Infrastructure Setup",
    category: "Infrastructure / Security",
    description: "Enterprise-grade networking solutions including structured cabling, routing, switching, and security.",
    icon: <path d="M20 7L12 3 4 7m16 5l-8-4-8 4m16 5l-8-4-8 4" />
  },
  {
    title: "Edge Computing Solutions",
    category: "Distributed Compute",
    description: "High-performance edge computing systems enabling real-time processing closer to data sources.",
    icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
  },
  {
    title: "Hardware Custom Manufacturing",
    category: "Prototyping / Hardware",
    description: "Specialized hardware prototyping and manufacturing tailored to industrial and commercial needs.",
    icon: <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
  },
  {
    title: "Enterprise IT Support",
    category: "Managed Services",
    description: "Reliable IT support services including system administration, troubleshooting, and managed services.",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-7.6-11.7c.9 0 1.8.1 2.6.4M16 5l6 6-6 6M22 11H9" />
  },
  {
    title: "Data Monitoring & Analytics",
    category: "Data Science / Intelligence",
    description: "Advanced analytics platforms for real-time monitoring, insights, and performance optimization.",
    icon: <path d="M16 18l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m5-18v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h11l5 5z" />
  },
  {
    title: "Automation & Control Systems",
    category: "Industrial Automation",
    description: "Industrial automation solutions integrating robotics, PLC systems, and smart control infrastructure.",
    icon: <path d="M12 15l-3-3m0 0l3-3m-3 3h8M2 12a10 10 0 1120 0 10 10 0 01-20 0z" />
  }
];

export default function Services() {
  return (
    <section id="services" className=" py-24 px-8 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-900/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Header Section */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
             <span className="w-12 h-[1px] bg-cyan-500"></span>
             <h2 className="text-sm font-bold tracking-[0.4em] text-cyan-500 uppercase">
               Our Services
             </h2>
          </div>
          
          <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
            Future-proof <span className="text-silver-500">technology.</span><br />
            Scalable <span className="text-silver-400">solutions.</span>
          </h3>
          
          <p className="text-silver-300 text-lg max-w-2xl leading-relaxed ">
            Comprehensive technology solutions designed to empower industries 
            and drive digital transformation through precision engineering.
          </p>
        </div>

        {/* The Grid: Interactive "Floating" Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div 
              key={idx}
              className="group relative h-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-5"
            >
              {/* 1. The "Beveled Edge" - High-contrast rim light */}
              <div className="h-full bg-gradient-to-br from-white/30 via-silver-600/10 to-cyan-500/30 p-[1px] rounded-[40px] shadow-2xl transition-all duration-700 group-hover:from-white/50 group-hover:to-cyan-400">
                
                {/* 2. The Inner Chamber - Deep frosted effect */}
                <div className="relative h-full bg-gradient-to-b from-[#121212]/30 to-[#050505]/60 backdrop-blur-[60px] p-12 rounded-[39px] flex flex-col border border-white/20 overflow-hidden transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]">
                  
                  {/* Refractive Light Sweep (Animated on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" />

                  {/* Icon Section with "Internal Glow" */}
                  <div className="relative mb-8 md:mb-10">
                    <div className="w-16 h-16 rounded-[20px] bg-white/[0.02] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-500 transition-all duration-700 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        {item.icon}
                      </svg>
                    </div>
                    {/* Index Number Watermark */}
                    <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.08] group-hover:text-cyan-500/[0.3] transition-colors pointer-events-none">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 space-y-5 flex-grow">

                    <h4 className="text-3xl font-bold text-white tracking-tighter leading-[1.1]">
                      {item.title}
                    </h4>
                    <p className="text-silver-200 text-[15px] leading-relaxed  group-hover:text-silver-200 transition-colors duration-700">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro-Interaction Footer */}
                  <div className="mt-8 md:mt-10 flex items-center justify-between">
                    <div className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 group-hover:border-cyan-500/30 transition-all">
                      <span className="text-[9px]  text-silver-300 group-hover:text-silver-200 uppercase tracking-widest">{item.category}</span>
                    </div>
                    
                    <div className="relative group/arrow cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:scale-90 group-hover:shadow-[0_0_20px_white]">
                        <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. Deep Perspective Reflection */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-cyan-500/10 blur-[60px] opacity-0 group-hover:opacity-60 transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}