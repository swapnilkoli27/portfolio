import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const springY = useSpring(y, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 will-change-transform';

  const variants = {
    primary:
      'bg-white text-black hover:bg-white/90 px-7 py-3.5 text-sm',
    secondary:
      'glass text-white hover:bg-white/[0.08] px-7 py-3.5 text-sm border border-white/10',
    ghost: 'text-white/70 hover:text-white px-2 py-1 text-sm',
  };

  const content = (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-cursor="hover"
    >
      {children}
    </motion.a>
  );

  return content;
}
