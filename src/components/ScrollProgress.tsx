import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar fixed top-0 left-0 right-0 z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
