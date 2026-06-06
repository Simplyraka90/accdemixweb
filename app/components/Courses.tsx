'use client';

import { motion } from "framer-motion";

const courses = [
  { title: "Strategic HR", desc: "Master organizational growth through data-driven talent management." },
  { title: "Business Analytics", desc: "Unlock insights with advanced predictive modeling and tools." },
  { title: "Leadership", desc: "Develop the soft skills required to drive high-performing teams." },
  { title: "AI Management", desc: "Learn to integrate and manage AI systems in modern business." },
];

export default function Courses() {
  return (
    <section className="relative bg-[#050812] py-20 overflow-hidden">
      {/* Dynamic Background Waves */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 w-full h-[400px]" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#D4AF37" className="opacity-[0.03]" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-[#D4AF37]">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Industry-focused curriculum designed to accelerate your professional growth and career trajectory.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group relative bg-[#0B1020]/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#050812] border border-[#D4AF37]/20 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/10 transition-colors">
                  <span className="text-[#D4AF37] text-2xl font-bold">{index + 1}</span>
                </div>

                <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}