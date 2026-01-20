import type { Metadata } from "next";
import { Josefin_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LED Light Therapy Face Mask | Red Light Rejuve Australia",
  description: "Clinical-grade LED face mask with red + near-infrared light therapy. Reduce wrinkles, boost collagen, improve skin tone. 60-day guarantee. Free AU shipping.",
  keywords: "LED face mask, red light therapy, anti-aging, skincare, Australia",
  openGraph: {
    title: "LED Light Therapy Face Mask | Red Light Rejuve",
    description: "Clinical-grade LED face mask with red + near-infrared light therapy. 60-day guarantee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${cormorantGaramond.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
