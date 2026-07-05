import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1500; // 1.5 seconds for progress bar
    const intervalTime = 30;
    const increment = (100 / (duration / intervalTime));

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Allow 300ms for final animation before starting fade out
          setTimeout(() => {
            setIsVisible(false);
          }, 200);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] select-none"
        >
          <div className="relative flex flex-col items-center max-w-xs w-full px-6">
            
            {/* Initials MS with SVG line drawing */}
            <div className="relative mb-6 flex items-center justify-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                {/* Outlined M */}
                <motion.path
                  d="M20 75V25L50 55L80 25V75"
                  stroke="url(#purpleGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Overlay Text "S" inside the SVG sphere, or simple overlaid initials */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center mt-0.5"
              >
                <span className="text-3xl font-extrabold text-white tracking-widest font-display ml-1 select-none">
                  MS
                </span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[11px] font-accent text-purple-400/70 uppercase tracking-[0.25em] mb-8 font-semibold text-center"
            >
              Mudaliyar Sweta
            </motion.div>

            {/* Glowing progress bar */}
            <div className="relative w-full h-[3px] bg-white/[0.03] rounded-full overflow-hidden border border-white/[0.05]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            
            {/* Progress Percentage */}
            <span className="text-[10px] text-slate-500 font-mono mt-2 font-semibold">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
