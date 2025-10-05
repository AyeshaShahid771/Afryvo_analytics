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
          className="relative bg-cover bg-bottom bg-no-repeat min-h-[120vh] lg:min-h-[130vh] md:bg-[length:140%_140%]"
          style={{
            backgroundImage: 'url("/hero.png")',
          }}
        >
          {/* Background overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative mx-auto max-w-6xl px-2 pb-20 pt-16 lg:pt-24 z-10 min-h-[120vh] lg:min-h-[130vh] flex flex-col justify-center">
            <div className="relative z-10 mx-auto max-w-4xl text-left flex flex-col items-start -mt-24 sm:-mt-20 lg:-mt-20">
              {/* Spline animation background for hero section only */}
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl ml-4 sm:ml-6 md:ml-0 text-left self-start leading-tight sm:leading-normal"
              >
                Future-ready businesses with data analytics and AI deployment
              </TextEffect>
              {/* Subheading with icons and words - moved below headline, left aligned */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 mb-6 text-muted-foreground text-sm sm:text-base font-medium self-start ml-4 sm:ml-6 md:ml-0">
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
