export const EASE_OUT = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, amount: 0.18 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay },
  }),
};

export const containerStagger = {
  hidden: {},
  show: (stagger = 0.08, delayChildren = 0) => ({
    transition: { staggerChildren: stagger, delayChildren },
  }),
};

export const wordReveal = {
  hidden: { opacity: 0, y: '0.5em' },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  }),
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
