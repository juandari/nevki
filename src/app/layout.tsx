import "./globals.css";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const public_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});
const make = localFont({
  src: "../fonts/MAKE.ttf",
  display: "swap",
  variable: "--font-make",
});

export const metadata: Metadata = {
  title: "Nevki Farisda",
  description: "UI/UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${public_sans.variable} ${make.variable}`}>
      <body className="font-sans bg-primary-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
