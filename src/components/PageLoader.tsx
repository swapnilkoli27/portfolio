import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-ink-950"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <img 
              src="/logo.png" 
              alt="GrowUnified Technologies" 
              className="h-14 w-14 rounded-2xl object-contain bg-white/10 p-1 shadow-[0_0_30px_rgba(16,185,129,0.3)]" 
            />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                GrowUnified<span className="text-emerald-400">.</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-400 font-semibold mt-0.5">
                Ideas to Impact
              </span>
            </div>
            <div className="relative h-px w-36 overflow-hidden bg-white/10 mt-2">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
