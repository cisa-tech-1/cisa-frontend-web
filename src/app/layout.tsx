import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Jost,
  Kumbh_Sans,
  Manrope,
  Raleway,
} from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["400", "800"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Chess in Slums Africa | King and Queen in Every Pawn",
  description:
    "Unveiling the King and Queen in Every Pawn — empowering children through chess, education, and human capital development across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${raleway.variable} ${kumbhSans.variable} ${jost.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
