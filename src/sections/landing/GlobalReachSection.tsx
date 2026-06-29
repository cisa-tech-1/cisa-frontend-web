import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PaginationDots } from "@/components/ui/PaginationDots";

const LOCATIONS = [
  { name: "MAGIDUN, IKORODU", top: "55%", left: "12%" },
  { name: "OSHODI, UNDERBRIDGE", top: "18%", left: "35%" },
  { name: "IKATE, LEKKI", top: "62%", left: "32%" },
  { name: "MOLETE, IBADAN", top: "58%", left: "58%" },
  { name: "ISALE EKO", top: "20%", left: "66%" },
  { name: "OBANLIKU, CROSS RIVER", top: "55%", left: "82%" },
];

export function GlobalReachSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1212px] px-5">
        <SectionHeader
          badge="OUR GLOBAL REACH"
          badgeVariant="peach"
          heading="To build a future where every child has access to quality education"
          description="From Lagos slums to communities across Nigeria and beyond — our reach continues to grow."
          className="mb-12"
        />

        <div className="relative h-[341px] overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1524661135-e211228eb126?w=1400&q=80"
            alt="Map of Nigeria showing program locations"
            fill
            className="object-cover"
            sizes="1212px"
          />
          <div className="absolute inset-0 bg-black/60" />
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="absolute flex flex-col items-center gap-1"
              style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
            >
              <span className="size-2.5 animate-pulse rounded-full bg-[#9CCC65]" />
              <span className="max-w-[90px] text-center font-[family-name:var(--font-bricolage)] text-[11px] font-bold leading-4 text-white">
                {loc.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-[895px] px-5">
        <div className="flex flex-col items-center gap-10 rounded-[20px] border border-teal-500 bg-[#F0FDF9] p-8 md:flex-row md:gap-[74px] md:p-12">
          <div className="flex-1">
            <h2 className="text-[45px] font-extrabold leading-[55px] text-[#282828]">
              Building a World where Every Child...
            </h2>
            <p className="mt-4 text-2xl font-medium leading-[35px] tracking-tight text-[#282828]">
              We are building toward a future where our model can reach children across Africa:
            </p>
          </div>
          <div className="relative w-full max-w-[361px] rounded-[20px] bg-[#F0FDF9] p-7">
            <div className="mb-4 flex size-[53px] items-center justify-center rounded-full bg-[#DDF2EC]">
              <span className="text-teal-500">♝</span>
            </div>
            <p className="font-[family-name:var(--font-bricolage)] text-xl font-semibold leading-[30px] text-black">
              To build Africa&apos;s largest free school for out-of-school and street-connected
              children
            </p>
            <PaginationDots total={3} active={0} className="mt-6 bg-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
