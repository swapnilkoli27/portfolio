import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, MessageCircle } from 'lucide-react';
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
              <span className="flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.15em] text-white/80 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                GrowUnified Technologies · Ideas to Impact
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[clamp(2.5rem,6.5vw,5.2rem)] font-bold leading-[1.0] tracking-tighter"
            >
              We Turn Ideas
              <br />
              Into <span className="text-gradient-accent">Impact.</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 max-w-xl text-base text-white/70 sm:text-lg leading-relaxed"
            >
              End-to-end technology engineering across software and intelligent hardware. We architect scalable <span className="text-white font-medium">Web & Desktop Platforms</span>, native <span className="text-white font-medium">Android & iOS Applications</span>, enterprise <span className="text-white font-medium">Applied AI Models</span>, and <span className="text-white font-medium">Connected IoT Systems</span> — turning ambitious concepts into market-ready realities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss!"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0"
                data-cursor="hover"
              >
                <MessageCircle className="h-4 w-4 fill-white text-emerald-500" />
                <span>Connect on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToWork();
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5"
                data-cursor="hover"
              >
                <span>Explore Solutions & Work</span>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Quick Scope Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-white/10 text-xs font-mono text-white/50"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Web & Desktop</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Android & iOS Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Applied AI & ML</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>IoT Hardware</span>
              </div>
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
