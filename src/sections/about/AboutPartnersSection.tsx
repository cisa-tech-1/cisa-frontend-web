import { PageContainer } from "@/components/layout/PageContainer";

const PARTNERS = [
  "DanhyPro", "Chessable", "Chipper", "Lufthansa", "Octa", "ChessKid",
  "Venture Garden", "CafeOne", "Chess.com", "Crevatal", "MOD", "Media",
];

export function AboutPartnersSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <PageContainer className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[120px]">
        <div className="w-full max-w-[329px] shrink-0">
          <h2 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold leading-[38px] text-black">
            Brands We Have Made an Impact With
          </h2>
          <p className="mt-4 text-lg leading-7 text-[#535862]">
            Proudly supported by these organizations.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 border border-[#E6E6E6] sm:grid-cols-3 md:grid-cols-4">
          {PARTNERS.map((partner, i) => (
            <div
              key={partner}
              className={`flex h-[146px] items-center justify-center border-b border-r border-[#E6E6E6] p-6 ${
                i % 2 === 0 ? "bg-[#FCFCFC]" : "bg-[#FFFCF5]"
              }`}
            >
              <span className="text-center font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[#2A2200]">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
