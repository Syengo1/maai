import type { Metadata } from "next";
// Import your new fallback font alongside Poppins
import { Poppins, Space_Grotesk } from "next/font/google"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Replace the localFont setup with a Google Font
const architypeFallback = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-architype", // Keep the same CSS variable name so globals.css doesn't break
});

export const metadata: Metadata = {
  title: "MAASAI ACTION AID INITIATIVE | MAAI",
  description: "A community-driven organization working to improve the social, economic, and environmental wellbeing of indigenous communities in Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${architypeFallback.variable} font-body bg-[#FFFFFF] text-[#000000] antialiased flex flex-col min-h-screen`}>
        <Header />
        {/* REMOVED: pt-20. This allows the HeroSection to sit flush against the Header */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}