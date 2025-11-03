import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const previewArticles = [
  {
    id: 1,
    title: "Perumahan Bogor: Panduan Memilih Hunian Nyaman",
    excerpt: "Tips memilih perumahan di bogor yang sejuk dengan akses fasilitas kota.",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Perumahan Dramaga Bogor Dekat IPB",
    excerpt: "Rekomendasi perumahan dekat IPB Dramaga untuk keluarga dan mahasiswa.",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cluster Bogor: Lingkungan Asri dan Aman",
    excerpt: "Kenapa cluster bogor jadi pilihan hunian idaman dengan fasilitas lengkap.",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80",
  },
];

export const ArticlesPreview = () => {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Artikel <span className="text-gold">Terbaru</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Baca artikel seputar perumahan bogor, dramaga, dan KPR.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-gold transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group/btn p-0 h-auto" onClick={() => (window.location.href = "/articles")}>
                    Lihat Semua Artikel
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};