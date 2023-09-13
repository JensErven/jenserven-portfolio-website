import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
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
        className={` relative ${raleway.className}  lg:mx-20 xl:mx-32 2xl:mx-64 mx-4`}
        style={{ backgroundColor: "#0f172a" }}
      >
        {" "}
        <BlobContainer />
        <BlobMouseCursor />
        {children}
      </body>
    </html>
  );
}
