import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import ScrollProgress from "@/components/ScrollProgress";
import CopyCitation from "@/components/CopyCitation";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import { getArticleBySlug, articles } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="font-serif text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Return to homepage</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);
  const sanitizedContent = DOMPurify.sanitize(article.content);
  const shareUrl = `${window.location.origin}/news/${article.slug}`;

  return (
    <>
      <ScrollProgress />
      <SEOHead
        title={article.title}
        description={article.excerpt}
        ogImage={article.image}
        ogType="article"
        url={`/news/${article.slug}`}
        article={{ author: article.author, publishedAt: article.publishedAt, category: article.category }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: article.category, url: `/category/${article.category.toLowerCase()}` },
          { name: article.title, url: `/news/${article.slug}` },
        ]}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <Link to={`/category/${article.category.toLowerCase()}`} className="hover:text-foreground transition-colors">
            {article.category}
          </Link>
        </nav>

        <article className="glass-card p-6 md:p-10">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-balance">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src={article.authorAvatar} alt={article.author} className="w-8 h-8 rounded-full" />
                <span className="font-medium text-foreground">{article.author}</span>
              </div>
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readingTime} min read</span>
            </div>
          </header>

          <div className="hover-zoom rounded-2xl overflow-hidden mb-8">
            <img src={article.image} alt={article.title} className="w-full aspect-video object-cover" />
          </div>

          <div className="article-prose" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />

          <AdSlot variant="in-feed" className="my-8" />

          <footer className="border-t border-border/30 pt-6 mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground mr-2 flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> Share:</span>
            <Button variant="outline" size="icon" asChild aria-label="Share on Facebook">
              <a href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Share on Twitter">
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Share on LinkedIn">
              <a href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <CopyCitation title={article.title} slug={article.slug} author={article.author} />
          </footer>
        </article>

        {related.length > 0 && (
          <section className="mt-12" aria-label="Related articles">
            <h2 className="font-serif font-bold text-2xl mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((a, i) => (
                <ArticleCard key={a.id} article={a} index={i} />
              ))}
            </div>
          </section>
        )}
      </motion.div>
    </>
  );
};

export default ArticlePage;
