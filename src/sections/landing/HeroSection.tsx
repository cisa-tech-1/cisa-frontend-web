import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { AnnouncementBadge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[720px] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1529699211952-484e120d0d87?w=1920&q=80"
        alt="Children playing chess"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[rgba(25,20,2,0.45)]" />

      <Navbar variant="hero" />

      <div className="relative z-10 mx-auto flex max-w-[877px] flex-col items-center gap-3 px-5 pt-28 text-center">
        <div className="flex flex-col items-center gap-5">
          <p className="font-[family-name:var(--font-raleway)] text-4xl tracking-wide text-white md:text-[60px] md:leading-[75px]">
            Unveiling the
          </p>
          <h1 className="font-[family-name:var(--font-kumbh)] text-5xl font-extrabold tracking-wide text-gold-500 md:text-[110px] md:leading-[100px]">
            King and Queen
          </h1>
          <p className="font-[family-name:var(--font-raleway)] text-4xl tracking-wide text-white md:text-[60px] md:leading-[75px]">
            in Every Pawn
          </p>
        </div>

        <AnnouncementBadge
          tag="New"
          message="Check out our latest project"
          href="/projects"
        />
      </div>

      <button
        type="button"
        className="absolute bottom-8 right-8 z-10 text-white opacity-80 transition-opacity hover:opacity-100"
        aria-label="Toggle sound"
      >
        <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
          <path d="M0 6h3l4-4v16l-4-4H0V6zm11 3c0-1.5-.8-2.8-2-3.5v7c1.2-.7 2-2 2-3.5z" />
          <line x1="14" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </section>
  );
}
