import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-gold relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Siap Punya Hunian Impian?
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk memiliki rumah idaman Anda. 
            Dapatkan penawaran spesial terbatas hari ini!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white hover:bg-white/90 text-gold border-2 border-gold px-10 py-7 text-xl font-semibold shadow-2xl hover:scale-110 transition-all duration-300"
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
            >
              <MessageCircle className="mr-2" />
              Hubungi Kami
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 mt-8 text-sm"
          >
            *Promo terbatas untuk 10 pembeli pertama bulan ini
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
