import { motion } from "framer-motion";

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
    <section id="support-kpr" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Support KPR</h2>
          <p className="text-lg text-muted-foreground mt-2">Kami mendukung pengajuan KPR dari bank populer berikut:</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {banks.map((bank, idx) => (
            <motion.div
              key={bank}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="w-full max-w-[220px] bg-card border border-border rounded-lg p-4 text-center hover:border-gold"
            >
              <span className="text-foreground font-semibold">{bank}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};