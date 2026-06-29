import type { Metadata } from "next";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { ProgramsHeroSection } from "@/sections/programs/ProgramsHeroSection";
import { CastlePathwaysSection } from "@/sections/programs/CastlePathwaysSection";
import { ProgramOptionsSection } from "@/sections/programs/ProgramOptionsSection";
import { ShapeFutureSection } from "@/sections/programs/ShapeFutureSection";
import { NewsletterSimpleFooterSection } from "@/sections/shared/NewsletterSimpleFooterSection";

export const metadata: Metadata = {
  title: "Our Programs | Chess in Slums Africa",
  description:
    "Explore Chess in Slums Africa programs — from grassroots community outreach to the Innovation Hub, Chess Dream intensives, and public school partnerships.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-[#FCFCFC]">
      <ProgramsStickyCTAs />
      <ProgramsHeroSection />
      <CastlePathwaysSection />
      <ProgramOptionsSection />
      <ShapeFutureSection />
      <NewsletterSimpleFooterSection />
    </main>
  );
}
