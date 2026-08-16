import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/swapnilkoli27' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/swapnil-koli-660994318' },
  { label: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const reduced = usePrefersReducedMotion();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="text-2xl font-bold tracking-tight">
              SK<span className="text-gradient-accent">.</span>
            </span>
            <p className="text-sm text-white/40">
              Building digital experiences, one product at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wide text-white/30">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wide text-white/30">
              Social
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-cursor="hover"
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/60 transition-all hover:text-white hover:border-white/20"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            data-cursor="hover"
            className="group flex h-10 w-10 items-center justify-center rounded-full glass text-white/60 transition-all hover:text-white hover:border-white/20"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">
            © 2026 Swapnil Koli. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
