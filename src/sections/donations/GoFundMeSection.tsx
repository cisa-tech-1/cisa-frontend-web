import Image from "next/image";
import { GoFundMeButton } from "@/components/donations/GoFundMeButton";
import { DonationsContainer } from "@/components/donations/DonationsContainer";
import { Reveal } from "@/components/motion/Reveal";
import { GOFUNDME_URL } from "@/lib/donations";

export function GoFundMeSection() {
  return (
    <section className="bg-[#FCFCFC] pb-[120px]">
      <DonationsContainer>
        <Reveal className="flex min-h-[258px] flex-col items-center justify-between gap-8 rounded-xl bg-[#F8E9D6] px-14 py-[71px] md:flex-row">
          <div className="flex items-center gap-[22px]">
            <div className="relative flex size-[113px] shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src="/images/logos/gofundme.png"
                alt="GoFundMe"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <h3 className="max-w-[359px] font-[family-name:var(--font-bricolage)] text-[51px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
              Donate via Our GoFundMe
            </h3>
          </div>

          <GoFundMeButton href={GOFUNDME_URL} />
        </Reveal>
      </DonationsContainer>
    </section>
  );
}
