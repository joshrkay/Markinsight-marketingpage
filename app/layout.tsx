import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markinsight.app"),
  title: {
    default: "MarkInsight — Shopify Analytics You Deserve",
    template: "%s | MarkInsight",
  },
  description:
    "MarkInsight gives Shopify brands a free, embedded analytics dashboard with multi-channel attribution across 6 ad platforms, AI-powered insights, and flat pricing. No GMV fees.",
  keywords: [
    "Shopify analytics",
    "Shopify attribution",
    "DTC analytics",
    "Shopify ad tracking",
    "multi-channel attribution",
    "Shopify AI insights",
  ],
  authors: [{ name: "MarkInsight" }],
  creator: "MarkInsight",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://markinsight.app",
    siteName: "MarkInsight",
    title: "MarkInsight — Shopify Analytics You Deserve",
    description:
      "Free tier with real attribution. Embedded in Shopify Admin. 6 ad channels. Flat pricing — no GMV scaling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MarkInsight — Shopify Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarkInsight — Shopify Analytics You Deserve",
    description:
      "Free tier with real attribution. Embedded in Shopify Admin. 6 ad channels. Flat pricing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
