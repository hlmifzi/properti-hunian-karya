import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { InfoBar } from "@/components/InfoBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const articles = {
  tips: [
    {
      id: 1,
      title: "Tips Memilih Perumahan di Bogor yang Sejuk dan Strategis",
      excerpt: "Panduan lengkap memilih lokasi perumahan bogor yang tepat untuk keluarga Anda.",
      date: "15 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      slug: "tips-memilih-perumahan-bogor"
    },
    {
      id: 2,
      title: "Keuntungan Investasi Properti di Dramaga Bogor",
      excerpt: "Mengapa cluster bogor di kawasan Dramaga menjadi pilihan investasi terbaik.",
      date: "10 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",
      slug: "investasi-properti-dramaga"
    }
  ],
  kpr: [
    {
      id: 3,
      title: "Panduan KPR untuk Rumah Harga 300 Jutaan",
      excerpt: "Cara mudah mengajukan KPR untuk perumahan murah di bogor dengan cicilan terjangkau.",
      date: "12 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      slug: "panduan-kpr-300-juta"
    },
    {
      id: 4,
      title: "Cara Hitung Cicilan Rumah dengan Simulasi KPR",
      excerpt: "Gunakan kalkulator KPR untuk merencanakan pembelian rumah impian Anda.",
      date: "8 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      slug: "cara-hitung-cicilan-kpr"
    }
  ],
  lifestyle: [
    {
      id: 5,
      title: "Hunian Minimalis Modern untuk Keluarga Muda",
      excerpt: "Desain rumah harga 300 juta minimalis yang fungsional dan estetik.",
      date: "5 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      slug: "hunian-minimalis-modern"
    },
    {
      id: 6,
      title: "Fasilitas Lengkap di Perumahan Elit Bogor",
      excerpt: "Nikmati lifestyle eksklusif di perumahan dramaga bogor dengan fasilitas premium.",
      date: "2 Januari 2025",
      author: "Tim Dramaga Cantik",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
      slug: "fasilitas-perumahan-elit"
    }
  ]
};

const Articles = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tips");

  return (
    <div className="min-h-screen">
      <InfoBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Artikel & <span className="text-gold">Panduan Properti</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Temukan tips, panduan KPR, dan informasi terkini seputar perumahan dekat IPB dramaga
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="tips">Tips Properti</TabsTrigger>
              <TabsTrigger value="kpr">Panduan KPR</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            </TabsList>

            <TabsContent value="tips" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {articles.tips.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="kpr" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {articles.kpr.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lifestyle" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {articles.lifestyle.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Articles;
