"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Afryvo Analytics do?",
    answer:
      "We design and build custom data analytics dashboards, AI chatbots, and voice assistants to help businesses make smarter, faster decisions.",
  },
  {
    question: "How can an analytics dashboard help my business?",
    answer:
      "Our dashboards provide real-time insights into sales, performance, and operations, allowing you to identify trends, reduce errors, and improve efficiency.",
  },
  {
    question: "Do you create custom AI chatbots?",
    answer:
      "Yes. Afryvo Analytics builds AI-powered chatbots tailored to your business needs—whether for customer support, lead generation, or internal process automation.",
  },
  {
    question: "Can I integrate a voice assistant into my existing systems?",
    answer:
      "Absolutely. We develop AI voice assistants that integrate seamlessly with your current business tools, enabling hands-free interactions and better customer engagement.",
  },
  {
    question: "Is my data secure with Afryvo Analytics?",
    answer:
      "Yes. We follow industry best practices for data security, including encryption, access control, and compliance with privacy regulations.",
  },
];

export default function FAQsSection() {
  return (
    <section
      id="faqs"
      className="py-20 min-h-screen flex items-center justify-center bg-white dark:bg-transparent text-black dark:text-white"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side: Heading, Subtitle, Description, Button */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-5xl font-bold mb-2 text-foreground dark:text-white">
            Need Help?
          </h2>
          <div className="text-4xl font-bold text-muted-foreground mb-6 dark:text-gray-400">
            We're here to assist.
          </div>
          <div className="text-lg text-muted-foreground mb-8 dark:text-gray-400">
            Still have questions? Feel free to contact our friendly{" "}
            <a href="#" className="underline">
              support team
            </a>{" "}
            specialists.
          </div>
        </div>
        {/* Right Side: Accordion */}
        <div className="flex-1 w-full">
          <div className="w-full">
            <Accordion type="single" className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>
                    <div className="flex flex-row items-center w-full justify-between gap-2 whitespace-nowrap cursor-pointer py-2">
                      <span className="text-base md:text-lg font-medium text-left text-black dark:text-white">
                        {faq.question}
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 flex-shrink-0 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className="text-base pb-4 block text-white dark:text-white">
                      {faq.answer}
                    </span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
