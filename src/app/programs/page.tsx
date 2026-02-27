'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ProgramsPage() {
  const interventions = [
    {
      title: "Sustainable Livelihoods",
      description: "Equipping communities with the tools to thrive through training in sustainable agriculture, climate adaptation, and modern entrepreneurship.",
      details: ["Climate-Based Adaptation (CBA)", "Drought-Resilient Farming", "Small Business Grants"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      color: "bg-[#E4AD7A]"
    },
    {
      title: "Women & Boychild Empowerment",
      description: "Dismantling patriarchal barriers by conducting gender-sensitive workshops, supporting women's beadwork cooperatives, and teaching positive masculinity.",
      details: ["Beadwork Cooperatives", "Positive Masculinity Forums", "School Retention Support"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      color: "bg-[#AF150B]"
    },
    {
      title: "Policy Advocacy & Justice",
      description: "Challenging discriminatory policies and corporate injustices that lead to land dispossession by facilitating high-level community dialogue forums.",
      details: ["Land Rights Advocacy", "Anti-Exploitation Campaigns", "Community Dialogue Forums"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      ),
      color: "bg-[#000000]"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-[100px] lg:pt-[100px] pb-20 px-6 lg:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-4">
              Our Initiatives
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] leading-[1.1] text-[#000000] mb-6 mt-0">
              Community-Led Programs <br /> for <span className="text-[#E4AD7A]">Sustainable Impact.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg lg:text-xl text-[#000000]/80 leading-relaxed">
              We do not impose solutions; we co-create them. Our interventions are deeply rooted in local knowledge, ensuring that the Maasai communities in Kajiado, Narok, and Samburu own the structure of their development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTERVENTIONS GRID ================= */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {interventions.map((intervention, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp} 
              className="bg-[#FFFFFF] rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#AF150B] transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative top accent line */}
              <div className={`absolute top-0 left-0 w-full h-2 ${intervention.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className={`w-16 h-16 ${intervention.color} rounded-2xl flex items-center justify-center text-[#FFFFFF] mb-8 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {intervention.icon}
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-[#000000] mb-4 mt-0">
                {intervention.title}
              </h3>
              
              <p className="font-body text-[#000000]/70 mb-8 leading-relaxed flex-grow">
                {intervention.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-auto">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#000000] mb-3">Key Focus Areas</h4>
                <ul className="space-y-3">
                  {intervention.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-[#000000]/80">
                      <span className="text-[#AF150B] text-lg leading-none mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= METHODOLOGY & CTA SECTION ================= */}
      <section className="py-24 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="w-16 h-16 bg-[#AF150B]/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-6 h-6 bg-[#AF150B] rounded-full"></div>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] leading-tight mb-8 mt-0">
            A Structure of <span className="text-[#E4AD7A]">Ownership.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="font-body text-xl text-[#FFFFFF]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our methodology is simple: true resilience can only be achieved when marginalized groups are at the forefront of their own development. By centering indigenous perspectives, we guarantee long-term ownership and sustainability.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <Link href="/support" className="bg-[#AF150B] text-[#FFFFFF] px-10 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
              Fund an Initiative
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] px-10 py-4 rounded-full font-heading font-bold hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-300 text-lg">
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}