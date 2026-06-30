import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { IMPACT_CTA } from "@/lib/impact";

export function ImpactCtaSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <PageContainer>
        <div className="overflow-hidden rounded-3xl bg-[#107569] shadow-xl">
          <div className="flex min-h-[400px] flex-col md:flex-row md:items-stretch">
            <div className="flex flex-1 flex-col justify-center gap-[29px] p-8 md:p-16">
              <div className="flex max-w-[608px] flex-col gap-5">
                <h2 className="font-[family-name:var(--font-bricolage)] text-[36px] font-semibold leading-[44px] tracking-[-0.02em] text-white md:text-4xl">
                  {IMPACT_CTA.title}
                </h2>
                <p className="text-xl leading-[30px] text-[#FDFDFD]">{IMPACT_CTA.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-[18px] text-base font-semibold text-[#107569]"
                >
                  {IMPACT_CTA.primaryCta}
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white bg-transparent px-[18px] text-base font-semibold text-white"
                >
                  {IMPACT_CTA.secondaryCta}
                </Link>
              </div>
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
        </div>
      </PageContainer>
    </section>
  );
}
