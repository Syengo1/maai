'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function NotFound() {
  return (
    // min-h-screen and pt-[130px] ensures it clears the header and centers perfectly
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 pt-[130px] px-6 lg:px-12 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E4AD7A]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#AF150B]/5 rounded-full blur-3xl -z-10"></div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl text-center z-10"
      >
        {/* Massive 404 Text */}
        <motion.h1 
          variants={fadeInUp} 
          className="font-heading font-bold text-[120px] lg:text-[180px] leading-none text-[#000000] tracking-tighter mb-4"
        >
          4<span className="text-[#AF150B]">0</span>4
        </motion.h1>

        {/* Heading */}
        <motion.h2 
          variants={fadeInUp} 
          className="font-heading font-bold text-[32px] lg:text-[48px] text-[#000000] leading-tight mb-6 mt-0"
        >
          Looks like you've <br className="hidden sm:block" /> wandered off the path.
        </motion.h2>

        {/* Contextual Text */}
        <motion.p 
          variants={fadeInUp} 
          className="font-body text-lg lg:text-xl text-[#000000]/70 mb-10 leading-relaxed"
        >
          The page you are looking for might have been moved, renamed, or perhaps it never existed. Let's get you back to familiar ground.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="bg-[#AF150B] text-[#FFFFFF] px-8 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Return Home
          </Link>
          <Link 
            href="/programs" 
            className="bg-transparent border-2 border-[#000000] text-[#000000] px-8 py-4 rounded-full font-heading font-bold hover:bg-[#000000] hover:text-[#FFFFFF] transition-all duration-300"
          >
            View Our Initiatives
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}