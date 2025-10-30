import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const bannerMessages = [
  "🏆 Cluster Eksklusif Dekat IPB Dramaga",
  "✅ Legalitas Aman - Sudah Sertifikat Hak Milik (SHM)",
  "🎁 Bonus Kanopi, AC, Kitchen Set & Banyak Lagi",
  "💰 Proses KPR Mudah & Cepat",
];

export const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPropertyTypes = () => {
    const element = document.getElementById('property-types');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Modern Luxury House"
          className="w-full h-full object-cover"
        />
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Temukan Hunian Modern
          <br />
          <span className="text-gold">dengan Sentuhan Elegan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          Cluster eksklusif di Bogor dekat IPB Dramaga — desain mewah, lingkungan asri, dan investasi masa depan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105"
            onClick={scrollToPropertyTypes}
          >
            Lihat Tipe Rumah
            <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold text-white hover:bg-gold hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          >
            Hubungi via WhatsApp
          </Button>
        </motion.div>
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
