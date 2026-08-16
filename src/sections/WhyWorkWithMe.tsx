import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { whyWorkWithMe } from '@/data/content';
import { useInView } from '@/hooks/useInView';

function FeatureItem({ item, index }: { item: (typeof whyWorkWithMe)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-white/[0.02]"
    >
      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-accent-blue/30 bg-accent-blue/10">
        <Check className="h-3.5 w-3.5 text-accent-blue" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight text-white">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-white/40">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyWorkWithMe() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              Built for <span className="text-gradient-accent">results.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-2 md:grid-cols-2">
          {whyWorkWithMe.map((item, i) => (
            <FeatureItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
