import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Configure primary body font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Improves perceived load time
});

// Configure secondary/heading font
const architypeFallback = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-architype", 
  display: "swap",
});

// ==========================================
// EXPLICIT VIEWPORT CONFIGURATION (Next.js 14+)
// ==========================================
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Ensures users can zoom in for accessibility
};

// ==========================================
// COMPREHENSIVE SEO & METADATA CONFIGURATION
// ==========================================
export const metadata: Metadata = {
  metadataBase: new URL("https://maactionaid.org"), // Replace with your actual production domain
  
  title: {
    default: "MAASAI ACTION AID INITIATIVE | MAAI",
    template: "%s | MAAI", // Child pages will automatically append " | MAAI"
  },
  description: "A community-driven organization working to improve the social, economic, and environmental wellbeing of indigenous communities in Kenya.",
  
  // Search Engine Keywords
  keywords: [
    "NGO Kenya", 
    "Maasai community", 
    "Climate Action Kenya", 
    "Education Justice", 
    "Indigenous Rights", 
    "Kajiado", 
    "Narok", 
    "Samburu",
    "Poverty Alleviation"
  ],
  
  authors: [{ name: "MAASAI ACTION AID INITIATIVE" }],
  creator: "MAASAI ACTION AID INITIATIVE",
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_KE", // Localized for Kenya
    url: "https://maactionaid.org/",
    siteName: "MAA Initiative",
    title: "MAASAI ACTION AID INITIATIVE",
    description: "Empowering indigenous people in Kajiado, Narok, and Samburu to live with dignity, free from poverty.",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MAASAI ACTION AID INITIATIVE Team in the field",
      },
    ],
  },
  
  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "MAASAI ACTION AID INITIATIVE",
    description: "Empowering indigenous people to shape their futures.",
    images: ["/opengraph-image.jpg"],
  },

  // Crawler instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${architypeFallback.variable} font-body bg-[#FFFFFF] text-[#000000] antialiased flex flex-col min-h-screen`}>
        
        {/* ACCESSIBILITY: Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-[#AF150B] focus:text-[#FFFFFF] focus:font-bold outline-none"
        >
          Skip to main content
        </a>

        <Header />
        
        {/* Main content wrapper with explicit ID for the skip link */}
        <main id="main-content" className="flex-grow w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}