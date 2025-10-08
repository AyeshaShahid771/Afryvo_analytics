import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afryvo Analytics",
  description:
    "Afryvo Analytics helps businesses make data-driven decisions and build AI-based solutions that improve user experience, increase conversion, and drive growth.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "color-scheme": "light dark",
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta
          name="description"
          content="Afryvo Analytics helps businesses make data-driven decisions and build AI-based solutions that improve user experience, increase conversion, and drive growth."
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        {/* Explicit favicon links help crawlers (Google) find the icon at the site root */}
        <link rel="icon" href="/favicon.ico" />
        {/* Optional additional icons if you add them to public/ later */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
