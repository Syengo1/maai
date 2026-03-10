'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Centralized navigation configuration for easy scalability
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/about' },
  { name: 'Initiatives', href: '/programs' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Retrieves the current route

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

  // Determine text color based on scroll state and background
  const navTextColor = isScrolled ? 'text-[#000000]' : 'text-[#808080]';
  const logoSrc = isScrolled ? '/LogoText.svg' : '/LogoText.svg';

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3 lg:py-4' 
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/LogonTexts.svg" 
            alt="MAAI Logo" 
            width={80} 
            height={80} 
            className="group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative font-heading font-bold text-sm tracking-wide transition-colors duration-300 hover:text-[#E4AD7A] ${
                  isActive ? 'text-[#E4AD7A]' : navTextColor
                }`}
              >
                {link.name}
                
                {/* Framer Motion Sliding Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="desktopActiveIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#E4AD7A] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON (Desktop) */}
        <div className="hidden md:block">
          <Link 
            href="/support" 
            className="bg-[#AF150B] text-[#FFFFFF] px-6 py-2.5 rounded-full font-heading font-bold text-sm hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Fund an Initiative
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#000000] rotate-45 translate-y-2.5' : (isScrolled ? 'bg-[#000000]' : 'bg-[#808080]')}`} />
            <span className={`block h-0.5 w-4/5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : (isScrolled ? 'bg-[#000000]' : 'bg-[#808080]')}`} />
            <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#000000] -rotate-45 -translate-y-2' : (isScrolled ? 'bg-[#000000]' : 'bg-[#808080]')}`} />
          </div>
        </button>

      </div>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#FFFFFF] flex flex-col items-center justify-center md:hidden z-40"
          >
            <nav className="flex flex-col items-center gap-8 font-heading font-bold text-3xl text-[#000000]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`relative transition-colors duration-300 ${isActive ? 'text-[#AF150B]' : 'hover:text-[#E4AD7A]'}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[#AF150B] rounded-full"
                        initial={false}
                      />
                    )}
                  </Link>
                );
              })}
              
              <Link 
                href="/support" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-8 bg-[#AF150B] text-[#FFFFFF] px-10 py-4 rounded-full text-xl hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg"
              >
                Fund an Initiative
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}