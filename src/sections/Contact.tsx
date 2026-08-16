import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Linkedin, Send, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projectTypes, budgetRanges } from '@/data/content';
import { useInView } from '@/hooks/useInView';

const contactLinks = [
  { label: 'Email', value: 'swapnil272001@gmail.com', icon: Mail, href: 'mailto:swapnil272001@gmail.com' },
  { label: 'WhatsApp', value: '+91 91467 05846', icon: MessageCircle, href: 'https://wa.me/919146705846' },
  { label: 'GitHub', value: 'github.com/swapnilkoli27', icon: Github, href: 'https://github.com/swapnilkoli27' },
  { label: 'LinkedIn', value: 'linkedin.com/in/swapnil-koli', icon: Linkedin, href: 'https://www.linkedin.com/in/swapnil-koli-660994318' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder: wire up to email service or backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's <span className="text-gradient-accent">talk.</span>
            </>
          }
          subtitle="Tell me about your project. I'll get back to you within 24 hours."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-2xl glass p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-white/40">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-accent-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-blue/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-white/40">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@email.com"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-accent-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-blue/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs font-mono uppercase tracking-wide text-white/40">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    required
                    value={form.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value)}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all focus:border-accent-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-blue/20"
                  >
                    <option value="" className="bg-ink-900">Select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-xs font-mono uppercase tracking-wide text-white/40">
                    Budget
                  </label>
                  <select
                    id="budget"
                    required
                    value={form.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all focus:border-accent-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-blue/20"
                  >
                    <option value="" className="bg-ink-900">Select budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-ink-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-white/40">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell me about your project, goals and timeline..."
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-accent-blue/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent-blue/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                data-cursor="hover"
                className="group relative flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Inquiry Sent
                  </>
                ) : (
                  <>
                    Send Project Inquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all group-hover:border-accent-blue/40 group-hover:text-accent-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-mono uppercase tracking-wide text-white/40">
                        {link.label}
                      </span>
                      <span className="text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                        {link.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
