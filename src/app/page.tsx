import { HeroSection } from "@/sections/landing/HeroSection";
import { MissionSection } from "@/sections/landing/MissionSection";
import { ApproachSection } from "@/sections/landing/ApproachSection";
import { TeamSection } from "@/sections/landing/TeamSection";
import { ImpactSection } from "@/sections/landing/ImpactSection";
import { VisionSection } from "@/sections/landing/VisionSection";
import { GlobalReachSection } from "@/sections/landing/GlobalReachSection";
import { GallerySection } from "@/sections/landing/GallerySection";
import { ChangeMakerSection } from "@/sections/landing/ChangeMakerSection";
import { PartnersSection } from "@/sections/landing/PartnersSection";
// import { TestimonialsSection } from "@/sections/landing/TestimonialsSection";
import { BlogSection } from "@/sections/landing/BlogSection";
import { NewsletterSimpleFooterSection } from "@/sections/shared/NewsletterSimpleFooterSection";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <MissionSection />
      <ApproachSection />
      <TeamSection />
      <ImpactSection />
      <VisionSection />
      <GlobalReachSection />
      <GallerySection />
      <ChangeMakerSection />
      <PartnersSection />
      {/* <TestimonialsSection /> */}
      <BlogSection />
      <NewsletterSimpleFooterSection heading="Join our newsletter and stay updated!" />
    </main>
  );
}
