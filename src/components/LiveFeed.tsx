import { motion } from "framer-motion";
import { liveUpdates } from "@/data/mockData";

const LiveFeed = () => {
  return (
    <aside className="glass-card p-6" aria-label="Live news feed">
      <div className="flex items-center gap-2 mb-5">
        <span className="live-pulse" />
        <h2 className="font-serif font-bold text-lg">24/7 Live Feed</h2>
      </div>
      <div className="space-y-4">
        {liveUpdates.map((update, i) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border-l-2 border-primary/30 pl-4 py-1"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              {update.category}
            </span>
            <p className="text-sm mt-0.5 leading-snug">{update.text}</p>
            <span className="text-xs text-muted-foreground mt-1 block">{update.time}</span>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default LiveFeed;
