import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects, type ProjectItem } from '@/data/content';
import { useInView } from '@/hooks/useInView';
import ProjectMockup from '@/components/ProjectMockup';

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [expanded, setExpanded] = useState(false);
  const isLarge = index === 0 || index === 3;
  const targetUrl = project.liveUrl || '#';

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${isLarge ? 'lg:col-span-2' : ''}`}
    >
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl glass transition-all duration-500 hover:border-white/20 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]">
        {/* Top Mockup / Visual Container */}
        <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/8]' : 'aspect-[16/9]'}`}>
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-60 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accent.replace('from-', '').replace('to-', '')})`,
            }}
          />
          <ProjectMockup project={project} />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-mono font-medium text-white/90 backdrop-blur-md shadow-lg">
              {project.type === 'showcase' ? (
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              ) : (
                <ShieldCheck className="h-3 w-3 text-accent-cyan" />
              )}
              <span>{project.statusBadge}</span>
            </div>

            <span className="text-xs font-mono font-semibold text-white/40 bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
              {project.num}
            </span>
          </div>

          {/* Hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(600px circle at 50% 50%, rgba(77,124,255,0.12), transparent 60%)',
            }}
          />
        </div>

        {/* Content Body */}
        <div className="flex flex-col flex-grow justify-between gap-5 p-6 sm:p-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-accent-cyan/80">
                {project.category}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-mono text-white/50">
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/60 mt-1">
              {project.description}
            </p>

            {/* Key Features List */}
            {project.keyFeatures && (
              <div className="mt-2 flex flex-col gap-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                  Key Highlights
                </span>
                <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs text-white/70">
                  {project.keyFeatures.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan/70 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expandable Full Abstract for deep tech projects */}
            {project.abstract && (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  data-cursor="hover"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-white transition-colors"
                >
                  <span>{expanded ? 'Hide Technical Abstract' : 'View Full Technical Abstract'}</span>
                  {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-white/65"
                    >
                      <p className="whitespace-pre-line">{project.abstract}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Tech tags & Actions */}
          <div className="flex flex-col gap-5 pt-3 border-t border-white/5">
            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all hover:bg-white/90 hover:scale-[1.02] shadow-md"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Visit Live Platform</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <a
                  href={`https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies!%20I'm%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(project.title)}%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 px-4 py-2.5 text-xs font-semibold text-emerald-400 transition-all hover:bg-emerald-500 hover:text-white hover:border-emerald-500 shadow-sm"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState<'all' | 'showcase' | 'other'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Showcase & Engineering"
          title={
            <>
              Selected <span className="text-gradient-accent">Work & Systems.</span>
            </>
          }
          subtitle="Live commercial platforms, multimodal AI systems, cybersecurity honeypots, and intelligent IoT assistive technologies."
        />

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => setFilter('all')}
            data-cursor="hover"
            className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              filter === 'all'
                ? 'bg-white text-black font-semibold shadow-lg'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('showcase')}
            data-cursor="hover"
            className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              filter === 'showcase'
                ? 'bg-white text-black font-semibold shadow-lg'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            Live Platforms ({projects.filter((p) => p.type === 'showcase').length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('other')}
            data-cursor="hover"
            className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
              filter === 'other'
                ? 'bg-white text-black font-semibold shadow-lg'
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            AI, Security & Systems ({projects.filter((p) => p.type === 'other').length})
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.num} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

