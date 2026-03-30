export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  image: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  trending: boolean;
}

export interface LiveUpdate {
  id: string;
  text: string;
  time: string;
  category: string;
}

export const categories = ["Tech", "Finance", "World", "Science", "Health", "Sports"];

export const articles: Article[] = [
  {
    id: "1",
    slug: "quantum-computing-milestone-2026",
    title: "Quantum Computing Hits Major Milestone as IBM Unveils 10,000-Qubit Processor",
    excerpt: "IBM's latest quantum processor marks a watershed moment in computing history, bringing practical quantum applications closer to reality than ever before.",
    content: `<p>In a groundbreaking announcement that has sent shockwaves through the technology industry, IBM has unveiled its latest quantum processor featuring an unprecedented 10,000 qubits. This achievement represents a significant leap forward in the race to build practical quantum computers capable of solving problems that are currently intractable for classical machines.</p>
<h2>The Significance of 10,000 Qubits</h2>
<p>The new processor, codenamed "Condor X," surpasses the previous record by a factor of ten. Dr. Sarah Chen, IBM's head of quantum research, explained that this isn't merely a numerical achievement but represents a fundamental shift in what quantum computers can accomplish.</p>
<p>"With 10,000 qubits, we're entering a regime where quantum advantage becomes undeniable for certain classes of problems," Dr. Chen said during the press conference. "This includes drug discovery, materials science, and complex financial modeling."</p>
<h3>Real-World Applications</h3>
<p>The implications for industries ranging from pharmaceuticals to cryptography are profound. Several Fortune 500 companies have already signed agreements to access the new system through IBM's cloud platform.</p>
<blockquote>This is not just an incremental improvement—it's a paradigm shift that will reshape entire industries within the next decade.</blockquote>
<p>The processor operates at temperatures colder than outer space, maintained by a sophisticated cryogenic system that IBM has been refining for over a decade. The engineering challenges alone represent years of dedicated research and development.</p>`,
    category: "Tech",
    author: "Marcus Webb",
    authorAvatar: "https://i.pravatar.cc/40?img=1",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop",
    publishedAt: "2026-03-30T08:00:00Z",
    readingTime: 6,
    featured: true,
    trending: true,
  },
  {
    id: "2",
    slug: "global-markets-rally-green-energy",
    title: "Global Markets Rally as Green Energy Investments Surge Past $5 Trillion",
    excerpt: "Renewable energy investments have reached an all-time high, driving stock markets to record levels across major exchanges worldwide.",
    content: `<p>Global financial markets experienced a historic rally today as cumulative investments in green energy infrastructure officially surpassed the $5 trillion mark. The milestone, tracked by the International Energy Agency, reflects an accelerating shift in capital allocation from fossil fuels to renewable technologies.</p><p>Major indices in New York, London, and Tokyo all closed at record highs, with clean energy stocks leading the charge. Solar and wind energy companies saw particularly strong gains.</p>`,
    category: "Finance",
    author: "Elena Rodriguez",
    authorAvatar: "https://i.pravatar.cc/40?img=5",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    publishedAt: "2026-03-30T06:30:00Z",
    readingTime: 5,
    featured: false,
    trending: true,
  },
  {
    id: "3",
    slug: "ai-climate-prediction-breakthrough",
    title: "AI System Predicts Extreme Weather Events 30 Days in Advance with 95% Accuracy",
    excerpt: "A new deep learning model developed by Google DeepMind can forecast hurricanes, heat waves, and floods a month ahead.",
    content: `<p>Google DeepMind has announced a revolutionary AI weather prediction system that can forecast extreme weather events up to 30 days in advance with a remarkable 95% accuracy rate. The system, named "WeatherMind," represents a quantum leap in meteorological forecasting capabilities.</p><p>The implications for disaster preparedness and humanitarian response are enormous, potentially saving thousands of lives each year by providing earlier warnings for vulnerable communities.</p>`,
    category: "Science",
    author: "Dr. James Liu",
    authorAvatar: "https://i.pravatar.cc/40?img=3",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=600&fit=crop",
    publishedAt: "2026-03-29T14:00:00Z",
    readingTime: 7,
    featured: false,
    trending: true,
  },
  {
    id: "4",
    slug: "who-pandemic-preparedness-treaty",
    title: "WHO Finalizes Landmark Pandemic Preparedness Treaty Signed by 180 Nations",
    excerpt: "The historic agreement establishes a global framework for rapid response to future pandemics, including vaccine sharing protocols.",
    content: `<p>The World Health Organization has announced the finalization of a comprehensive pandemic preparedness treaty, signed by 180 member nations. The agreement establishes binding protocols for information sharing, vaccine distribution, and coordinated lockdown measures in the event of a future pandemic.</p>`,
    category: "World",
    author: "Amara Osei",
    authorAvatar: "https://i.pravatar.cc/40?img=9",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop",
    publishedAt: "2026-03-29T10:00:00Z",
    readingTime: 4,
    featured: false,
    trending: true,
  },
  {
    id: "5",
    slug: "gene-therapy-aging-reversal",
    title: "First Gene Therapy Trial Shows Reversal of Key Aging Markers in Human Patients",
    excerpt: "Clinical trials at Stanford demonstrate measurable biological age reduction in patients receiving a novel gene therapy treatment.",
    content: `<p>Stanford University Medical Center has published results from the first-ever human gene therapy trial targeting biological aging markers. The results show that patients who received the experimental treatment experienced a measurable reduction in biological age by an average of 5-7 years.</p>`,
    category: "Health",
    author: "Dr. Priya Sharma",
    authorAvatar: "https://i.pravatar.cc/40?img=10",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop",
    publishedAt: "2026-03-28T16:00:00Z",
    readingTime: 8,
    featured: false,
    trending: true,
  },
  {
    id: "6",
    slug: "spacex-mars-colony-update",
    title: "SpaceX Confirms First Permanent Mars Colony Module Launch for Late 2027",
    excerpt: "Elon Musk announces the timeline for humanity's first permanent habitation structure on the Red Planet.",
    content: `<p>SpaceX CEO Elon Musk has confirmed during a press event that the company plans to launch the first permanent colony habitation module to Mars in late 2027. The module, designed to support up to 12 residents, will mark a pivotal step in humanity's journey to become a multi-planetary species.</p>`,
    category: "Science",
    author: "Tom Nakamura",
    authorAvatar: "https://i.pravatar.cc/40?img=7",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop",
    publishedAt: "2026-03-28T12:00:00Z",
    readingTime: 5,
    featured: false,
    trending: false,
  },
  {
    id: "7",
    slug: "eu-digital-currency-launch",
    title: "European Central Bank Launches Digital Euro for All Eurozone Citizens",
    excerpt: "The digital euro is now available across 20 countries, marking the largest CBDC rollout in history.",
    content: `<p>The European Central Bank has officially launched the digital euro, making it available to all 350 million citizens across the 20 eurozone countries. This represents the largest rollout of a central bank digital currency in history, dwarfing China's digital yuan pilot program.</p>`,
    category: "Finance",
    author: "Klaus Richter",
    authorAvatar: "https://i.pravatar.cc/40?img=12",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    publishedAt: "2026-03-27T09:00:00Z",
    readingTime: 4,
    featured: false,
    trending: false,
  },
  {
    id: "8",
    slug: "olympic-esports-category",
    title: "IOC Officially Adds Esports as Medal Category for 2028 Los Angeles Olympics",
    excerpt: "Competitive gaming will debut as an Olympic medal event, featuring five game titles across team and individual formats.",
    content: `<p>The International Olympic Committee has voted unanimously to include esports as an official medal category at the 2028 Los Angeles Summer Olympics. Five game titles have been selected across team and individual formats, marking a historic moment for competitive gaming.</p>`,
    category: "Sports",
    author: "Sarah Kim",
    authorAvatar: "https://i.pravatar.cc/40?img=15",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    publishedAt: "2026-03-27T07:00:00Z",
    readingTime: 3,
    featured: false,
    trending: false,
  },
];

export const liveUpdates: LiveUpdate[] = [
  { id: "l1", text: "Breaking: Federal Reserve holds interest rates steady at 4.25%", time: "2 min ago", category: "Finance" },
  { id: "l2", text: "NASA confirms successful asteroid redirect test with DART-2 mission", time: "18 min ago", category: "Science" },
  { id: "l3", text: "Apple unveils AR glasses at Spring event, shipping in June", time: "35 min ago", category: "Tech" },
  { id: "l4", text: "UK Parliament passes landmark AI Safety Act with bipartisan support", time: "1 hr ago", category: "World" },
  { id: "l5", text: "Tesla stock surges 12% after record Q1 delivery numbers", time: "1 hr ago", category: "Finance" },
  { id: "l6", text: "WHO declares new malaria vaccine 90% effective in Phase 3 trials", time: "2 hr ago", category: "Health" },
  { id: "l7", text: "Champions League semi-final: Real Madrid vs Man City kicks off tonight", time: "3 hr ago", category: "Sports" },
  { id: "l8", text: "Google announces Gemini 3.0 with native video understanding", time: "3 hr ago", category: "Tech" },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getTrendingArticles(): Article[] {
  return articles.filter(a => a.trending).slice(0, 5);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find(a => a.featured);
}
