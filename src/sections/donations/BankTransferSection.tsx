import { FOREIGN_BANK_DETAILS, LOCAL_BANK_DETAILS } from "@/lib/donations";
import { DonationsContainer } from "@/components/donations/DonationsContainer";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type BankDetail = { label: string; value: string };

function BankDetailStack({ details }: { details: readonly BankDetail[] }) {
  return (
    <div className="flex flex-col gap-6 text-lg capitalize leading-[1.5] text-black">
      {details.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-1">
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

function BankCard({ title, details }: { title: string; details: readonly BankDetail[] }) {
  return (
    <div className="flex min-h-[480px] flex-1 flex-col gap-10 rounded-xl bg-[#F8E9D6] p-14">
      <h3 className="max-w-[300px] font-[family-name:var(--font-bricolage)] text-[51px] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
        {title}
      </h3>
      <BankDetailStack details={details} />
    </div>
  );
}

export function BankTransferSection() {
  return (
    <section className="bg-[#FCFCFC] pb-6">
      <DonationsContainer>
        <Stagger className="flex flex-col gap-6 md:flex-row">
          <StaggerItem className="flex flex-1">
            <BankCard title="Local Bank Transfer ₦" details={LOCAL_BANK_DETAILS} />
          </StaggerItem>
          <StaggerItem className="flex flex-1">
            <BankCard title="Foreign Wire Transfer $" details={FOREIGN_BANK_DETAILS} />
          </StaggerItem>
        </Stagger>
      </DonationsContainer>
    </section>
  );
}
