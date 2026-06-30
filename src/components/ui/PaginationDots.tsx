type PaginationDotsProps = {
  total?: number;
  active?: number;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

export function PaginationDots({
  total = 3,
  active = 0,
  className = "",
  activeClassName = "bg-teal-500",
  inactiveClassName = "bg-[#E9EAEB]",
}: PaginationDotsProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-3 backdrop-blur-sm ${className}`}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-5 rounded transition-colors ${
            i === active ? activeClassName : inactiveClassName
          }`}
        />
      ))}
    </div>
  );
}
