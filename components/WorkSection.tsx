"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Brain,
  Check,
  ExternalLink,
  Eye,
  Layers,
  Sparkles,
  Trophy,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  urlLabel: string;
  description: string;
  image: string;
  tags: string[];
  bullets: string[];
  icon: any;
}

const projects: Project[] = [
  {
    id: "computer_vision_ai",
    number: "01",
    title: "AI-Powered Computer Vision Detection & Intelligent Monitoring",
    category: "AI-POWERED COMPUTER VISION",
    urlLabel: "VISIONCORE.AI / COMPUTER-VISION",
    description:
      "Advanced computer vision platform designed to analyze live camera feeds, detect objects and anomalies, monitor safety, and turn visual data into actionable intelligence in real time.",
    image: "/vision.png",
    tags: ["COMPUTER VISION", "OBJECT DETECTION", "ANOMALY DETECTION", "REAL-TIME PROCESSING"],
    bullets: [
      "Real-time object & defect detection across live camera streams",
      "AI-powered anomaly detection for identifying unusual patterns and events",
      "Multi-camera vision processing with centralized monitoring and insights",
      "Automated alerts & intelligent actions triggered by detected events",
      "Custom computer vision models for industry-specific detection requirements",
    ],
    icon: Eye,
  },
  {
    id: "solar_ai_receptionist",
    number: "02",
    title: "AI Sales Receptionist for Automated Lead Conversion",
    category: "AI-POWERED VOICE & CHAT RECEPTIONIST",
    urlLabel: "SOLARTECH.AI / AI-RECEPTIONIST",
    description:
      "An intelligent AI receptionist that engages customers, qualifies solar leads, answers questions, generates personalized quotes, and schedules consultations automatically—24/7.",
    image: "/solar.png",
    tags: ["AI RECEPTIONIST", "LEAD QUALIFICATION", "AUTOMATED QUOTING", "APPOINTMENT SCHEDULING"],
    bullets: [
      "Human-Like AI Conversations — Understands customer questions & responds naturally",
      "Intelligent Lead Qualification — Collects property details & identifies high-intent prospects",
      "Automated Solar Quotes — Generates personalized estimates based on property data",
      "Appointment Scheduling — Books consultations & follow-ups automatically",
      "Lead Management & Analytics — Tracks conversations & conversion activity in real time",
    ],
    icon: Bot,
  },
  {
    id: "tiger_leads_ai",
    number: "03",
    title: "Multi-Agent AI Lead Intelligence & Matching Platform",
    category: "AI-POWERED LEAD INTELLIGENCE",
    urlLabel: "TIGERLEADS.AI / AI-LEAD-MARKETPLACE",
    description:
      "A production-grade AI SaaS platform that connects suppliers and contractors through intelligent lead scoring, real-time matching, and automated routing—helping teams discover, evaluate, and unlock high-value opportunities faster.",
    image: "/tiger.png",
    tags: ["AI LEAD SCORING", "REAL-TIME MATCHING", "MULTI-AGENT AI", "MULTI-TENANT SAAS"],
    bullets: [
      "AI Lead Scoring & Matching — Ranks opportunities & routes them to relevant contractors",
      "Real-Time Lead Marketplace — Browse live opportunities & bid on jobs confidently",
      "Credit-Based Lead Unlocking — Scalable credit system supporting self-serve SaaS billing",
      "Multi-Agent AI Orchestration — Automates intelligence & decision-making across the funnel",
      "Multi-Tenant Architecture & Security — Enterprise RBAC, TLS 1.3, AES-256 & SOC-2 controls",
    ],
    icon: Sparkles,
  },
  {
    id: "alliance_permitting_ai",
    number: "04",
    title: "AI-Powered Permit Operations & Workflow Automation Platform",
    category: "AI-POWERED PERMITTING PLATFORM",
    urlLabel: "ALLIANCEPERMITTING / AI-OPERATIONS",
    description:
      "An intelligent permitting operations platform that brings permit applications, leads, jurisdictions, documents, client communication, and AI-powered workflow automation into one connected workspace.",
    image: "/alliance.png",
    tags: ["LANGGRAPH AGENTS", "AI DOCUMENT INTELLIGENCE", "PERMIT AUTOMATION", "MULTI-TENANT SAAS"],
    bullets: [
      "AI Permit Review Agents — Stateful LangGraph agents assist with multi-step permit review",
      "Intelligent Document Processing — Identifies missing or incorrect documents automatically",
      "Permit & Application Management — Tracks applications from submission to approval",
      "Jurisdiction Intelligence — Centralizes AHJ contacts, requirements & vendor information",
      "Automated Workflow & Notifications — Real-time milestone tracking & approval alerts",
    ],
    icon: Layers,
  },
  {
    id: "sales_investment",
    number: "05",
    title: "Executive Performance & Revenue Dashboard",
    category: "SALES & EXECUTIVE BI",
    urlLabel: "afryvo.ai/analytics/executive-sales",
    description:
      "Interactive sales & investment dashboard delivering real-time lead qualification, campaign ROI analytics, and lifetime value distribution across customer segments.",
    image: "/board1.PNG",
    tags: ["PIPELINE ANALYTICS", "LTV TRACKING", "CAMPAIGN ROI", "DONUT SEGMENTATION"],
    bullets: [
      "Track Customer, Partner, Prospect & Referral Partner lifetime value",
      "Monitor monthly lead progression by qualification status (Qualified vs. Unqualified)",
      "Real-time donut segmentation & multi-channel campaign rankings",
      "Top owner leaderboards ranked by Leads, LTV, and % Conversion rates",
    ],
    icon: BarChart3,
  },
  {
    id: "rag-chatbot",
    number: "06",
    title: "LangGraph Multi-Agent RAG & SQL Chatbot",
    category: "AUTONOMOUS AI AGENTS",
    urlLabel: "afryvo.ai/agents/langgraph-rag",
    description:
      "Enterprise Retrieval-Augmented Generation system powered by LangGraph agents capable of live database queries, document reasoning, and automated email dispatch.",
    image: "/chat.PNG",
    tags: ["LANGGRAPH AGENTS", "VECTOR SEARCH RAG", "LIVE SQL QUERIES", "CALENDAR SYNC"],
    bullets: [
      "Real-time contextual document retrieval via semantic vector search",
      "Multi-agent reasoning with dynamic tool orchestration for complex queries",
      "Direct SQL query execution on live enterprise database systems",
      "Automated email dispatch & meeting calendar scheduling directly from chat",
    ],
    icon: Brain,
  },
  {
    id: "ai_fitness_plan",
    number: "07",
    title: "Voice AI Fitness & Routine Generator",
    category: "VOICE AI & HEALTH",
    urlLabel: "afryvo.ai/voice/fitness-routine-ai",
    description:
      "Voice-interactive AI health assistant leveraging LangChain to generate personalized fitness and nutritional routines based on medical profiles and weekly goals.",
    image: "/fit.png",
    tags: ["VOICE ASSISTANT AI", "LANGCHAIN FRAMEWORK", "PERSONALIZED NUTRITION", "DYNAMIC WORKOUTS"],
    bullets: [
      "Voice-activated fitness assistant with instant plan generation",
      "Personalized macro & calorie recommendations considering medical history",
      "Custom workout schedules based on available days per week",
      "Real-time routine adjustments and progress analytics",
    ],
    icon: Zap,
  },
  {
    id: "fts_scorecard",
    number: "08",
    title: "Field Specialist Performance Scorecard",
    category: "REGIONAL SCORECARDS",
    urlLabel: "afryvo.ai/analytics/fts-scorecard",
    description:
      "Real-time scorecard tracking field training specialist rankings, finalized sales values, sales-per-hour metrics, and regional YOY growth.",
    image: "/board2.PNG",
    tags: ["SPECIALIST LEADERBOARDS", "REGIONAL ATTAINMENT", "PIB METRICS", "YOY GROWTH"],
    bullets: [
      "Top-3 performer highlights with rank & finalized sales value",
      "New hire finalized PIB & 6-month average sales trends",
      "Sales-per-hour efficiency benchmarks across North Florida, Keystone & Pacific",
      "Year-over-year finalized sales growth tracking",
    ],
    icon: Trophy,
  },
  {
    id: "sleep_expert_dashboard",
    number: "09",
    title: "Retail Merchandising & Store Performance",
    category: "RETAIL OPERATIONS",
    urlLabel: "afryvo.ai/analytics/retail-store-stats",
    description:
      "Enterprise retail analytics suite tracking employee performance rankings, district/division metrics, gross margins, and vendor merchandise mix.",
    image: "/board3.png",
    tags: ["DISTRICT LEADERBOARDS", "MERCHANDISE MIX", "AOV & ATTACH RATES", "VENDOR ANALYTICS"],
    bullets: [
      "Real-time tracking of finalized sales, gross margins, and YOY growth",
      "District, regional, and division-level employee rankings",
      "Merchandise mix analysis across Luxury, Premium, and Value categories",
      "Attach rates, step-ups, add-ons, and finance metric insights",
    ],
    icon: Layers,
  },
  {
    id: "channel_pag_dashboard",
    number: "10",
    title: "Global Channel PAG Revenue & Attainment",
    category: "GLOBAL CHANNEL SALES",
    urlLabel: "afryvo.ai/analytics/channel-pag-global",
    description:
      "Global channel sales dashboard monitoring quarterly attainment across AMER, EMEA, and APAC regions with deal size bucket breakdowns.",
    image: "/board4.png",
    tags: ["GLOBAL ATTAINMENT", "RESELLER ANALYTICS", "DEAL SIZE BUCKETS", "PARTNER LEADERBOARDS"],
    bullets: [
      "AMER, EMEA, and APAC sales attainment monitoring with dynamic gauges",
      "Channel vs non-channel revenue comparisons across quarters",
      "Deal size bucket breakdowns (<$10K, $10K–$1M+)",
      "Top 10 partners & products driving quarterly growth",
    ],
    icon: TrendingUp,
  },
];

