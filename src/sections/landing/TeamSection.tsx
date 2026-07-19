import { InfoCard } from "@/components/cards";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PaginationDots } from "@/components/ui/PaginationDots";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { LANDING_SUCCESS_STORIES } from "@/lib/landing";

export function TeamSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <Reveal>
          <SectionHeader
            badge="IMPACT STORIES"
            badgeVariant="peach"
            heading="Powerful stories of change told by the kids themselves"
            className="mb-8 gap-[21px]"
            headingClassName="font-[family-name:var(--font-manrope)] text-[28px] font-extrabold leading-[55px] text-black md:text-[28px]"
          />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_SUCCESS_STORIES.map((member) => (
            <StaggerItem key={member.name}>
              <InfoCard
                image={member.image}
                imageAlt={member.name}
                title={member.name}
                subtitle={member.subtitle}
                overlay
              />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-6 flex justify-center">
          <PaginationDots total={3} active={0} />
        </div>
      </PageContainer>
    </section>
  );
}
