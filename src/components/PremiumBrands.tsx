import { motion } from "framer-motion";
import { Sparkles, Hammer, Shield, Wrench, Lock, Paintbrush } from "lucide-react";

const brandItems = [
  { label: "Material Premium", icon: Sparkles },
  { label: "Finishing Berkualitas", icon: Paintbrush },
  { label: "Kualitas Konstruksi", icon: Hammer },
  { label: "Aksesori Terbaik", icon: Wrench },
  { label: "Hardware Kokoh", icon: Lock },
  { label: "Cat Tahan Cuaca", icon: Shield },
];

export const PremiumBrands = () => {
  return (
    <section id="premium-brands" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Premium Brands
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Kami menggunakan material dari brand terkemuka.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group bg-card rounded-xl border border-border p-6 hover:border-gold hover:shadow-gold-glow transition-all duration-300 text-center"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};