import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Emil Nnani ",
    role: "CEO of  Boazbikes",
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
    <section id="testimonials" className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Restructured Stat & Metric Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8 pb-10 border-b border-white/10">
          {/* Left Side: Structured Key Metrics */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-geist-sans)] tracking-tight">
                50+
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mt-1.5 font-medium">
                AI &amp; Agentic Projects
              </span>
            </div>

            <div className="hidden sm:block h-12 w-px bg-zinc-800" />

            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-geist-sans)] tracking-tight">
                200+
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mt-1.5 font-medium">
                Data Analytics Dashboards
              </span>
            </div>

            <div className="hidden sm:block h-12 w-px bg-zinc-800" />

            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl font-extrabold text-zinc-400 font-[family-name:var(--font-geist-sans)] tracking-tight">
                350+
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-500 mt-1.5 font-medium">
                Total Solutions Built
              </span>
            </div>
          </div>

          {/* Right Side: Description & CTA Actions */}
          <div className="max-w-xl space-y-4">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Don’t just take our word for it—hear from founders and executives who’ve transformed their business operations with our autonomous AI agents, enterprise RAG architectures, and executive BI dashboards.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors">
                <a href="#contact">Get Started with AI</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <a href="#work">Explore Case Studies</a>
              </Button>
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
