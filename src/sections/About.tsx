import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { stats } from '@/data/content';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + text */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  More than just <span className="text-gradient-accent">code.</span>
                </>
              }
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg"
            >
              I'm a freelance software developer focused on building modern digital experiences, intelligent applications and scalable software solutions. I combine development, design and emerging technologies to transform ideas into practical products.
            </motion.p>
          </div>

          {/* Right: stats */}
          <div ref={ref} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-2 bg-white/[0.02] p-6 sm:p-8"
                >
                  <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-white/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
