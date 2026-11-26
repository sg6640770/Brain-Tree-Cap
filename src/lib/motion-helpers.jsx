import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, viewportOnce, EASE_OUT, prefersReducedMotion } from './animation';

export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  const Tag = as;
  if (prefersReducedMotion()) {
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </Tag>
  );
}

export function StaggerContainer({ children, stagger = 0.08, delayChildren = 0, className = '', as = 'div' }) {
  const ref = useRef(null);
  const inView = useInView(ref, viewportOnce);
  const Tag = as;
  const variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
  if (prefersReducedMotion()) {
    return <Tag className={className}>{children}</Tag>;
  }
  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = '', as = 'div' }) {
  const Tag = as;
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}

import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

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
