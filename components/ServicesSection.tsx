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
import {
  ActivityIcon,
  BarChart3Icon,
  DatabaseIcon,
  FileSearchIcon,
  FilterIcon,
  HandshakeIcon,
  LightbulbIcon,
  LockIcon,
  MessageCircleIcon,
  MicIcon,
  NetworkIcon,
  RadarIcon,
  SearchCodeIcon,
  SearchIcon,
  ServerIcon,
  ShieldCheckIcon,
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
    <Card className="bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all">
      <CardHeader className="p-5">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-white text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-400">
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
      icon: MessageCircleIcon,
      title: "Conversational AI & Chatbots",
      description:
        "Develop advanced AI chatbots using LangChain, OpenAI, LlamaIndex, and Hugging Face Transformers to automate support, boost engagement, and deliver human-like conversational experiences across multiple platforms.",
    },
    {
      icon: MicIcon,
      title: "Voice AI & Virtual Assistants",
      description:
        "Build natural voice assistants with LangGraph, VAPI, Twilio Voice, Whisper, and Speech-to-Text APIs, enabling real-time voice conversations for customer service, smart devices, and accessibility.",
    },
    {
      icon: FileSearchIcon,
      title: "AI-Powered Document Intelligence",
      description:
        "Create 'Talk-to-PDF' and enterprise document Q&A systems powered by LangChain, LlamaIndex, Vector Databases (Pinecone, Weaviate, FAISS), and OpenAI for instant document summarization, semantic search, and contextual answers.",
    },
    {
      icon: DatabaseIcon,
      title: "AI + Database Agents",
      description:
        "Enable natural language queries on databases with LangChain SQL agents, Postgres, MySQL, MongoDB, Google BigQuery and Retrieval-Augmented Generation (RAG) — making data analysis conversational and intuitive.",
    },
    {
      icon: SearchCodeIcon,
      title: "Retrieval-Augmented Generation (RAG) Systems",
      description:
        "Design scalable RAG pipelines using LangChain, LangGraph, Pinecone, Milvus, ChromaDB, and Hugging Face embeddings, ensuring context-aware AI that delivers accurate, enterprise-ready responses.",
    },
    {
      icon: NetworkIcon,
      title: "Multi-Agent AI Workflows",
      description:
        "Build autonomous multi-agent systems with LangGraph, CrewAI, AutoGen, and OpenAI function calling, where AI agents collaborate, plan, and execute complex tasks with minimal human oversight.",
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
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section id="services" className="py-24 text-white relative">
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
            defaultValue="business"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 bg-gray-800 rounded-md p-1 max-w-md mx-auto">
                <TabsTrigger
                  value="business"
                  className="text-white data-[state=active]:bg-black"
                >
                  Data Analytics
                </TabsTrigger>
                <TabsTrigger
                  value="agenticAI"
                  className="text-white data-[state=active]:bg-black"
                >
                  Agentic AI
                </TabsTrigger>
                <TabsTrigger
                  value="scalability"
                  className="text-white data-[state=active]:bg-black"
                >
                  Scalability
                </TabsTrigger>
              </TabsList>
            </div>

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
