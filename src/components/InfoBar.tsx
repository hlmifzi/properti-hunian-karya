import { Phone, MapPin, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfoBar = () => {
  const messages = [
    "🏆 Cluster Eksklusif Dekat IPB Dramaga",
    "✅ SHM — Legalitas Aman",
    "🎁 Bonus Kanopi, AC, Pompa, kitchen set, dan smart lock",
    "💰 Proses KPR Mudah & Cepat",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % messages.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute left-0 right-0 top-0 z-50 glass-nav text-white">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between text-sm">
        {/* Kiri: Slider Promo */}
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-gold" />
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-gray-200"
          >
            {messages[current]}
          </motion.span>
        </div>

        {/* Kanan: Lokasi & Kontak */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-gray-200">Dramaga, Bogor</span>
          </div>
          <a
            href="https://wa.me/6289649931253"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>62 896-4993-1253</span>
          </a>
        </div>
      </div>
    </div>
  );
};