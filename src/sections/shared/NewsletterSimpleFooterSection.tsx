import { SimpleFooter } from "@/components/layout/SimpleFooter";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

type NewsletterSimpleFooterSectionProps = {
  heading?: string;
  placeholder?: string;
  hint?: string;
};

export function NewsletterSimpleFooterSection({
  heading = "Stay Inspired with Our Impact Stories!",
  placeholder = "Enter your Email to stay updated",
  hint = "We care about your data privacy.",
}: NewsletterSimpleFooterSectionProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 -translate-y-1/2 px-[20px]">
        <PageContainer className="pointer-events-auto">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-[#125D56] px-8 py-16 shadow-xl md:flex-row md:items-center md:gap-8 md:px-16">
            <h2 className="max-w-[608px] font-[family-name:var(--font-bricolage)] text-4xl font-semibold leading-11 tracking-[-0.02em] text-white">
              {heading}
            </h2>
            <form className="relative w-full max-w-[480px]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder={placeholder}
                  className="h-12 w-full min-w-0 flex-1 rounded-lg border border-[#D5D7DA] bg-white px-3.5 font-[family-name:var(--font-manrope)] text-base text-[#717680] shadow-xs outline-none focus:border-teal-500 sm:max-w-[345px]"
                  aria-label="Email address"
                />
                <Button type="submit" variant="primary" size="md" font="bricolage" className="shrink-0 font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-5 text-[#FAFAFA]">
                {hint}
              </p>
            </form>
          </div>
        </PageContainer>
      </div>
      <SimpleFooter />
    </div>
  );
}
