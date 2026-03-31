import { useEffect } from "react";
import { useArticles, useCategories } from "@/hooks/useNewsData";

const Sitemap = () => {
  const { data: articles = [] } = useArticles();
  const { data: categories = [] } = useCategories();

  useEffect(() => {
    if (articles.length === 0 && categories.length === 0) return;

    const origin = window.location.origin;
    const today = new Date().toISOString().split("T")[0];

    const urls = [
      `<url><loc>${origin}/</loc><changefreq>hourly</changefreq><priority>1.0</priority><lastmod>${today}</lastmod></url>`,
      `<url><loc>${origin}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
      `<url><loc>${origin}/contact</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
      `<url><loc>${origin}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`,
      `<url><loc>${origin}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`,
      ...categories.map(
        (c) =>
          `<url><loc>${origin}/category/${c.slug}</loc><changefreq>daily</changefreq><priority>0.8</priority></url>`
      ),
      ...articles.map(
        (a) =>
          `<url><loc>${origin}/news/${a.slug}</loc><changefreq>weekly</changefreq><priority>0.9</priority><lastmod>${a.published_at.split("T")[0]}</lastmod></url>`
      ),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    window.location.href = url;
  }, [articles, categories]);

  return <div className="p-10 text-center text-muted-foreground">Generating sitemap…</div>;
};

export default Sitemap;
