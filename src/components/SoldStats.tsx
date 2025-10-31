import { motion } from "framer-motion";

export const SoldStats = () => {
  const items: { label: string; size: string; count?: number }[] = [
    { label: "Unit Type", size: "36/72 m²", count: 52 },
    { label: "Unit Type", size: "60/72 m²", count: 76 },
    { label: "Unit Type", size: "72/84 m²", count: 35 },
    { label: "Unit Ruko Type", size: "80/55 m²", count: 5 },
  ];

  return (
    <section id="sold-stats" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Laku Terjual
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            163 Unit Rumah Pilihan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-card rounded-lg border border-border p-6 shadow-sm hover:border-gold transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-xl font-semibold text-foreground">{item.size}</p>
                </div>
                <div className="flex items-center">
                  {typeof item.count === "number" ? (
                    <span className="px-3 py-1 rounded-full bg-gold text-white text-sm font-semibold">
                      {item.count}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">—</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};