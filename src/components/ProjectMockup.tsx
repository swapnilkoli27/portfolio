import { Briefcase, Code2, Scale, BarChart3, LayoutDashboard, FileSearch } from 'lucide-react';

interface ProjectMockupProps {
  project: {
    image: string;
    title: string;
    category: string;
  };
}

/**
 * Generates an abstract, futuristic visual mockup for each project.
 * Replace these with real screenshots by swapping this component's
 * inner content with an <img src="/path/to/screenshot.png" />.
 */
export default function ProjectMockup({ project }: ProjectMockupProps) {
  const iconMap: Record<string, typeof Briefcase> = {
    jobportal: Briefcase,
    codeexplainer: Code2,
    legal: Scale,
    dataanalyst: BarChart3,
    crm: LayoutDashboard,
    resumescreening: FileSearch,
  };

  const Icon = iconMap[project.image] || Briefcase;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-30" />

      {/* Abstract UI elements based on project type */}
      <div className="relative flex h-full w-full items-center justify-center p-8">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-[60px]" />

        {/* Central icon */}
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Icon className="h-9 w-9 text-white/70" />
          </div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">
            {project.title}
          </span>
        </div>

        {/* Scanning lines for AI projects */}
        {(project.image === 'codeexplainer' || project.image === 'legal' || project.image === 'resumescreening') && (
          <div className="absolute inset-8 overflow-hidden rounded-xl border border-white/5 opacity-30">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent animate-[float_3s_ease-in-out_infinite]" style={{ top: '40%' }} />
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent animate-[float_4s_ease-in-out_infinite]" style={{ top: '60%' }} />
          </div>
        )}

        {/* Data bars for analytics/dashboard projects */}
        {(project.image === 'dataanalyst' || project.image === 'crm') && (
          <div className="absolute bottom-8 left-8 right-8 flex items-end gap-1.5 opacity-40">
            {[40, 65, 30, 80, 55, 90, 45, 70, 35, 60, 85, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-accent-blue/40 to-accent-cyan/40"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        )}

        {/* Cards for web platform projects */}
        {project.image === 'jobportal' && (
          <div className="absolute inset-8 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-white/[0.02]" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
