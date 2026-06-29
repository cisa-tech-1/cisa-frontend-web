import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Footer } from "@/components/layout/Footer";

type NewsletterSectionProps = {
  heading?: string;
};

export function NewsletterSection({
  heading = "Join our community and stay updated on our latest impact stories",
}: NewsletterSectionProps) {
  return (
    <>
      <section className="relative z-10 -mb-28 px-5">
        <div className="mx-auto max-w-[1216px]">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-teal-800 px-8 py-16 shadow-xl md:flex-row md:items-center md:px-16">
            <h2 className="max-w-xl font-[family-name:var(--font-bricolage)] text-3xl font-semibold leading-11 tracking-tight text-white md:text-4xl">
              {heading}
            </h2>
            <form className="flex w-full max-w-[480px] flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-lg border border-[#D5D7DA] bg-white px-3.5 text-base text-[#717680] shadow-xs outline-none focus:border-teal-500"
                  aria-label="Email address"
                />
                <p className="mt-2 text-sm text-[#FAFAFA]">
                  We care about your data in our privacy policy.
                </p>
              </div>
              <PrimaryButton type="submit" size="md" className="shrink-0">
                Subscribe
              </PrimaryButton>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
