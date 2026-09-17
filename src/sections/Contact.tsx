import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projectTypes, companyInfo } from '@/data/content';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [selectedType, setSelectedType] = useState('Web Application');
  const [customNote, setCustomNote] = useState('');

  const generateWhatsAppLink = () => {
    const text = `Hi GrowUnified Technologies! I want to discuss a project:%0A- *Type:* ${encodeURIComponent(selectedType)}${customNote ? `%0A- *Details:* ${encodeURIComponent(customNote)}` : ''}%0A%0APlease let me know the next steps!`;
    return `https://wa.me/917057985925?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Connect Directly"
          title={
            <>
              Let's turn your idea into <span className="text-gradient-accent">impact.</span>
            </>
          }
          subtitle="Reach out directly on WhatsApp or connect on Instagram. Instant response, zero middlemen."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* WhatsApp Direct Project Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl glass p-6 sm:p-8 border border-white/10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Instant WhatsApp Connection
                  </span>
                </div>
                <span className="text-xs font-mono text-white/40">+91 7057985925</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Start Your Project Discussion
                </h3>
                <p className="mt-1 text-sm text-white/50 leading-relaxed">
                  Select what you'd like to build and jump straight into a direct conversation with our technical engineering team.
                </p>
              </div>

              {/* Select Project Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wide text-white/40">
                  Select Project Domain
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      data-cursor="hover"
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-medium transition-all text-left border ${
                        selectedType === type
                          ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                          : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span>{type}</span>
                      {selectedType === type && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional note */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wide text-white/40">
                  Brief Project Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="E.g., I want an IoT smart monitoring system with a mobile dashboard..."
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-emerald-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-emerald-500/20 resize-none"
                />
              </div>
            </div>

            {/* Launch WhatsApp Button */}
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="w-full group flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp (7057985925)</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Cards for Direct WhatsApp & Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Primary WhatsApp Card */}
            <a
              href="https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss!"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex flex-col justify-between rounded-2xl glass p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-950/10 border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Online Now <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                  Direct WhatsApp Contact
                </span>
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  +91 7057985925
                </span>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  Available for project scopes, architecture discussion, pricing, and rapid delivery timelines.
                </p>
              </div>
            </a>

            {/* Official Instagram Card */}
            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex flex-col justify-between rounded-2xl glass p-6 transition-all duration-300 hover:border-pink-500/40 hover:bg-pink-950/10 border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                  <Instagram className="h-7 w-7" />
                </div>
                <span className="flex items-center gap-1 text-xs font-mono text-pink-400 group-hover:translate-x-1 transition-transform">
                  Follow Us <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                  Official Instagram
                </span>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">
                  {companyInfo.instagramHandle}
                </span>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  Explore our newest builds, technology innovations, project reels, and updates.
                </p>
              </div>
            </a>

            {/* Credibility / Scope Trust Strip */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Zap className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Full-Stack & Hardware Engineering</span>
                <span className="text-[11px] text-white/50 leading-tight">Web • Android & iOS • Desktop • AI • IoT Hardware</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
