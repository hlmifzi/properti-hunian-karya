import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

export const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lokasi <span className="text-gold">Strategis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Posisi premium di jantung Bogor dengan akses mudah ke berbagai fasilitas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border hover:border-gold transition-colors duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kampus IPB Dramaga</h3>
                  <p className="text-muted-foreground">Hanya 5 menit berkendara dari kampus utama IPB</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border hover:border-gold transition-colors duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Akses Tol Jagorawi</h3>
                  <p className="text-muted-foreground">10 menit ke pintu tol untuk mobilitas tinggi</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border hover:border-gold transition-colors duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pusat Kota Bogor</h3>
                  <p className="text-muted-foreground">20 menit ke pusat kota dengan berbagai fasilitas</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden border-4 border-gold shadow-gold-glow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211042117!2d106.68942955!3d-6.595038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d2e54b0b0d%3A0x3027a76e352bea0!2sDramaga%2C%20Bogor%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
            <div className="absolute top-8 left-8 bg-gold text-white px-6 py-3 rounded-full font-semibold shadow-gold-glow">
              📍 5 Menit dari IPB Dramaga
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
