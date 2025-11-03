import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { InfoBar } from "@/components/InfoBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPosts, getFeaturedImage, getAuthorName, WPPost } from "@/lib/wp";
import { useNavigate } from "react-router-dom";

// Data artikel kini diambil dari WordPress
// Pastikan env `VITE_WP_URL` terpasang, misal: https://your-wp-site.com

const Articles = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tips");
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      try {
        const wp = await getPosts(10);
        if (active) setPosts(wp);
      } catch (e: unknown) {
        const message =
          e instanceof Error
            ? e.message
            : typeof e === "string"
            ? e
            : "Gagal memuat artikel";
        if (active) setError(message);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

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
              {loading && (
                <div className="text-center text-muted-foreground">Memuat artikel…</div>
              )}
              {error && !loading && (
                <div className="text-center text-red-600">{error}</div>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden" onClick={() => navigate(`/articles/${post.slug}`)}>
                        <img
                          src={getFeaturedImage(post) || 
                            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"}
                          alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{getAuthorName(post) || "Admin"}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </CardTitle>
                        <CardDescription className="text-base">
                          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto" onClick={() => navigate(`/articles/${post.slug}`)}>
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
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img
                          src={getFeaturedImage(post) || 
                            "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80"}
                          alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{getAuthorName(post) || "Admin"}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </CardTitle>
                        <CardDescription className="text-base">
                          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto" onClick={() => navigate(`/articles/${post.slug}`)}>
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
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full hover:border-gold transition-all duration-300 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img
                          src={getFeaturedImage(post) || 
                            "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80"}
                          alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{getAuthorName(post) || "Admin"}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-gold transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </CardTitle>
                        <CardDescription className="text-base">
                          <span dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="group/btn p-0 h-auto" onClick={() => navigate(`/articles/${post.slug}`)}>
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
