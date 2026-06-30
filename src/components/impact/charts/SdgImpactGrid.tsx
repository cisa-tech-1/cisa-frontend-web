import Image from "next/image";
import { SDG_GOALS } from "@/lib/impact";

export function SdgImpactGrid() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-wrap gap-[30px]">
        {SDG_GOALS.slice(0, 4).map((goal) => (
          <Image
            key={goal.id}
            src={goal.image}
            alt={goal.label}
            width={80}
            height={80}
            className="size-20 object-contain"
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {SDG_GOALS.slice(4).map((goal) => (
          <Image
            key={goal.id}
            src={goal.image}
            alt={goal.label}
            width={80}
            height={80}
            className="size-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
