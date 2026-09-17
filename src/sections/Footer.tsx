import { Instagram, MessageCircle, ArrowUp, ArrowUpRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { companyInfo } from '@/data/content';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
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
    <footer className="relative border-t border-white/5 py-14">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="GrowUnified Technologies" 
                className="h-9 w-9 rounded-xl object-contain bg-white/10 p-0.5" 
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  GrowUnified
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium mt-1">
              Ideas to Impact
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              We design, develop, and deploy literally any software, custom IT solution, AI model, and embedded IoT system.
            </p>
          </div>

          {/* Navigation Links */}
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

          {/* Social & Contact: Instagram Only & WhatsApp */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-wide text-white/30">
              Connect With Us
            </span>
            
            {/* Instagram */}
            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex items-center gap-3 rounded-xl glass px-4 py-2.5 text-white/80 transition-all hover:text-white hover:border-pink-500/30 hover:bg-pink-950/20"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-pink-400 group-hover:scale-110 transition-transform">
                <Instagram className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Instagram</span>
                <span className="text-[11px] text-white/40">{companyInfo.instagramHandle}</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 ml-auto text-white/30 group-hover:text-pink-400" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss!"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 text-white/80 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/40"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white group-hover:scale-110 transition-transform shadow-md">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">WhatsApp</span>
                <span className="text-[11px] text-emerald-400">+91 7057985925</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 ml-auto text-emerald-400" />
            </a>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 GrowUnified Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Ideas to Impact · Web • Mobile • Desktop • AI • IoT
          </p>
        </div>
      </div>
    </footer>
  );
}
