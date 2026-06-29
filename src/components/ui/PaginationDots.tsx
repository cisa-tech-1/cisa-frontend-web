type PaginationDotsProps = {
  total?: number;
  active?: number;
  className?: string;
};

export function PaginationDots({
  total = 3,
  active = 0,
  className = "",
}: PaginationDotsProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-3 backdrop-blur-sm ${className}`}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded transition-colors ${
            i === active ? "w-5 bg-teal-500" : "w-5 bg-[#E9EAEB]"
          }`}
        />
      ))}
    </div>
  );
}
