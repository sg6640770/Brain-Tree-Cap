import { motion } from 'framer-motion';
import PyramidLayersView from '../portfolio/PyramidLayersView';
import { CountUp } from '../../lib/motion-helpers';
import { pyramidChips } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function PyramidSection() {
  const reduced = prefersReducedMotion();
  return (
    <section data-reveal className="bg-white section-pad">
      <div className="site-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <motion.span
            className="inline-flex h-8 items-center rounded-full bg-gold-tint px-[14px] text-[13px] font-semibold text-gold-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            How we invest
          </motion.span>
          <span className="block overflow-hidden">
            <motion.h2
              className="brand-serif mt-4 text-[36px] leading-[1.15] !tracking-normal text-navy md:text-[48px]"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.08 }}
            >
              The Layered Pyramid Approach.
            </motion.h2>
          </span>
          <motion.p
            className="mx-auto mt-4 max-w-[680px] text-[18px] leading-[1.5] text-[#475775]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
          >
            Four layers of ETFs, from the safest at the base to the boldest at the top.
          </motion.p>
        </motion.div>
        <PyramidLayersView />
        <motion.div
          className="mx-auto mt-9 w-full max-w-[860px] rounded-[28px] bg-[#FBF1D0] px-5 py-7 text-left sm:px-7 md:mt-14 md:px-9 md:py-9"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 0.2 }}
        >
          <h3 className="brand-serif text-[24px] leading-tight !tracking-normal text-navy md:text-[30px]">The barbell approach</h3>
          <p className="mt-3 text-[14.5px] leading-[1.65] text-[#475775] md:text-[15.5px]">
            A capital-preservation core compounded with a bounded high-conviction growth sleeve, sized so that even a complete drawdown of the growth side cannot materially impair the core.
          </p>

          <div className="mt-7 grid grid-cols-[minmax(0,1fr)_30px_minmax(0,1fr)] items-stretch md:mt-9 md:grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)]">
            <motion.div
              className="flex flex-col items-center justify-center rounded-[14px] border border-[#C9D4EE] bg-[#FFF9E6] px-3 py-5 text-center md:py-7"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <div className="brand-serif text-[28px] leading-none !tracking-normal text-navy md:text-[52px]"><CountUp to={70} />–<CountUp to={80} />%</div>
              <div className="mt-3 text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-[#475775] md:text-[11.5px]">
                Preservation core
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="relative flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: reduced ? 0 : 0.4 }}
            >
              <motion.div
                className="h-[6px] w-full bg-[#A9B6CF]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 0.5 }}
              />
              <motion.div
                className="absolute flex h-[26px] w-[26px] items-center justify-center rounded-full border-[4px] border-[#A9B6CF] bg-[#FBF1D0] md:h-[44px] md:w-[44px] md:border-[5px]"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.25, 1] }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : 1.1, times: [0, 0.5, 1] }}
              >
                <span className="h-[8px] w-[8px] rounded-full bg-[#7C8BA6] md:h-[14px] md:w-[14px]" />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center rounded-[14px] border border-[#E6D08C] bg-[#FBF1D0] px-3 py-5 text-center md:py-7"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <div className="brand-serif text-[28px] leading-none !tracking-normal text-[#9A6B12] md:text-[52px]"><CountUp to={20} />–<CountUp to={30} />%</div>
              <div className="mt-3 text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-[#475775] md:text-[11.5px]">
                Growth sleeve
              </div>
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {pyramidChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <span key={chip.text} className="inline-flex items-center gap-2 rounded-full border border-[#C9DAF4] bg-[#F1F6FD] px-4 py-2.5 text-[13px] font-semibold leading-5 text-navy">
                <Icon aria-hidden="true" size={16} strokeWidth={1.75} className="text-blue" />
                {chip.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
