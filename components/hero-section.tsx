import React from "react";
import Image from "next/image";
import {
  Mail,
  SendHorizonal,
  Check,
  BarChart2,
  Bot,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import { LogoCloud } from "./logo-cloud";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section
          className="relative bg-cover bg-center bg-no-repeat min-h-screen md:min-h-[120vh] lg:min-h-[130vh] md:bg-[length:140%_140%] md:bg-bottom"
          style={{ 
            backgroundImage: 'url("/hero.png")',
            backgroundSize: 'cover'
          }}
        >
          {/* Background overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative mx-auto max-w-6xl px-2 pb-20 pt-16 lg:pt-24 z-10 min-h-screen md:min-h-[120vh] lg:min-h-[130vh] flex flex-col justify-center">
            <div className="relative z-10 mx-auto max-w-4xl text-left flex flex-col items-start -mt-8 sm:-mt-12 lg:-mt-38">
              {/* Spline animation background for hero section only */}
              <h1 className="text-balance text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold max-w-4xl ml-6 sm:ml-8 md:ml-0 lg:-ml-16 text-left self-start leading-tight sm:leading-normal">
                Future-ready businesses<br className="sm:hidden" /> with data analytics<br className="sm:hidden" /> and AI deployment
              </h1>
              {/* Subheading with icons and words - moved below headline, left aligned */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 mb-6 text-muted-foreground text-base sm:text-lg font-medium self-start ml-6 sm:ml-8 md:ml-0 lg:-ml-16">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5" /> Data Analytics
                </span>
                <span className="opacity-60 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" /> AI Automation
                </span>
                <span className="opacity-60 hidden sm:inline">·</span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> Agentic AI
                </span>
              </div>
              {/* Add empty space below headline and icons */}
              {/* <div className="mb-16" /> */}
              {/* <AnimatedGroup className="mt-12 w-full flex flex-col items-start">
                <Features />
              </AnimatedGroup> */}
            </div>
            {/* Right side: herologo.png image, moved further above, increased size, and shifted more right */}
          </div>
        </section>
        <div>
          <LogoCloud />
        </div>
      </main>
    </>
  );
}
