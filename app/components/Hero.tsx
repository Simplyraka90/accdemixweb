'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // pt-32 (या navbar की height) फिक्स करेगा कि ये Navbar के नीचे से शुरू हो
    <section className="relative min-h-[90vh] bg-[#050812] text-white flex items-center overflow-hidden pt-32 pb-16">
      
      {/* Background Wave - Low opacity for premium feel */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-96">
          <path fill="#D4AF37" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,208C672,235,768,245,864,224C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10 w-full">
        
        {/* Left: Text Content (Span 7 cols on desktop) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <div className="flex items-center gap-2 text-[#D4AF37] mb-6 justify-center lg:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold">India's Leading Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
            Future-Ready <br />
            <span className="text-[#D4AF37]">Skills.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            Master the industry's most in-demand skills through live mentorship and real-world project portfolios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button whileHover={{ scale: 1.02 }} className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Explore Programs
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} className="border border-white/10 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/5 transition">
              Talk to Counselor
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Premium Card (Span 5 cols on desktop) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative bg-[#0B1020]/80 backdrop-blur-xl border border-white/10 p-3 rounded-[2.5rem] shadow-2xl">
            <div className="overflow-hidden rounded-[2rem] h-[350px] relative">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop" 
                alt="Professional Mentor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Executive Data Analytics</h3>
              <p className="text-gray-400 text-sm">Industry-recognized certification program.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}