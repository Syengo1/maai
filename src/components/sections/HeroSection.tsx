'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HeroSection() {
  return (
    // min-h-screen ensures the background always fills the viewport.
    <section className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/HeroImg.webp" // The high-performance WebP image
          alt="Maasai Action Aid Initiative Hero - Empowering Indigenous Communities" 
          fill 
          priority
          quality={90}
          className="object-cover object-center w-full h-full"
        />
        {/* Subtly darker overlay to guarantee the overlaid text remains clearly visible and readable. */}
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* ================= HERO TEXT & CONTENT ================= */}
      {/* ADDED: pt-[130px] lg:pt-[150px] to push the text safely below the transparent header */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 z-20 relative pt-[130px] lg:pt-[150px] pb-20">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-3xl text-white" 
        >
          <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[52px] lg:text-[72px] leading-[1.05] mb-6">
            Empowering <span className="text-[#AF150B]">Indigenous People</span> to Shape Their Futures.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="font-body text-xl lg:text-2xl text-white/90 mb-10 max-w-lg leading-relaxed">
            We are a community driven organization working to improve the social, economic, and environmental wellbeing of communities across Kenya.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Link href="/about" className="bg-[#AF150B] text-[#FFFFFF] px-8 py-4 rounded-full font-heading font-semibold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg hover:shadow-xl">
              Discover Our Story
            </Link>
            <Link href="/programs" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-white hover:text-[#000000] transition-all duration-300">
              View Initiatives
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}