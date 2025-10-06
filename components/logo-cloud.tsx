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
    <section>
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

        {/* Mobile: Custom spacing between rows, Desktop: regular grid */}
        <div className="block md:hidden">
          {/* Mobile layout with custom row spacing */}
          <div className="space-y-4">
            {/* First row */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 justify-items-center">
              {logos.slice(0, 3).map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{ width: Math.round(logo.width * 0.8), height: Math.round(logo.height * 0.8) }}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - moved up with less spacing */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 justify-items-center -mt-2">
              {logos.slice(3, 6).map((logo, index) => {
                // Special adjustment for third logo in second row (Boaz Bikes)
                const isThirdLogo = index === 2;
                return (
                  <div key={index + 3} className={`flex items-center justify-center ${isThirdLogo ? '-mt-7' : ''}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ width: Math.round(logo.width * 0.8), height: Math.round(logo.height * 0.8) }}
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Third row - normal spacing from second row */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 justify-items-center">
              {logos.slice(6, 9).map((logo, index) => {
                // Special adjustments for alignment
                const isBajaFulfillment = index === 0; // loguu.png - move up more
                const isBoazBikes = index === 2; // g2m.PNG - move up to align with Tricon
                return (
                  <div 
                    key={index + 6} 
                    className={`flex items-center justify-center ${isBajaFulfillment ? 'mt-1' : ''} ${isBoazBikes ? '-mt-1' : ''}`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ width: Math.round(logo.width * 0.8), height: Math.round(logo.height * 0.8) }}
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Fourth row - single logo centered */}
            <div className="flex justify-center">
              <div className="flex items-center justify-center">
                <img
                  src={logos[9].src}
                  alt={logos[9].alt}
                  style={{ width: Math.round(logos[9].width * 0.8), height: Math.round(logos[9].height * 0.8) }}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop layout - unchanged */}
        <div className="hidden md:grid grid-cols-5 gap-x-8 gap-y-6 justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
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
