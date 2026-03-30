import SEOHead from "@/components/SEOHead";

const About = () => (
  <>
    <SEOHead title="About Us" description="Learn about NewsFlux — our mission, team, and commitment to delivering trustworthy journalism." url="/about" />
    <article className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
      <h1 className="font-serif text-4xl font-bold mb-6">About NewsFlux</h1>
      <section className="article-prose">
        <p>NewsFlux is a modern news platform dedicated to delivering accurate, timely, and insightful journalism to readers around the world. Founded in 2026, we combine cutting-edge technology with editorial integrity to keep you informed on the stories that matter most.</p>
        <h2>Our Mission</h2>
        <p>We believe in the power of free, accessible journalism. Our mission is to provide a trusted source of news that empowers people to make informed decisions about their lives, their communities, and the world.</p>
        <h2>Our Team</h2>
        <p>Our newsroom is staffed by experienced journalists, data analysts, and engineers who work together to verify facts, uncover stories, and deliver them in engaging formats. We maintain strict editorial standards and are committed to transparency in our reporting.</p>
        <h2>Contact Us</h2>
        <p>Have a tip, feedback, or question? We'd love to hear from you. Reach out through our <a href="/contact" className="text-primary hover:underline">contact page</a>.</p>
      </section>
    </article>
  </>
);

export default About;
