import { SDG_GOALS } from "@/lib/impact";

export function SdgImpactGrid() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-[30px]">
        {SDG_GOALS.slice(0, 6).map((goal) => (
          <div
            key={goal.id}
            className="flex h-20 w-20 items-center justify-center rounded text-white"
            style={{ backgroundColor: goal.color }}
            title={goal.label}
          >
            <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold">
              {goal.id}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {SDG_GOALS.slice(6).map((goal) => (
          <div
            key={goal.id}
            className="flex h-20 w-20 items-center justify-center rounded text-white"
            style={{ backgroundColor: goal.color }}
            title={goal.label}
          >
            <span className="font-[family-name:var(--font-bricolage)] text-2xl font-bold">
              {goal.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
