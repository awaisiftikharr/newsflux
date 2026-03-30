import SEOHead from "@/components/SEOHead";

const Privacy = () => (
  <>
    <SEOHead title="Privacy Policy" description="NewsFlux Privacy Policy — how we collect, use, and protect your personal information." url="/privacy" />
    <article className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
      <h1 className="font-serif text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-6">Last updated: March 30, 2026</p>
      <section className="article-prose">
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, such as when you subscribe to our newsletter or submit a contact form. We also collect certain information automatically when you visit our website, including your IP address, browser type, and pages visited.</p>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide and improve our services, send you updates, respond to inquiries, and serve relevant advertisements through our ad partners.</p>
        <h2>Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized advertising. You can manage your cookie preferences through your browser settings.</p>
        <h2>Third-Party Services</h2>
        <p>We work with third-party advertising partners, including Google AdSense, who may use cookies to serve ads based on your visits to this and other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>
        <h2>Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at privacy@newsflux.com.</p>
      </section>
    </article>
  </>
);

export default Privacy;