interface UnfoldProjectCardProps {
  project: Project;
  idx: number;
  totalProjects: number;
  onOpenModal: (p: Project) => void;
}

function UnfoldProjectCard({
  project,
  idx,
  totalProjects,
  onOpenModal,
}: UnfoldProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = project.icon;

  const cardVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, y: 15 }
      : {
          opacity: 0.25,
          rotateX: 12,
          rotateY: -2,
          translateY: 20,
          translateZ: -25,
          scale: 0.95,
          filter: "brightness(0.8)",
        },
    visible: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      translateY: 0,
      translateZ: 0,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 14,
        mass: 0.5,
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
  };

  const imageVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.97, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const contentVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: 10, y: 8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 115,
        damping: 14,
      },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.08 },
    },
  };

  return (
    <div className="perspective-[800px] sm:perspective-[1200px] overflow-x-clip py-2 sm:py-6 relative group/card-wrapper">
      {/* Smoky Ambient Lighting Backdrop */}
      <div className="absolute inset-0 sm:inset-4 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.07] via-zinc-500/[0.03] to-transparent blur-xl sm:blur-2xl opacity-65 group-hover/card-wrapper:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.01 }}
        className={cn(
          "relative transform-gpu bg-[#0d0d11]/95 border border-white/[0.1] hover:border-white/[0.22] rounded-xl sm:rounded-3xl p-3 sm:p-9 lg:p-12 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(255,255,255,0.03)] hover:shadow-[0_30px_100px_-10px_rgba(0,0,0,0.98),0_0_70px_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-all duration-500 group"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-center">
          {/* Left Column: Image Preview (7 cols) */}
          <motion.div variants={imageVariants} className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div
              onClick={() => onOpenModal(project)}
              className="relative w-full rounded-lg sm:rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl group/img cursor-pointer bg-zinc-950"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto block opacity-95 contrast-[1.02] group-hover/img:opacity-100 group-hover/img:brightness-[1.04] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity duration-500 pointer-events-none" />

              {/* Touch/Hover Inspect Action Badge */}
              <div className="absolute bottom-4 right-4 z-10 hidden sm:block sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wider shadow-2xl">
                  INSPECT HIGH-RES
                </span>
              </div>
            </div>

            {/* Editorial Metadata Footer */}
            <motion.div
              variants={footerVariants}
              className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400 uppercase px-0.5 pt-0.5"
            >
              <span className="text-zinc-300 font-medium">
                {project.number} / {totalProjects < 10 ? `0${totalProjects}` : totalProjects} — {project.category}
              </span>
              <span className="hidden sm:inline-block text-zinc-500 truncate max-w-[260px]">
                {project.urlLabel}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Title & Specifications (5 cols) */}
          <motion.div variants={contentVariants} className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Category Small-Caps Tag */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-zinc-200 text-[10px] sm:text-[11px] font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 sm:gap-2">
                <Icon className="size-3 sm:size-3.5 text-zinc-300" />
                {project.category}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 sm:mb-3 leading-snug sm:leading-[1.18] group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-base text-zinc-300/90 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Capability Bullets */}
            <div className="space-y-2 pt-0.5 sm:pt-1">
              <h4 className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-400">
                KEY SYSTEM CAPABILITIES:
              </h4>
              {project.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200">
                  <Check className="size-3.5 sm:size-4 text-white shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Editorial Minimalist Tech Tags */}
            <div className="pt-1 sm:pt-2">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-[10px] sm:text-xs font-mono text-zinc-300 tracking-wider uppercase font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkSection() {
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-12 sm:py-24 md:py-36 bg-black text-white relative overflow-hidden">
      {/* Background Radial Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-zinc-800/10 blur-[190px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-2 sm:px-4 md:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-24 px-2 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs font-mono tracking-[0.18em] uppercase mb-4 backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-zinc-400" />
            <span>ENTERPRISE CASE STUDIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-[family-name:var(--font-plus-jakarta)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4"
          >
            Glance at Our Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400/90 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Scroll down to explore our autonomous AI agents, enterprise RAG architectures, and executive BI platforms.
          </motion.p>
        </div>

        {/* 3D Unfold Reveal Project Showcase Cards */}
        <div className="space-y-6 sm:space-y-10 md:space-y-16">
          {projects.map((project, idx) => (
            <UnfoldProjectCard
              key={project.id}
              project={project}
              idx={idx}
              totalProjects={projects.length}
              onOpenModal={(p) => setSelectedModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-[#111115] border border-white/[0.1] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0c] border-b border-white/[0.08] shrink-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-400 tracking-widest">{selectedModalProject.number}</span>
                  <h4 className="font-[family-name:var(--font-plus-jakarta)] text-base font-bold text-white truncate">{selectedModalProject.title}</h4>
                </div>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="p-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative flex-1 min-h-[400px] w-full bg-[#0a0a0c] p-4">
                <Image
                  src={selectedModalProject.image}
                  alt={selectedModalProject.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-[#111115] border-t border-white/[0.08] shrink-0">
                <p className="text-sm text-zinc-300/90 mb-4 leading-relaxed">{selectedModalProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-400 font-mono text-[10px] tracking-[0.14em] uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
