import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

const heartIcon = (
  <Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />
);

export function MissionSection() {
  return (
    <section className="relative h-[618px] overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-[23px] h-[593px]"
        style={{
          background:
            "radial-gradient(31.4% 50% at 50% 50%, #FFE3C8 0%, rgba(255, 255, 255, 0.72) 100%)",
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute left-1/2 top-[15px] -translate-x-1/2" aria-hidden>
        <Image
          src="/images/cisa-fila-pawn.png"
          alt=""
          width={769}
          height={620}
          className="h-[620px] w-[769px] max-w-none object-contain"
        />
      </div>

      <PageContainer className="relative flex h-[618px] flex-col items-center gap-[46px] pt-[114px] text-center">
        <div className="flex w-full max-w-[924px] flex-col items-center gap-[33px]">
          <span className="inline-flex h-[38px] w-[240px] items-center justify-center gap-3 rounded-[10px] bg-[#FFDF5E] py-1 pl-1 pr-2.5 shadow-[0px_1px_2px_rgba(10,13,18,0.05)]">
            <Image
              src="/images/svg/black-knight.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
              className="shrink-0"
            />
            <span className="font-[family-name:var(--font-manrope)] text-base font-bold leading-5 tracking-[0.05em] text-[#333356]">
              WE ARE ON A MISSION
            </span>
          </span>

          <p className="max-w-[816px] font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-[44px] text-black sm:text-[35px] sm:leading-[55px]">
            To empower, uplift, and educate{" "}
            <span className="text-[#F87C22]">10 million</span> children in marginalized communities
            across Africa, using chess as a focal point.
          </p>
        </div>

        <Button
          href="/donate"
          variant="primary"
          size="lg"
          font="jost"
          icon={heartIcon}
          iconPosition="right"
          className="h-[60px] w-full max-w-[332px] gap-[5px] text-xl font-semibold leading-7"
        >
          Make a Donation
        </Button>
      </PageContainer>
    </section>
  );
}
