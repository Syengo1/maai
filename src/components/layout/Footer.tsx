import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#FFFFFF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/LogonTexts.svg" alt="MAASAI ACTION AID INITIATIVE Logo" width={60} height={60} />
          </div>
          <p className="font-body text-[#FFFFFF]/70 text-sm leading-relaxed">
            Empowering indigenous people in Kajiado, Narok, and Samburu to live with dignity, free from poverty.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 font-body text-[#FFFFFF]/80 text-sm">
            <li><Link href="/about" className="hover:text-[#AF150B] transition-colors">Our Story</Link></li>
            <li><Link href="/programs" className="hover:text-[#AF150B] transition-colors">Theory of Change</Link></li>
            <li><Link href="/reports" className="hover:text-[#AF150B] transition-colors">Impact Reports</Link></li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg">Our Focus</h4>
          <ul className="space-y-3 font-body text-[#FFFFFF]/80 text-sm">
            <li>Education Justice</li>
            <li>Climate Action</li>
            <li>Women & Boychild Empowerment</li>
            <li>Sustainable Livelihoods</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-[#E4AD7A] mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-3 font-body text-[#FFFFFF]/80 text-sm">
            <li>Noonkopir, Kitengela, Kenya</li>
            <li>INFO@MAAI.CO.KE</li>
            <li>+123-456-7890</li>
            <li className="pt-2">
              <Link href="https://WWW.MAAI.CO.KE" className="text-[#AF150B] hover:text-[#E4AD7A] font-semibold transition-colors">
                WWW.MAAI.CO.KE
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#FFFFFF]/10 text-center font-body text-[#FFFFFF]/50 text-xs">
        <p>&copy; {new Date().getFullYear()} MAASAI ACTION AID INITIATIVE. All rights reserved.</p>
      </div>
    </footer>
  );
}