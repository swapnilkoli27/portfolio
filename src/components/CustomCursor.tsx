import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export default function CustomCursor() {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    if (isMobile || reduced) return;
    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="hover"], input, textarea, select');
      setHovering(!!interactive);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [isMobile, reduced, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="absolute left-0 top-0 rounded-full mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full border border-white"
          animate={{
            width: hovering ? 48 : 36,
            height: hovering ? 48 : 36,
            x: hovering ? -24 : -18,
            y: hovering ? -24 : -18,
            scale: clicking ? 0.8 : 1,
            backgroundColor: hovering ? 'rgba(77,124,255,0.15)' : 'rgba(255,255,255,0)',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 400 }}
        />
      </motion.div>
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-white mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 4 : 6,
            height: hovering ? 4 : 6,
            x: hovering ? -2 : -3,
            y: hovering ? -2 : -3,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 600 }}
        />
      </motion.div>
    </div>
  );
}
