import SEOHead from "@/components/SEOHead";
import HeroArticle from "@/components/HeroArticle";
import TrendingSidebar from "@/components/TrendingSidebar";
import LiveFeed from "@/components/LiveFeed";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getFeaturedArticle, articles } from "@/data/mockData";

const Index = () => {
  const featured = getFeaturedArticle();
  const latestArticles = articles.filter((a) => !a.featured).slice(0, 6);

  return (
    <>
      <SEOHead
        title="Breaking News & Trending Stories"
        description="Stay informed with NewsFlux — your source for breaking news, in-depth analysis, and trending stories in tech, finance, science, and more."
        url="/"
      />

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hero - spans 8 cols */}
        <section className="lg:col-span-8">
          {featured && <HeroArticle article={featured} />}
        </section>

        {/* Trending sidebar - spans 4 cols */}
        <section className="lg:col-span-4">
          <TrendingSidebar />
        </section>

        {/* Latest Articles Grid */}
        <section className="lg:col-span-8" aria-label="Latest articles">
          <h2 className="font-serif font-bold text-2xl mb-5">Latest Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestArticles.slice(0, 2).map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i} />
            ))}
          </div>

          <AdSlot variant="in-feed" className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestArticles.slice(2, 4).map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i + 2} />
            ))}
          </div>

          {latestArticles.length > 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {latestArticles.slice(4).map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i + 4} />
              ))}
            </div>
          )}
        </section>

        {/* Live Feed + Sticky Ad */}
        <section className="lg:col-span-4 space-y-6">
          <LiveFeed />
          <div className="sticky top-24">
            <AdSlot variant="sidebar" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
