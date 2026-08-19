import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emil Nnani ",
    role: "CEO of Boazbikes",
    text: "Ahad did a fantastic job in completing my project; whenever I needed changes, he worked on it and got it to me quickly. Help me through everything and knows what he is doing.",
  },
  {
    name: "Ryan Bradley",
    role: "Founder of The Bradley Consulting Group",
    text: "You guys are rockstars!",
  },
  {
    name: "David Diliberto",
    role: "Design Lead, Shopify",
    text: "Ahad went well above my expectations. He’s a very smart analyst who listened to my project requirements and provided valuable input on how it could be better. He took what I needed and quickly had something for me to review and work with. Looking forward to our continued work together. :-)",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-28 sm:pt-36 pb-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Classy Metric Showcase Header */}
        <div className="mb-20">
          {/* Header Title & Intro */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs font-mono tracking-[0.18em] uppercase mb-4 backdrop-blur-md">
              <Sparkles className="size-3.5 text-zinc-400" />
              <span>PROVEN IMPACT AT SCALE</span>
            </div>
            <h2 className="font-[family-name:var(--font-geist-sans)] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Driving Enterprise AI &amp; Analytics
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
              Hear from founders and executives who’ve transformed their business operations with our autonomous AI agents, enterprise RAG architectures, and executive BI dashboards.
            </p>
          </div>

          {/* 2-Column Glassmorphic Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            <div className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 mb-3 leading-none">
                50+
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                AI &amp; AGENTIC PROJECTS
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Autonomous LangGraph agents, STT/TTS voice receptionists, and custom RAG pipelines.
              </p>
            </div>

            <div className="relative group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all duration-300">
              <div className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 mb-3 leading-none">
                200+
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                DATA ANALYTICS DASHBOARDS
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Executive BI portals, real-time KPI scorecards, and multi-channel revenue platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="bg-background rounded-2xl shadow-sm border border-muted-foreground/10"
            >
              <CardContent className="p-6 flex flex-col h-full items-center text-center">
                <p className="text-base mb-6 text-foreground">{t.text}</p>
                <div className="mt-auto flex flex-col items-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#FBBF24"
                        className="w-5 h-5 mx-0.5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
