'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for the transparent-to-solid effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-6' // Extra padding and transparent background at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/LogonTexts.svg" 
            alt="MAAI Logo" 
            width={80} 
            height={80} 
            className="group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-heading font-medium text-[#000000]">
          <Link href="/#" className="hover:text-[#AF150B] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#AF150B] transition-colors">Our Story</Link>
          <Link href="/programs" className="hover:text-[#AF150B] transition-colors">Initiatives</Link>
          <Link href="/contact" className="hover:text-[#AF150B] transition-colors">Contact</Link>
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/support" className="bg-[#AF150B] text-[#FFFFFF] px-6 py-2.5 rounded-full font-heading font-semibold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300">
            Support Us
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          className="md:hidden text-[#000000] focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            // Close (X) Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-[#FFFFFF] flex flex-col items-center justify-center md:hidden z-40"
          >
            <nav className="flex flex-col items-center gap-8 font-heading font-bold text-2xl text-[#000000]">
              <Link href="/#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#AF150B] transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#AF150B] transition-colors">
                Our Story
              </Link>
              <Link href="/initiatives" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#AF150B] transition-colors">
                Initiatives
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#AF150B] transition-colors">
                Contact
              </Link>
              <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 bg-[#AF150B] text-[#FFFFFF] px-10 py-4 rounded-full hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg">
                Support Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}