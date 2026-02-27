'use client';

import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      
      {/* ================= CONTACT SECTION ================= */}
      <section className="relative w-full pt-[130px] lg:pt-[160px] pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="z-10 flex flex-col justify-center"
          >
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-3">
              Get In Touch
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] leading-[1.1] text-[#000000] mb-6 mt-0">
              Let's Build <br /> Resilience Together.
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 mb-10 leading-relaxed">
              Whether you want to partner with us, support our initiatives, or simply learn more about our work with the Maasai community in Kajiado, Narok, and Samburu, we would love to hear from you.
            </motion.p>

            {/* Contact Details Grid */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div variants={fadeInUp} className="flex items-center gap-6 p-6 bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 hover:border-[#E4AD7A] transition-colors group">
                <div className="w-14 h-14 bg-[#E4AD7A]/20 rounded-full flex items-center justify-center text-[#AF150B] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#000000]">Email Us</h3>
                  <a href="mailto:INFO@MAAI.CO.KE" className="font-body text-[#000000]/70 hover:text-[#AF150B] transition-colors">INFO@MAAI.CO.KE</a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp} className="flex items-center gap-6 p-6 bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 hover:border-[#E4AD7A] transition-colors group">
                <div className="w-14 h-14 bg-[#E4AD7A]/20 rounded-full flex items-center justify-center text-[#AF150B] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#000000]">Call Us</h3>
                  <a href="tel:+1234567890" className="font-body text-[#000000]/70 hover:text-[#AF150B] transition-colors">+123-456-7890</a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={fadeInUp} className="flex items-center gap-6 p-6 bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-100 hover:border-[#E4AD7A] transition-colors group">
                <div className="w-14 h-14 bg-[#E4AD7A]/20 rounded-full flex items-center justify-center text-[#AF150B] group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#000000]">Visit Us</h3>
                  <p className="font-body text-[#000000]/70">Noonkopir, Kitengela, Kenya</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full bg-[#FFFFFF] rounded-[2rem] p-8 lg:p-12 shadow-2xl shadow-black/5 border border-gray-100"
          >
            <h3 className="font-heading font-bold text-3xl text-[#000000] mb-8">Send a Message</h3>
            
            <form 
              action="https://formspree.io/f/xreadldg" 
              method="POST" 
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block font-heading font-semibold text-[#000000] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="Full Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-body text-[#000000] focus:outline-none focus:border-[#AF150B] focus:ring-1 focus:ring-[#AF150B] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block font-heading font-semibold text-[#000000] mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="Email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-body text-[#000000] focus:outline-none focus:border-[#AF150B] focus:ring-1 focus:ring-[#AF150B] transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block font-heading font-semibold text-[#000000] mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="Subject"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-body text-[#000000] focus:outline-none focus:border-[#AF150B] focus:ring-1 focus:ring-[#AF150B] transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block font-heading font-semibold text-[#000000] mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="Message"
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-body text-[#000000] focus:outline-none focus:border-[#AF150B] focus:ring-1 focus:ring-[#AF150B] transition-colors resize-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#AF150B] text-[#FFFFFF] px-8 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-md hover:shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
}