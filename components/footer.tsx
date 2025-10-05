"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaInstagram className="w-6 h-6" />,
    href: "https://instagram.com/afryvoanalytics",
    label: "Instagram",
  },
  {
    icon: <FaFacebook className="w-6 h-6" />,
    href: "https://facebook.com/afryvoanalytics",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="w-6 h-6" />,
    href: "https://twitter.com/afryvoanalytics",
    label: "Twitter",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    href: "https://linkedin.com/company/afryvoanalytics",
    label: "LinkedIn",
  },
];

// Footer links removed as requested

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 pt-8 pb-4 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between items-center gap-6 md:gap-8">
        {/* Left: Logo and description */}
        <div className="flex flex-col items-center gap-7 md:gap-2">
          <div className="w-full flex justify-center">
            <Image
              src="/logo.png"
              alt="Afryvo Analytics Logo"
              width={110}
              height={110}
              className="object-contain ml-0"
            />
          </div>
          <p className="text-gray-400 text-lg md:text-base mt-4 md:mt-2 text-center font-medium md:font-normal">
            Built to See What Others Miss
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed text-center md:text-left flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <Mail className="w-5 h-5" />
            <span>info@afryvoanalytics.com</span>
          </p>
          <p className="text-gray-400 text-base md:text-lg mt-0 md:mt-2 flex flex-col md:flex-row items-center gap-1 md:gap-3 font-semibold">
            <MapPin className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-center md:text-left">
              NSTP, NUST, H-12, Islamabad, Pakistan
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs md:text-sm px-2">
        <span className="text-gray-500 dark:text-gray-400 text-center">
          © 2025 Afryvo analytics. All rights reserved.
        </span>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center">
          <span className="text-gray-500 dark:text-gray-400">
            Terms and Conditions
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
