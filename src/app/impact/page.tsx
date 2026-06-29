import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ImpactHeroSection } from "@/sections/impact/ImpactHeroSection";
import { ImpactStatsSection } from "@/sections/impact/ImpactStatsSection";
import { ImpactChartsSection } from "@/sections/impact/ImpactChartsSection";
import { SupportingDocumentsSection } from "@/sections/impact/SupportingDocumentsSection";
import { ImpactPartnersSection } from "@/sections/impact/ImpactPartnersSection";
import { ImpactCtaSection } from "@/sections/impact/ImpactCtaSection";

export const metadata: Metadata = {
  title: "Impact | Chess in Slums Africa",
  description:
    "Explore CISA's measurable impact — beneficiaries reached, communities engaged, program outcomes, and transparent financial reporting.",
};

export default function ImpactPage() {
  return (
    <main className="bg-background">
      <ImpactHeroSection />
      <ImpactStatsSection />
      <ImpactChartsSection />
      <SupportingDocumentsSection />
      <ImpactPartnersSection />
      <ImpactCtaSection />
      <Footer />
    </main>
  );
}
