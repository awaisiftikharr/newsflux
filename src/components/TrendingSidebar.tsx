import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTrendingArticles } from "@/hooks/useNewsData";

const TrendingSidebar = () => {
  const { data: trending = [], isLoading } = useTrendingArticles();

  if (isLoading) {
    return (
      <aside className="glass-card p-6 animate-pulse" aria-label="Trending articles">
        <div className="h-6 bg-muted rounded w-32 mb-5" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className="h-8 w-8 bg-muted rounded" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-muted rounded w-16" />
              <div className="h-4 bg-muted rounded w-full" />
            </div>
          </div>
        ))}
      </aside>
    );
  }

  return (
    <aside className="glass-card p-6" aria-label="Trending articles">
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="font-serif font-bold text-lg">Trending</h2>
      </div>
      <ol className="space-y-4">
        {trending.map((article, i) => (
          <motion.li
            key={article.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/news/${article.slug}`} className="flex gap-4 group">
              <span className="trending-number text-3xl leading-none opacity-30 group-hover:opacity-100 transition-opacity">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {article.category_name}
                </span>
                <h3 className="font-serif font-semibold text-sm leading-snug mt-0.5 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {article.reading_time} min read
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ol>
    </aside>
  );
};

export default TrendingSidebar;
