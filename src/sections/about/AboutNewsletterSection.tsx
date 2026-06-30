import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { ABOUT_NEWSLETTER } from "@/lib/about";

export function AboutNewsletterSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <PageContainer>
        <div className="flex min-h-[400px] flex-col overflow-hidden rounded-3xl bg-[#107569] shadow-xl md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col items-start justify-center gap-[29px] p-8 md:p-16">
            <h2 className="max-w-[608px] text-left font-[family-name:var(--font-bricolage)] text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-white">
              {ABOUT_NEWSLETTER.heading}
            </h2>
            <form className="flex w-full max-w-[497px] flex-col items-start gap-3">
              <input
                type="email"
                placeholder={ABOUT_NEWSLETTER.placeholder}
                className="h-12 w-full rounded-lg border border-[#D5D7DA] bg-white px-3.5 font-[family-name:var(--font-manrope)] text-base leading-6 text-[#717680] shadow-xs outline-none focus:border-teal-500"
                aria-label="Email address"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                font="bricolage"
                className="h-12 shrink-0 px-[18px] font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="relative min-h-[280px] w-full md:min-h-[400px] md:w-[480px] md:shrink-0">
            <Image
              src="/images/about/subscribe.jpg"
              alt="Child celebrating with a trophy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
