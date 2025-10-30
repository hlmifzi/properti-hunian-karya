import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bed, Bath, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const propertyTypes = [
  {
    name: "Ekonomis",
    slug: "ekonomis",
    size: "30/60",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    price: "Mulai 400 Juta",
    specs: { bedrooms: 2, bathrooms: 1, carport: 1 },
  },
  {
    name: "Harmony",
    slug: "harmony",
    size: "36/72",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "Mulai 550 Juta",
    specs: { bedrooms: 2, bathrooms: 2, carport: 1 },
  },
  {
    name: "Premium",
    slug: "premium",
    size: "60/72",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    price: "Mulai 750 Juta",
    specs: { bedrooms: 3, bathrooms: 2, carport: 1 },
  },
  {
    name: "Luxury",
    slug: "luxury",
    size: "72/84",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    price: "Mulai 1.2 Miliar",
    specs: { bedrooms: 4, bathrooms: 3, carport: 2 },
  },
  {
    name: "Ruko Strategis",
    slug: "ruko-strategis",
    size: "90/60",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
    price: "Mulai 950 Juta",
    specs: { bedrooms: 1, bathrooms: 1, carport: 1 },
  },
];

export const PropertyTypes = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Hitung lebar kartu (termasuk gap) untuk scroll satu kartu per langkah
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const firstCard = el.querySelector('[data-card]') as HTMLElement | null;
    if (firstCard) {
      const gap = 24; // gap-6 = 24px
      setCardWidth(firstCard.offsetWidth + gap);
    }
  }, []);

  // Auto-slide
  useEffect(() => {
    const t = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(t);
  }, [cardWidth]);

  const handlePrev = () => {
    const el = sliderRef.current;
    if (!el || !cardWidth) return;
    const newIndex = (index - 1 + propertyTypes.length) % propertyTypes.length;
    setIndex(newIndex);
    el.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = sliderRef.current;
    if (!el || !cardWidth) return;
    const newIndex = (index + 1) % propertyTypes.length;
    setIndex(newIndex);
    el.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="property-types" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pilih <span className="text-gold">Tipe Rumah</span> Anda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berbagai pilihan tipe rumah dengan desain modern untuk memenuhi kebutuhan keluarga Anda
          </p>
        </motion.div>

        <div className="relative">
          {/* Arrows */}
          <button
            aria-label="Sebelumnya"
            onClick={handlePrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full p-2 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Berikutnya"
            onClick={handleNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full p-2 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="overflow-x-hidden"
          >
            <div className="flex gap-6">
              {propertyTypes.map((property, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-[300px] xl:min-w-[320px]"
                  data-card
                >
                  <Card className="overflow-hidden h-full border-border hover:border-gold hover:shadow-gold-glow transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-luxury/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                        {property.size}
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                        <Home className="w-6 h-6 text-gold" />
                        {property.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="text-2xl font-bold text-gold mb-4">{property.price}</div>
                      <div className="flex gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Bed className="w-4 h-4" />
                          <span className="text-sm">{property.specs.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-4 h-4" />
                          <span className="text-sm">{property.specs.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Car className="w-4 h-4" />
                          <span className="text-sm">{property.specs.carport}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button 
                        className="w-full bg-gold hover:bg-gold/90 text-white transition-all duration-300 hover:shadow-gold-glow"
                        onClick={() => navigate(`/property/${property.slug}`)}
                      >
                        Lihat Detail
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
