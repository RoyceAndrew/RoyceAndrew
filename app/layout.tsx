import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans, Marcellus, Manrope } from "next/font/google";
import "./globals.css";
import IntroScreen from "@/component/layout/IntroScreen";

const cormorant = Cormorant_Garamond({
  weight: "500",
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-marcellus",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royce Andrew",
  description: "Royce Andrew Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${josefin.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans text-white bg-black flex-col">
        <IntroScreen />
        <main>{children}</main>
      </body>
    </html>
  );
}
