'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const heroSlides = [
  '/HeroImg.webp',
  '/HeroImg.webp',
  '/HeroImg.webp',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden">
      
      {/* Dynamic Slideshow Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={heroSlides[currentSlide]}
            alt="Maasai Action Aid Initiative Hero" 
            fill 
            priority={currentSlide === 0}
            quality={90}
            className="object-cover object-center w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Deep Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-[130px] pb-20">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-3xl text-[#FFFFFF]" 
        >
          <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-4">
            Maasai Action Aid Initiative
          </motion.h4>
          <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[52px] lg:text-[76px] leading-[1.05] mb-6 drop-shadow-lg">
            Empowering <span className="text-[#AF150B]">Indigenous People</span> to Shape Their Futures.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="font-body text-xl lg:text-2xl text-[#FFFFFF]/90 mb-10 max-w-xl leading-relaxed">
            We are a community-driven organization working to improve the social, economic, and environmental wellbeing of communities across Kenya.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-2">
            <Link href="/about" className="bg-[#AF150B] text-[#FFFFFF] px-10 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-xl text-lg">
              Discover Our Story
            </Link>
            <Link href="/programs" className="bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] px-10 py-4 rounded-full font-heading font-bold hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 text-lg backdrop-blur-sm">
              Our Programs
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-12 flex gap-3 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-[#E4AD7A]' : 'w-3 bg-[#FFFFFF]/50 hover:bg-[#FFFFFF]'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}