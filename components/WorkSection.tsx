"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronUp,
  Check,
  Settings,
  BarChart,
  Shield,
  Clock,
  Users,
  Brain,
  Code,
  Bot,
  Trophy,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * NOTE: To add 3D models using Spline:
 * 1. Install Spline: npm install @splinetool/react-spline
 * 2. Add these imports:
 *    import dynamic from "next/dynamic";
 *    import { Suspense } from "react";
 *
 * 3. Add this code before the component:
 *    const Spline = dynamic(() => import('@splinetool/react-spline'), {
 *      ssr: false,
 *      loading: () => <div className="flex items-center justify-center h-[400px]">
 *                      <p className="text-gray-500">Loading 3D model...</p>
 *                     </div>
 *    });
 *
 * 4. Replace the placeholder div with:
 *    <div className="w-full h-[400px] relative overflow-visible">
 *      <Suspense fallback={<div className="flex items-center justify-center h-full">
 *                           <p className="text-gray-500">Loading animation...</p>
 *                          </div>}>
 *        <Spline scene="YOUR_SPLINE_URL_HERE" />
 *      </Suspense>
 *    </div>
 */

// Feature types
interface Feature {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  bullets?: string[];
  width?: number;
  height?: number;
}

// Feature categories
const features: Record<string, Feature[]> = {
  main: [
    {
      id: "sales_investment",
      title: "Performance dashboard",
      description:
        "Track lead generation, qualification, and revenue contribution with this interactive sales & investment dashboard.",
      image: "/board1.PNG",
      bullets: [
        "Monitor Customer, Partner, Prospect, and Referral Partner lifetime value and lead count",
        "Track monthly lead progression by qualification status (Qualified, Not Qualified, Others)",
        "Visualize overall lead distribution with real-time donut segmentation",
        "Rank campaigns such as Organic Website, Walk-in Digital, Referrals, and Social Media by lead performance",
        "Identify top owners by Leads, Lifetime Value, and % Conversion to evaluate sales contribution",
        "Support data-driven decision making with insights on qualified vs. unqualified leads",
      ],
    },
    {
      id: "rag-chatbot",
      title: "RAG-Powered Chatbot with LangGraph Agents",
      description:
        "Deliver precise, context-aware answers with a Retrieval-Augmented Generation chatbot built on LangGraph agents.",
      image: "/chat.PNG",
      bullets: [
        "Contextual answers from your documents in real time",
        "LangGraph-powered multi-agent workflows",
        "Dynamic tool use for retrieval, reasoning, and actions",
        "Run SQL queries directly on your database",
        "Send emails automatically from chat",
        "Book meetings on your calendar",
      ],
    },
    {
      id: "ai_fitness_plan",
      title: "AI Voice Fitness & Diet Plan Generator",
      description:
        "Personalized AI-powered fitness and diet plans tailored to your unique profile. Voice-interactive routines generated instantly for faster results.",
      image: "/fit.png",
      bullets: [
        "Voice-powered AI fitness assistant with LangChain integration",
        "Personalized plans based on weight, height, and body composition",
        "Custom diet and exercise recommendations considering allergies & medical issues",
        "Flexible programs designed around your available workout days per week",
        "Balanced meal and exercise schedules optimized for long-term results",
        "AI-driven insights and real-time adjustments for faster transformation",
      ],
    },
    {
      id: "fts_scorecard",
      title: "FTS Performance Scorecard Dashboard",
      description:
        "Track FTS performance, rankings, and sales across regions with this real-time scorecard dashboard.",
      image: "/board2.PNG",
      bullets: [
        "Highlight top 3 performers with rank, percentage, and finalized sales value",
        "Track new hire finalized PIB and 6-month average finalized sales by region",
        "Measure sales efficiency with sales-per-hour insights",
        "Compare regional performance across North Florida, Keystone, Midwest, Pacific, and more",
        "Visualize year-over-year growth in finalized sales",
        "Enable leadership to monitor and improve field training impact with data-driven insights",
      ],
    },
    {
      id: "sleep_expert_dashboard_features",
      title: "Sleep Expert Stats Dashboard",
      description:
        "Track sales, performance, and merchandising. Monitor employee results, YTD sales, and rankings with clear insights.",
      image: "/board3.png",
      bullets: [
        "Monitor finalized sales, YOY growth, gross margin, and sales per ticket in real time",
        "Track individual employee performance with district, regional, and division rankings",
        "Visualize YTD sales trends with color-coded growth and comparison charts",
        "Analyze merchandising mix across luxury, premium, promo, and value categories",
        "Evaluate vendor contributions from Simmons, Serta, Tempur, Sealy, and more",
        "Measure attach rates, step-ups, add-ons, and finance metrics for deeper insights",
      ],
    },
    {
      id: "channel_pag_dashboard_features",
      title: "Channel PAG Dashboard",
      description:
        "Track partner sales, regional attainment, and channel trends. Identify top partners and products driving growth.",
      image: "/board4.png",
      bullets: [
        "Monitor current year and quarterly attainment across Global, AMER, EMEA, and APAC regions",
        "Visualize sales attainment with dynamic gauges and trend comparisons",
        "Analyze channel sales motions including agencies, resellers, and hyperscale partners",
        "Compare channel vs non-channel revenue contributions across quarters",
        "Break down deal sizes with detailed deal bucket insights (<$10K, $10K–$1M+)",
        "Identify top 10 partners and top 10 products driving revenue growth",
      ],
    },
  ],
  // customization removed
};

