import InterventionCard from '@/components/ui/InterventionCard';
// Note: You would import your extracted SVG components here
// import SpearIcon from '@/components/icons/SpearIcon';
// import ShieldIcon from '@/components/icons/ShieldIcon';

export default function ProgramsPage() {
  // Data array based on the MAA Initiative's actual interventions
  const interventions = [
    {
      title: "Sustainable Livelihoods",
      description: "Initiating community-led programs such as training in sustainable agriculture, entrepreneurship, and climate adaptation.", // [cite: 44]
      icon: <span className="text-2xl">🌱</span>, // Replace with your SpearIcon SVG
    },
    {
      title: "Women & Boychild Empowerment", // [cite: 18]
      description: "Conducting gender-sensitive workshops, including entrepreneurship training in beadwork for women, and life skills sessions on positive masculinity for boys.", // [cite: 45]
      icon: <span className="text-2xl">🤝</span>, // Replace with your ShieldIcon SVG
    },
    {
      title: "Policy Advocacy & Justice",
      description: "Launching advocacy campaigns to challenge discriminatory policies and corporate injustices by facilitating community dialogue forums.", // [cite: 46]
      icon: <span className="text-2xl">⚖️</span>, // Replace with your MaskIcon SVG
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="font-heading font-bold text-[42px] text-[#000000] mb-4">
            Our Interventions
          </h2>
          <p className="font-body text-lg text-[#000000]/70">
            Community-led programs ensuring ownership and sustainability, forming the structure of how we implement our work. {/* [cite: 49] */}
          </p>
        </div>

        {/* CSS Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interventions.map((intervention, index) => (
            <InterventionCard
              key={index}
              index={index}
              title={intervention.title}
              description={intervention.description}
              icon={intervention.icon}
            />
          ))}
        </div>

      </div>
    </main>
  );
}