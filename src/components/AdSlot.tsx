interface AdSlotProps {
  variant: "leaderboard" | "sidebar" | "in-feed";
  className?: string;
}

/**
 * Reusable Ad Slot Component
 * 
 * For Google AdSense integration:
 * 1. Place your ads.txt file in the /public directory
 * 2. Add your AdSense script to index.html <head>
 * 3. Replace the placeholder div below with your ad unit code:
 *    <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXX" data-ad-slot="XXXXX" />
 */
const AdSlot = ({ variant, className = "" }: AdSlotProps) => {
  const sizes: Record<string, string> = {
    leaderboard: "w-full h-24 md:h-28",
    sidebar: "w-full h-64",
    "in-feed": "w-full h-28",
  };

  return (
    <div
      className={`ad-slot ${sizes[variant]} flex-col gap-1 text-xs font-sans ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <span className="uppercase tracking-widest text-[10px] text-muted-foreground">Advertisement</span>
      <span className="text-muted-foreground/60 text-[10px]">Your ad here</span>
    </div>
  );
};

export default AdSlot;
