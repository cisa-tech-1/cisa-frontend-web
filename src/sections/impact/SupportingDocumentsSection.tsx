"use client";

import { useState } from "react";
import { PdfViewerModal } from "@/components/impact/PdfViewerModal";
import { PageContainer } from "@/components/layout/PageContainer";
import { SUPPORTING_DOCUMENTS } from "@/lib/impact";

function PdfIcon() {
  return (
    <div className="relative flex h-[35px] w-[35px] shrink-0 items-center justify-center">
      <div className="absolute inset-0 rounded border-[1.5px] border-[#D5D7DA] bg-white" />
      <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-sm border-[1.5px] border-[#D5D7DA] bg-white" />
      <span className="relative text-[10px] font-bold text-[#D92D20]">PDF</span>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 text-sm font-medium text-[#067647]">
      <span className="size-1.5 rounded-full bg-[#17B26A]" />
      Verified
    </span>
  );
}

export function SupportingDocumentsSection() {
  const [activePdf, setActivePdf] = useState<(typeof SUPPORTING_DOCUMENTS)[number] | null>(
    null,
  );

  return (
    <>
      <section className="bg-teal-500 py-20 md:py-[138px]">
        <PageContainer className="flex flex-col gap-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
              <span className="size-1.5 rounded-full bg-[#717680]" />
              Financial transparency
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-semibold tracking-tight text-white">
              Supporting Documents
            </h2>
            <p className="mt-3 text-lg font-medium leading-7 text-[#FAFAFA]">
              Access our audited financial statements and annual reports for full transparency
              into how we steward every donation.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {SUPPORTING_DOCUMENTS.map((doc, index) => (
              <div key={doc.title}>
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex flex-wrap items-center gap-3">
                    <PdfIcon />
                    <p className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-white">
                      {doc.title}
                    </p>
                    <span className="text-base text-[#FAFAFA]">{doc.meta}</span>
                    <VerifiedBadge />
                  </div>
                  <button
                    type="button"
                    onClick={() => setActivePdf(doc)}
                    className="inline-flex h-12 items-center gap-1.5 rounded-lg bg-[#2ED3B7] px-[30px] text-base font-medium text-white shadow-xs"
                  >
                    View
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M7.5 3C4.5 3 2.1 4.7 1 7c1.1 2.3 3.5 4 6.5 4s5.4-1.7 6.5-4C12.9 4.7 10.5 3 7.5 3z"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <circle cx="7.5" cy="7" r="2" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </button>
                </div>
                {index < SUPPORTING_DOCUMENTS.length - 1 && (
                  <div className="mt-6 h-px w-full bg-[#E9EAEB]/40" />
                )}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <PdfViewerModal
        title={activePdf?.title ?? ""}
        pdfUrl={activePdf?.pdf ?? ""}
        isOpen={Boolean(activePdf)}
        onClose={() => setActivePdf(null)}
      />
    </>
  );
}
