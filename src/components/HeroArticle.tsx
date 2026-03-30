import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Article } from "@/hooks/useNewsData";

const HeroArticle = ({ article }: { article: Article }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden group"
    >
      <Link to={`/news/${article.slug}`} className="block">
        <div className="relative hover-zoom aspect-[16/9] md:aspect-[21/9]">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full mb-3">
              {article.category_name}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight mb-3 text-balance">
              {article.title}
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                {article.author_avatar && <img src={article.author_avatar} alt={article.author} className="w-6 h-6 rounded-full" loading="lazy" />}
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.reading_time} min read</span>
              </div>
              <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default HeroArticle;
