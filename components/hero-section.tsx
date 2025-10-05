import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next";
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
      {/* Fullscreen Spline animation background */}
      {/* Hero section Spline animation background */}
      <div className="inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full">
          <Spline
        scene="https://prod.spline.design/hT-pDxi9vyA-26u3/scene.splinecode" 
      />
        </div>
        {/* Overlay to hide Built with Spline watermark */}
        <div
          style={{
            position: "absolute",
            right: "8px",
            bottom: "8px",
            width: "220px",
            height: "60px",
            background: "#0c0a09",
            zIndex: 20,
            borderRadius: "0px",
            boxShadow: "none",
          }}
        />
      </div>
      <HeroHeader />

      <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
        <section>
          <div className="relative mx-auto max-w-6xl px-2 pb-20 pt-28 lg:pt-40">
            <div className="relative z-10 mx-auto max-w-4xl text-left flex flex-col items-start">
              {/* Spline animation background for hero section only */}
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-4xl font-bold md:text-5xl max-w-4xl ml-6 md:ml-0 text-left self-start"
              >
                Future-ready businesses with data analytics and AI deployment
              </TextEffect>
              {/* Subheading with icons and words - moved below headline, left aligned */}
              <div className="flex items-center gap-6 mt-6 mb-6 text-muted-foreground text-base font-medium self-start ml-6 md:ml-0">
                <span className="flex items-center gap-2">
                  <BarChart2 className="w-5 h-5" /> Data Analytics
                </span>
                <span className="opacity-60">·</span>
                <span className="flex items-center gap-2">
                  <Bot className="w-5 h-5" /> AI Automation
                </span>
                <span className="opacity-60">·</span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Agentic AI
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
        <div className="mt-32">
          <LogoCloud />
        </div>
      </main>
    </>
  );
}
