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

export function SupportingDocumentsSection() {
  return (
    <section className="bg-teal-500 px-5 py-[138px] md:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="px-0 md:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#717680]" />
            Resources
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-semibold tracking-tight text-white">
            Supporting Documents
          </h2>
          <p className="mt-3 max-w-3xl text-lg font-medium text-[#FAFAFA]">
            Access our audited financial statements and transparency reports.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {SUPPORTING_DOCUMENTS.map((doc, index) => (
            <div key={doc.title}>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <PdfIcon />
                  <p className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-white">
                    {doc.title}
                  </p>
                  <span className="text-base text-[#FAFAFA]">{doc.meta}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#ABEFC6] bg-[#ECFDF3] px-2.5 py-0.5 text-sm font-medium text-[#067647]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#17B26A]" />
                    {doc.status}
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-1.5 rounded-lg bg-[#2ED3B7] px-[30px] text-base font-medium text-white shadow-xs"
                >
                  View
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                    <path
                      d="M1.5 7.5C3.5 4.5 5.5 3 7.5 3C9.5 3 11.5 4.5 13.5 7.5C11.5 10.5 9.5 12 7.5 12C5.5 12 3.5 10.5 1.5 7.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="7.5" cy="7.5" r="2" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              {index < SUPPORTING_DOCUMENTS.length - 1 && (
                <div className="mt-6 h-px w-full bg-[#E9EAEB]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
