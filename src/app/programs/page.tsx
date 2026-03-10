'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Hero Slideshow Images
const heroSlides = [
  '/group.webp',
  '/salutation.webp',
  '/team.webp',
  '/foodhandout3.webp'
];

// Gallery Data
const galleryImages = [
  {
    src: '/foodhandout2.webp',
    title: 'Field Work',
    description: 'Allocation of food relief to combat food shortages.',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2'
  },
  {
    src: '/HeroImg.webp',
    title: 'Education Justice',
    description: 'Distributing new learning materials to local schools.',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    src: '/HeroImg.webp',
    title: 'Boychild Mentorship',
    description: 'Youth leadership summit guiding responsible adulthood.',
    colSpan: 'lg:col-span-1',
    rowSpan: 'lg:row-span-1'
  },
  {
    src: '/HeroImg.webp',
    title: 'Climate Adaptation',
    description: 'Solar-powered community wells bringing clean water.',
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-1'
  }
];

export default function ProgramsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const interventions = [
    {
      title: "Livelihoods Alleviation",
      description: "Designing solutions for Indigenous communities. We focus on climate smart livelihoods, land rights, and market access.",
      details: ["Climate-Smart Livelihoods", "Land & Grazing Rights", "Alternative Livelihoods"],
      bgImage: "/simohandshake.webp",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      accent: "#AF150B" // Vivid Red
    },
    {
      title: "Education Justice",
      description: "Ensuring Indigenous children, particularly Maasai boys and girls, have access to inclusive, equitable, and life-changing education.",
      details: ["Education Advocacy", "Learning Materials Support", "Scholarships Program"],
      bgImage: "/students.webp", // Replace with specific image
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      accent: "#E4AD7A" // Gray Orange
    },
    {
      title: "Women & Boychild",
      description: "Connecting women to economic opportunities while providing mentorship for boys to guide them toward responsible adulthood.",
      details: ["Financial Literacy Training", "Boychild Mentorship", "Economic Linkages"],
      bgImage: "/handshake3.webp", // Replace with specific image
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      accent: "#AF150B" // Vivid Red
    },
    {
      title: "Climate Adaptation",
      description: "Building resilience by combining traditional Maasai knowledge with modern science to combat droughts and water scarcity.",
      details: ["Ecosystem Restoration", "Water Harvesting Systems", "Community-Based Adaptation"],
      bgImage: "/studentsplanting.webp", // Replace with specific image
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      accent: "#AF150B" // Vivid Red
    },
    {
      title: "Youth Leadership",
      description: "Driving global progress on the SDGs by centering the needs of Indigenous groups, tackling poverty and climate holistically.",
      details: ["SDG 1: No Poverty", "SDG 4: Quality Education", "SDG 13: Climate Action"],
      bgImage: "/simon.webp", // Replace with specific image
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      ),
      accent: "#E4AD7A" // Gray Orange
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-12 bg-[#000000] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={heroSlides[currentSlide]} 
              alt={`MAA Initiative Program Highlight ${currentSlide + 1}`} 
              fill 
              className="object-cover object-center"
              priority={currentSlide === 0}
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 via-[#000000]/30 to-transparent z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h4 variants={fadeInUp} className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-4">
              Our Programs & Initiatives
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="font-heading font-bold text-[42px] lg:text-[64px] leading-[1.1] text-[#FFFFFF] mb-6 mt-0 drop-shadow-lg">
              Community-Driven <br /> Solutions for <span className="text-[#AF150B]">Sustainable Impact.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg lg:text-xl text-[#FFFFFF]/90 leading-relaxed max-w-2xl mx-auto">
              We run community-led programs focused on climate adaptation, education justice, and Livelihoods alleviation for Indigenous groups across Kajiado, Narok, and Samburu.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/support" className="bg-[#AF150B] text-[#FFFFFF] px-8 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-colors shadow-lg hover:shadow-xl text-lg">
                Donate Now
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] px-8 py-4 rounded-full font-heading font-bold hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors text-lg">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-[#E4AD7A]' : 'w-2 bg-[#FFFFFF]/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW CARDS (Animated Image Backgrounds) */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-gray-50">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8"
        >
          {interventions.map((intervention, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden min-h-[450px]"
            >
              {/* Background Image with Hover Scale */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <Image 
                  src={intervention.bgImage} 
                  alt={intervention.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Deep Gradient Overlay to guarantee text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/60 to-[#000000]/30 z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 z-20 opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: intervention.accent }}></div>
              
              {/* Card Content (Elevated above background) */}
              <div className="relative z-20 p-8 flex flex-col h-full">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-[#FFFFFF] mb-6 shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: intervention.accent }}
                >
                  {intervention.icon}
                </div>
                
                <h3 className="font-heading font-bold text-2xl text-[#FFFFFF] mb-3 mt-0">
                  {intervention.title}
                </h3>
                
                <p className="font-body text-[#FFFFFF]/80 mb-8 leading-relaxed flex-grow text-sm">
                  {intervention.description}
                </p>

                <div className="bg-[#FFFFFF]/10 backdrop-blur-sm p-5 rounded-xl border border-[#FFFFFF]/20 mt-auto">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-3">Impact Focus</h4>
                  <ul className="space-y-2">
                    {intervention.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-body text-[#FFFFFF]/90 text-sm">
                        <span className="text-lg leading-none mt-0.5" style={{ color: intervention.accent }}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FEATURED PROGRAM */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <Image 
              src="/teamplanting.webp" 
              alt="Climate Adaptation in Action" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="font-heading font-bold text-[#AF150B] tracking-widest uppercase mb-2">Featured Initiative</h4>
            <h2 className="font-heading font-bold text-[32px] lg:text-[42px] leading-tight text-[#000000] mb-6 mt-0">
              Climate-Smart Resilience
            </h2>
            <p className="font-body text-lg text-[#000000]/70 mb-8 leading-relaxed">
              For the Maasai, whose lives revolve around livestock, climate change and prolonged droughts have made families highly vulnerable. We are co-developing sustainable land use, water harvesting, and ecosystem restoration strategies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#E4AD7A] pl-4">
                <p className="font-heading font-bold text-3xl text-[#000000]">45+</p>
                <p className="font-body text-sm text-[#000000]/70">Water Systems Installed</p>
              </div>
              <div className="border-l-4 border-[#AF150B] pl-4">
                <p className="font-heading font-bold text-3xl text-[#000000]">12,000</p>
                <p className="font-body text-sm text-[#000000]/70">People Supported</p>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-bold text-[#AF150B] hover:text-[#E4AD7A] transition-colors">
              Support this project
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. IMPACT NUMBERS */}
      <section className="py-20 bg-[#AF150B] text-[#FFFFFF] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5+", label: "Active Programs" },
            { number: "15,000", label: "Lives Impacted" },
            { number: "3", label: "Counties Reached" },
            { number: "100+", label: "Local Volunteers" }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="font-heading font-bold text-[40px] lg:text-[56px] leading-none mb-2">{stat.number}</h3>
              <p className="font-body text-[#FFFFFF]/80 uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. RESPONSIVE PHOTO GALLERY (Hover on Desktop, Italic beneath on Mobile) */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="font-heading font-bold text-[#E4AD7A] tracking-widest uppercase mb-2">Our Footprint</h4>
            <h2 className="font-heading font-bold text-[32px] text-[#000000] mt-0">Impact in Action</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div key={index} className={`flex flex-col w-full ${image.colSpan} ${image.rowSpan} group`}>
                
                {/* Image Container */}
                <div className="relative w-full h-[250px] lg:h-full rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src={image.src} 
                    alt={image.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Desktop Hover Overlay (Hidden on Mobile) */}
                  <div className="hidden lg:flex absolute inset-0 bg-[#000000]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-8 z-10">
                    <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">{image.title}</h3>
                    <p className="font-body text-[#FFFFFF]/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">{image.description}</p>
                  </div>
                </div>

                {/* Mobile Info Display (Hidden on Desktop) */}
                <div className="block lg:hidden mt-4 px-2">
                  <h3 className="font-heading font-bold text-lg text-[#000000]">{image.title}</h3>
                  <p className="font-body italic text-[#000000]/70 text-sm mt-1">{image.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-[#E4AD7A]/10 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-[#AF150B] mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h3 className="font-heading font-bold text-2xl lg:text-4xl text-[#000000] leading-relaxed mb-8 mt-0">
             "Through the Education Justice program, my daughter was finally able to return to school and dream beyond the village. It changed everything."
          </h3>
          <p className="font-body text-[#000000]/70 font-bold uppercase tracking-widest">— Parent from Kajiado</p>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-[#000000] text-[#FFFFFF] px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-5xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="w-16 h-16 bg-[#AF150B]/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-6 h-6 bg-[#AF150B] rounded-full"></div>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="font-heading font-bold text-[36px] lg:text-[48px] leading-tight mb-8 mt-0">
            Help Us Expand <span className="text-[#E4AD7A]">Our Reach.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="font-body text-xl text-[#FFFFFF]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            True resilience is achieved when indigenous groups lead their own development. Partner with us or fund an initiative to guarantee long-term, community-owned sustainability.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <Link href="/support" className="bg-[#AF150B] text-[#FFFFFF] px-10 py-4 rounded-full font-heading font-bold hover:bg-[#E4AD7A] hover:text-[#000000] transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
              Donate to a Program
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