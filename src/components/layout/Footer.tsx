import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // SVG Paths for Social Icons (No external library required)
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61578095091904', 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/maasaiactionaidinitiative?igsh=Yjgwc3RqeHI1N2k4', 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: ' https://www.linkedin.com/in/maasai-action-aid-initiative-a052b038b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://vm.tiktok.com/ZS9dpSp5vGEb1-I6q9p/',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.12-.96 4.18-2.44 5.68-1.64 1.66-3.95 2.65-6.32 2.53-2.61-.09-5.11-1.35-6.66-3.41-1.56-2.11-2.09-4.88-1.46-7.39.5-2.01 1.7-3.83 3.42-4.99 1.96-1.34 4.45-1.73 6.74-1.18v4.13c-1.12-.22-2.31-.13-3.36.31-1.15.48-2.08 1.53-2.39 2.76-.23.95-.15 2.01.29 2.89.44.89 1.25 1.6 2.18 1.93.99.35 2.12.3 3.07-.15 1.05-.51 1.83-1.44 2.17-2.56.24-.8.25-1.65.25-2.48V.02h.17z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pt-20 pb-8 border-t border-[#FFFFFF]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column & Socials */}
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
          <p className="font-body text-[#FFFFFF]/70 text-sm leading-relaxed max-w-sm mb-8">
            Empowering indigenous people in Kajiado, Narok, and Samburu to live with dignity, free from poverty.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="w-10 h-10 rounded-full bg-[#FFFFFF]/5 flex items-center justify-center text-[#FFFFFF]/80 hover:bg-[#E4AD7A]/20 hover:text-[#E4AD7A] hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/80 text-sm">
            <li><Link href="/about" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Our Story</Link></li>
            <li><Link href="/programs" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Theory of Change</Link></li>
            <li><Link href="/contact" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Contact Us</Link></li>
            <li><Link href="/support" className="hover:text-[#AF150B] hover:translate-x-1 inline-block transition-all duration-300">Support Us</Link></li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide uppercase text-sm">Our Focus</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/80 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#AF150B] text-xs">■</span> Education Justice</li>
            <li className="flex items-center gap-2"><span className="text-[#AF150B] text-xs">■</span> Climate Action</li>
            <li className="flex items-center gap-2"><span className="text-[#AF150B] text-xs">■</span> Women & Boychild</li>
            <li className="flex items-center gap-2"><span className="text-[#AF150B] text-xs">■</span> Sustainable Livelihoods</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg tracking-wide uppercase text-sm">Reach Out</h4>
          <ul className="space-y-4 font-body text-[#FFFFFF]/80 text-sm">
            <li className="flex items-start gap-3 text-[#FFFFFF]/70">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#E4AD7A] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Noonkopir, Kitengela, Kenya
            </li> 
            <li className="flex items-center gap-3">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#E4AD7A] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:maactionaid@gmail.com" className="hover:text-[#FFFFFF] transition-colors tracking-wider">maactionaid@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#E4AD7A] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.215-.536c-.538-.09-1.074.153-1.35.617l-1.124 1.884c-3.216-1.53-5.83-4.143-7.36-7.36l1.884-1.124c.464-.276.707-.812.617-1.35l-.536-3.215C12.716 2.602 12.266 2.25 11.75 2.25h-1.372c-1.243 0-2.25 1.007-2.25 2.25z" />
              </svg>
              <a href="tel:+254790185934" className="hover:text-[#FFFFFF] transition-colors tracking-wider">+254 790 185934</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Developer Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#FFFFFF]/10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="font-body text-[#FFFFFF]/50 text-xs text-center md:text-left tracking-wide">
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