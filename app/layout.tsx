import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Afryvo Analytics — AI Integration for Business",
  description: "Afryvo Analytics — Enterprise AI integration, multi-agent workflows, and executive BI analytics.",
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
        <title>Afryvo Analytics — AI Integration for Business</title>
        <meta name="description" content="Afryvo Analytics — Enterprise AI integration, multi-agent workflows, and executive BI analytics." />
        <link rel="canonical" href="https://www.afryvoanalytics.com/" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
