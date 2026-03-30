import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useNewsData";

const Footer = () => {
  const { data: categories = [] } = useCategories();

  return (
    <footer className="border-t border-border/30 mt-16 py-12 bg-card/50" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-1 mb-3">
              <span className="text-xl font-serif font-black text-primary">News</span>
              <span className="text-xl font-serif font-black">Flux</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for breaking news, in-depth analysis, and trending stories from around the globe.
            </p>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link to={`/category/${c.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/30 mt-8 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NewsFlux. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
