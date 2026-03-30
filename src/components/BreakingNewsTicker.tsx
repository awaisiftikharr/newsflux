import { liveUpdates } from "@/data/mockData";

const BreakingNewsTicker = () => {
  const items = [...liveUpdates, ...liveUpdates]; // duplicate for seamless scroll

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
