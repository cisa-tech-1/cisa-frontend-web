import { InfoCard } from "@/components/cards";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PaginationDots } from "@/components/ui/PaginationDots";

const TEAM = [
  {
    name: "AYOMIDE OJO",
    subtitle: "Tech. Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "MARY IBRAHIM",
    subtitle: "University Graduate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "FAWAS ADEOYE",
    subtitle: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "SUNDAY MOSES",
    subtitle: "Scholarship Beneficiary",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1212px] px-5">
        <SectionHeader
          badge="MEET THE TEAM"
          badgeVariant="peach"
          heading="Passionate minds shaping the future of education"
          description="Meet the ambassadors whose journeys reflect the transformative power of chess and mentorship."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <InfoCard
              key={member.name}
              image={member.image}
              imageAlt={member.name}
              title={member.name}
              subtitle={member.subtitle}
              overlay
            />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <PaginationDots total={4} active={0} />
        </div>
      </div>
    </section>
  );
}
