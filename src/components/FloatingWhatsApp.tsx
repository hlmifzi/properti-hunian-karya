import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20properti%20dari%20website", "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-400 rounded-full opacity-50"
          />
          {isOpen ? (
            <X className="w-7 h-7 text-white z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white z-10 group-hover:rotate-12 transition-transform" />
          )}
        </motion.button>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full -z-10"
          />
        )}
      </motion.div>

      {/* Chat Popup */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20,
          scale: isOpen ? 1 : 0.8,
          display: isOpen ? "block" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-24 right-6 z-50 w-80"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gold">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Tim Marketing</h3>
                <p className="text-white/80 text-sm">Biasanya membalas dalam 1 menit</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 bg-gray-50">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
              <p className="text-gray-700 mb-2">👋 Halo! Selamat datang di PremiumHomes</p>
              <p className="text-gray-600 text-sm">
                Kami siap membantu Anda menemukan hunian impian. Ada yang bisa kami bantu?
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Mulai Chat
            </motion.button>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-6 py-3 text-center">
            <p className="text-xs text-gray-500">Powered by WhatsApp Business</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
