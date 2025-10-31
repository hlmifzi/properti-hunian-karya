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
        <PropertyTypes />
        <Features />
        <SoldStats />
        <Gallery />
        <FacilitiesAccess />
        <PremiumBrands />
        <Testimonials />
        <Location />
        <SupportKPR />
        <FinalCTA />
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
