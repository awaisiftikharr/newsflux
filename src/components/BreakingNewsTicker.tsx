import { useLiveUpdates } from "@/hooks/useNewsData";

const BreakingNewsTicker = () => {
  const { data: updates = [] } = useLiveUpdates();
  const items = [...updates, ...updates]; // duplicate for seamless scroll

  if (updates.length === 0) return null;

  return (
    <div className="ticker-strip overflow-hidden py-2 text-sm font-sans" role="marquee" aria-label="Breaking news">
      <div className="flex whitespace-nowrap animate-ticker">
        {items.map((item, i) => (
          <span key={`${item.id}-${i}`} className="inline-flex items-center mx-8">
            <span className="font-bold text-primary mr-2 uppercase text-xs">Breaking</span>
            <span className="opacity-90">{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
