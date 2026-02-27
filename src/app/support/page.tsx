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

export default function SupportPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-[100px] lg:pt-[100px] pb-16 px-6 lg:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-4">
              Join Our Mission
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] leading-[1.1] text-[#000000] mb-6 mt-0">
              Stand with <span className="text-[#AF150B]">Indigenous Communities.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg lg:text-xl text-[#000000]/80 mb-8 leading-relaxed">
              Your contribution goes directly towards dismantling systemic barriers and fostering climate resilience, economic empowerment, and education justice in Kajiado, Narok, and Samburu.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WAYS TO GIVE SECTION ================= */}
      <section className="py-20 lg:py-24 px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* M-PESA CARD */}
          <motion.div variants={fadeInUp} className="bg-[#FFFFFF] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#AF150B] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#10C05C] group-hover:bg-[#AF150B] transition-colors"></div>
            <div className="w-14 h-14 bg-[#10C05C]/10 rounded-full flex items-center justify-center mb-6">
              <span className="font-heading font-bold text-[#10C05C] text-xl">M</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#000000] mb-4 mt-0">M-Pesa Paybill</h3>
            <p className="font-body text-[#000000]/70 mb-6 leading-relaxed">
              Quick and secure mobile money contributions for our local supporters across Kenya.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-body text-sm text-[#000000]/60 mb-1">Paybill Number</p>
              <p className="font-heading font-bold text-xl text-[#000000] tracking-wider">888 999</p>
              <p className="font-body text-sm text-[#000000]/60 mt-3 mb-1">Account Number</p>
              <p className="font-heading font-bold text-lg text-[#000000]">MAAI Support</p>
            </div>
          </motion.div>

          {/* BANK TRANSFER CARD */}
          <motion.div variants={fadeInUp} className="bg-[#FFFFFF] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#AF150B] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#E4AD7A] group-hover:bg-[#AF150B] transition-colors"></div>
            <div className="w-14 h-14 bg-[#E4AD7A]/20 rounded-full flex items-center justify-center text-[#AF150B] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#000000] mb-4 mt-0">Bank Transfer</h3>
            <p className="font-body text-[#000000]/70 mb-6 leading-relaxed">
              Make a direct deposit. Ideal for international donors and larger contributions.
            </p>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-3">
              <div>
                <p className="font-body text-sm text-[#000000]/60">Bank Name</p>
                <p className="font-heading font-bold text-[#000000]">Teyub Unlimited Bank</p>
              </div>
              <div>
                <p className="font-body text-sm text-[#000000]/60">Account Name</p>
                <p className="font-heading font-bold text-[#000000]">Maasai Action Aid Initiative</p>
              </div>
              <div>
                <p className="font-body text-sm text-[#000000]/60">Account Number</p>
                <p className="font-heading font-bold text-[#000000] tracking-wider">123-456-7890</p>
              </div>
            </div>
          </motion.div>

          {/* PARTNERSHIP CARD */}
          <motion.div variants={fadeInUp} className="bg-[#FFFFFF] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#AF150B] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#000000] group-hover:bg-[#AF150B] transition-colors"></div>
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-[#000000] mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#000000] mb-4 mt-0">Strategic Partnerships</h3>
            <p className="font-body text-[#000000]/70 mb-6 leading-relaxed">
              We collaborate with NGOs, government bodies, corporations, and international donors to co-design programs and share resources.
            </p>
            <div className="mt-auto pt-6">
              <Link href="/contact" className="inline-flex w-full justify-center bg-[#000000] text-[#FFFFFF] px-6 py-3 rounded-full font-heading font-semibold hover:bg-[#AF150B] transition-colors">
                Partner With Us
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ================= INSTRUCTIONS & ACCOUNTABILITY ================= */}
      <section className="py-20 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[32px] lg:text-[42px] mb-8 mt-0 text-center">
              How Your Support Creates Impact
            </motion.h2>
            
            <div className="space-y-6 font-body text-[#FFFFFF]/80 leading-relaxed text-lg">
              <motion.p variants={fadeInUp}>
                Every contribution made to the MAA Initiative goes directly into community-led programs. By grounding our work in local knowledge and traditions, we ensure that your support builds genuine, sustainable resilience rather than temporary relief.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="bg-[#FFFFFF]/5 p-8 rounded-2xl border border-[#FFFFFF]/10 mt-8">
                <h3 className="font-heading font-bold text-2xl text-[#E4AD7A] mb-4 mt-0">Where the funds go:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-[#AF150B] text-xl mt-1">✔</span>
                    <p><strong>Education & Boychild Upliftment:</strong> Funding life skills sessions on positive masculinity, school retention programs, and general education justice.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#AF150B] text-xl mt-1">✔</span>
                    <p><strong>Women's Empowerment:</strong> Supplying resources for gender-sensitive workshops, including entrepreneurship training in beadwork and sustainable agriculture.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#AF150B] text-xl mt-1">✔</span>
                    <p><strong>Climate Action (CBA):</strong> Developing practical, community-based adaptation measures to protect resources from environmental degradation and corporate exploitation.</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Need Help / Contact Row */}
            <motion.div variants={fadeInUp} className="mt-16 text-center border-t border-[#FFFFFF]/10 pt-10">
              <p className="font-body text-[#FFFFFF]/70 mb-4">Have questions regarding donations, material support, or financial accountability?</p>
              <p className="font-heading font-bold text-xl">
                Reach out to us at <a href="mailto:INFO@MAAI.CO.KE" className="text-[#E4AD7A] hover:text-[#AF150B] transition-colors">INFO@MAAI.CO.KE</a> or call <a href="tel:+1234567890" className="text-[#E4AD7A] hover:text-[#AF150B] transition-colors">+123-456-7890</a>.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}