// Helper function to get icon for feature
const getFeatureIcon = (id: string) => {
  switch (id) {
    case "audit_reporting":
      return <Shield className="w-5 h-5 text-white" />;
    case "analytics":
      return <BarChart className="w-5 h-5 text-white" />;
    case "sales_investment":
      return <BarChart className="w-5 h-5 text-white" />;
    case "fts_scorecard":
      return <Trophy className="w-5 h-5 text-white" />;
    case "sleep_expert_dashboard_features":
      // User-check icon for Sleep Expert Stats Dashboard (employee performance)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="9" cy="7" r="4" />
          <path d="M17 11v2a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-2" />
          <polyline points="16 19 18 21 22 17" />
        </svg>
      );
    case "channel_pag_dashboard_features":
      // Trending-up icon for Channel PAG Dashboard
      return <TrendingUp className="w-5 h-5 text-white" />;
    case "security":
      return <Shield className="w-5 h-5 text-white" />;
    case "automation":
      return <Clock className="w-5 h-5 text-white" />;
    case "ai_fitness_plan":
      return <Bot className="w-5 h-5 text-white" />;
    case "collaboration":
      return <Users className="w-5 h-5 text-white" />;
    case "ai":
      return <Brain className="w-5 h-5 text-white" />;
    case "api":
      return <Code className="w-5 h-5 text-white" />;
    case "rag-chatbot":
      return <Brain className="w-5 h-5 text-white" />;
    default:
      return <Settings className="w-5 h-5 text-white" />;
  }
};

