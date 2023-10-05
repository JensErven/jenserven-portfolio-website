import "./globals.css";

import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import { motion } from "framer-motion";

import BlobContainer from "@/components/Shared/BlobContainer";
import BlobMouseCursor from "@/components/Shared/BlobMouseCursor";

const raleway = Raleway({ subsets: ["cyrillic"], weight: ["700", "200"] });

export const metadata: Metadata = {
  title: "Portfolio - Jens Erven",
  description: "Jens Erven - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` relative ${raleway.className}   md:mx-[10vw]  lg:mx-[15vw]  xl:mx-[25vw] 2xl:mx-[15vw]  3xl:mx-[35vw] mx-4 `}
        style={{ backgroundColor: "#0f172a" }}
      >
        {/* #141526 */} <BlobContainer />
        {/*       <BlobMouseCursor />*/}
        {children}
      </body>
    </html>
  );
}
