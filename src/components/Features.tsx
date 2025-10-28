import { motion } from "framer-motion";
import { Home, Trees, Car, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Desain Modern Minimalis",
    description: "Arsitektur kontemporer dengan finishing premium dan detail yang memukau",
  },
  {
    icon: Trees,
    title: "Lingkungan Asri",
    description: "Dikelilingi area hijau dan taman yang memberikan suasana tenang dan nyaman",
  },
  {
    icon: Car,
    title: "Akses Mudah ke IPB & Tol",
    description: "Lokasi strategis hanya 5 menit dari Kampus IPB Dramaga dan akses tol",
  },
  {
    icon: DollarSign,
    title: "Harga Terjangkau",
    description: "Investasi cerdas untuk keluarga muda dengan skema pembayaran fleksibel",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mengapa Memilih <span className="text-gold">Kami?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keunggulan yang menjadikan hunian ini pilihan sempurna untuk investasi masa depan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-8 h-full border-border hover:border-gold hover:shadow-gold-glow transition-all duration-300 bg-card">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
