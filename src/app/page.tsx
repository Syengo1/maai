import HeroSection from '@/components/sections/HeroSection';
import FocusRegionsSection from '@/components/sections/FocusRegionsSection';
import TheoryOfChangeSection from '@/components/sections/TheoryOfChangeSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <FocusRegionsSection />
      <TheoryOfChangeSection />
    </div>
  );
}