import { useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const cardRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor="hover"
        className="group relative h-full overflow-hidden rounded-2xl glass p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
          background: 'radial-gradient(400px circle at 50% 0%, rgba(77,124,255,0.12), transparent 70%)',
        }} />

        <div className="relative flex flex-col gap-6" style={{ transform: 'translateZ(40px)' }}>
          {/* Top row */}
          <div className="flex items-start justify-between">
            <span className="text-sm font-mono text-white/30">{service.num}</span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 group-hover:border-accent-blue/40 group-hover:text-accent-blue group-hover:shadow-[0_0_20px_-5px_rgba(77,124,255,0.5)]">
              <Icon className="h-5 w-5" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
            <p className="text-sm leading-relaxed text-white/45">{service.description}</p>
          </div>

          {/* Arrow */}
          <div className="mt-auto flex items-center gap-2 text-sm text-white/40 transition-colors group-hover:text-white/80">
            <span>Learn more</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What I Build"
          title={
            <>
              Services that <span className="text-gradient-accent">ship.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
