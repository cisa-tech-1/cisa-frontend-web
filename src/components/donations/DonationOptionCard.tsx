import Image from "next/image";
import { Button } from "@/components/ui/Button";

type DonationOptionCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  background: string;
  buttonColor: string;
  iconSrc: string;
  href?: string;
};

export function DonationOptionCard({
  title,
  description,
  buttonLabel,
  background,
  buttonColor,
  iconSrc,
  href = "#",
}: DonationOptionCardProps) {
  return (
    <div
      className="flex h-[238px] w-full max-w-[394px] flex-col items-center justify-center gap-[26px] rounded-xl px-[30px] py-[27px]"
      style={{ backgroundColor: background }}
    >
      <div className="flex w-full max-w-[334px] flex-col gap-[7px]">
        <div className="flex items-center gap-[9px]">
          <Image src={iconSrc} alt="" width={18} height={23} aria-hidden />
          <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-bold leading-[1.25] text-[#303030]">
            {title}
          </h3>
        </div>
        <p className="text-base leading-6 text-[#4E4E4E]">{description}</p>
      </div>
      <Button
        href={href}
        variant="custom"
        size="md"
        font="jost"
        className="w-full max-w-[334px] font-bold tracking-[0.03em] text-white"
        style={{ backgroundColor: buttonColor }}
        icon={<Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
