import type { Metadata } from "next";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { ImpactTrackingSection } from "@/sections/about/ImpactTrackingSection";
import { ImpactChartsSection } from "@/sections/impact/ImpactChartsSection";
import { ImpactCtaSection } from "@/sections/impact/ImpactCtaSection";
import { ImpactGrowthSection } from "@/sections/impact/ImpactGrowthSection";
import { ImpactHeroSection } from "@/sections/impact/ImpactHeroSection";
import { ImpactPartnersSection } from "@/sections/impact/ImpactPartnersSection";
import { ImpactSdgSection } from "@/sections/impact/ImpactSdgSection";
import { SupportingDocumentsSection } from "@/sections/impact/SupportingDocumentsSection";

export const metadata: Metadata = {
  title: "Impact | Chess in Slums Africa",
  description:
    "Explore CISA's measurable impact — beneficiaries reached, communities engaged, program outcomes, and transparent financial reporting.",
};

export default function ImpactPage() {
  return (
    <main className="bg-background">
      <ProgramsStickyCTAs />
      <ImpactHeroSection />
      <ImpactTrackingSection showForecastBanner />
      <ImpactChartsSection />
      <ImpactSdgSection />
      <ImpactGrowthSection />
      <SupportingDocumentsSection />
      <ImpactPartnersSection />
      <ImpactCtaSection />
      <SimpleFooter />
    </main>
  );
}
