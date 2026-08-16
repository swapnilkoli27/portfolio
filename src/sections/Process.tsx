import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { process } from '@/data/content';
import { useInView } from '@/hooks/useInView';

function ProcessStep({ step, index }: { step: (typeof process)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative flex flex-col gap-6">
      {/* Number + node */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full glass-strong"
      >
        <span className="text-lg font-bold text-gradient-accent">{step.num}</span>
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full border border-accent-blue/20" style={{
          boxShadow: '0 0 30px -8px rgba(77,124,255,0.4)',
        }} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
        className="flex flex-col gap-2"
      >
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/45">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How I Work"
          title={
            <>
              A process built for <span className="text-gradient-accent">results.</span>
            </>
          }
        />

        <div ref={ref} className="relative mt-16">
          {/* Animated connecting line — desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px lg:block">
            <div className="relative h-full w-full bg-white/5">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple"
              />
            </div>
          </div>

          {/* Vertical line — mobile */}
          <div className="absolute left-8 top-16 bottom-0 w-px bg-white/5 lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((step, i) => (
              <ProcessStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
