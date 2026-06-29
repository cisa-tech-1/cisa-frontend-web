import type { Metadata } from "next";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { AboutHeroSection } from "@/sections/about/AboutHeroSection";
import { AboutStorySection } from "@/sections/about/AboutStorySection";
import { JourneyTimelineSection } from "@/sections/about/JourneyTimelineSection";
import { ChallengeSection } from "@/sections/about/ChallengeSection";
import { TheoryOfChangeSection } from "@/sections/about/TheoryOfChangeSection";
import { StoryHighlightsSection } from "@/sections/about/StoryHighlightsSection";
import { ImpactTrackingSection } from "@/sections/about/ImpactTrackingSection";
import { ExecutiveTeamSection } from "@/sections/about/ExecutiveTeamSection";
import { ShapeFutureSection } from "@/sections/about/ShapeFutureSection";
import { AboutNewsletterSection } from "@/sections/about/AboutNewsletterSection";

export const metadata: Metadata = {
  title: "About Us | Chess in Slums Africa",
  description:
    "A movement born from purpose — empowering children in underserved communities through chess, education, and technology.",
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <ProgramsStickyCTAs />
      <AboutHeroSection />
      <AboutStorySection />
      <JourneyTimelineSection />
      <ChallengeSection />
      <TheoryOfChangeSection />
      <StoryHighlightsSection />
      <ImpactTrackingSection />
      <ExecutiveTeamSection />
      <ShapeFutureSection />
      <AboutNewsletterSection />
      <SimpleFooter />
    </main>
  );
}
