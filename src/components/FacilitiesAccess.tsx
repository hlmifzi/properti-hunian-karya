import { motion } from "framer-motion";
import { Shield, Trees, Church, Droplets, Lightbulb, Hospital, UtensilsCrossed, Waves, Mountain, Wind, ShoppingCart, Store } from "lucide-react";

const fasum = [
  { label: "Keamanan 24 Jam", icon: Shield },
  { label: "Taman & Area Hijau", icon: Trees },
  { label: "Masjid", icon: Church },
  { label: "Saluran Drainase Rapi", icon: Droplets },
  { label: "Jalan Paving & Penerangan", icon: Lightbulb },
  { label: "Tidak Banjir", icon: Lightbulb },
];

const akses = [
  { label: "Rumah sakit", icon: Hospital },
  { label: "Suasana Kota & Pedesaan", icon: UtensilsCrossed },
  { label: "Dekat Wisata curug & pemancingan", icon: Waves },
  { label: "Pemandangan gunung", icon: Mountain },
  { label: "Udara sejuk berkabut", icon: Wind },
  { label: "Dekat dengan pasar", icon: ShoppingCart },
  { label: "Indomaret, laundry dll", icon: Store },
];

export const FacilitiesAccess = () => {
  return (
    <section id="facilities-access" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fasilitas & Akses Sekitar
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Fasilitas umum di cluster dan akses ke titik penting di sekitar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Fasum */}
          <motion.div
            id="fasum"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gold/10 border border-gold/30">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Fasum</h3>
            </div>
            
            <div className="space-y-4">
              {fasum.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Akses */}
          <motion.div
            id="akses"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gold/10 border border-gold/30">
                <Mountain className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Akses</h3>
            </div>
            
            <div className="space-y-4">
              {akses.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};