import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

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
        className={`${raleway.className} xl:mx-48 lg:mx-20 mx-4 `}
        style={{ backgroundColor: "#0f172a" }}
      >
        {children}
      </body>
    </html>
  );
}
