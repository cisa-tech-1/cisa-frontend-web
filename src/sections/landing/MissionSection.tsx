import { Badge } from "@/components/ui/Badge";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20"
        aria-hidden
      >
        <div className="h-[620px] w-[769px] bg-[radial-gradient(31.4%_50%_at_50%_50%,#FFE3C8_0%,rgba(255,255,255,0.72)_100%)]" />
        <span className="absolute text-[200px] opacity-30">♟</span>
      </div>

      <div className="relative mx-auto flex max-w-[924px] flex-col items-center gap-11 px-5 text-center">
        <div className="flex flex-col items-center gap-8">
          <Badge variant="yellow" icon={<span>♟</span>}>
            OUR MISSION
          </Badge>
          <p className="text-[28px] font-bold leading-[55px] text-black md:text-[35px]">
            Discover the potential within every child — using chess as a gateway to education,
            confidence, and a brighter future for communities across Africa.
          </p>
        </div>
        <PrimaryButton href="/get-involved" size="lg">
          Get Involved
        </PrimaryButton>
      </div>
    </section>
  );
}
