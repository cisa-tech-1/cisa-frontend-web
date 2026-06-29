"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/PrimaryButton";

const FILTERS = ["All", "Events", "Projects", "Team", "Community", "Donations"];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1586167752837-2587ce291b1c?w=600&q=80", h: "h-[210px]" },
  { src: "https://images.unsplash.com/photo-1529699211952-484e120d0d87?w=600&q=80", h: "h-[464px]" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", h: "h-[226px]" },
  { src: "https://images.unsplash.com/photo-1497633763263-789ce028ec80?w=600&q=80", h: "h-[397px]" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", h: "h-[464px]" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", h: "h-[426px]" },
  { src: "https://images.unsplash.com/photo-1427504494784-3a9ca7044f45?w=600&q=80", h: "h-[271px]" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", h: "h-[226px]" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", h: "h-[464px]" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", h: "h-[464px]" },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1213px] px-5">
        <SectionHeader
          badge="GALLERY"
          badgeVariant="teal"
          heading={
            <span className="text-[40px] leading-tight md:text-[65px] md:leading-[78px]">
              Memories that will last forever
            </span>
          }
          className="mb-10"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-[22px] border border-[#FEE8A8] px-8 py-1.5 text-base font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-[#6B350D] font-extrabold text-white"
                  : "bg-[#F6ECE5] text-[#5A5A5A]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative mb-4 w-full break-inside-avoid overflow-hidden rounded-sm ${img.h}`}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <TextLink href="/gallery">View Full Gallery</TextLink>
        </div>
      </div>
    </section>
  );
}
