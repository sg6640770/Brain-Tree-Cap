import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import GlobeHero from '../globe/GlobeHero';
import { PrimaryButton, SecondaryButton } from '../common/Buttons';
import { APP_INSTALL_URL, CALENDLY_URL } from '../../constants/siteLinks';
import { heroContent } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

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

export default function Hero() {
  const heroRef = useRef(null);
  const reduced = prefersReducedMotion();

  return (
    <section ref={heroRef} className="relative min-h-[120vh] md:min-h-[125vh]">
      <div className="sticky top-[80px] flex min-h-[calc(100vh-80px)] items-start xl:min-h-0">
        <div className="glow-wrap site-container pb-2 pt-6 md:pt-8 xl:pb-0 xl:pt-12">
          {/* Decorative glow - contained */}
          <div aria-hidden="true" className="glow glow-blue" style={{ width: 420, height: 420, top: -40, right: -60 }} />
          <div aria-hidden="true" className="glow glow-gold" style={{ width: 300, height: 300, top: 120, right: 80, opacity: 0.5 }} />
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
                <PrimaryButton
                  size="hero"
                  href={APP_INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sweep w-full md:w-auto"
                >
                  Start investing
                </PrimaryButton>
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 1.2 }}
              >
                {heroContent.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#D6E1F0] bg-white/80 px-3 py-1.5 text-[13px] font-medium leading-5 text-[#30446B]"
                  >
                    {chip}
                  </span>
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
                  <span className="align-super">\u2020 See Disclosures.</span>{' '}
                  <span className="align-super">\u2021 See Disclosures.</span>
                </span>
              </motion.div>
            </div>
            <motion.div
              className="flex justify-center xl:justify-end xl:self-center"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: reduced ? 0 : 0.4 }}
            >
              <GlobeHero scrollTarget={heroRef} className="mx-auto max-w-[320px] md:max-w-[400px] xl:max-w-[560px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
