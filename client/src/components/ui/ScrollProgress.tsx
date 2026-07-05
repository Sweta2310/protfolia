import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Spring settings for ultra-smooth easing
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 origin-left z-[9999] pointer-events-none shadow-[0_1px_10px_rgba(168,85,247,0.5)] hidden md:block"
      style={{ scaleX }}
    />
  );
}