export default function WorkSection() {
  // Set default to first feature in main array
  const firstFeatureId = features.main[0]?.id || "";
  const [selectedTab, setSelectedTab] = useState(firstFeatureId);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(
    firstFeatureId
  );

  // Find the currently selected feature
  const selectedFeature = features.main.find(
    (feature) => feature.id === selectedTab
  );

  // Toggle expanded state for a feature
  const toggleExpand = (featureId: string) => {
    if (expandedFeature === featureId) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(featureId);
      setSelectedTab(featureId);
    }
  };

  return (
    <section
      id="work"
      className="pt-16 pb-28 text-white relative min-h-screen flex items-center"
    >
      {/* Background image only on desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: 'url("/background3.png")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      ></div>
      {/* Desktop overlay - only show on medium screens and up */}
      <div className="absolute inset-0 bg-black/60 hidden md:block"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Centralized heading and description */}
        <div className="mb-24 text-center mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">
            Glance at Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the impactful projects and collaborations that showcase our
            expertise and creativity.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-9 mt-16">
          {/* Left Column - Feature List */}
          <div className="space-y-3 lg:col-span-6">
            {features.main.map((feature) => (
              <div
                key={feature.id}
                className={cn(
                  "border border-gray-800 rounded-lg overflow-hidden transition-all duration-300",
                  expandedFeature === feature.id
                    ? "bg-gray-900/50"
                    : "bg-gray-900/20 hover:bg-gray-900/30"
                )}
              >
                <div
                  className="p-4 flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(feature.id)}
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="p-2 bg-gray-800/70 rounded-md mt-0.5">
                      {getFeatureIcon(feature.id)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-base">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>

                      {/* Expanded content with feature bullets */}
                      {expandedFeature === feature.id && (
                        <div className="mt-4 ml-1 pt-3 border-t border-gray-800/50">
                          <ul className="space-y-2 mt-2">
                            {(
                              feature.bullets || [
                                "Real-time reporting and dashboards",
                                "Custom metrics and KPIs",
                                "Data visualization tools",
                                "Export capabilities",
                                "Predictive analysis",
                              ]
                            ).map((bullet, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="text-white w-3.5 h-3.5" />
                                <span className="text-sm text-gray-400">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {expandedFeature === feature.id ? (
                    <ChevronUp className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}

            {/* "Explore all features" dropdown */}
            <div
              className={cn(
                "border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 mt-5",
                expandedFeature === "explore"
                  ? "bg-gray-900/50"
                  : "bg-gray-900/20 hover:bg-gray-900/30"
              )}
            >
              <div
                className="p-4 flex justify-between items-start cursor-pointer"
                onClick={() => {
                  if (expandedFeature === "explore") {
                    setExpandedFeature(null);
                  } else {
                    setExpandedFeature("explore");
                    setSelectedTab("explore");
                  }
                }}
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="p-2 bg-gray-800/70 rounded-md mt-0.5">
                    {/* Diamond AI icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 22 9 12 22 2 9 12 2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">
                      AI Receptionist Chatbot
                    </h3>
                    <p className="text-sm text-gray-400">
                      AI-powered virtual receptionist that engages and qualifies
                      leads 24/7 while improving customer experience with
                      instant, personalized responses
                    </p>

                    {/* Expanded content */}
                    {expandedFeature === "explore" && (
                      <div className="mt-4 ml-1 pt-3 border-t border-gray-800/50">
                        <ul className="space-y-2 mt-2">
                          {[
                            "Engage with customers in a natural, human-like conversation",
                            "Available 7–12 hours daily (configurable for 24/7 support)",
                            "Automatically request and store customer emails securely in the database",
                            "Understand customer budgets and match them with suitable company offerings",
                            "Assist repair inquiries by scheduling calls or escalating to human support",
                            "Offer consultation for new, repairing, or upgrading services",
                            "Handle urgent situations like alarms, malfunctions, or escalations in real time",
                            "Assign customers to the right service plans and escalate to plan handlers if needed",
                          ].map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="text-white w-3.5 h-3.5" />
                              <span className="text-sm text-gray-400">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {expandedFeature === "explore" ? (
                  <ChevronUp className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Feature Details with Image (Desktop) */}
          <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-5 lg:col-span-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                {selectedTab === "explore" ? (
                  <>
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                      {/* Diamond AI icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="12 2 22 9 12 22 2 9 12 2" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium">
                      AI Receptionist Chatbot
                    </h3>
                  </>
                ) : (
                  selectedFeature && (
                    <>
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        {getFeatureIcon(selectedFeature.id)}
                      </div>
                      <h3 className="text-xl font-medium">
                        {selectedFeature.title}
                      </h3>
                    </>
                  )
                )}
                {/* No fallback for Advanced Customization or empty state */}
              </div>
              {/* Removed Popular badge */}
            </div>

            <div
              className="relative bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center min-w-0 min-h-0"
              style={{ width: "auto", height: "auto" }}
            >
              <Image
                src={
                  selectedTab === "explore"
                    ? "/AI receptionist.PNG"
                    : selectedFeature?.image || ""
                }
                alt={selectedFeature?.title || "Feature Image"}
                width={selectedFeature?.width || 798}
                height={selectedFeature?.height || 400}
                className="object-contain object-center opacity-90"
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </div>

            <p className="text-gray-400 mb-4 text-sm">
              {selectedTab === "explore"
                ? "AI-powered virtual receptionist that engages and qualifies leads 24/7 while improving customer experience with instant, personalized responses"
                : selectedFeature?.description ||
                  "Tailor the platform to your specific needs with extensive customization options."}
            </p>

            <div className="mt-5 space-y-3">
              <h4 className="font-medium mb-3 text-sm">
                {selectedTab === "explore"
                  ? "AI Receptionist Chatbot Features:"
                  : selectedFeature?.title
                  ? `${selectedFeature.title} Features:`
                  : "Available Features:"}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTab === "explore"
                  ? [
                      "Engage with customers in a natural, human-like conversation",
                      "Available 7–12 hours daily (configurable for 24/7 support)",
                      "Automatically request and store customer emails securely in the database",
                      "Understand customer budgets and match them with suitable company offerings",
                      "Assist repair inquiries by scheduling calls or escalating to human support",
                      "Offer consultation for new, repairing, or upgrading services",
                      "Handle urgent situations like alarms, malfunctions, or escalations in real time",
                      "Assign customers to the right service plans and escalate to plan handlers if needed",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "sales_investment"
                  ? [
                      "Customer, Partner, Prospect, and Referral Partner performance tracking",
                      "Lifetime value and lead count monitoring by segment",
                      "Real-time lead qualification insights (Qualified, Not Qualified, Others)",
                      "Campaign performance ranking across digital and referral channels",
                      "Top owners ranked by Leads, Lifetime Value, and % Conversion",
                      "Interactive visualizations to analyze sales pipeline and conversion health",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "fts_scorecard"
                  ? [
                      "Real-time ranking of top-performing field training specialists",
                      "Track finalized sales and performance percentages by region",
                      "Compare new hire performance with 6-month average sales trends",
                      "Measure sales efficiency with sales-per-hour insights",
                      "Highlight year-over-year growth in finalized sales",
                      "Access detailed leaderboards for regional and individual performance",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "sleep_expert_dashboard_features"
                  ? [
                      "Real-time tracking of finalized sales, YOY growth, and gross margins",
                      "District, regional, and division-level ranking for employee performance",
                      "Interactive YTD sales visualization with growth and comparison charts",
                      "Detailed sales metrics including tickets, AOV, and returns analysis",
                      "Merchandising insights across luxury, premium, promo, and vendor mix",
                      "Add-on tracking with attach rates, step-ups, and finance metrics",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "rag-chatbot"
                  ? [
                      "Retrieval-augmented context for every query",
                      "Multi-agent orchestration with LangGraph",
                      "Live document ingestion and updating",
                      "Advanced reasoning and tool chaining",
                      "Enterprise-grade scalability and security",
                      "Seamless API and UI integration",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "ai_fitness_plan"
                  ? [
                      "Real-time fitness and nutrition progress monitoring",
                      "Secure storage of health, diet, and workout data",
                      "Personalized access controls for tailored plans",
                      "Smart AI-powered performance and health detection",
                      "Built-in compliance with dietary restrictions and medical needs",
                      "Detailed plan history and progress audit logging",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "analytics"
                  ? [
                      "Billing complexity insights to compare case mix across Single, Double, and Triple groups",
                      "Average Billing CMI by complexity type (W/ MCC, W/ CC, No MCC/CC) for better benchmarking",
                      "% of cases with queries and errors to identify compliance gaps",
                      "Error trends by reviewer to improve coding accuracy",
                      "Secure export of claims and case-level data for audits and compliance",
                      "Predictive analytics to forecast billing complexity and revenue impact",
                      "Custom KPIs for healthcare providers to track performance goals",
                      "Interactive visualization tools for data-driven decision making",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : selectedFeature?.id === "channel_pag_dashboard_features"
                  ? [
                      "Real-time tracking of global, regional, and quarterly sales attainment",
                      "Regional performance insights across AMER, EMEA, and APAC markets",
                      "Interactive attainment gauges and channel trend visualizations",
                      "Detailed breakdown of sales motions including agencies, resellers, and hyperscale",
                      "Channel vs non-channel revenue analysis across multiple quarters",
                      "Deal size bucket tracking from <$10K to $1M+ for sales pipeline visibility",
                      "Top 10 partner and top 10 product insights driving revenue growth",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))
                  : [
                      "Real-time retrieval from your knowledge sources",
                      "End-to-end encrypted conversations",
                      "Role-based access and agent-level controls",
                      "Intelligent monitoring for query failures & anomalies",
                      "Compliance-ready workflows for enterprise standards",
                      "Detailed logs for audits and debugging",
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="text-white w-3.5 h-3.5 flex-shrink-0" />
                        <span className="text-xs text-gray-300">{bullet}</span>
                      </div>
                    ))}
              </div>

              {/* Learn more button removed as requested */}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Cards with images */}
        <div className="lg:hidden mt-16 space-y-6">
          {/* Regular features */}
          {features.main.map((feature) => (
            <div key={feature.id} className="space-y-4">
              {/* Feature Card */}
              <div
                className={cn(
                  "border border-gray-800 rounded-lg overflow-hidden transition-all duration-300",
                  expandedFeature === feature.id
                    ? "bg-gray-900/50"
                    : "bg-gray-900/20 hover:bg-gray-900/30"
                )}
              >
                <div
                  className="p-4 flex justify-between items-start cursor-pointer"
                  onClick={() => toggleExpand(feature.id)}
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="p-2 bg-gray-800/70 rounded-md mt-0.5">
                      {getFeatureIcon(feature.id)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-base">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>

                      {/* Expanded content with feature bullets */}
                      {expandedFeature === feature.id && (
                        <div className="mt-4 ml-1 pt-3 border-t border-gray-800/50">
                          <ul className="space-y-2 mt-2">
                            {(
                              feature.bullets || [
                                "Real-time reporting and dashboards",
                                "Custom metrics and KPIs",
                                "Data visualization tools",
                                "Export capabilities",
                                "Predictive analysis",
                              ]
                            ).map((bullet, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Check className="text-white w-3.5 h-3.5" />
                                <span className="text-sm text-gray-400">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {expandedFeature === feature.id ? (
                    <ChevronUp className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                  )}
                </div>
              </div>

              {/* Feature Image - Shows right after the card */}
              {feature.image && (
                <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                      {getFeatureIcon(feature.id)}
                    </div>
                    <h4 className="text-lg font-medium">{feature.title}</h4>
                  </div>
                  <div className="relative bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={feature.width || 798}
                      height={feature.height || 400}
                      className="object-contain object-center opacity-90 w-full"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* AI Receptionist Chatbot */}
          <div className="space-y-4">
            {/* AI Receptionist Card */}
            <div
              className={cn(
                "border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 mt-5",
                expandedFeature === "explore"
                  ? "bg-gray-900/50"
                  : "bg-gray-900/20 hover:bg-gray-900/30"
              )}
            >
              <div
                className="p-4 flex justify-between items-start cursor-pointer"
                onClick={() => {
                  if (expandedFeature === "explore") {
                    setExpandedFeature(null);
                  } else {
                    setExpandedFeature("explore");
                    setSelectedTab("explore");
                  }
                }}
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="p-2 bg-gray-800/70 rounded-md mt-0.5">
                    {/* Diamond AI icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polygon points="12 2 22 9 12 22 2 9 12 2" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base mb-1">
                      AI Receptionist Chatbot
                    </h3>
                    <p className="text-sm text-gray-400">
                      AI-powered virtual receptionist that engages and qualifies
                      leads 24/7 while improving customer experience with
                      instant, personalized responses
                    </p>

                    {/* Expanded content */}
                    {expandedFeature === "explore" && (
                      <div className="mt-4 ml-1 pt-3 border-t border-gray-800/50">
                        <ul className="space-y-2 mt-2">
                          {[
                            "Engage with customers in a natural, human-like conversation",
                            "Available 7–12 hours daily (configurable for 24/7 support)",
                            "Automatically request and store customer emails securely in the database",
                            "Understand customer budgets and match them with suitable company offerings",
                            "Assist repair inquiries by scheduling calls or escalating to human support",
                            "Offer consultation for new, repairing, or upgrading services",
                            "Handle urgent situations like alarms, malfunctions, or escalations in real time",
                            "Assign customers to the right service plans and escalate to plan handlers if needed",
                          ].map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="text-white w-3.5 h-3.5" />
                              <span className="text-sm text-gray-400">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {expandedFeature === "explore" ? (
                  <ChevronUp className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 w-5 h-5 mt-1.5 ml-3 flex-shrink-0" />
                )}
              </div>
            </div>

            {/* AI Receptionist Image */}
            <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-4">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  {/* Diamond AI icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polygon points="12 2 22 9 12 22 2 9 12 2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium">AI Receptionist Chatbot</h4>
              </div>
              <div className="relative bg-gray-800/50 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/AI receptionist.PNG"
                  alt="AI Receptionist Chatbot"
                  width={798}
                  height={400}
                  className="object-contain object-center opacity-90 w-full"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
