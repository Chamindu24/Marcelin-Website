'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || 'Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden ">
      {/* --- HIGH-END GRADIENT SYSTEM --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-cyan-900/20 to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[40%] bg-cyan-900/5 -rotate-12 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* --- HEADER SECTION: 1 ROW, 2 COLUMNS --- */}
        <div className="grid lg:grid-cols-2 gap-10 items-end  pb-8 mb-8">
          
          {/* Column 1: The Heading */}
          <div className="text-left">
            <h2 className="text-cyan-500 text-[14px] uppercase tracking-[0.5em] font-bold mb-4">
              Get In Touch
            </h2>
            <h3 className="text-5xl md:text-7xl tracking-widest leading-none">
              Let’s <span className="font-serif  text-silver-200">Talk.</span>
            </h3>
            {/* Decorative line aligned to the left */}
            <div className="w-16 h-px bg-cyan-500 mt-6"></div>
          </div>

          {/* Column 2: The Description */}
          <div className="text-left lg:text-right">
            <p className="text-zinc-300 text-lg max-w-md ml-auto leading-relaxed">
              Have a question or business inquiry? <br className="hidden md:block" />
              Our team is ready to hear your <span className="text-silver-200 font-medium">next ideas</span>.
            </p>
          </div>
          
        </div>

        <div className="flex flex-col lg:flex-row gap-0 rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#111111] shadow-2xl relative font-sans">
          
          {/* --- SIDEBAR: GLOBAL PRESENCE (Light Black / Charcoal) --- */}
          <div className="lg:w-[35%] bg-[#161616] p-10 md:p-14 flex flex-col justify-between relative border-r border-white/5">
            
            {/* Radial Shine: A subtle blue glow in the top corner */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.12)_0%,transparent_50%)] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-6 bg-cyan-500"></span>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Contact Us
                  </p>
                </div>

                <h3 className="text-white text-4xl font-light tracking-tight leading-tight">
                  Let’s create <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                    the future together.
                  </span>
                </h3>
              </div>


              <div className="space-y-10">
                <div>
                  <h4 className="text-silver-400 text-[10px] uppercase tracking-widest font-bold mb-2">Our Office</h4>
                  <p className="text-silver-200 font-light text-lg leading-relaxed">
                    Mahe, Victoria<br />
                    Seychelles
                  </p>
                </div>

                <div>
                  <h4 className="text-silver-400 text-[10px] uppercase tracking-widest font-bold mb-2">Contact Info</h4>
                  
                  {/* Email Link */}
                  <a 
                    href="mailto:info@marcelinglobalholdings.com" 
                    className="block text-cyan-500 text-lg  hover:text-white transition-colors duration-300"
                  >
                    info@marcelinglobalholdings.com
                  </a>
                  
                  {/* Phone Link */}
                  <a 
                    href="tel:+2482563394" 
                    className="block text-silver-200 text-lg  mt-1 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +248-2563394
                  </a>
                </div>
              </div>
            </div>


          </div>

          {/* --- FORM: MESSAGE CENTER (Light Black) --- */}
          <div className="lg:w-[65%] bg-[#1A1A1A]/10 p-10 md:p-16 relative flex items-center">
            {/* Diagonal Highlight: Makes the background look like polished metal */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(110deg,transparent_45%,rgba(255,255,255,0.01)_50%,transparent_55%)] pointer-events-none" />

            {submitted ? (
              <div className="w-full text-center py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white text-lg font-medium">Message Sent</h4>
                <p className="text-zinc-500 text-sm mt-2">Thank you. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-10 relative z-10">
                <div className="space-y-8">
                  
                  {/* Name Field */}
                  <div className="group relative">
                    <label className="text-[14px] uppercase tracking-widest text-silver-200 mb-2 block group-focus-within:text-cyan-500 transition-colors">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-[#222222]/20 border border-white/30 rounded-2xl px-6 py-4 text-white text-md  focus:outline-none focus:border-cyan-500/80 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Email Field */}
                    <div className="group relative">
                      <label className="text-[14px] uppercase tracking-widest text-silver-200 mb-2 block group-focus-within:text-cyan-500 transition-colors">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className="w-full bg-[#222222]/20 border border-white/30 rounded-2xl px-6 py-4 text-white text-md  focus:outline-none focus:border-cyan-500/80 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    {/* Phone Field */}
                    <div className="group relative">
                      <label className="text-[14px] uppercase tracking-widest text-silver-200 mb-2 block group-focus-within:text-cyan-500 transition-colors">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+248 - _ _ _ _ _ _ _ _"
                        className="w-full bg-[#222222]/20 border border-white/30 rounded-2xl px-6 py-4 text-white text-md  focus:outline-none focus:border-cyan-500/80 transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group relative">
                    <label className="text-[14px] uppercase tracking-widest text-silver-200 mb-2 block group-focus-within:text-cyan-500 transition-colors">How can we help?</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-[#222222]/20 border border-white/30 rounded-2xl px-6 py-4 text-white text-md  focus:outline-none focus:border-cyan-500/80 transition-all resize-none placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                {/* The Action Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative px-10 py-5 bg-white text-black text-[13px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {errorMessage && (
                  <p className="text-red-400 text-sm mt-4">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}