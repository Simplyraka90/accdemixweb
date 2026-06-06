'use client';

import { motion } from "framer-motion";

const steps = [
  { title: "Apply Online", desc: "Fill your application in under 2 minutes." },
  { title: "Join Classes", desc: "Start learning from industry experts." },
  { title: "Build Projects", desc: "Work on real-world portfolio tasks." },
  { title: "Get Placement", desc: "Get hired by top-tier global companies." },
];

export default function Process() {
  return (
    <section className="relative py-20 bg-[#050812] overflow-hidden">
      {/* Background SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#D4AF37" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,197.3C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our <span className="text-[#D4AF37]">Process</span>
        </motion.h2>

        {/* Responsive Grid - Stacks on mobile, Grid on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative flex flex-col items-center group"
            >
              {/* Step Circle */}
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full animate-ping"></div>
                <div className="relative w-full h-full rounded-full bg-[#0B1020] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-2xl font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  {index + 1}
                </div>
                
                {/* Connecting Line - Visible only on Desktop/Large Screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[100%] w-full h-[2px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                )}
              </div>

              {/* Text */}
              <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm text-center px-4 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}