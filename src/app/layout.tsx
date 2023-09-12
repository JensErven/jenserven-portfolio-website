import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

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
        className={`${raleway.className} `}
        style={{ backgroundColor: "#0f172a" }}
      >
        {children}
      </body>
    </html>
  );
}
