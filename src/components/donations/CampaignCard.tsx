import Image from "next/image";
import Link from "next/link";

type CampaignCardProps = {
  title: string;
  description: string;
  image: string;
  createdBy: string;
  target: string;
  donatedPercent: number;
};

export function CampaignCard({
  title,
  description,
  image,
  createdBy,
  target,
  donatedPercent,
}: CampaignCardProps) {
  return (
    <article className="flex h-[537px] w-full max-w-[404px] flex-col overflow-hidden rounded-[20px] bg-[#FFFBFB] shadow-[0_0_25px_8px_rgba(16,24,40,0.1)]">
      <div className="relative mx-2 mt-2 h-[290px] shrink-0 overflow-hidden rounded-[20px]">
        <Image src={image} alt={title} fill className="object-cover" sizes="374px" />
        <div className="absolute bottom-3 left-2 flex flex-wrap items-center gap-2">
          <span className="rounded-[22px] border border-[#F0F0F0] bg-white/90 px-4 py-1 font-[family-name:var(--font-bricolage)] text-[13px] font-medium leading-[25px] text-[#5A5A5A]">
            {createdBy}
          </span>
          <Link
            href="#"
            className="inline-flex items-center gap-1 rounded-[22px] border border-[#F0F0F0] bg-[#23A094] px-4 py-1 font-[family-name:var(--font-bricolage)] text-[13px] font-bold leading-[25px] text-white"
          >
            Take Action
            <Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[26px] pb-6 pt-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-[family-name:var(--font-manrope)] text-[22px] font-bold leading-7 text-[#282828]">
            {title}
          </h3>
          <p className="line-clamp-3 text-base font-medium leading-6 text-[#282828]">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <div
            className="h-3 overflow-hidden rounded-[22px] bg-[#D2D2D2]"
            style={{ filter: "drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.05))" }}
          >
            <div
              className="h-full rounded-[22px] bg-[#0B792E]"
              style={{ width: `${donatedPercent}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-[family-name:var(--font-manrope)] font-medium">
            <span className="text-base leading-8 text-[#282828]">Target: {target}</span>
            <span className="text-sm leading-[19px] text-[#5A5A5A]">{donatedPercent}% DONATED</span>
          </div>
        </div>
      </div>
    </article>
  );
}
