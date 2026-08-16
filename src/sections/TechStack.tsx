import { useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { techStack } from '@/data/content';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

function TechItem({ tech, index }: { tech: (typeof techStack)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const itemRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    itemRef.current.style.transform = `translate(${x * 8}px, ${y * 8}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!itemRef.current) return;
    itemRef.current.style.transform = 'translate(0, 0) scale(1)';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.03 }}
    >
      <div
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="hover"
        className="group relative flex items-center gap-3 rounded-xl glass px-5 py-4 transition-colors duration-300 hover:bg-white/[0.06]"
        style={{ transition: 'transform 0.2s ease-out, background-color 0.3s' }}
      >
        {/* Color dot */}
        <div
          className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-125"
          style={{
            backgroundColor: tech.color,
            boxShadow: `0 0 12px ${tech.color}50`,
          }}
        />
        <span className="text-sm font-medium tracking-tight text-white/70 transition-colors group-hover:text-white">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools I use to <span className="text-gradient-accent">build.</span>
            </>
          }
        />

        <div className="mt-14 flex flex-wrap gap-3 sm:gap-4">
          {techStack.map((tech, i) => (
            <TechItem key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
