"use client";

import { useState } from "react";
import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { LANDING_GALLERY_FILTERS, LANDING_GALLERY_IMAGES } from "@/lib/landing";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <SectionHeader
          badge="GALLERY"
          badgeVariant="teal"
          heading={
            <span className="font-[family-name:var(--font-manrope)] text-[40px] font-bold leading-[1.2] text-[#282828] md:text-[65px] md:leading-[78px]">
              Memories that will last forever
            </span>
          }
          className="mb-8 gap-5"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-[18px]">
          {LANDING_GALLERY_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-[22px] px-[50px] py-0.5 text-base leading-6 transition-colors ${
                activeFilter === filter
                  ? "border border-[#FEE8A8] bg-[#6B350D] font-extrabold text-white"
                  : "border border-[#E2E1DC] bg-[#F8F3EF] font-semibold text-[#5A5A5A]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {LANDING_GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative mb-4 w-full break-inside-avoid overflow-hidden rounded-sm ${img.h}`}
              style={{ transform: `rotate(${img.rotation}deg)` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/gallery" variant="primary" size="lg" font="jost" className="h-[60px] max-w-[332px]">
            View More
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
