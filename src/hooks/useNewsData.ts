import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category_id: string;
  category_name: string;
  category_slug: string;
  author: string;
  author_avatar: string | null;
  image: string | null;
  published_at: string;
  reading_time: number;
  featured: boolean;
  trending: boolean;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface LiveUpdate {
  id: string;
  text: string;
  category_name: string;
  created_at: string;
}

type ArticleRow = Tables<"articles"> & {
  categories: Pick<Tables<"categories">, "name" | "slug"> | null;
};

type LiveUpdateRow = Tables<"live_updates"> & {
  categories: Pick<Tables<"categories">, "name"> | null;
};

const mapArticle = (row: ArticleRow): Article => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  content: row.content,
  category_id: row.category_id,
  category_name: row.categories?.name ?? "",
  category_slug: row.categories?.slug ?? "",
  author: row.author,
  author_avatar: row.author_avatar,
  image: row.image,
  published_at: row.published_at,
  reading_time: row.reading_time,
  featured: row.featured,
  trending: row.trending,
  meta_title: row.meta_title,
  meta_description: row.meta_description,
  og_image: row.og_image,
});

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*, categories(name, slug)")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(mapArticle);
    },
  });
}

export function useArticleBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data, error } = await supabase
        .from("articles")
        .select("*, categories(name, slug)")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data ? mapArticle(data) : null;
    },
    enabled: !!slug,
  });
}

export function useFeaturedArticle() {
  return useQuery({
    queryKey: ["featured-article"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*, categories(name, slug)")
        .eq("featured", true)
        .order("published_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return data ? mapArticle(data) : null;
    },
  });
}

export function useTrendingArticles() {
  return useQuery({
    queryKey: ["trending-articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*, categories(name, slug)")
        .eq("trending", true)
        .order("published_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return (data ?? []).map(mapArticle);
    },
  });
}

export function useArticlesByCategory(categorySlug: string | undefined) {
  return useQuery({
    queryKey: ["articles-by-category", categorySlug],
    queryFn: async () => {
      if (!categorySlug) return [];
      // First get category id
      const { data: cat } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", categorySlug)
        .maybeSingle();
      if (!cat) return [];
      const { data, error } = await supabase
        .from("articles")
        .select("*, categories(name, slug)")
        .eq("category_id", cat.id)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(mapArticle);
    },
    enabled: !!categorySlug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      if (error) throw error;
      return data as Category[];
    },
  });
}

export function useLiveUpdates() {
  return useQuery({
    queryKey: ["live-updates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("live_updates")
        .select("*, categories(name)")
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw error;
      return (data ?? []).map((row: LiveUpdateRow) => ({
        id: row.id,
        text: row.text,
        category_name: row.categories?.name ?? "News",
        created_at: row.created_at,
      })) as LiveUpdate[];
    },
  });
}

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hr ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
