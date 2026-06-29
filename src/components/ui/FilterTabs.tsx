"use client";

type FilterTabsProps = {
  tabs: readonly { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function FilterTabs({ tabs, activeId, onChange, className = "" }: FilterTabsProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-[22px] border border-[#FEE8A8] px-8 py-1.5 text-base transition-colors ${
              isActive
                ? "bg-[#6B350D] font-extrabold text-white"
                : "bg-[#F6ECE5] font-semibold text-[#5A5A5A] hover:bg-[#efe4dc]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
