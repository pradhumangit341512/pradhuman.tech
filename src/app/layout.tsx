import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://spradhuman.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pradhuman Singh | Full Stack Developer — React, Next.js, Node.js Expert",
    template: "%s | Pradhuman Singh",
  },
  description:
    "Pradhuman Singh is a Full Stack Developer from Jaipur, India, specializing in building production-grade SaaS platforms, AI-powered applications, and modern web solutions using React, Next.js, TypeScript, Node.js, and MongoDB. Currently building at Sarvaya. View portfolio and hire me.",
  keywords: [
    "Pradhuman Singh",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Full Stack Developer Jaipur",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Freelance Web Developer",
    "SaaS Developer",
    "AI Web Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MongoDB Developer",
    "Tailwind CSS Developer",
    "Hire Full Stack Developer",
    "Web Development Services India",
    "Sarvaya Developer",
  ],
  authors: [{ name: "Pradhuman Singh", url: siteUrl }],
  creator: "Pradhuman Singh",
  publisher: "Pradhuman Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pradhuman Singh — Full Stack Developer",
    title: "Pradhuman Singh | Full Stack Developer — React, Next.js, Node.js Expert",
    description:
      "Full Stack Developer building production-grade SaaS, AI platforms, and modern web apps. 10+ shipped products including Broker365, Beyond Karma AI, Datrix, StackRift. Currently at Sarvaya.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Pradhuman Singh — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradhuman Singh | Full Stack Developer",
    description:
      "Building production-grade SaaS, AI platforms, and modern web apps with React, Next.js, TypeScript & Node.js. View my portfolio.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@pradhumansingh",
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
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="font-sans antialiased noise-bg" suppressHydrationWarning>
        <JsonLd />
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
