import Image from "next/image";
import { ActionCard } from "@/components/cards";
import { PaginationDots } from "@/components/ui/PaginationDots";

const ACTIONS = [
  {
    title: "Sponsor A Child",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    backgroundColor: "#252B37",
    href: "/sponsor",
  },
  {
    title: "Give a Kit",
    description:
      "Provide chess kits, learning materials, and essentials that help children learn and grow with confidence.",
    backgroundColor: "#15A992",
    href: "/give-kit",
  },
  {
    title: "Donate To a Cause",
    description:
      "Support our programs directly — from scholarships to health insurance and community outreach initiatives.",
    backgroundColor: "#E38B17",
    href: "/donate",
  },
  {
    title: "Volunteer With Us",
    description:
      "Join our team of mentors, coaches, and changemakers making a difference in communities across Africa.",
    backgroundColor: "#195C6D",
    href: "/volunteer",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with us to scale impact — whether you're a brand, institution, or community organization.",
    backgroundColor: "#773594",
    href: "/partner",
  },
];

export function ChangeMakerSection() {
  return (
    <section className="relative mx-auto my-20 max-w-[1376px] overflow-hidden rounded-[20px] px-5">
      <Image
        src="https://images.unsplash.com/photo-1529699211952-484e120d0d87?w=1400&q=80"
        alt="Children playing chess"
        fill
        className="object-cover"
        sizes="1376px"
      />
      <div className="absolute inset-0 bg-black/83" />

      <div className="relative flex flex-col items-center gap-10 px-5 py-16 md:gap-15 md:py-20">
        <div className="max-w-[911px] text-center">
          <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-white md:text-[45px] md:leading-[60px]">
            Are You Ready to Be a Change Maker?
          </h2>
          <p className="mt-5 text-xl font-medium text-[#D5D7DA]">
            Here is how you can get involved and make a change
          </p>
        </div>

        <div className="grid w-full max-w-[1256px] gap-6 md:grid-cols-3">
          {ACTIONS.map((action) => (
            <ActionCard key={action.title} {...action} />
          ))}

          <div className="flex flex-col items-center justify-center gap-6 rounded-[30px] bg-[rgba(67,69,71,0.75)] p-8 text-center text-white md:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400">⚡</span>
              <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-[#EFEFEF]">
                Chess Nugget
              </span>
            </div>
            <div>
              <p className="font-[family-name:var(--font-jost)] text-xl font-semibold text-teal-500">
                Don&apos;t Bring Your Queen Out Too Early
              </p>
              <p className="mt-2 font-[family-name:var(--font-jost)] text-xl leading-[25px] text-[#ADDFD7]">
                An early queen can be harassed by your opponent&apos;s lesser pieces, wasting
                valuable time.
              </p>
            </div>
            <PaginationDots total={3} active={0} className="bg-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
