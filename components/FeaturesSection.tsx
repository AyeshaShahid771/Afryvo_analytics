"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
  Sparkles,
  Bot,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/magicui/border-beam";

type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";

export default function FeaturesSection() {
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  return (
    <section id="FeaturesSection" className="w-full">
      <div className="space-y-8 px-0 md:space-y-16 lg:space-y-20">
        <div className="relative z-10 w-full space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold lg:text-5xl">
            Transforming Data into Intelligent Outcomes
          </h2>
          <p>
            Afryvo Analytics combines real-time dashboards, enterprise grade
            data intelligence, and AI-driven chatbots into a single
            ecosystem,helping organizations unlock insights and deliver
            measurable impact.
          </p>
        </div>

        <div className="grid gap-12 w-full md:grid-cols-2 lg:gap-20">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value: string) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Database className="size-4" />
                    Past 6 years of excellence
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Your Data .Our Expertise. Measurable Impact. We have delivered
                consistent results for clients across industries for over 6
                years.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4" />
                    350+ successful projects
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Over 350 completed projects in banking, healthcare, logistics,
                retail, and more delivering measurable business value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base w-full justify-between">
                  <span className="flex items-center gap-2">
                    <IdCard className="size-4" />
                    Real-time dashboards & KPIs
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Clear visualizations and dashboards help leaders spot patterns,
                track KPIs, and make smarter decisions, faster.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Bot className="size-4" />
                    AI chatbots & Agentic AI
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 8L10 13L15 8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                AI chatbots that work 24/7 with perfect memory. Smarter
                decisions, faster actions—powered by Agentic AI.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="relative flex overflow-hidden p-2 w-full">
            <div className="relative w-full mb-0 max-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden shadow-md"
                >
                  <Image
                    src="/d2.png"
                    className="w-full h-auto max-h-[520px] scale-110 object-contain rounded-2xl dark:mix-blend-lighten"
                    alt="Database visualization"
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* BorderBeam removed for clean background */}
          </div>
        </div>
      </div>
    </section>
  );
}
