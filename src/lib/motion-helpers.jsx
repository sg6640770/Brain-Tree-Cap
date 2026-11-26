import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
  MotionConfig,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeUp, viewportOnce, EASE_OUT, prefersReducedMotion } from './animation';

export { MotionConfig };

export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  if (prefersReducedMotion() || !motion[as]) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({ children, stagger = 0.08, delayChildren = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  const variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
  if (prefersReducedMotion() || !motion[as]) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, className = '', as = 'div' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };
  if (prefersReducedMotion() || !motion[as]) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

export function CountUp({ to, duration = 1.2, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion()) {
      setValue(to);
      return undefined;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export function SpotlightCard({
  children,
  className = '',
  as = 'div',
  initial,
  whileInView,
  viewport,
  transition,
  whileHover,
  ...rest
}) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  if (!motion[as]) {
    const Tag = as;
    return <Tag className={`spotlight-card ${className}`} {...rest}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      whileHover={whileHover}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function IconPop({ children, className = '', as = 'span', ...rest }) {
  if (prefersReducedMotion() || !motion[as]) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ scale: 0.6, rotate: -8 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={viewportOnce}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function MagneticButton({ children, className = '', as = 'div', href, target, rel, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  const handleMove = (e) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 6;
    x.set(Math.max(-max, Math.min(max, dx * 0.18)));
    y.set(Math.max(-max, Math.min(max, dy * 0.18)));
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!motion[as]) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </MotionTag>
  );
}

export function AnimatedHeading({ lines, className = '', as = 'h2' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  if (prefersReducedMotion() || !motion[as]) {
    const Tag = as;
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </Tag>
    );
  }
  const MotionTag = motion[as];
  return (
    <MotionTag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '100%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
