import Image from "next/image";
import { FaRegCalendarCheck, FaProjectDiagram } from "react-icons/fa";
import { BarChart2, Bot, LayoutDashboard } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-transparent px-4 py-12"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Data into <br /> Intelligent Outcomes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 text-center md:text-left">
            Afryvo Analytics combines real-time dashboards, enterprise-grade
            data intelligence, and AI-driven chatbots into a single
            ecosystem—helping organizations unlock insights and deliver
            measurable impact.
          </p>
          <div className="space-y-8 w-full">
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                <FaRegCalendarCheck />
              </span>
              <span className="text-xl font-medium text-white">
                Past 6 years of excellence
              </span>
            </div>
            <p className="text-gray-300 text-base mb-2 ml-9">
              Your Data. Our Expertise. Measurable Impact. We have delivered
              consistent results for clients across industries for over 6 years.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                <FaProjectDiagram />
              </span>
              <span className="text-lg font-medium text-white">
                350+ successful projects
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                <LayoutDashboard />
              </span>
              <span className="text-lg font-medium text-white">
                Real-time dashboards & KPIs
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                <Bot />
              </span>
              <span className="text-lg font-medium text-white">
                AI chatbots & Agentic AI
              </span>
            </div>
          </div>
        </div>
        {/* Right Side: Dashboard Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/dashboard1.png"
            alt="Dashboard preview"
            width={700}
            height={400}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
