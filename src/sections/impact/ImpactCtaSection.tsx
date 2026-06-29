import Image from "next/image";
import Link from "next/link";

export function ImpactCtaSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-3xl bg-[#107569] shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex flex-1 flex-col justify-center gap-12 p-10 md:p-16">
              <div className="flex max-w-[608px] flex-col gap-5">
                <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-semibold tracking-tight text-white">
                  Be a Game Changer
                </h2>
                <p className="text-xl leading-[30px] text-[#FDFDFD]">
                  Partner with us, volunteer your time, or support our mission financially.
                  Every contribution helps us reach more children in underserved communities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-[#D5D7DA] bg-white px-[18px] text-base font-semibold text-[#414651]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-500 px-[18px] text-base font-semibold text-white shadow-sm"
                >
                  Join Us
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] w-full md:min-h-[400px] md:w-[480px] md:shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
                alt="Community celebrating together outdoors"
                fill
                className="object-cover"
                sizes="480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
