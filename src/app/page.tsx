import HeroSection from '@/components/sections/HeroSection';
import FocusRegionsSection from '@/components/sections/FocusRegionsSection';
import TheoryOfChangeSection from '@/components/sections/TheoryOfChangeSection';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-[#FFFFFF]">
      <HeroSection />
      <FocusRegionsSection />
      <TheoryOfChangeSection />
    </main>
  );
}