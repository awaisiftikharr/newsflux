import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Article } from "@/hooks/useNewsData";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      <Link to={`/news/${article.slug}`} className="block">
        <div className="hover-zoom aspect-video">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {article.category_name}
          </span>
          <h3 className="font-serif font-bold text-lg mt-2 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {article.author_avatar && <img src={article.author_avatar} alt={article.author} className="w-5 h-5 rounded-full" loading="lazy" />}
            <span>{article.author}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.reading_time} min
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;
