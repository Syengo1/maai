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
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function TheoryOfChangeSection() {
  return (
    <section className="py-5 lg:py-40 bg-gray-50 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
        
        {/* Illustration Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[450px] lg:h-[650px] w-full bg-[#E4AD7A]/10 rounded-[3rem] p-8"
        >
          <Image 
            src="/Couple.svg" 
            alt="Community Empowerment" 
            fill 
            className="object-contain p-8 drop-shadow-xl" 
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[48px] lg:text-[56px] text-[#000000] mb-8 leading-tight">
            A clear vision for <br/> <span className="text-[#AF150B]">Long-Term Resilience.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-[#000000]/80 text-lg lg:text-xl mb-8 leading-relaxed">
            We address the root causes of vulnerability stemming from government development policies, social exclusion, and corporate injustices that undermine the dignity of indigenous peoples.
          </motion.p>
          <motion.p variants={fadeInUp} className="font-body text-[#000000]/80 text-lg lg:text-xl mb-12 leading-relaxed">
            By aligning with SDGs 1, 4, 8, and 13, our targeted interventions in education, climate action, and gender equity aim to achieve enhanced dignity and climate adaptation by 2035.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link href="/about" className="inline-flex items-center gap-3 font-heading font-bold text-xl text-[#AF150B] hover:text-[#000000] transition-colors group">
              Read our Theory of Change
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}