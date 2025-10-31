import { motion } from "framer-motion";

const fasum = [
  "Keamanan 24 Jam",
  "Taman & Area Hijau",
  "Musholla",
  "Saluran Drainase Rapi",
  "Jalan Paving & Penerangan",
];

const akses = [
  "Rumah sakit",
  "Jajanan seperti kota Jakarta",
  "Wisata curug",
  "Pemandangan gunung",
  "Udara sejuk kabut",
  "Pasar",
  "Indomaret, laundry dll",
];

export const FacilitiesAccess = () => {
  return (
    <section id="facilities-access" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg border border-border p-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Fasum</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {fasum.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Akses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg border border-border p-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Akses</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {akses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};