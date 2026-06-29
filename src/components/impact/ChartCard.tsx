import type { ReactNode } from "react";

type ChartCardProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ChartCard({
  title,
  subtitle,
  action,
  children,
  className = "",
}: ChartCardProps) {
  return (
    <div
      className={`rounded-xl border border-[#E9EAEB] bg-white shadow-xs ${className}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-[#E9EAEB] px-6 py-5">
        <div>
          <h3 className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-[#181D27]">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm text-[#535862]">{subtitle}</p>
          )}
        </div>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
