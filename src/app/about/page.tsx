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
  const coreValues = [
    { title: "Integrity & Accountability", desc: "We act with honesty, ensuring transparency. We are accountable to the communities we serve, recognizing trust is our cornerstone." },
    { title: "Community-Centered", desc: "True development begins with the community. We place Indigenous voices at the heart of our programs to drive locally owned solutions." },
    { title: "Equity & Inclusion", desc: "We champion the rights of women, youth, and marginalized groups, working towards a society where everyone has equal opportunities." },
    { title: "Compassion & Dignity", desc: "Rooted in empathy, we honor cultural heritage and traditional knowledge, integrating them with innovative solutions." },
    { title: "Collaboration & Partnership", desc: "Lasting change is collective. We actively build relationships with donors, civil society, and governments to maximize impact." },
    { title: "Innovation & Learning", desc: "We embrace creativity, continually seeking new approaches. We value both Indigenous knowledge and modern strategies." },
    { title: "Sustainability", desc: "By managing resources responsibly, we ensure that our work creates long-term impact benefiting future generations." }
  ];

  // The Top 5 Board of Directors for the Photo Grid
  const boardMembers = [
    { name: "Simon Musanga", role: "Chairman / Co-founder", image: "/musanga.webp" },
    { name: "David Topuaa", role: "Secretary", image: "/david.webp" },
    { name: "Leah Sereya", role: "Treasurer", image: "/leah.webp" },
    { name: "Isaac Monirei", role: "Board Member", image: "/isaac.webp" },
    { name: "Titus Temei", role: "Board Member", image: "/titus.webp" }
  ];

  const operationalTeam = [
    { name: "Simon Musanga Sakayioi", role: "Executive Director" },
    { name: "Magdalene Ntelui", role: "Project & Operations Manager" },
    { name: "Isaac Monirei", role: "Project Accountant, Finance & Admin" },
    { name: "Carolyne Sanau", role: "ICT, Project Officer" },
    { name: "Sakayo Semenkur", role: "Coordinator, Monitoring & Evaluation" },
    { name: "Faith Sintoyia", role: "Programme Manager, Education Justice" },
    { name: "Grace Tepeina", role: "Programme Manager, Climate Justice" }
  ];

  const advisoryCouncil = [
    { name: "Phillip Sintei", role: "Advisor" },
    { name: "Dr. Stephen Moiko", role: "Advisor" }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      
      {/* ================= HERO & OUR STORY ================= */}
      <section className="relative w-full pt-[100px] lg:pt-[100px] pb-20 px-6 lg:px-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-3">
              Our Story
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[56px] leading-[1.1] text-[#000000] mb-6 mt-0">
              A Community-Driven <br /> <span className="text-[#AF150B]">Force for Change.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 mb-6 leading-relaxed">
              The Maasai Action Aid Initiative (MAA Initiative) is working to improve the social, economic, and environmental wellbeing of indigenous communities in Kenya, focusing primarily on <strong>Kajiado, Narok, and Samburu counties.</strong>
            </motion.p>
            <motion.p variants={fadeInUp} className="font-body text-lg text-[#000000]/80 leading-relaxed mb-6">
              We are guided by a clear vision: empowering indigenous people to live with dignity, free from poverty, and equipped with the knowledge to shape their own futures. We believe that empowering women, uplifting the boy child, investing in education, and protecting the environment are essential pathways to justice.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative w-full h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
             <Image src="/HeroImg.webp" alt="Maasai Community" fill className="object-cover" priority />
             <div className="absolute inset-0 bg-[#000000]/20"></div>
          </motion.div>

        </div>
      </section>

      {/* ================= OUR GOALS ================= */}
      <section className="py-24 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-3">Mission & Vision</motion.h4>
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] leading-tight mb-6 mt-0">
              Strategic Goals for Sustainable Impact
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={fadeInUp} className="bg-[#FFFFFF]/5 p-10 rounded-3xl border border-[#FFFFFF]/10 hover:border-[#E4AD7A] transition-colors">
              <div className="w-14 h-14 bg-[#E4AD7A] rounded-xl flex items-center justify-center text-[#000000] mb-6 font-heading font-bold text-2xl">01</div>
              <h3 className="font-heading font-bold text-2xl text-[#FFFFFF] mb-4 mt-0">Organizational Capacity</h3>
              <p className="font-body text-[#FFFFFF]/70 leading-relaxed">
                To enhance organizational capacity by cultivating a culture of continuous learning, effective communication, innovation, and collaboration while strategically expanding partnerships to effectively fulfill our mission.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#FFFFFF]/5 p-10 rounded-3xl border border-[#FFFFFF]/10 hover:border-[#AF150B] transition-colors">
              <div className="w-14 h-14 bg-[#AF150B] rounded-xl flex items-center justify-center text-[#FFFFFF] mb-6 font-heading font-bold text-2xl">02</div>
              <h3 className="font-heading font-bold text-2xl text-[#FFFFFF] mb-4 mt-0">Driving the Global SDGs</h3>
              <p className="font-body text-[#FFFFFF]/70 leading-relaxed mb-6">
                We are structurally aligned to achieve localized global impact across four primary UN Sustainable Development Goals:
              </p>
              <ul className="grid grid-cols-2 gap-3 font-body font-bold text-[#E4AD7A] text-sm">
                <li>✔ SDG 1: No Poverty</li>
                <li>✔ SDG 4: Quality Education</li>
                <li>✔ SDG 8: Decent Work</li>
                <li>✔ SDG 13: Climate Action</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#FFFFFF]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-3">Our Principles</motion.h4>
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] text-[#000000] leading-tight mt-0">
              The Foundation of <br/> Everything We Do.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-3 h-3 bg-[#AF150B] rounded-full mb-6"></div>
                <h3 className="font-heading font-bold text-xl text-[#000000] mb-3 mt-0">{val.title}</h3>
                <p className="font-body text-[#000000]/70 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= LEADERSHIP (Board of Directors - Fully Responsive Grid) ================= */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-12 border-t border-gray-200">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-3">Governance</motion.h4>
            <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] text-[#000000] leading-tight mt-0">
              Board of Directors
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {boardMembers.map((member, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                /* Responsive width logic: 
                   - Mobile (<640px): 2 columns (50% minus gap)
                   - Tablet (sm/md): 3 columns (33.3% minus gap)
                   - Desktop (lg): 5 columns (20% minus gap)
                */
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.6rem)] group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-md bg-gray-200">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    /* UPDATED: 
                      - Default (Mobile/Tablet): Full color (grayscale-0)
                      - Desktop (lg:): Grayscale by default, color on hover 
                    */
                    className="object-cover transition-transform duration-500 lg:group-hover:scale-105 grayscale-0 lg:grayscale lg:group-hover:grayscale-0" 
                  />
                  {/* UPDATED: Lighter gradient overlay by default on mobile, darker on desktop until hovered */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-10 lg:opacity-40 lg:group-hover:opacity-10 transition-opacity"></div>
                </div>
                {/* Dynamically scaled text so it fits beautifully on smaller mobile cards */}
                <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#000000] m-0 leading-tight">{member.name}</h3>
                <p className="font-body font-bold text-[#AF150B] uppercase tracking-wider text-[10px] sm:text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= TEAM & ADVISORY (Clean List Layout) ================= */}
      <section className="py-24 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Operational Team */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading font-bold text-[32px] text-[#E4AD7A] mb-8 border-b border-[#FFFFFF]/10 pb-4">Our Team</h3>
            <ul className="space-y-6">
              {operationalTeam.map((staff, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-[#FFFFFF]">{staff.name}</span>
                  <span className="font-body text-[#FFFFFF]/60 text-sm mt-1">{staff.role}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advisory Council */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-heading font-bold text-[32px] text-[#E4AD7A] mb-8 border-b border-[#FFFFFF]/10 pb-4">Advisory Council</h3>
            <ul className="space-y-6">
              {advisoryCouncil.map((advisor, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-[#FFFFFF]">{advisor.name}</span>
                  <span className="font-body text-[#FFFFFF]/60 text-sm mt-1">{advisor.role}</span>
                </li>
              ))}
              
              {/* Extra Board Members not in the photo grid */}
              <li className="flex flex-col pt-8">
                 <span className="font-heading font-bold text-[#FFFFFF]/80 text-sm uppercase tracking-widest mb-4">Additional Board Members</span>
                 <div className="space-y-4">
                   <div className="flex flex-col"><span className="font-heading font-bold text-lg text-[#FFFFFF]">Victor Sitelu</span><span className="font-body text-[#FFFFFF]/60 text-sm">Board Member</span></div>
                   <div className="flex flex-col"><span className="font-heading font-bold text-lg text-[#FFFFFF]">Faith Sintoyia Lesalaon</span><span className="font-body text-[#FFFFFF]/60 text-sm">Board Member</span></div>
                 </div>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </section>

    </div>
  );
}