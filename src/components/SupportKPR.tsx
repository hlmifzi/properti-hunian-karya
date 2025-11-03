import { motion } from "framer-motion";
import { Building2, CreditCard } from "lucide-react";

const banks = [
  "BCA",
  "Mandiri",
  "BNI",
  "BRI",
  "BTN",
  "CIMB Niaga",
  "OCBC NISP",
];

export const SupportKPR = () => {
  return (
    <section id="support-kpr" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-gold mb-3">
            <CreditCard className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Support KPR</h2>
          <p className="text-lg text-muted-foreground mt-2">Kami mendukung pengajuan KPR dari bank populer berikut:</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {banks.map((bank, idx) => (
            <motion.div
              key={bank}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:border-gold hover:shadow-gold-glow transition-all duration-300"
            >
              <Building2 className="w-10 h-10 text-gold/30 group-hover:text-gold mx-auto mb-3 transition-colors" />
              <span className="text-foreground font-semibold text-sm">{bank}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};