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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function TheoryOfChangeSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Dynamic Image / Illustration Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[450px] lg:h-[600px] w-full rounded-[2rem] p-8 shadow-2xl group overflow-hidden"
        >
          {/* Main Image */}
          <div className="absolute inset-0 w-full h-full z-10 rounded-[2rem] overflow-hidden">
            <Image 
              src="/HeroImg.webp" // Replace with an appropriate action shot or graphic
              alt="Theory of Change in Action"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Inner Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/60 to-transparent"></div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#AF150B] rounded-full blur-[60px] opacity-30 z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E4AD7A] rounded-full blur-[60px] opacity-30 z-0"></div>
          
          {/* Floating Impact Tag */}
          <div className="absolute bottom-8 left-8 z-20 bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/20 p-4 rounded-xl shadow-xl">
             <p className="font-heading font-bold text-[#FFFFFF] text-xl">Target: 2035</p>
             <p className="font-body text-[#E4AD7A] text-sm font-bold uppercase tracking-wider">Sustainable Resilience</p>
          </div>
        </motion.div>

        {/* Text & Content Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-3">Our Methodology</motion.h4>
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] text-[#000000] mb-8 leading-[1.1] mt-0">
            A clear vision for <br/> <span className="text-[#E4AD7A]">Long-Term Resilience.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="font-body text-[#000000]/70 text-lg mb-6 leading-relaxed">
            We address the root causes of vulnerability stemming from systemic exclusion, discriminatory policies, and corporate injustices that undermine the dignity of indigenous peoples.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="font-body text-[#000000]/70 text-lg mb-10 leading-relaxed">
            By aligning closely with global frameworks, our targeted interventions in education, climate action, and gender equity are structurally designed to achieve sustainable climate adaptation and poverty eradication.
          </motion.p>
          
          {/* SDG Badges Layout */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-12">
            {['SDG 1: No Poverty', 'SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 13: Climate Action'].map((sdg, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#FFFFFF] p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#AF150B]"></div>
                <span className="font-heading font-bold text-sm text-[#000000]">{sdg}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/about" className="inline-flex items-center gap-3 font-heading font-bold text-lg text-[#FFFFFF] bg-[#000000] px-8 py-4 rounded-full hover:bg-[#AF150B] transition-colors group shadow-lg">
              Read our Theory of Change
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}