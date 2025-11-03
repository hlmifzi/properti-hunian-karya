type WPFeaturedMedia = {
  source_url?: string;
};

type WPAuthor = {
  name?: string;
};

type WPEmbedded = {
  "wp:featuredmedia"?: WPFeaturedMedia[];
  author?: WPAuthor[];
};

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: WPEmbedded;
};

const WP_URL = import.meta.env.VITE_WP_URL as string | undefined;
const API_BASE = WP_URL ? `${WP_URL}/wp-json/wp/v2` : undefined;

function ensureApi() {
  if (!API_BASE) {
    console.error("VITE_WP_URL env is not set. Falling back to local content.");
    throw new Error("WP API base not configured");
  }
}

export async function getPosts(perPage = 9): Promise<WPPost[]> {
  ensureApi();
  const url = `${API_BASE}/posts?per_page=${perPage}&_embed=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
  return (await res.json()) as WPPost[];
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  ensureApi();
  const url = `${API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch post by slug: ${res.status}`);
  const arr = (await res.json()) as WPPost[];
  return arr[0] ?? null;
}

export function getFeaturedImage(post: WPPost): string | undefined {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url as string | undefined;
}

export function getAuthorName(post: WPPost): string | undefined {
  const author = post._embedded?.author?.[0];
  return author?.name as string | undefined;
}