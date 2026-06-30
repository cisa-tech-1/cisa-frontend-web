import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { Button } from "@/components/ui/Button";

const LEFT_PIECE = { src: "/images/svg/king.svg", className: "-rotate-12" };
const RIGHT_PIECE = { src: "/images/svg/pawn.svg", className: "rotate-6" };

export default function NotFound() {
  return (
    <main className="flex min-h-full flex-col bg-[#FCFCFC]">
      <ProgramsStickyCTAs />
      <ProgramsNavbar />

      <PageContainer className="flex flex-1 flex-col items-center justify-center gap-10 py-16 text-center lg:py-24">
        <div className="flex flex-col items-center gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
            <span className="size-1.5 rounded-full bg-[#717680]" />
            Page not found
          </span>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Image
              src={LEFT_PIECE.src}
              alt=""
              width={48}
              height={48}
              aria-hidden
              className={`hidden opacity-80 sm:block ${LEFT_PIECE.className}`}
            />

            <p
              aria-hidden
              className="font-[family-name:var(--font-bricolage)] text-[96px] font-extrabold leading-none tracking-[-0.04em] text-[#15B79E] sm:text-[120px]"
            >
              404
            </p>

            <Image
              src={RIGHT_PIECE.src}
              alt=""
              width={48}
              height={48}
              aria-hidden
              className={`hidden opacity-80 sm:block ${RIGHT_PIECE.className}`}
            />
          </div>

          <div className="flex max-w-[560px] flex-col gap-4">
            <h1 className="font-[family-name:var(--font-manrope)] text-[32px] font-bold leading-10 tracking-[-0.02em] text-[#181D27] sm:text-[40px] sm:leading-[48px]">
              This page isn&apos;t on the board
            </h1>
            <p className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-7 text-[#535862]">
              The link may be broken, or the page may have moved. Let&apos;s get you back in
              the game.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="md" font="jost" className="min-w-[160px]">
            Go home
          </Button>
          <Button href="/programs" variant="outline" size="md" font="jost" className="min-w-[160px]">
            Explore programs
          </Button>
        </div>
      </PageContainer>

      <SimpleFooter />
    </main>
  );
}
