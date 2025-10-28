import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Keluarga Muda",
    content: "Rumahnya sangat bagus dan sesuai dengan budget. Lokasi strategis dekat dengan kampus IPB, sangat cocok untuk anak yang kuliah di sana.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Siti Nurhaliza",
    role: "Pensiunan",
    content: "Lingkungan tenang dan asri, sempurna untuk menikmati masa pensiun. Desain rumahnya modern dan fasilitasnya lengkap.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ahmad Rizki",
    role: "Investor",
    content: "Investasi yang sangat menguntungkan. Harga terjangkau dengan kualitas bangunan premium. Nilai properti terus meningkat setiap tahun.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-luxury">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apa Kata <span className="text-gold">Mereka?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Testimoni dari penghuni yang telah merasakan kenyamanan tinggal di cluster kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-card/10 backdrop-blur-sm border-gold/20 hover:border-gold hover:shadow-gold-glow transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-gray-200 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gold text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
