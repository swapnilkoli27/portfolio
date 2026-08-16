import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export default function FreelanceCTA() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const reduced = usePrefersReducedMotion();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12 md:py-24"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-ink-900 to-accent-purple/10" />
          <div className="absolute inset-0 grid-bg-fine opacity-20" />

          {/* Floating glow orbs */}
          <motion.div
            animate={reduced ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
            className="absolute -left-20 top-1/4 h-60 w-60 rounded-full bg-accent-blue/20 blur-[80px]"
          />
          <motion.div
            animate={reduced ? {} : { x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
            className="absolute -right-20 bottom-1/4 h-60 w-60 rounded-full bg-accent-purple/20 blur-[80px]"
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-white/40"
            >
              Have an idea?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl font-bold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl"
            >
              Let's build <span className="text-gradient-accent">it.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-xl text-base text-white/50 sm:text-lg"
            >
              Whether you need a website, mobile application, AI product or custom software, let's turn your idea into something people can actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-4"
            >
              <MagneticButton href="#contact" onClick={scrollToContact} variant="primary">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                href="https://wa.me/919146705846"
                variant="secondary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Me
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
