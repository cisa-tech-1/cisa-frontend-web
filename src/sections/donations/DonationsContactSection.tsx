import { CONTACT_CHANNELS } from "@/lib/donations";
import { DonationsContainer } from "@/components/donations/DonationsContainer";
import { Reveal } from "@/components/motion/Reveal";

export function DonationsContactSection() {
  return (
    <section className="bg-[#002F40] py-[65px]">
      <DonationsContainer className="flex flex-col items-center gap-11">
        <Reveal className="flex max-w-[623px] flex-col items-center gap-6 text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[48px] font-medium capitalize leading-[1.2] tracking-[-0.04em] text-white">
            Thank you for choosing to be a game changer
          </h2>
          <p className="text-lg leading-[1.5] text-white">
            Please refer to the email list below and contact us using the appropriate address
            based on your subject and purpose.
          </p>
        </Reveal>

        <Reveal className="grid w-full md:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => (
            <div
              key={channel.email}
              className="flex min-h-[278px] flex-col items-center justify-center gap-4 px-10 py-[84px]"
              style={{ backgroundColor: channel.background }}
            >
              <h3
                className="max-w-[281px] text-center text-2xl font-semibold capitalize leading-[1.4] tracking-[-0.04em]"
                style={{ color: channel.textColor }}
              >
                {channel.title}
              </h3>
              <a
                href={`mailto:${channel.email}`}
                className="text-center text-xl leading-[1.4] hover:underline"
                style={{ color: channel.textColor }}
              >
                {channel.email}
              </a>
            </div>
          ))}
        </Reveal>
      </DonationsContainer>
    </section>
  );
}
