"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CampaignCard } from "@/components/donations/CampaignCard";
import { DonationsContainer } from "@/components/donations/DonationsContainer";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { CAMPAIGN_FILTERS, CAMPAIGNS } from "@/lib/donations";

export function CampaignDonationsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof CAMPAIGN_FILTERS)[number]["id"]>(
    CAMPAIGN_FILTERS[0].id,
  );

  return (
    <section className="bg-[#FCFCFC] pb-[135px]">
      <DonationsContainer className="flex flex-col gap-[45px]">
        <Reveal className="flex max-w-[751px] flex-col gap-[23px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-[family-name:var(--font-manrope)] text-[48px] font-semibold leading-[1.2] text-[#282828]">
              Other Means to Donate
            </h2>
            <p className="text-lg leading-[1.5] text-black">
            While chess provides the platform, your support creates opportunities to scale our programs and ensure long-term sustainability.
            </p>
          </div>

          <div className="flex flex-wrap gap-[18px]">
            {CAMPAIGN_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className="relative pt-3.5"
                >
                  <span className="absolute left-3.5 top-0 inline-flex items-center gap-1.5 rounded-[22px_22px_22px_12px] bg-[#FFAD5F] px-2 py-0.5 text-xs font-bold leading-5 text-black shadow-xs">
                    <span className="size-1.5 rounded-full border-[3px] border-[#F5F5F5] bg-[#FFAD5F]" />
                    {filter.tag}
                  </span>
                  <span
                    className={`inline-flex h-[35px] items-center rounded-[22px] px-12 text-base leading-6 ${
                      isActive
                        ? "border border-[#FEE8A8] bg-[#6B350D] font-extrabold text-white"
                        : "border border-[#E2E1DC] bg-[#F8F3EF] font-semibold text-[#5A5A5A]"
                    }`}
                  >
                    {filter.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="flex flex-col items-center gap-[72px]">
          <Stagger className="grid w-full grid-cols-1 justify-items-center gap-[25px] md:grid-cols-2 lg:grid-cols-3">
            {CAMPAIGNS.map((campaign) => (
              <StaggerItem key={campaign.id}>
                <CampaignCard {...campaign} />
              </StaggerItem>
            ))}
          </Stagger>

          <Link
            href="#"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-jost)] text-xl font-semibold leading-7 text-[#414651]"
          >
            See All Campaigns
            <Image src="/images/svg/arrow-right.svg" alt="" width={16} height={16} aria-hidden />
          </Link>
        </div>
      </DonationsContainer>
    </section>
  );
}
