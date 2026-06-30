import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/pages/ComingSoonPage";

export const metadata: Metadata = {
  title: "Coming Soon | Chess in Slums Africa",
  description:
    "This page is under construction. Check back soon for updates from Chess in Slums Africa.",
};

export default function ComingSoonRoute() {
  return <ComingSoonPage />;
}
