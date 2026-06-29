import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export function AboutNewsletterSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <PageContainer>
        <div className="flex min-h-[400px] overflow-hidden rounded-3xl bg-[#107569] shadow-xl">
          <div className="flex flex-1 flex-col justify-center gap-[29px] p-8 md:p-16">
            <h2 className="max-w-[608px] text-left font-[family-name:var(--font-bricolage)] text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-white">
              Stay up to date with our latest news
            </h2>
            <form className="flex w-full max-w-[497px] flex-col gap-4 sm:flex-row sm:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full flex-1 rounded-lg border border-[#D5D7DA] bg-white px-3.5 font-[family-name:var(--font-manrope)] text-base leading-6 text-[#717680] shadow-xs outline-none focus:border-teal-500 sm:max-w-[497px]"
                aria-label="Email address"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                font="bricolage"
                className="h-12 shrink-0 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
          <div className="relative hidden min-h-[400px] w-full max-w-[480px] shrink-0 md:block">
            <Image
              src="/images/about/subscribe.jpg"
              alt="Child celebrating with a trophy"
              fill
              className="object-cover"
              sizes="480px"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
