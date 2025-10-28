import { motion } from "framer-motion";
import { Home, Mail, Phone, MapPin, Instagram, Music } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-dark-luxury text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold">Premium<span className="text-gold">Homes</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Cluster eksklusif dengan desain modern dan lokasi strategis di Bogor
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold-glow"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="w-10 h-10 bg-gold/10 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold-glow"
              >
                <Music className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gold">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Beranda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Tipe Rumah</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Galeri</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Lokasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Kontak</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gold">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400">Jl. Dramaga Raya, Bogor, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-gray-400">info@premiumhomes.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gold">Jam Operasional</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Senin - Jumat: 08:00 - 17:00</li>
              <li>Sabtu: 08:00 - 15:00</li>
              <li>Minggu: 09:00 - 14:00</li>
              <li className="text-gold font-semibold mt-4">Kunjungan by appointment</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 PremiumHomes. All rights reserved. Designed with ❤️ for your dream home.</p>
        </motion.div>
      </div>
    </footer>
  );
};
