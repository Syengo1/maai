'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function FocusRegionsSection() {
  return (
    <section className="py-5 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[42px] mb-4">
            Where We Work
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-[#FFFFFF]/70 max-w-2xl mx-auto text-lg">
            Our initiatives focus primarily on regions with a strong commitment to the Maasai community, delivering culturally sensitive, community-led solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { region: 'Kajiado', icon: '/Elder.svg', desc: 'Fostering resilience through local knowledge, preserving traditions while advancing education and economic justice.', color: 'hover:border-[#E4AD7A]', textColor: 'text-[#E4AD7A]' },
            { region: 'Narok', icon: '/Woman.svg', desc: 'Empowering women through inclusive development, protecting the environment, and building sustainable livelihoods.', color: 'hover:border-[#AF150B]', textColor: 'text-[#AF150B]' },
            { region: 'Samburu', icon: '/Moran.svg', desc: 'Uplifting the boychild and dismantling systemic barriers to create inclusive opportunities for the next generation.', color: 'hover:border-[#E4AD7A]', textColor: 'text-[#E4AD7A]' }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className={`bg-[#FFFFFF]/5 rounded-2xl p-8 border border-[#FFFFFF]/10 ${item.color} transition-colors group`}>
              <div className="h-48 relative mb-6">
                <Image src={item.icon} alt={item.region} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className={`font-heading font-bold text-2xl ${item.textColor} mb-3 text-center`}>{item.region}</h3>
              <p className="font-body text-[#FFFFFF]/80 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}