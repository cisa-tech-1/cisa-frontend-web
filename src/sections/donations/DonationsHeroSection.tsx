import Image from "next/image";
import Link from "next/link";
import { DonationOptionCard } from "@/components/donations/DonationOptionCard";
import { DonationsContainer } from "@/components/donations/DonationsContainer";
import { DONATION_HERO, DONATION_OPTIONS } from "@/lib/donations";

export function DonationsHeroSection() {
  return (
    <section className="bg-[#FCFCFC] pb-[57px] pt-12">
      <DonationsContainer>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/logos/main-logo.png"
              alt="Chess in Slums Africa"
              width={96}
              height={42}
              priority
            />
          </Link>
          <h1 className="font-[family-name:var(--font-bricolage)] text-[35px] font-bold leading-[60px] tracking-[-0.02em] text-[#8E6B00]">
            DONATIONS
          </h1>
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[814px] flex-col">
            <div className="max-w-[489px]">
              <h2 className="font-[family-name:var(--font-manrope)] text-[48px] font-semibold leading-[1.2] text-[#282828]">
                {DONATION_HERO.title}
              </h2>
              <p className="mt-4 text-lg leading-[1.5] text-black">{DONATION_HERO.description}</p>
            </div>

            <div className="mt-[30px] flex flex-col gap-[26px] sm:flex-row">
              {DONATION_OPTIONS.map((option) => (
                <DonationOptionCard key={option.id} {...option} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[420px] shrink-0 overflow-hidden rounded-xl sm:h-[400px] lg:mx-0 lg:h-[481px]">
            <Image
              src={DONATION_HERO.image}
              alt="A young girl holding a chess piece"
              fill
              className="scale-x-[-1] object-cover"
              sizes="420px"
              priority
            />
          </div>
        </div>
      </DonationsContainer>
    </section>
  );
}
