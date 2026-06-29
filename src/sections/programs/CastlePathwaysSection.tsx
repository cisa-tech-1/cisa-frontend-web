import { PageContainer } from "@/components/layout/PageContainer";
import { ProgramFeatureCard } from "@/components/programs";
import { CASTLE_PATHWAY_CARDS } from "@/lib/programs";

export function CastlePathwaysSection() {
  return (
    <section className="bg-[#FCFCFC] py-16 md:py-20">
      <PageContainer>
        <div className="mb-[50px] text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-extrabold leading-[55px] text-black">
            The <span className="text-[#15B79E]">C.A.S.T.L.E</span> Pathways
          </h2>
          <p className="mx-auto mt-1 max-w-[622px] font-[family-name:var(--font-manrope)] text-xl font-medium leading-[30px] text-[#5A5A5A]">
            CISA delivers its programs through two distinct delivery pathways — each purposefully
            designed for a mode of engagement
          </p>
        </div>

        <div className="grid gap-[21px] md:grid-cols-2">
          {CASTLE_PATHWAY_CARDS.map((card) => (
            <ProgramFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
