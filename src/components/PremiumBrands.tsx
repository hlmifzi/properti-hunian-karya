import { motion } from "framer-motion";

const brandChips = [
  "Material Premium",
  "Finishing Berkualitas",
  "Kualitas Konstruksi",
  "Aksesori Terbaik",
  "Hardware Kokoh",
  "Cat Tahan Cuaca",
];

export const PremiumBrands = () => {
  return (
    <section id="premium-brands" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Premium Brands
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Kami menggunakan material dari brand terkemuka.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {brandChips.map((chip, idx) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/30"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};