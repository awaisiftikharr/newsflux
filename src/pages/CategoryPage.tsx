import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory, categories } from "@/data/mockData";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const catName = categories.find((c) => c.toLowerCase() === category) || category || "";
  const catArticles = catName ? getArticlesByCategory(catName) : [];

  return (
    <>
      <SEOHead
        title={`${catName} News`}
        description={`Latest ${catName} news and stories on NewsFlux.`}
        url={`/category/${category}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: catName, url: `/category/${category}` },
        ]}
      />
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{catName}</span>
      </nav>
      <h1 className="font-serif text-4xl font-bold mb-8">{catName} News</h1>
      {catArticles.length === 0 ? (
        <p className="text-muted-foreground">No articles found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catArticles.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
