import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const bannerMessages = [
  "🏆 Cluster Eksklusif Dekat IPB Dramaga",
  "✅ Legalitas Aman - Sudah Sertifikat Hak Milik (SHM)",
  "🎁 Bonus Kanopi, AC, Kitchen Set & Banyak Lagi",
  "💰 Proses KPR Mudah & Cepat",
];

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
];

const heroContent = [
  {
    title: "Temukan Hunian Modern",
    highlight: "dengan Sentuhan Elegan",
    description: "Cluster eksklusif di Bogor dekat IPB Dramaga — desain mewah, lingkungan asri, dan investasi masa depan."
  },
  {
    title: "Investasi Fleksibel",
    highlight: "Cocok untuk Kostan & Rumah Hari Tua",
    description: "Properti serbaguna dengan ROI tinggi — ideal untuk passive income atau hunian jangka panjang yang nyaman."
  },
  {
    title: "Lokasi Strategis Premium",
    highlight: "Dekat IPB & Tol Jagorawi",
    description: "Lingkungan asri dan tenang, namun tetap mudah diakses — hanya beberapa menit ke kampus dan tol."
  },
  {
    title: "Desain Modern Minimalis",
    highlight: "Plus Banyak Bonus Menarik",
    description: "Rumah cantik dengan desain contemporary — bonus kanopi, AC, kitchen set, dan masih banyak lagi!"
  }
];

export const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(bannerInterval);
  }, []);

  useEffect(() => {
    const contentInterval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % heroContent.length);
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(contentInterval);
  }, []);

  const scrollToPropertyTypes = () => {
    const element = document.getElementById('property-types');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentContent((prev) => (prev + 1) % heroContent.length);
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentContent((prev) => (prev - 1 + heroContent.length) % heroContent.length);
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Luxury House ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-luxury/70 via-dark-luxury/50 to-dark-luxury/90" />
      </div>

      {/* Auto-sliding Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 right-0 z-20 bg-gold py-3 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-center text-dark-luxury font-semibold text-sm md:text-base flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4" />
            {bannerMessages[currentBanner]}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          key={currentContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {heroContent[currentContent].title}
            <br />
            <span className="text-gold">{heroContent[currentContent].highlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            {heroContent[currentContent].description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-gold border-2 border-gold px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:scale-105"
              onClick={scrollToPropertyTypes}
            >
              Lihat Tipe Rumah
              <ArrowRight className="ml-2 text-gold" />
            </Button>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
            >
              Hubungi via WhatsApp
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2 mt-2">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentContent(index);
                  setCurrentImage(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentContent === index ? 'w-8 bg-gold' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold hover:border-gold transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold hover:border-gold transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
