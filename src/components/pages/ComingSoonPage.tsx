import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { Button } from "@/components/ui/Button";

const LEFT_PIECE = { src: "/images/svg/knight.svg", className: "-rotate-12" };
const RIGHT_PIECE = { src: "/images/svg/bishop.svg", className: "rotate-6" };

type ComingSoonPageProps = {
  title?: string;
  description?: string;
  badge?: string;
};

export function ComingSoonPage({
  title = "Your next move is coming soon",
  description = "We're putting the final pieces in place. Check back soon, or explore what's already on the board.",
  badge = "Coming soon",
}: ComingSoonPageProps) {
  return (
    <main className="flex min-h-full flex-col bg-[#FCFCFC]">
      <ProgramsStickyCTAs />
      <ProgramsNavbar />

      <PageContainer className="flex flex-1 flex-col items-center justify-center gap-10 py-16 text-center lg:py-24">
        <div className="flex flex-col items-center gap-6">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
            <span className="size-1.5 rounded-full bg-[#F6C946]" />
            {badge}
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

            <Image
              src="/images/svg/pawn.svg"
              alt=""
              width={72}
              height={72}
              aria-hidden
              className="opacity-90 sm:h-24 sm:w-24"
            />

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
              {title}
            </h1>
            <p className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-7 text-[#535862]">
              {description}
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
