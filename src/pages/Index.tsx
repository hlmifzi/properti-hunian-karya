import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PropertyTypes } from "@/components/PropertyTypes";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { InfoBar } from "@/components/InfoBar";
import { Navbar } from "@/components/Navbar";
import { SoldStats } from "@/components/SoldStats";
import { PremiumBrands } from "@/components/PremiumBrands";
import { SupportKPR } from "@/components/SupportKPR";
import { FacilitiesAccess } from "@/components/FacilitiesAccess";
import { KPRSimulator } from "@/components/KPRSimulator";
import { FAQAccordion } from "@/components/FAQAccordion";
// PromoBar diintegrasikan ke InfoBar

const Index = () => {
  return (
    <div id="top" className="min-h-screen">
      <InfoBar />
      <Navbar />
      <div className="pt-0">
        <div className="-mt-16">
          <Hero />
        </div>
        <div className="bg-background">
          <PropertyTypes />
        </div>
        <div className="bg-secondary/30">
          <SoldStats />
        </div>
        <div className="bg-background">
          <Features />
        </div>
        <div className="bg-secondary/30">
          <Gallery />
        </div>
        <div className="bg-background">
          <FacilitiesAccess />
        </div>
        <div className="bg-secondary/30">
          <PremiumBrands />
        </div>
        <div className="bg-background">
          <Testimonials />
        </div>
        <div className="bg-secondary/30">
          <Location />
        </div>
        <div className="bg-background">
          <SupportKPR />
        </div>
        <div className="bg-secondary/30">
          <KPRSimulator />
        </div>
        <div className="bg-background">
          <FAQAccordion />
        </div>
        <div className="bg-secondary/30">
          <FinalCTA />
        </div>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
