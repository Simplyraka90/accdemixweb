'use client';

import { motion } from "framer-motion";

const alumni = [
  { name: "Ahmed Khan", company: "Google", salary: "18 LPA", img: "https://i.pravatar.cc/150?u=1" },
  { name: "Ali Raza", company: "Amazon", salary: "22 LPA", img: "https://i.pravatar.cc/150?u=2" },
  { name: "Sara Noor", company: "Microsoft", salary: "20 LPA", img: "https://i.pravatar.cc/150?u=3" },
];

export default function Alumni() {
  return (
    <section className="relative py-16 bg-[#050812] overflow-hidden">
      {/* Background Wave SVG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#D4AF37" d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl text-white font-bold text-center mb-12"
        >
          Alumni <span className="text-[#D4AF37]">Success</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {alumni.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#0B1020]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 object-cover mb-4"
              />
              <h3 className="text-white font-semibold text-lg">{item.name}</h3>
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mt-1">{item.company}</p>
              <p className="text-gray-400 text-sm mt-2">{item.salary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}