'use client';

import { motion } from "framer-motion";

const stats = [
  { number: "24.4 LPA", label: "Highest Package" },
  { number: "11.8 LPA", label: "Average Package" },
  { number: "511+", label: "Hiring Partners" },
  { number: "10,000+", label: "Successful Learners" },
];

export default function Stats() {
  return (
    <section className="relative bg-[#050812] py-20 px-6 overflow-hidden">
      {/* Background Abstract Wave Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
          <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,200 Q250,50 500,200 T1000,200" />
          <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,250 Q250,100 500,250 T1000,250" />
          <path fill="none" stroke="#6366f1" strokeWidth="0.5" d="M0,300 Q250,150 500,300 T1000,300" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#1e0a3c] to-[#0a0515] border border-white/10 rounded-[2rem] p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-[0_0_50px_rgba(30,10,60,0.5)]"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`flex flex-col items-center justify-center text-center space-y-3
                ${index < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}
            >
              {/* Glass Circle for Icon placeholder */}
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20"></div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">
                {item.number}
              </h2>
              <p className="text-gray-300 text-sm font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}