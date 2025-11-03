import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getFeaturedImage, getAuthorName, WPPost } from "@/lib/wp";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<WPPost | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      try {
        if (!slug) throw new Error("Slug tidak ditemukan");
        const p = await getPostBySlug(slug);
        if (active) setPost(p);
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
  }, [slug]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 text-sm text-gray-500">
          <Link to="/articles" className="hover:underline">← Kembali ke Artikel</Link>
        </div>

        {loading && (
          <div className="animate-pulse">Memuat artikel…</div>
        )}

        {!loading && error && (
          <div className="text-red-600">{error}</div>
        )}

        {!loading && !error && !post && (
          <div>Artikel tidak ditemukan.</div>
        )}

        {!loading && post && (
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div className="text-sm text-gray-500 mb-6">
              <span>{new Date(post.date).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</span>
              {getAuthorName(post) ? (
                <span> • {getAuthorName(post)}</span>
              ) : null}
            </div>

            {getFeaturedImage(post) && (
              <img
                src={getFeaturedImage(post)}
                alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                className="w-full h-auto rounded-lg mb-6"
              />
            )}

            <Separator className="my-6" />

            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
}