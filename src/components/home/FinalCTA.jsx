import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../common/Buttons';
import { APP_INSTALL_URL, CALENDLY_URL } from '../../constants/siteLinks';
import { CTA_LABELS } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function FinalCTA() {
  const reduced = prefersReducedMotion();
  return (
    <section className="bg-white section-pad">
      <div className="site-container">
        <motion.div
          className="cta-panel cta-dots mx-auto flex min-h-[358px] max-w-[920px] flex-col items-center justify-center rounded-[40px] px-6 py-[70px] text-center text-white sm:px-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          {/* Floating orbs */}
          <div aria-hidden="true" className="cta-orb cta-orb-a" style={{ width: 180, height: 180, top: '10%', left: '8%', background: 'rgba(247,205,98,0.3)' }} />
          <div aria-hidden="true" className="cta-orb cta-orb-b" style={{ width: 220, height: 220, bottom: '5%', right: '6%', background: 'rgba(33,80,232,0.35)' }} />

          <motion.h2
            className="brand-serif relative z-10 text-[36px] leading-[1.2] !tracking-normal text-white md:text-[48px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 0.2 }}
          >
            Start with one account.
          </motion.h2>
          <motion.p
            className="relative z-10 mt-4 text-[16px] leading-6 text-[#C9D6F5]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: reduced ? 0 : 0.35 }}
          >
            Start from India. Invest in the world.
          </motion.p>
          <motion.div
            className="relative z-10 mt-8 flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 0.5 }}
          >
            <PrimaryButton
              size="cta"
              href={APP_INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shine-sweep !h-[54px] w-full max-w-[320px] md:!h-[62px] md:w-auto md:max-w-none"
            >
              {CTA_LABELS.primary}
            </PrimaryButton>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54px] w-full max-w-[320px] items-center justify-center gap-2 rounded-[14px] border border-white/35 bg-white/5 px-6 text-[16px] font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 md:h-[62px] md:w-auto md:max-w-none"
            >
              {CTA_LABELS.secondary} <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
