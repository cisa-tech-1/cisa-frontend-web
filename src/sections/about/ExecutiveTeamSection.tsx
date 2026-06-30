"use client";

import { useState } from "react";
import { SectionBadge, TeamMemberCard, TeamTabBar } from "@/components/about";
import { TEAM_BY_TAB, TEAM_TABS, type TeamTabId } from "@/lib/about";

export function ExecutiveTeamSection() {
  const [activeTab, setActiveTab] = useState<TeamTabId>("leadership");
  const members = TEAM_BY_TAB[activeTab];

  return (
    <section className="bg-teal-500 px-5 pb-16 pt-14 md:px-20 md:pb-[100px] md:pt-14">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 md:gap-12">
        <div className="flex max-w-[588px] flex-col items-center gap-[30px] text-center">
          <SectionBadge>Our team</SectionBadge>
          <p className="max-w-[588px] font-[family-name:var(--font-manrope)] text-xl font-medium leading-[30px] text-[#F5F5F5]">
            The people driving our mission forward — our board of trustees, management team, and
            dedicated volunteers.
          </p>
          <TeamTabBar tabs={TEAM_TABS} activeId={activeTab} onChange={(id) => setActiveTab(id as TeamTabId)} />
        </div>

        <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <TeamMemberCard key={`${activeTab}-${member.name}`} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
