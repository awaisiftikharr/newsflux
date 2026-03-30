import SEOHead from "@/components/SEOHead";

const Terms = () => (
  <>
    <SEOHead title="Terms of Service" description="NewsFlux Terms of Service — the rules governing use of our platform." url="/terms" />
    <article className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
      <h1 className="font-serif text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-6">Last updated: March 30, 2026</p>
      <section className="article-prose">
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using NewsFlux, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        <h2>Use of Content</h2>
        <p>All content published on NewsFlux is protected by copyright. You may share articles using our share buttons or the Copy Citation feature. Reproduction or republication of full articles without permission is prohibited.</p>
        <h2>User Conduct</h2>
        <p>You agree not to use our platform to distribute harmful, defamatory, or illegal content. We reserve the right to remove content or restrict access at our discretion.</p>
        <h2>Advertising</h2>
        <p>NewsFlux displays advertisements from third-party networks. We are not responsible for the content of third-party advertisements. Ad interactions are governed by the respective advertiser's terms.</p>
        <h2>Disclaimer</h2>
        <p>NewsFlux provides content for informational purposes only. We strive for accuracy but cannot guarantee that all information is error-free. We are not liable for decisions made based on our content.</p>
        <h2>Changes to Terms</h2>
        <p>We may update these terms periodically. Continued use of our platform constitutes acceptance of any changes.</p>
      </section>
    </article>
  </>
);

export default Terms;
