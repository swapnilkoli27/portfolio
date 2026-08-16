import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/content';
import { useInView } from '@/hooks/useInView';
import ProjectMockup from '@/components/ProjectMockup';

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const isLarge = index === 0 || index === 3;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${isLarge ? 'lg:col-span-2' : ''}`}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        className="relative block overflow-hidden rounded-2xl glass transition-all duration-500 hover:-translate-y-2 hover:border-white/15"
      >
        {/* Image / mockup */}
        <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-60 transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accent.replace('from-', '').replace('to-', '')})`,
            }}
          />
          <ProjectMockup project={project} />
          {/* Hover glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
            background: 'radial-gradient(600px circle at 50% 50%, rgba(77,124,255,0.15), transparent 60%)',
          }} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent-cyan/70">
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <span className="text-sm font-mono text-white/20">{project.num}</span>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-white/45">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/50 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View buttons */}
          <div className="mt-2 flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors group-hover:text-white">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/30 transition-colors group-hover:text-white/50">
              <Github className="h-3.5 w-3.5" />
              Source Code
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects that <span className="text-gradient-accent">deliver.</span>
            </>
          }
          subtitle="A selection of digital products, platforms and experiments I've built."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
