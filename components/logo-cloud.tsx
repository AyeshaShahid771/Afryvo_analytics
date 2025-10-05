import React from "react";
import Image from "next/image";

const logos = [
  { src: "/fruitstreet.png", alt: "Company 1", width: 155, height: 115 },
  { src: "/logo5.png", alt: "Company 2", width: 135, height: 150 },
  { src: "/logo11.png", alt: "Company 3", width: 155, height: 110 },
  { src: "/cabeit.png", alt: "Company 4", width: 145, height: 90 },
  { src: "/logo2.png", alt: "Company 5", width: 135, height: 90 },
  { src: "/logo3.png", alt: "Company 6", width: 175, height: 95 },
  { src: "/loguu.png", alt: "Company 7", width: 165, height: 100 },
  { src: "/logo8.png", alt: "Company 8", width: 180, height: 90 },
  { src: "/g2m.PNG", alt: "Company 9", width: 195, height: 90 },
  { src: "/logo6.png", alt: "Company 10", width: 220, height: 120 },
];

export const LogoCloud = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <p
            className="text-xs sm:text-sm text-white break-words whitespace-normal px-2 max-w-full w-full text-center leading-snug"
            style={{ wordBreak: "break-word" }}
          >
            Partnered with top brands
          </p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-10">
            Served hundreds of companies
            <br />
            worldwide
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={
                "flex items-center justify-center" +
                (index === logos.length - 1 ? " col-span-3 md:col-span-1" : "")
              }
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width || 80, height: logo.height || 40 }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
