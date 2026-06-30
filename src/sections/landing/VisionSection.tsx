import { PageContainer } from "@/components/layout/PageContainer";
import { PaginationDots } from "@/components/ui/PaginationDots";
import { LANDING_VISION } from "@/lib/landing";

export function VisionSection() {
  const highlightStart = LANDING_VISION.subtitle.indexOf("children across Africa:");

  return (
    <section className="bg-background py-10 md:py-12">
      <PageContainer>
        <div className="mx-auto flex w-full max-w-[895px] flex-col items-center justify-center gap-8 rounded-[20px] border-[0.5px] border-[#15B79E] bg-[#F0FDF9] px-6 py-8 md:h-[279px] md:flex-row md:gap-[74px] md:px-8 md:py-0">
          <div className="flex w-full max-w-[396px] flex-col items-start gap-[15px]">
            <h2 className="max-w-[389px] font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-[44px] text-[#282828] md:text-[45px] md:leading-[55px]">
              {LANDING_VISION.title}
            </h2>
            <p className="max-w-[396px] font-[family-name:var(--font-manrope)] text-lg font-medium leading-[30px] tracking-[-0.02em] text-[#282828] md:text-2xl md:leading-[35px]">
              {highlightStart > 0 ? (
                <>
                  {LANDING_VISION.subtitle.slice(0, highlightStart)}
                  <span className="text-[#15B79E]">
                    {LANDING_VISION.subtitle.slice(highlightStart)}
                  </span>
                </>
              ) : (
                LANDING_VISION.subtitle
              )}
            </p>
          </div>

          <div className="relative h-[233px] w-full max-w-[361px] shrink-0 rounded-[20px] bg-[#F0FDF9]">
            <div className="absolute left-7 right-9 top-[19px]">
              <div className="flex size-[53px] items-center justify-center rounded-full bg-[#DDF2EC]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M21 14.9998C21 12.7518 19.618 10.3948 17.978 8.37882L12.978 14.6248L11.416 13.3748L16.635 6.85182C15.5434 5.70396 14.3779 4.62867 13.146 3.63282C13.4926 3.39032 13.7533 3.04418 13.8908 2.64416C14.0283 2.24414 14.0354 1.81083 13.9111 1.40651C13.7868 1.0022 13.5376 0.647692 13.1991 0.393953C12.8607 0.140214 12.4505 0.000306902 12.0276 -0.00566025C11.6047 -0.0116274 11.1907 0.116653 10.8453 0.360743C10.4998 0.604834 10.2406 0.952165 10.105 1.35281C9.96936 1.75346 9.96425 2.1868 10.0904 2.59054C10.2165 2.99429 10.4674 3.34764 10.807 3.59982C8.814 4.98682 3 9.51082 3 14.9998C3.00033 16.3433 3.30201 17.6696 3.88281 18.8811C4.46362 20.0925 5.30876 21.1583 6.356 21.9998H3V23.9998H21V21.9998H17.645C18.692 21.1581 19.5368 20.0923 20.1174 18.8808C20.6981 17.6694 20.9996 16.3432 21 14.9998Z"
                    fill="#15B79E"
                  />
                </svg>
              </div>
              <p className="mt-3 max-w-[297px] font-[family-name:var(--font-bricolage)] text-xl font-semibold leading-[30px] text-black">
                {LANDING_VISION.cardTitle}
              </p>
            </div>

            <div className="absolute left-6 top-[179.5px]">
              <PaginationDots
                total={3}
                active={0}
                className="gap-2 bg-transparent p-3 backdrop-blur-sm"
                activeClassName="bg-[#15B79E]"
                inactiveClassName="bg-[#E9EAEB]"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
