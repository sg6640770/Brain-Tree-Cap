import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlobeHero from '../globe/GlobeHero';
import { PrimaryButton, SecondaryButton } from '../common/Buttons';
import { MagneticButton } from '../../lib/motion-helpers';
import { APP_INSTALL_URL, CALENDLY_URL } from '../../constants/siteLinks';
import { heroContent } from '../../content/siteContent';
import { EASE_OUT, prefersReducedMotion } from '../../lib/animation';

function HeroHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = prefersReducedMotion();
  const words = heroContent.headline;

  return (
    <h1
      ref={ref}
      className="hero-title brand-serif mt-1 max-w-[640px] text-[40px] leading-[1.05] tracking-normal text-navy xl:mt-5 xl:text-[58px] xl:leading-[1.15]"
    >
      {words.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((word, wi) => {
            const index = li === 0 ? wi : wi + words[0].split(' ').length;
            return (
              <span key={wi} className="hero-word">
                {reduced ? (
                  <span>{word}</span>
                ) : (
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: '0.5em' }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 + index * 0.12 }}
                  >
                    {word}
                  </motion.span>
                )}
                {wi < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function MultiTags() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduced = prefersReducedMotion();
  const tags = heroContent.multiTags;

  return (
    <div
      ref={ref}
      className="mt-7 flex flex-wrap items-center gap-2 text-[18px] font-bold leading-5 text-[#000] xl:mt-8"
    >
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#475775]">|</span>}
          <span
            className={`multi-tag ${inView && !reduced ? 'lit' : ''}`}
            style={{ animationDelay: `${0.5 + i * 0.25}s` }}
          >
            {reduced ? (
              tag
            ) : (
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.5 + i * 0.25 }}
              >
                {tag}
              </motion.span>
            )}
          </span>
        </span>
      ))}
    </div>
  );
}

function ScrollCue() {
  const [pastThreshold, setPastThreshold] = useState(false);

  useEffect(() => {
    const update = () => setPastThreshold(window.scrollY > 80);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: pastThreshold ? 0 : 1 }}
      transition={{ duration: 0.3, ease: EASE_OUT }}
      className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex"
    >
      <div className="scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E1F0] bg-white/80 text-navy shadow-[0_4px_14px_rgba(10,27,61,0.08)]">
        <ChevronDown size={20} strokeWidth={1.8} />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const reduced = prefersReducedMotion();

  // Pointer parallax on the background glows (desktop, fine pointers only)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springPx = useSpring(px, { stiffness: 50, damping: 20 });
  const springPy = useSpring(py, { stiffness: 50, damping: 20 });
  const finePointer = typeof window !== 'undefined'
    && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const handlePointerMove = (e) => {
    if (!finePointer || reduced) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    px.set(Math.max(-14, Math.min(14, (e.clientX - cx) * 0.02)));
    py.set(Math.max(-14, Math.min(14, (e.clientY - cy) * 0.02)));
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-[120vh] md:min-h-[125vh]"
    >
      <div className="sticky top-[80px] flex min-h-[calc(100vh-80px)] items-start xl:min-h-0">
        <div className="glow-wrap site-container pb-2 pt-6 md:pt-8 xl:pb-0 xl:pt-12">
          {/* Decorative glows - ambient drift + pointer parallax, contained */}
          <motion.div
            aria-hidden="true"
            className="glow glow-blue hero-glow-a"
            style={{
              width: 420, height: 420, top: -40, right: -60,
              ...(finePointer && !reduced ? { x: springPx, y: springPy } : {}),
            }}
          />
          <motion.div
            aria-hidden="true"
            className="glow glow-gold hero-glow-b"
            style={{
              width: 300, height: 300, top: 120, right: 80, opacity: 0.5,
              ...(finePointer && !reduced ? { x: springPy, y: springPx } : {}),
            }}
          />

          <div className="relative z-10 grid items-start gap-2 xl:grid-cols-[minmax(0,640px)_minmax(0,560px)] xl:gap-10">
            <div>
              <HeroHeadline />
              <MultiTags />
              <motion.p
                className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-[#475775] xl:mt-8 xl:text-[18px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 0.9 }}
              >
                {heroContent.blurb}
              </motion.p>
              <motion.div
                className="mt-2 flex w-full max-w-[320px] flex-col items-center gap-3 md:max-w-none md:flex-row md:gap-4 xl:mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 1.05 }}
              >
                <MagneticButton
                  as="div"
                  className="w-full md:w-auto"
                >
                  <PrimaryButton
                    size="hero"
                    href={APP_INSTALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sweep w-full md:w-auto"
                  >
                    Start investing
                  </PrimaryButton>
                </MagneticButton>
                <SecondaryButton
                  size="hero"
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-[#dce5f1] bg-white md:w-auto"
                >
                  Speak with the team
                </SecondaryButton>
              </motion.div>
              <motion.div
                className="mt-5 flex flex-wrap items-center gap-2 xl:flex-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE_OUT, delay: reduced ? 0 : 1.2 }}
              >
                {heroContent.chips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT, delay: reduced ? 0 : 1.2 + i * 0.06 }}
                    className="rounded-full border border-[#D6E1F0] bg-white/80 px-3 py-1.5 text-[13px] font-medium leading-5 text-[#30446B]"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="mt-3 flex flex-col gap-1 text-[13px] leading-5 text-[#475775]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 1.35 }}
              >
                {heroContent.notes.map((note) => (
                  <span key={note}>{note}</span>
                ))}
                <span className="text-[11px] leading-4 text-[#8A9AB8]">
                  <span className="align-super">{'\u2020 See Disclosures.'}</span>{' '}
                  <span className="align-super">{'\u2021 See Disclosures.'}</span>
                </span>
              </motion.div>
            </div>
            <div className="relative flex justify-center xl:justify-end xl:self-center">
              {/* Soft gold halo behind the globe - breathing */}
              <div
                aria-hidden="true"
                className="globe-halo glow glow-gold"
                style={{ width: 380, height: 380, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: reduced ? 0 : 0.4 }}
              >
                <GlobeHero scrollTarget={heroRef} className="mx-auto max-w-[320px] md:max-w-[400px] xl:max-w-[560px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
