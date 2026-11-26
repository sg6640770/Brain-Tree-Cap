import { motion } from 'framer-motion';
import { AnimatedHeading } from '../../lib/motion-helpers';
import { viewportOnce, EASE_OUT } from '../../lib/animation';

export default function AnimatedSectionHeader({
  label,
  title,
  lines,
  subtitle,
  centered = true,
  className = '',
  pillClassName = '',
  titleClassName = '',
  subtitleClassName = '',
}) {
  return (
    <div className={`${centered ? 'mx-auto max-w-[980px] text-center' : ''} ${className}`}>
      {label && (
        <motion.div
          className={`brand-pill ${pillClassName}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          {label}
        </motion.div>
      )}
      <AnimatedHeading
        lines={lines || [title]}
        className={`brand-serif mt-4 text-[36px] leading-[1.15] !tracking-normal text-navy md:text-[48px] ${titleClassName}`}
      />
      {subtitle && (
        <motion.p
          className={subtitleClassName}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
