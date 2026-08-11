import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import Testimonials from "@/components/Testimonials";
import Payment from "@/components/payment";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <TeamSection />
      <TechStackSection />

      <Testimonials />

      <div id="contact">
        <Payment />
      </div>
      <Footer />
    </main>
  );
}
