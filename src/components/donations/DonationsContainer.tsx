import type { ReactNode } from "react";

type DonationsContainerProps = {
  children: ReactNode;
  className?: string;
};

export const DONATIONS_MAX_WIDTH = "max-w-[1280px]";
export const DONATIONS_PADDING = "px-[20px]";

export function DonationsContainer({ children, className = "" }: DonationsContainerProps) {
  return (
    <div className={`mx-auto w-full ${DONATIONS_MAX_WIDTH} ${DONATIONS_PADDING} ${className}`}>
      {children}
    </div>
  );
}
