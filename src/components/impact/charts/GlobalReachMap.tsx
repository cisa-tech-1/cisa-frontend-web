"use client";

import { GLOBAL_REACH_COUNTRIES, MAP_MARKERS } from "@/lib/impact";

function FlagBadge({ code }: { code: string }) {
  const colors: Record<string, string> = {
    NG: "bg-green-600",
    IN: "bg-orange-500",
    GB: "bg-blue-700",
    AU: "bg-blue-600",
    CA: "bg-red-600",
  };

  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold text-white ${colors[code] ?? "bg-gray-400"}`}
    >
      {code}
    </div>
  );
}

function MapMarker({ x, y, active }: { x: number; y: number; active?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r={active ? 8 : 6} fill="#66C61C" fillOpacity={0.1} />
      <circle r={active ? 5 : 3.5} fill="#66C61C" fillOpacity={0.2} />
      <circle r={active ? 2.5 : 1.5} fill="#66C61C" />
    </g>
  );
}

export function GlobalReachMap() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="relative min-h-[280px] flex-1">
        <svg
          viewBox="0 0 100 70"
          className="h-full w-full"
          role="img"
          aria-label="World map showing CISA global reach"
        >
          <rect width="100" height="70" fill="#F9FAFB" rx="4" />
          {/* Simplified continent shapes */}
          <path
            d="M8 28 C12 22, 22 18, 32 20 C38 22, 42 28, 40 35 C36 42, 28 45, 20 42 C12 38, 8 34, 8 28Z"
            fill="#7F56D9"
            opacity={0.85}
          />
          <path
            d="M18 48 C24 44, 34 46, 40 52 C44 58, 38 64, 30 66 C22 66, 16 58, 18 48Z"
            fill="#7F56D9"
            opacity={0.85}
          />
          <path
            d="M44 20 C52 16, 62 18, 68 24 C72 30, 68 36, 60 38 C52 38, 44 32, 44 20Z"
            fill="#7F56D9"
            opacity={0.85}
          />
          <path
            d="M72 22 C78 20, 86 24, 88 32 C86 40, 78 44, 72 40 C68 34, 68 28, 72 22Z"
            fill="#7F56D9"
            opacity={0.85}
          />
          <path
            d="M78 48 C84 46, 90 50, 92 58 C90 64, 82 66, 76 62 C74 56, 74 52, 78 48Z"
            fill="#7F56D9"
            opacity={0.85}
          />
          {MAP_MARKERS.map((marker, index) => (
            <MapMarker
              key={marker.name}
              x={marker.x}
              y={marker.y}
              active={index === 0}
            />
          ))}
        </svg>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/4 rounded-lg bg-white px-4 py-3 shadow-lg">
          <div className="flex flex-col items-center gap-2">
            <FlagBadge code="NG" />
            <span className="text-xs font-semibold text-[#181D27]">Nigeria</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[349px] shrink-0">
        <p className="font-[family-name:var(--font-bricolage)] text-4xl font-semibold tracking-tight text-[#181D27]">
          10.5k
        </p>
        <div className="mt-5 flex flex-col gap-3">
          {GLOBAL_REACH_COUNTRIES.map((country) => (
            <div key={country.code} className="flex items-start gap-4">
              <FlagBadge code={country.code} />
              <div className="flex-1">
                <p className="text-sm font-medium text-[#414651]">{country.name}</p>
                <div className="mt-0.5 flex items-center gap-3">
                  <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#E9EAEB]">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#7F56D9]"
                      style={{ width: `${country.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#414651]">
                    {country.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
