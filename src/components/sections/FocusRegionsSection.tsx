'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function FocusRegionsSection() {
  const regions = [
    { region: 'Kajiado', icon: '/Elder.svg', desc: 'Fostering resilience through local knowledge, preserving traditions while advancing education and economic justice.', color: 'hover:border-[#E4AD7A]', hoverBg: 'hover:bg-[#E4AD7A]/5', textColor: 'text-[#E4AD7A]' },
    { region: 'Narok', icon: '/Woman.svg', desc: 'Empowering women through inclusive development, protecting the environment, and building sustainable livelihoods.', color: 'hover:border-[#AF150B]', hoverBg: 'hover:bg-[#AF150B]/5', textColor: 'text-[#AF150B]' },
    { region: 'Samburu', icon: '/Moran.svg', desc: 'Uplifting the boychild and dismantling systemic barriers to create inclusive opportunities for the next generation.', color: 'hover:border-[#E4AD7A]', hoverBg: 'hover:bg-[#E4AD7A]/5', textColor: 'text-[#E4AD7A]' }
  ];

  return (
    <section className="py-24 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#AF150B] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-3">Our Footprint</motion.h4>
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] mb-6 mt-0">
            Where We Work
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-[#FFFFFF]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Our initiatives focus primarily on regions with a strong commitment to the Maasai community, delivering culturally sensitive and highly impactful development programs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {regions.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              className={`bg-[#111111] rounded-[2rem] p-10 border border-[#333333] ${item.color} ${item.hoverBg} transition-all duration-500 group flex flex-col items-center text-center shadow-2xl`}
            >
              <div className="h-40 w-full relative mb-8 flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]/20 rounded-full blur-xl scale-75 group-hover:scale-100 transition-transform"></div>
                <Image 
                  src={item.icon} 
                  alt={item.region} 
                  fill 
                  className="object-contain group-hover:-translate-y-3 group-hover:scale-105 transition-all duration-500 ease-out z-10" 
                />
              </div>
              <h3 className={`font-heading font-bold text-3xl ${item.textColor} mb-4`}>{item.region}</h3>
              <p className="font-body text-[#FFFFFF]/70 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}