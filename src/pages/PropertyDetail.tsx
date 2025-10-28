import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Bed, 
  Bath, 
  Car, 
  Ruler, 
  MapPin, 
  Shield, 
  Lock, 
  Droplets, 
  Zap, 
  Wind,
  Trees,
  ArrowLeft,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const propertyData: Record<string, any> = {
  ekonomis: {
    name: "Ekonomis",
    size: "30/60",
    price: "Mulai 400 Juta",
    priceDetail: "Rp 400.000.000 - Rp 450.000.000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      bedrooms: 2,
      bathrooms: 1,
      carport: 1,
      landSize: "60 m²",
      buildingSize: "30 m²",
      floors: 1,
      electricity: "1300 Watt",
      waterSource: "Sumur Bor 20m + Toren 500L",
    },
    features: [
      { icon: Shield, label: "Sertifikat Hak Milik (SHM)" },
      { icon: Lock, label: "Smart Door Lock" },
      { icon: Droplets, label: "Toren 500 Liter" },
      { icon: Droplets, label: "Sumur Bor 20 Meter" },
      { icon: Zap, label: "Instalasi Listrik 1300W" },
      { icon: Wind, label: "Ventilasi Optimal" },
      { icon: Trees, label: "Taman Depan" },
      { icon: Home, label: "Carport 1 Mobil" },
    ],
    description: "Rumah tipe Ekonomis dirancang untuk keluarga muda yang menginginkan hunian modern dengan harga terjangkau. Dilengkapi dengan fasilitas lengkap dan lokasi strategis dekat IPB Dramaga.",
    location: "Cluster Bogor Valley, 5 menit dari IPB Dramaga",
  },
  harmony: {
    name: "Harmony",
    size: "36/72",
    price: "Mulai 550 Juta",
    priceDetail: "Rp 550.000.000 - Rp 625.000.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      carport: 1,
      landSize: "72 m²",
      buildingSize: "36 m²",
      floors: 1,
      electricity: "2200 Watt",
      waterSource: "Sumur Bor 20m + Toren 700L",
    },
    features: [
      { icon: Shield, label: "Sertifikat Hak Milik (SHM)" },
      { icon: Lock, label: "Smart Door Lock Digital" },
      { icon: Droplets, label: "Toren 700 Liter" },
      { icon: Droplets, label: "Sumur Bor 20 Meter" },
      { icon: Zap, label: "Instalasi Listrik 2200W" },
      { icon: Wind, label: "AC Pre-Installed 1 Unit" },
      { icon: Trees, label: "Taman & Carport Luas" },
      { icon: Home, label: "Kitchen Set Standard" },
    ],
    description: "Tipe Harmony menawarkan keseimbangan sempurna antara kenyamanan dan nilai investasi. Dengan 2 kamar tidur dan 2 kamar mandi, cocok untuk keluarga kecil yang menginginkan privasi lebih.",
    location: "Cluster Bogor Valley, 5 menit dari IPB Dramaga",
  },
  premium: {
    name: "Premium",
    size: "60/72",
    price: "Mulai 750 Juta",
    priceDetail: "Rp 750.000.000 - Rp 875.000.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      bedrooms: 3,
      bathrooms: 2,
      carport: 1,
      landSize: "72 m²",
      buildingSize: "60 m²",
      floors: 2,
      electricity: "3500 Watt",
      waterSource: "Sumur Bor 25m + Toren 1000L",
    },
    features: [
      { icon: Shield, label: "Sertifikat Hak Milik (SHM)" },
      { icon: Lock, label: "Smart Door Lock + CCTV" },
      { icon: Droplets, label: "Toren 1000 Liter" },
      { icon: Droplets, label: "Sumur Bor 25 Meter" },
      { icon: Zap, label: "Instalasi Listrik 3500W" },
      { icon: Wind, label: "AC Pre-Installed 2 Unit" },
      { icon: Trees, label: "Taman & Gazebo" },
      { icon: Home, label: "Kitchen Set Premium + Canopy" },
    ],
    description: "Rumah Premium 2 lantai dengan desain modern minimalis. Dilengkapi dengan 3 kamar tidur dan 2 kamar mandi, ideal untuk keluarga berkembang yang menginginkan ruang lebih luas dan fasilitas premium.",
    location: "Cluster Bogor Valley, 5 menit dari IPB Dramaga",
  },
  luxury: {
    name: "Luxury",
    size: "72/84",
    price: "Mulai 1.2 Miliar",
    priceDetail: "Rp 1.200.000.000 - Rp 1.450.000.000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      bedrooms: 4,
      bathrooms: 3,
      carport: 2,
      landSize: "84 m²",
      buildingSize: "72 m²",
      floors: 2,
      electricity: "5500 Watt",
      waterSource: "Sumur Bor 30m + Toren 1500L",
    },
    features: [
      { icon: Shield, label: "Sertifikat Hak Milik (SHM)" },
      { icon: Lock, label: "Smart Home System + CCTV" },
      { icon: Droplets, label: "Toren 1500 Liter" },
      { icon: Droplets, label: "Sumur Bor 30 Meter" },
      { icon: Zap, label: "Instalasi Listrik 5500W" },
      { icon: Wind, label: "AC Pre-Installed 3 Unit" },
      { icon: Trees, label: "Taman Luas & Kolam" },
      { icon: Home, label: "Full Furnished + Canopy Premium" },
    ],
    description: "Tipe Luxury merupakan puncak kemewahan di cluster kami. Dengan 4 kamar tidur, 3 kamar mandi, dan smart home system, rumah ini dirancang untuk keluarga yang menginginkan kenyamanan maksimal dan gaya hidup premium.",
    location: "Cluster Bogor Valley, 5 menit dari IPB Dramaga",
  },
};

