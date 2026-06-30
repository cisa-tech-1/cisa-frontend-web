"use client";

import { useEffect } from "react";

type PdfViewerModalProps = {
  title: string;
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

export function PdfViewerModal({ title, pdfUrl, isOpen, onClose }: PdfViewerModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E9EAEB] px-5 py-4">
          <h3 className="font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[#181D27]">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-lg border border-[#E9EAEB] text-[#535862] hover:bg-[#FAFAFA]"
            aria-label="Close PDF viewer"
          >
            ✕
          </button>
        </div>
        <iframe src={pdfUrl} title={title} className="h-full w-full flex-1 border-0" />
      </div>
    </div>
  );
}
