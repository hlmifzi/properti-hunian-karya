import { motion } from "framer-motion";
import { Home, Building2 } from "lucide-react";

export const SoldStats = () => {
  const items: { label: string; size: string; count?: number; isRuko?: boolean }[] = [
    { label: "Unit Type", size: "36/72 m²", count: 52 },
    { label: "Unit Type", size: "60/72 m²", count: 76 },
    { label: "Unit Type", size: "72/84 m²", count: 35 },
    { label: "Unit Ruko Type", size: "80/55 m²", count: 5, isRuko: true },
  ];

  const totalUnits = items.reduce((acc, item) => acc + (item.count || 0), 0);

  return (
    <section id="sold-stats" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Laku Terjual
          </h2>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
            <span className="text-5xl md:text-6xl font-bold text-gold">{totalUnits}</span>
            <span className="text-lg text-muted-foreground">Unit Rumah Pilihan</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-gold-glow hover:border-gold transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-gold/20 group-hover:text-gold/40 transition-colors">
                {item.isRuko ? <Building2 className="w-8 h-8" /> : <Home className="w-8 h-8" />}
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">{item.label}</p>
                <p className="text-2xl font-bold text-foreground">{item.size}</p>
                
                {typeof item.count === "number" && (
                  <div className="pt-3 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gold">{item.count}</span>
                      <span className="text-sm text-muted-foreground">unit terjual</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};