import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteUrlObject } from "@/lib/site-url";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrlObject,
  title: "Laxmi Manohar Meda | Embedded Software Engineer",
  description:
    "Embedded software engineer working in C and C++ across firmware, embedded Linux, RTOS patterns, device interfaces, and hardware/software integration.",
  applicationName: "Laxmi Manohar Meda — Engineering Portfolio",
  authors: [{ name: "Laxmi Manohar Meda" }],
  creator: "Laxmi Manohar Meda",
  keywords: [
    "embedded software engineer",
    "firmware engineer",
    "C",
    "C++",
    "embedded Linux",
    "RTOS",
    "hardware software integration",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Laxmi Manohar Meda",
    title: "Laxmi Manohar Meda | Embedded Software Engineer",
    description:
      "Firmware, embedded Linux, RTOS patterns, device interfaces, and hardware/software integration.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Laxmi Manohar Meda — Embedded Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxmi Manohar Meda | Embedded Software Engineer",
    description:
      "Firmware, embedded Linux, RTOS patterns, device interfaces, and hardware/software integration.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0e0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
