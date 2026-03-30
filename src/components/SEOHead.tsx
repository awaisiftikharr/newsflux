import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  url?: string;
  article?: {
    author: string;
    publishedAt: string;
    category: string;
  };
  breadcrumbs?: { name: string; url: string }[];
}

const SEOHead = ({ title, description, ogImage, ogType = "website", url, article, breadcrumbs }: SEOHeadProps) => {
  const siteUrl = window.location.origin;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  const newsArticleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image: ogImage,
    author: { "@type": "Person", name: article.author },
    datePublished: article.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "NewsFlux",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    articleSection: article.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
  } : null;

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.name,
      item: `${siteUrl}${bc.url}`,
    })),
  } : null;

  return (
    <Helmet>
      <title>{title} | NewsFlux</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <link rel="canonical" href={fullUrl} />
      {newsArticleSchema && (
        <script type="application/ld+json">{JSON.stringify(newsArticleSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
