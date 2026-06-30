import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { LANDING_CHANGE_MAKER_ACTIONS } from "@/lib/landing";

const CHESS_NUGGETS = [
  {
    title: "Don't Bring Your Queen Out Too Early",
    body: "An early queen can be harassed by your opponent's lesser pieces, wasting valuable time.",
  },
] as const;

function ActionCard({
  title,
  description,
  backgroundColor,
  href,
}: (typeof LANDING_CHANGE_MAKER_ACTIONS)[number]) {
  return (
    <Link
      href={href}
      className="group relative flex h-[272px] flex-col justify-between overflow-hidden rounded-[30px] p-7 text-white transition-transform hover:scale-[1.02]"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-[family-name:var(--font-bricolage)] text-[25px] font-bold leading-[38px]">
          {title}
        </h3>
        <p className="max-w-[318px] text-lg font-medium leading-7">{description}</p>
      </div>
      <span className="flex size-11 items-center justify-center self-start rounded-full border-2 border-white/25 bg-white/50 backdrop-blur-md">
        <Image
          src="/images/svg/arrow-right.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden
        />
      </span>
    </Link>
  );
}

function ChessNuggetCard() {
  return (
    <div className="flex h-[272px] flex-col items-center justify-center gap-[30px] rounded-[30px] bg-[rgba(67,69,71,0.75)] px-6 text-center text-white">
      <div className="flex items-center gap-1.5">
        <Image
          src="/images/svg/pawn.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden
          className="opacity-90"
        />
        <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-[#EFEFEF]">
          Chess Nugget
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="font-[family-name:var(--font-jost)] text-xl font-semibold leading-7 text-[#15B79E]">
          {CHESS_NUGGETS[0].title}
        </p>
        <p className="max-w-[327px] font-[family-name:var(--font-jost)] text-xl font-normal leading-[25px] text-[#ADDFD7]">
          {CHESS_NUGGETS[0].body}
        </p>
      </div>
      <div className="flex gap-2.5">
        <span className="h-2 w-5 rounded bg-[#15B79E]" />
        <span className="h-2 w-5 rounded bg-[#E9EAEB]" />
        <span className="h-2 w-5 rounded bg-[#E9EAEB]" />
      </div>
    </div>
  );
}

export function ChangeMakerSection() {
  return (
    <section className="relative mx-auto my-12 max-w-[1376px] overflow-hidden rounded-[20px] px-5 md:my-14">
      <Image
        src="/images/home/home-1.jpg"
        alt="Children playing chess"
        fill
        className="object-cover"
        sizes="1376px"
      />
      <div className="absolute inset-0 bg-black/83" />

      <PageContainer className="relative flex flex-col items-center gap-8 px-0 py-12 md:gap-10 md:py-14">
        <div className="max-w-[911px] text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-white md:text-[45px] md:leading-[60px]">
            Are You Ready to Be a Change Maker?
          </h2>
          <p className="mt-4 text-xl font-medium text-[#D5D7DA]">
            Here is how you can get involved and make a change
          </p>
        </div>

        <div className="flex w-full max-w-[1256px] flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LANDING_CHANGE_MAKER_ACTIONS.slice(0, 3).map((action) => (
              <ActionCard key={action.title} {...action} />
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LANDING_CHANGE_MAKER_ACTIONS.slice(3).map((action) => (
              <ActionCard key={action.title} {...action} />
            ))}
            <ChessNuggetCard />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
