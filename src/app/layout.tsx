import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LockScreen } from "@/screens/LockScreen";
import { ContextMenu } from "@/components/ContextMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Bhattarai",
  description: "Sachin Bhattarai | Software Engineer & AI Enthusiast",
  authors: [{ name: "Sachin Bhattarai" }],
  keywords: [
    "Sachin Bhattarai",
    "Software Engineer",
    "AI",
    "Portfolio",
    "Tech",
  ],
  creator: "Sachin Bhattarai",
  publisher: "Sachin Bhattarai",
  openGraph: {
    title: "Sachin Bhattarai | Software Engineer & AI Enthusiast",
    description: "Sachin Bhattarai | Software Engineer & AI Enthusiast",
    url: "https://sachinbhattarai55.com.np",
    siteName: "Sachin Bhattarai | Software Engineer & AI Enthusiast",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Bhattarai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Bhattarai | Software Engineer & AI Enthusiast",
    description: "Sachin Bhattarai",
    images: ["/images/og-image.png"],
    creator: "@sachinbhattrai",
    creatorId: "sachinbhattrai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col no-print">
        <LockScreen />
        {children}
        <ContextMenu />
      </body>
    </html>
  );
}
