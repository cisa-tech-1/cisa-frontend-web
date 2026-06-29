import type { Metadata } from "next";
import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { DonationsHeroSection } from "@/sections/donations/DonationsHeroSection";
import { BankTransferSection } from "@/sections/donations/BankTransferSection";
import { GoFundMeSection } from "@/sections/donations/GoFundMeSection";
import { CampaignDonationsSection } from "@/sections/donations/CampaignDonationsSection";
import { DonationsContactSection } from "@/sections/donations/DonationsContactSection";

export const metadata: Metadata = {
  title: "Donations | Chess in Slums Africa",
  description:
    "Support Chess in Slums Africa through one-time or recurring donations, bank transfers, GoFundMe, and community campaigns.",
};

export default function DonatePage() {
  return (
    <main className="bg-[#FCFCFC]">
      <DonationsHeroSection />
      <BankTransferSection />
      <GoFundMeSection />
      <CampaignDonationsSection />
      <DonationsContactSection />
      <SimpleFooter />
    </main>
  );
}
