import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const Hero3D = lazy(() => import('@/components/Hero3D'));

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12">
      <div className="container mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: text */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] text-white/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tighter"
            >
              Building Digital
              <br />
              Products That
              <br />
              <span className="text-gradient-accent">Make An Impact.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 max-w-xl text-base text-white/50 sm:text-lg"
            >
              I design and develop modern websites, mobile applications, AI-powered products and custom software for businesses, startups and ambitious ideas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#contact" onClick={scrollToContact} variant="primary">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#work" onClick={scrollToWork} variant="secondary">
                View My Work
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: 3D visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              <Suspense fallback={<div className="h-full w-full animate-pulse rounded-full bg-white/5" />}>
                <Hero3D />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
