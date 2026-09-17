import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="relative py-24 md:py-36">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-400"
          >
            <span className="h-px w-8 bg-gradient-to-r from-emerald-400 to-cyan-400" />
            Design • Develop • Deploy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            We help businesses, visionary startups, and student innovators turn ideas into{' '}
            <span className="text-gradient-accent">scalable software</span>,{' '}
            <span className="text-gradient-accent">intelligent AI</span>, and{' '}
            <span className="text-gradient-accent">connected IoT systems</span>.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
