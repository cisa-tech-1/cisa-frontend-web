import { TestimonialCard } from "@/components/cards";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PaginationDots } from "@/components/ui/PaginationDots";

const TESTIMONIALS = [
  {
    name: "Supporter",
    quote: "Chess in Slums is transforming lives in ways we never imagined possible.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    featured: false,
  },
  {
    name: "Kate Henshaw",
    quote:
      "Little drops make a mighty ocean. 🙏 Again, I applaud you Tunde... You will never tire and great doors will be opened to you because you cared for others other than yourself..",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    platform: "twitter" as const,
    featured: true,
  },
  {
    name: "Community Leader",
    quote: "The impact on our children has been nothing short of remarkable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[885px] px-5">
        <SectionHeader
          heading={
            <span className="flex items-center justify-center gap-4">
              Our Wall of Love <span>❤️</span>
            </span>
          }
          description="Sponsors and supporters share their love of helping children"
          className="mb-12"
        />

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`w-full md:w-[322px] ${t.featured ? "md:-mt-6" : "md:mt-6"}`}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PaginationDots total={6} active={0} />
        </div>
      </div>
    </section>
  );
}
