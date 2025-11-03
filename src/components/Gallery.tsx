import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    title: "Living Room Premium",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    title: "Master Bedroom",
  },
  {
    url: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80",
    title: "Modern Kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Bathroom",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    title: "Outdoor Area",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    title: "Carport & Garden",
  },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galeri & <span className="text-gold">Virtual Tour</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat detail interior dan eksterior rumah impian Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-luxury/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                  <div className="w-12 h-1 bg-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105"
          >
            <Image className="mr-2" />
            Lihat Galeri Lengkap
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
