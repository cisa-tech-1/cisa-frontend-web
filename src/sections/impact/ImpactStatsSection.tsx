import Image from "next/image";
import { FORECAST_BANNER, IMPACT_STAT_CARDS } from "@/lib/impact";

export function ImpactStatsSection() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-12 md:px-20 md:py-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-black.svg"
              alt="CISA"
              width={89}
              height={51}
              className="rounded-full border border-[#F5F5F5]"
            />
            <div>
              <h2 className="font-[family-name:var(--font-bricolage)] text-xl font-semibold text-[#181D27]">
                The Impact of Our Work
              </h2>
              <p className="text-base text-[#535862]">
                Real numbers from our programs, communities, and partners across Africa.
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-[#E9EAEB]" />
        </div>

        <div className="rounded-[20px] bg-[#FEF0C7] px-8 py-[22px]">
          <p className="text-xl font-medium leading-[30px] text-[#93370D]">
            {FORECAST_BANNER}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {IMPACT_STAT_CARDS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between gap-10 rounded-[20px] bg-[#FDFDFD] p-8"
            >
              <div>
                <p className="font-[family-name:var(--font-bricolage)] text-[60px] font-semibold leading-[72px] tracking-[-0.02em] text-teal-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-lg font-medium leading-7 text-[#7C7C7C]">
                  {stat.label}
                </p>
              </div>
              <div>
                <p
                  className={`text-xl font-medium leading-[30px] ${
                    stat.detail.startsWith("+") ? "text-[#ABABAB]" : "text-black"
                  }`}
                >
                  {stat.detail}
                </p>
                <p className="text-lg font-medium leading-7 text-orange-500">
                  {stat.target}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
