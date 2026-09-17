import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { navLinks } from '@/data/content';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-strong shadow-2xl shadow-black/40'
              : 'border border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 text-base font-bold tracking-tight sm:text-lg"
            data-cursor="hover"
          >
            <img 
              src="/logo.png" 
              alt="GrowUnified Technologies Logo" 
              className="h-8 w-8 rounded-lg object-contain bg-white/10 p-0.5" 
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-extrabold tracking-tight">GrowUnified</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">Technologies</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group relative px-4 py-2 text-sm text-white/60 transition-colors hover:text-white"
                data-cursor="hover"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-accent-blue to-accent-cyan transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] md:inline-flex"
              data-cursor="hover"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-white md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col bg-ink-900 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="GrowUnified" className="h-7 w-7 rounded-lg object-contain bg-white/10 p-0.5" />
                  <span className="text-base font-bold text-white">
                    GrowUnified<span className="text-emerald-400">.</span>
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="border-b border-white/5 py-4 text-2xl font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="https://wa.me/917057985925?text=Hi%20GrowUnified%20Technologies,%20I%20have%20a%20project%20inquiry%20and%20would%20like%20to%20discuss!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded-full bg-emerald-500 py-4 font-semibold text-white shadow-lg hover:bg-emerald-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
