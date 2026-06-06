'use client';

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 bg-[#050812] overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#6366f1]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0B1020]/40 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] shadow-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Ready To Upgrade <br /> 
            <span className="text-[#D4AF37]">Your Career?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-6 text-lg max-w-lg mx-auto"
          >
            Join thousands of successful learners today and unlock 
            opportunities at top global companies.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="mt-10 bg-[#D4AF37] hover:bg-[#b8962f] text-black px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}