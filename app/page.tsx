import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import Payment from "@/components/payment";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative mx-auto max-w-6xl px-2 pb-20 pt-28 lg:pt-40">
        <div className="relative z-10 mx-auto max-w-4xl text-left flex flex-col items-start">
          <FeaturesSection />
        </div>
      </div>
      <ServicesSection />
      <WorkSection />
      <TeamSection />

      <Testimonials />

      <div id="contact">
        <Payment />
      </div>
      <Footer />
    </main>
  );
}
