import Image from "next/image";
import Link from "next/link";
import { BUTTON_SKEUOMORPHIC_SHADOW } from "@/components/ui/buttonStyles";

type GoFundMeButtonProps = {
  href: string;
};

export function GoFundMeButton({ href }: GoFundMeButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-[60px] w-[252px] shrink-0 items-center justify-center rounded-[10px] bg-[#15B79E] px-[22px] py-4 transition-colors hover:bg-[#129e8a] ${BUTTON_SKEUOMORPHIC_SHADOW}`}
    >
      <span className="inline-flex items-center gap-6">
        <span className="font-[family-name:var(--font-jost)] text-base font-medium leading-[1.4] text-white">
          CLICK HERE
        </span>
        <Image
          src="/images/svg/straight-arrow-right.svg"
          alt=""
          width={30}
          height={30}
          className="shrink-0"
          aria-hidden
        />
      </span>
    </Link>
  );
}
