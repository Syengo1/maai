import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pt-20 pb-8 border-t border-[#FFFFFF]/10">
      {/* Changed grid to span nicely on tablets (sm:grid-cols-2) and desktop (lg:grid-cols-4) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/LogonTexts.svg" 
              alt="MAASAI ACTION AID INITIATIVE Logo" 
              width={70} 
              height={70} 
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="font-body text-[#FFFFFF]/70 text-sm leading-relaxed max-w-sm">
            Empowering indigenous people in Kajiado, Narok, and Samburu to live with dignity, free from poverty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide">Quick Links</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/70 text-sm">
            <li><Link href="/about" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Our Story</Link></li>
            <li><Link href="/programs" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Theory of Change</Link></li>
            <li><Link href="/contact" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Contact Us</Link></li>
            <li><Link href="/support" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Support Us</Link></li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide">Our Focus</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/70 text-sm">
            <li className="hover:text-[#FFFFFF] transition-colors">Education Justice</li>
            <li className="hover:text-[#FFFFFF] transition-colors">Climate Action</li>
            <li className="hover:text-[#FFFFFF] transition-colors">Women & Boychild Empowerment</li>
            <li className="hover:text-[#FFFFFF] transition-colors">Sustainable Livelihoods</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide">Contact Us</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/70 text-sm">
            <li className="flex items-start gap-3">
              Noonkopir, Kitengela, Kenya
            </li>
            <li className="flex items-center gap-3">
              <a href="mailto:INFO@MAAI.CO.KE" className="hover:text-[#E4AD7A] transition-colors">INFO@MAAI.CO.KE</a>
            </li>
            <li className="flex items-center gap-3">
              <a href="tel:+1234567890" className="hover:text-[#E4AD7A] transition-colors">+123-456-7890</a>
            </li>
            <li className="pt-2">
              <a 
                href="https://WWW.MAAI.CO.KE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#AF150B] hover:text-[#E4AD7A] font-semibold transition-colors group"
              >
                WWW.MAAI.CO.KE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Developer Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="font-body text-[#FFFFFF]/50 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} MAASAI ACTION AID INITIATIVE. All rights reserved.
        </p>

        {/* Animated Developer Tag */}
        <a 
          href="https://antony-syengo.vercel.app/"
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#FFFFFF]/5 transition-colors duration-300"
        >
          <span className="font-body text-[#FFFFFF]/40 text-xs group-hover:text-[#FFFFFF]/70 transition-colors duration-300">
            Developed by
          </span>
          <span className="font-heading font-bold text-[#FFFFFF]/40 group-hover:text-[#E4AD7A] transition-colors duration-300">
            Syengo
          </span>
          {/* Animated Arrow Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4 text-[#AF150B] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
          >
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </a>

      </div>
    </footer>
  );
}