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
  description: "Afryvo Analytics — AI integration for businesses. Smarter decisions, faster insights, measurable outcomes.",
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
        <title>Afryvo Analytics — AI integration for business</title>
        <meta name="description" content="Afryvo Analytics — AI integration for businesses. Smarter decisions, faster insights, measurable outcomes." />
  <meta name="keywords" content="Afryvo Analytics, AI integration, analytics, machine learning, data science, automation, business intelligence" />
        {/* Open Graph / Social meta tags */}
        <meta property="og:title" content="Afryvo Analytics — AI integration for business" />
        <meta property="og:description" content="Afryvo Analytics — AI integration for businesses. Smarter decisions, faster insights, measurable outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Afryvo Analytics" />
        <link rel="canonical" href="https://www.afryvoanalytics.com/" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        {/* App icons - files should live in /public (F:/website/website/public/) */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Android icons (progressive web app / Android home screen) */}
        <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
