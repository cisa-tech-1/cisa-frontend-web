import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const PARTNERS = [
  "DanhyPro", "Chessable", "Chipper", "Lufthansa", "Octa", "ChessKid",
  "Venture Garden", "CafeOne", "Chess.com", "Crevatal", "MOD", "Media",
];

export function PartnersSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1430px] px-5">
        <SectionHeader
          heading="Brands We Have Made an Impact With"
          description="Here is how you can get involved and make a change"
          className="mb-12"
        />

        <div className="grid grid-cols-2 border border-[#E6E6E6] sm:grid-cols-3 md:grid-cols-6">
          {PARTNERS.map((partner, i) => (
            <div
              key={partner}
              className={`flex h-[146px] items-center justify-center border-[#E6E6E6] p-6 ${
                i % 2 === 0 ? "bg-[#FCFCFC]" : "bg-[#FFFCF5]"
              } border-b border-r`}
            >
              <span className="font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[#2A2200]">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-[1200px]">
          <Badge variant="teal" className="absolute -top-5 left-1/2 -translate-x-1/2">
            MEDIA PARTNERS
          </Badge>
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-[20px] border border-teal-500 bg-[#F0FDF9] px-8 py-14">
            {["CNN", "BBC", "Al Jazeera", "Channels TV", "Arise News", "Guardian", "Punch", "Vanguard", "ThisDay"].map(
              (media) => (
                <span
                  key={media}
                  className="text-sm font-semibold uppercase tracking-wider text-[#333356] opacity-70"
                >
                  {media}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
