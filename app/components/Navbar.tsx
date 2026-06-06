'use client'; 

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Courses', 'For Business', 'Resources', 'About Us', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Utility Bar - Hidden on mobile for extra space */}
      <div className="hidden md:block bg-[#050812] text-gray-400 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37] transition">
            <span>Refer & Earn ₹3,000 – Invite a Friend!</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Talk to Our Counselors | +91 8700642267</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-white cursor-pointer">
            ACCA<span className="text-[#D4AF37]">DMIX</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item} className="hover:text-[#D4AF37] cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white">Login</button>
            <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-semibold">Enroll Now</button>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0B1020] overflow-hidden border-b border-white/10"
            >
              <ul className="flex flex-col p-6 gap-4 text-gray-300">
                {menuItems.map((item) => (
                  <li key={item} onClick={() => setIsOpen(false)}>{item}</li>
                ))}
                <button className="bg-[#D4AF37] text-black py-2 rounded-lg mt-4">Enroll Now</button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}