import { InfoCard } from "@/components/cards";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const CASTLE_PILLARS = [
  {
    accent: "C.A",
    title: "Cognitive Ability",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    features: ["Training & Education", "Chess Hub", "Virtual Competition"],
  },
  {
    accent: "S.T",
    title: "Social Transformation",
    image: "https://images.unsplash.com/photo-1497633763263-789ce028ec80?w=800&q=80",
    features: ["Training & Education", "Chess Hub", "Virtual Competition"],
  },
  {
    accent: "L.E",
    title: "Life Empowerment",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    features: [
      "Vocational Empowerment",
      "Career Development",
      "Mentorship",
      "Literacy and Civic Education",
    ],
  },
];

export function ApproachSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="mb-16 max-w-md">
          <h2 className="text-[45px] font-extrabold leading-[55px] text-[#282828]">
            Our Approach To Human Capital Development
          </h2>
          <p className="mt-4 text-[22px] font-medium leading-[35px] tracking-tight text-[#282828]">
            We are building minds, skills, and futures using the C.A.S.T.L.E Frameworks as our
            blueprint.
          </p>
          <PrimaryButton href="/our-work" className="mt-6" size="lg">
            Learn More
          </PrimaryButton>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {CASTLE_PILLARS.map((pillar) => (
            <InfoCard
              key={pillar.accent}
              image={pillar.image}
              imageAlt={pillar.title}
              accent={pillar.accent}
              title={pillar.title}
              features={pillar.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
