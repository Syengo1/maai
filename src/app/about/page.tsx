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

export default function AboutPage() {
  const challenges = [
    {
      title: "Social Exclusion",
      desc: "Discrimination and social exclusion limit access to quality education and economic opportunities for indigenous people.",
    },
    {
      title: "Patriarchal Structures",
      desc: "Women experience limited access to education and land, while societal expectations push boys into early labor and school dropout.",
    },
    {
      title: "Corporate Injustices",
      desc: "Exploitative resource extraction by private entities exacerbates climate vulnerabilities, poverty, and resource scarcity.",
    },
    {
      title: "Discriminatory Policies",
      desc: "Government development policies often prioritize large-scale projects over community needs, leading to land dispossession.",
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      
      {/* ================= INTRODUCTION SECTION ================= */}
      {/* FIXED: Increased pt-[130px] lg:pt-[160px] to guarantee it clears the fixed header */}
      <section className="relative w-full pt-[100px] lg:pt-[100px] pb-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="z-10"
          >
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-3">
              Our Story
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] leading-[1.1] text-[#000000] mb-6 mt-0">
              A Community Driven <br /> Force for Change.
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 mb-6 leading-relaxed">
              The Maasai Action Aid Initiative (MAA Initiative) is working to improve the social, economic, and environmental wellbeing of indigenous communities in Kenya. 
            </motion.p>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 leading-relaxed">
              Focusing primarily on <strong>Kajiado, Narok, and Samburu counties</strong>, we are impact-driven and guided by a clear vision: empowering indigenous people to live with dignity, free from poverty, and equipped with the knowledge to shape their own futures.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[400px] lg:h-[500px] bg-[#E4AD7A]/10 rounded-[3rem] flex items-center justify-center overflow-hidden p-6"
          >
            <Image 
              src="/Lady.svg" 
              alt="Maasai Woman Illustration" 
              fill 
              // FIXED: Reduced scale to 110% (desktop 125%) and centered the origin so the whole body stays in frame
              className="object-contain drop-shadow-xl scale-100 lg:scale-100 origin-center" 
            />
          </motion.div>

        </div>
      </section>

      {/* ================= THE CONTEXT (PROBLEM STATEMENT) ================= */}
      <section className="py-24 lg:py-32 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-16 max-w-3xl">
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-3">
              The Context
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] leading-tight mb-6 mt-0">
              Entrenched Barriers Undermining Dignity.
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#FFFFFF]/70 leading-relaxed">
              Indigenous people and minorities face systemic challenges that limit their opportunities and exacerbate vulnerabilities. To foster resilience, we must first dismantle these barriers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} 
                className="bg-[#FFFFFF]/5 p-8 rounded-2xl border border-[#FFFFFF]/10 hover:border-[#AF150B] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#AF150B]/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-[#AF150B] rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#E4AD7A] mb-4 mt-0">
                  {challenge.title}
                </h3>
                <p className="font-body text-[#FFFFFF]/80 leading-relaxed">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= LONG TERM GOAL / THEORY OF CHANGE ================= */}
      <section className="py-24 lg:py-32 bg-[#FFFFFF] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full h-[400px] lg:h-[600px] bg-[#E4AD7A]/10 rounded-[3rem] overflow-hidden p-6"
          >
             <Image 
              src="/Couple.svg" 
              alt="Theory of Change Illustration" 
              fill 
              // FIXED: Gentle scale to keep the whole image visible and centered
              className="object-contain drop-shadow-xl scale-100 lg:scale-100 origin-center" 
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-3">
              Theory of Change
            </motion.h4>
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] text-[#000000] leading-tight mb-8 mt-0">
              Our 2035 Vision for <br /> <span className="text-[#AF150B]">Climate Resilience & Equity.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 mb-6 leading-relaxed">
              By 2035, indigenous people in Kajiado, Narok, and Samburu will achieve enhanced dignity, social inclusion, economic empowerment, and climate resilience through equitable access to quality education, sustainable livelihoods, and inclusive policies.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-gray-50 p-8 rounded-3xl border-l-4 border-[#AF150B] mt-8 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-[#000000] mb-3 mt-0">
                Aligning with UN SDGs
              </h3>
              <p className="font-body text-[#000000]/70 leading-relaxed mb-6">
                Our approach actively pursues sustainable frameworks by prioritizing indigenous perspectives. We are deeply committed to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body font-semibold text-[#000000]">
                <li className="flex items-center gap-3"><span className="text-[#E4AD7A] text-xl">✔</span> SDG 1: No Poverty</li>
                <li className="flex items-center gap-3"><span className="text-[#E4AD7A] text-xl">✔</span> SDG 4: Quality Education</li>
                <li className="flex items-center gap-3"><span className="text-[#E4AD7A] text-xl">✔</span> SDG 8: Decent Work</li>
                <li className="flex items-center gap-3"><span className="text-[#E4AD7A] text-xl">✔</span> SDG 13: Climate Action</li>
              </ul>
            </motion.div>
            
          </motion.div>

        </div>
      </section>

    </div>
  );
}