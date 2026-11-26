import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { APP_INSTALL_URL } from '../../constants/siteLinks';
import { navItems } from '../../content/siteContent';
import { prefersReducedMotion, EASE_OUT } from '../../lib/animation';

const AUTH_URL = APP_INSTALL_URL;

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reduced = prefersReducedMotion();

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 8);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnWideScreen = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('resize', closeOnWideScreen);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('resize', closeOnWideScreen);
    };
  }, [menuOpen]);

  // Scroll-spy: highlight nav item whose section is in view
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname === '/contact' ? 'contact' : '');
      return undefined;
    }
    const sections = navItems
      .filter((item) => item.id && item.href.startsWith('#'))
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  const linkFor = (item) =>
    item.href.startsWith('#') ? (pathname === '/' ? item.href : `/${item.href}`) : item.href;
  const isActive = (item) =>
    pathname === '/' ? activeSection === item.id : pathname === '/contact' && item.id === 'contact';

  const linkClass = (active) =>
    `nav-link-hover relative whitespace-nowrap py-2 text-[14px] transition-colors hover:text-navy 2xl:text-[15px] ${active ? 'font-semibold text-navy' : 'font-medium text-ink'}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-[250ms] ease-out ${
        scrolled
          ? 'border-[#DCE5F1] bg-white/85 shadow-[0_4px_18px_rgba(10,27,61,0.06)] backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <nav className="mx-auto flex h-[79px] w-[calc(100%-32px)] max-w-[1280px] items-center justify-between gap-2 sm:w-[calc(100%-48px)] xl:gap-6">
        <BrandLogo className="justify-self-start" />
        <div className="hidden min-w-0 items-center justify-center gap-5 whitespace-nowrap xl:mx-auto xl:flex 2xl:gap-8">
          {navItems.map((item) => {
            const active = isActive(item);
            const href = linkFor(item);
            return (
              <Link key={item.label} to={href} className={linkClass(active)}>
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 xl:gap-2">
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center justify-center rounded-xl border border-[#D6E1F0] px-3 text-[13px] font-semibold text-navy transition-colors hover:border-[#AFC2E3] hover:bg-[#F7F9FD] xl:inline-flex 2xl:px-4 2xl:text-[14px]"
          >
            Log in
          </a>
          <motion.a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={reduced ? undefined : { scale: 0.97 }}
            className="btn-sweep hidden h-10 items-center justify-center rounded-xl bg-blue px-3 text-[13px] font-semibold text-white shadow-[0_3px_8px_rgba(33,80,232,0.18)] transition-colors hover:bg-[#1B44C8] xl:inline-flex 2xl:px-4 2xl:text-[14px]"
          >
            Sign up
          </motion.a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue xl:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18, ease: EASE_OUT }}
                className="inline-flex"
              >
                {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      {!reduced && (
        <motion.div className="scroll-progress" style={{ scaleX: progress, width: '100%' }} />
      )}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="absolute inset-x-0 top-full min-h-[calc(100dvh-79px)] overflow-y-auto overscroll-contain border-b border-[#DCE5F1] bg-white px-6 pb-5 pt-2 shadow-[0_12px_24px_rgba(10,27,61,0.08)] xl:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col">
              {navItems.map((item, i) => {
                const active = isActive(item);
                const href = linkFor(item);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE_OUT, delay: reduced ? 0 : 0.05 + i * 0.04 }}
                  >
                    <Link
                      to={href}
                      onClick={() => setMenuOpen(false)}
                      className={`${linkClass(active)} block border-b border-[#EEF2F8] py-3`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                className="mt-5 grid grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: reduced ? 0 : 0.05 + navItems.length * 0.04 }}
              >
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#D6E1F0] px-4 text-[14px] font-semibold text-navy transition-colors hover:border-[#AFC2E3] hover:bg-[#F7F9FD]"
                >
                  Log in
                </a>
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="primary-button inline-flex h-11 items-center justify-center rounded-xl bg-blue px-4 text-[14px] font-semibold text-white shadow-[0_3px_8px_rgba(33,80,232,0.18)] hover:bg-[#1B44C8]"
                >
                  Sign up
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
