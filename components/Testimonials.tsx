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
  
  }
  
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
              <h2 className="text-5xl font-extrabold tracking-tight mt-2 mb-0 text-foreground">
              350+
            </h2>
            <p className="text-xl text-muted-foreground mt-10 mb-2">
              Dashboards and AI solutions built 
            </p>
          </div>
          <div className="flex-1 flex flex-col md:items-end gap-4">
            <div className="text-lg text-foreground font-medium mb-2 text-right">
              Don’t just take our word for it—hear from people who’ve
              transformed their businesses with our data analytics dashboards,
              AI chatbots, and voice assistants
            </div>
            <div className="flex gap-2">
              <Button className="rounded-full px-6 py-2 text-base font-semibold">
                Get Started with AI
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-2 text-base font-semibold"
              >
                Power with AI
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
