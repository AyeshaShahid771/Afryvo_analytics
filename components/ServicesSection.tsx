"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";

import {
  ActivityIcon,
  ArrowDown,
  ArrowRight,
  BarChart3Icon,
  Bot,
  CpuIcon,
  DatabaseIcon,
  EyeIcon,
  FileSearchIcon,
  FileTextIcon,
  FilterIcon,
  HandshakeIcon,
  LightbulbIcon,
  LockIcon,
  MessageCircleIcon,
  MicIcon,
  MousePointerClick,
  NetworkIcon,
  RadarIcon,
  ScanIcon,
  SearchCodeIcon,
  SearchIcon,
  ServerIcon,
  ShieldCheckIcon,
  Sparkles,
} from "lucide-react";

// Service card component
const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-[#0d0d11]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#121218]/90 transition-all duration-500 hover:-translate-y-1 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.03)] hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.95),0_0_50px_rgba(255,255,255,0.07)] backdrop-blur-xl group cursor-pointer">
      <CardHeader className="p-5">
        <div className="w-12 h-12 rounded-xl bg-zinc-800/80 group-hover:bg-zinc-800 group-hover:border-zinc-600 border border-zinc-700/50 flex items-center justify-center mb-4 transition-all duration-300">
          <Icon className="h-6 w-6 text-zinc-300 group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-white text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

// Service data
const serviceCategories = {
  business: [
    {
      icon: DatabaseIcon,
      title: "Data Extraction & Integration",
      description:
        "Collect and integrate data from multiple sources including SQL, NoSQL, APIs, ETL pipelines, and web scraping (BeautifulSoup, Scrapy). Build scalable ingestion workflows with Python, FastAPI, and Airflow to ensure clean, analytics-ready data.",
    },
    {
      icon: FilterIcon,
      title: "Data Cleaning & Preprocessing",
      description:
        "Transform raw datasets into structured, high-quality data using Pandas, NumPy, OpenRefine, and PySpark. Handle missing values, outliers, and duplicates to prepare data pipelines optimized for downstream analytics and machine learning.",
    },
    {
      icon: NetworkIcon,
      title: "Data Modeling & Structuring",
      description:
        "Design efficient schemas and models for relational and analytical databases with MySQL, PostgreSQL, Snowflake, and BigQuery. Implement star/snowflake schemas, OLAP cubes, and dimensional modeling for BI reporting and performance analytics.",
    },
    {
      icon: SearchIcon,
      title: "Exploratory Data Analysis (EDA)",
      description:
        "Perform statistical exploration and data profiling with Python (Matplotlib, Seaborn, Plotly), R, and Jupyter Notebooks. Identify trends, correlations, and outliers to deliver data-driven insights for smarter business strategies.",
    },
    {
      icon: BarChart3Icon,
      title: "Data Visualization & Dashboards",
      description:
        "Develop interactive dashboards and reports using Tableau, Power BI, Looker, and Plotly Dash. Present complex datasets with clarity and design visualizations that highlight KPIs, OKRs, and business performance metrics.",
    },
    {
      icon: LightbulbIcon,
      title: "Business Intelligence & Insights",
      description:
        "Turn data into actionable business intelligence using Power BI, Tableau, Google Data Studio, and Excel. Deliver automated reporting systems, KPI monitoring, and storytelling dashboards that empower data-driven decision-making.",
    },
  ],
  agenticAI: [
    {
      icon: EyeIcon,
      title: "Fine-tuned CV models, structured output",
      description:
        "Build and deploy custom Vision LLMs, GPT-4 Vision, LLaVA, PyTorch, and OpenCV models for automated object recognition, visual document understanding, and multi-modal image parsing.",
    },
    {
      icon: MicIcon,
      title: "Voice AI & Virtual Assistants",
      description:
        "Build natural voice assistants with LangGraph, VAPI, Twilio Voice, Whisper, and Speech-to-Text APIs, enabling real-time voice conversations for customer service, smart devices, and accessibility.",
    },
    {
      icon: FileTextIcon,
      title: "YOLO, OCR, and LayoutLM in production",
      description:
        "Enterprise document processing with LayoutLMv3, Tesseract, PaddleOCR, spatial layout analysis, and bounding-box detection for automated form and table extraction.",
    },
    {
      icon: CpuIcon,
      title: "CNNs, OCR, and confidence-scored extraction",
      description:
        "Leverage deep convolutional networks, high-accuracy OCR, and automated confidence scoring to extract data from scanned documents, invoices, receipts, and IDs.",
    },
    {
      icon: ScanIcon,
      title: "Deep learning pipelines for pixel-to-JSON",
      description:
        "Implement Visual RAG, Donut, and TrOCR end-to-end vision parsing pipelines to convert raw document images directly into structured, enterprise-ready JSON endpoints.",
    },
    {
      icon: NetworkIcon,
      title: "Multi-Agent AI Workflows & RAG Chatbots",
      description:
        "Build autonomous multi-agent systems and enterprise RAG chatbots using LangGraph, CrewAI, AutoGen, Vector DBs, and OpenAI function calling, where AI agents collaborate, retrieve contextual knowledge, and execute complex workflows.",
    },
  ],
  scalability: [
    {
      icon: LockIcon,
      title: "End-to-End Data Protection",
      description:
        "Ensure data confidentiality and integrity with AES-256 encryption, SSL/TLS, and secure APIs. Protect client data across storage, transfer, and processing with enterprise-grade encryption standards.",
    },
    {
      icon: ServerIcon,
      title: "High Availability & Scalability",
      description:
        "Deliver scalable and resilient systems with auto-scaling, load balancing, and failover clustering. Ensure 99.9% uptime SLAs across cloud platforms including AWS, Azure, and GCP.",
    },
    {
      icon: ActivityIcon,
      title: "Performance & Reliability",
      description:
        "Guarantee robust performance with redundant infrastructure, caching, and optimized databases. Monitor real-time usage with Datadog, Prometheus, and ELK stack to maintain consistent reliability.",
    },
    {
      icon: RadarIcon,
      title: "Continuous Monitoring & Alerts",
      description:
        "Implement proactive monitoring with SIEM tools, anomaly detection, and automated alerts. Minimize downtime by detecting issues early and resolving them before they impact business operations.",
    },
    {
      icon: HandshakeIcon,
      title: "24/7 Support & Maintenance",
      description:
        "Offer round-the-clock technical support, incident response, and system maintenance to keep mission-critical systems always available and secure.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Compliance & Trust Assurance",
      description:
        "Adhere to global compliance standards including GDPR, HIPAA, and SOC 2, ensuring data protection, client trust, and transparent governance practices.",
    },
  ],
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("agenticAI");

  return (
    <section id="services" className="py-24 text-white relative bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Explore our features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our full suite of tools organized by category to help you
            find exactly what you need.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <Tabs
            defaultValue="agenticAI"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex flex-col items-center justify-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-500/80 text-white text-xs font-semibold mb-8 shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(255,255,255,0.15)] backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_10px_#ffffff]"></span>
                </span>
                <span className="uppercase tracking-wider text-[11px] text-white font-bold">Click Tabs To Switch Category</span>
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="flex items-center text-white"
                >
                  <ArrowDown className="size-4 shrink-0 text-white stroke-[2.5]" />
                </motion.div>
              </motion.div>

              <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950/90 p-1.5 text-zinc-400 border border-zinc-800 backdrop-blur-xl shadow-2xl">
                <TabsTrigger
                  value="agenticAI"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer text-zinc-400 hover:text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-zinc-500/80 data-[state=active]:shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(255,255,255,0.15)] group"
                >
                  <Bot className="size-4 shrink-0 text-zinc-400 group-hover:text-white data-[state=active]:text-white transition-colors" />
                  <span>Agentic AI</span>
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer text-zinc-400 hover:text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-zinc-500/80 data-[state=active]:shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(255,255,255,0.15)] group"
                >
                  <BarChart3Icon className="size-4 shrink-0 text-zinc-400 group-hover:text-white data-[state=active]:text-white transition-colors" />
                  <span>Data Analytics</span>
                </TabsTrigger>
                <TabsTrigger
                  value="scalability"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer text-zinc-400 hover:text-white data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-zinc-500/80 data-[state=active]:shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(255,255,255,0.15)] group"
                >
                  <ShieldCheckIcon className="size-4 shrink-0 text-zinc-400 group-hover:text-white data-[state=active]:text-white transition-colors" />
                  <span>Scalability</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Agentic AI Features Content */}
            <TabsContent value="agenticAI">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white">
                  Agentic AI Features
                </h3>
                <p className="text-gray-400 mt-2">
                  Advanced AI solutions that transform your business with
                  intelligent automation and decision-making capabilities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.agenticAI.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Business Features Content */}
            <TabsContent value="business">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white">
                  Data Analytics Features
                </h3>
                <p className="text-gray-400 mt-2">
                  Essential features to help your business grow and succeed in
                  today's competitive market.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.business.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Scalability Features Content */}
            <TabsContent value="scalability">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white">
                  Data Security & Reliability
                </h3>
                <p className="text-gray-400 mt-2">
                  Enterprise-grade security and scalability solutions to keep
                  your systems reliable, protected, and compliant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.scalability.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonial Section removed as requested */}
      </div>
    </section>
  );
}