export default function PropertyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = propertyData[slug || ""];

  if (!property) {
    return (
      <div className="min-h-screen bg-dark-luxury flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Properti tidak ditemukan</h1>
          <Button onClick={() => navigate("/")} variant="default">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Halo, saya tertarik dengan rumah tipe ${property.name} (${property.size}). Mohon info lebih lanjut.`;

  return (
    <>
      <div className="min-h-screen bg-dark-luxury">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-6"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
        </motion.div>

        {/* Hero Image Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden">
            <div className="relative h-[400px] lg:h-[600px]">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-gold text-white text-lg px-4 py-2">
                  {property.size}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.map((img: string, idx: number) => (
                <div key={idx} className="relative h-[190px] lg:h-[292px]">
                  <img
                    src={img}
                    alt={`${property.name} ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Price */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Rumah Tipe <span className="text-gold">{property.name}</span>
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-gold">{property.priceDetail}</div>
              </motion.div>

              {/* Specs Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-secondary/30 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Spesifikasi Lengkap</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <Bed className="w-8 h-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{property.specs.bedrooms}</div>
                        <div className="text-sm text-muted-foreground">Kamar Tidur</div>
                      </div>
                      <div className="text-center">
                        <Bath className="w-8 h-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{property.specs.bathrooms}</div>
                        <div className="text-sm text-muted-foreground">Kamar Mandi</div>
                      </div>
                      <div className="text-center">
                        <Car className="w-8 h-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{property.specs.carport}</div>
                        <div className="text-sm text-muted-foreground">Carport</div>
                      </div>
                      <div className="text-center">
                        <Home className="w-8 h-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{property.specs.floors}</div>
                        <div className="text-sm text-muted-foreground">Lantai</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Ruler className="w-6 h-6 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Luas Tanah</div>
                          <div className="font-semibold text-foreground">{property.specs.landSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="w-6 h-6 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Luas Bangunan</div>
                          <div className="font-semibold text-foreground">{property.specs.buildingSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-6 h-6 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Daya Listrik</div>
                          <div className="font-semibold text-foreground">{property.specs.electricity}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Droplets className="w-6 h-6 text-gold" />
                        <div>
                          <div className="text-sm text-muted-foreground">Sumber Air</div>
                          <div className="font-semibold text-foreground">{property.specs.waterSource}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-secondary/30 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Fasilitas & Kelengkapan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-gold/10 transition-colors">
                          <feature.icon className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="text-foreground">{feature.label}</span>
                          <CheckCircle2 className="w-4 h-4 text-gold ml-auto" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-secondary/30 border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Deskripsi</h3>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-6"
              >
                <Card className="bg-gradient-to-br from-gold/20 to-secondary/30 border-gold/30 shadow-gold-glow">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Harga Mulai</div>
                      <div className="text-3xl font-bold text-gold">{property.price}</div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        className="w-full bg-gold hover:bg-gold/90 text-white h-12 text-lg shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                        onClick={() => window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Hubungi Kami
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-gold text-gold hover:bg-gold/10 h-12"
                        onClick={() => {
                          const element = document.getElementById('location');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Lihat Lokasi
                      </Button>
                    </div>

                    <div className="pt-6 border-t border-gold/20">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Keuntungan Membeli</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>Proses KPR mudah & cepat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>Lokasi strategis dekat IPB</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>Garansi struktur 5 tahun</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>Free biaya notaris & BPHTB</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <FloatingWhatsApp />
    </>
  );
}
