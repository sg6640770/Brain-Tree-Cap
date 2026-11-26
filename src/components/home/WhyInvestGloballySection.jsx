import { motion } from 'framer-motion';
import { reasons } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function WhyInvestGloballySection() {
  const reduced = prefersReducedMotion();
  return (
    <section id="why-us" data-reveal className="bg-mist section-pad lg:pt-9 lg:pb-[88px]">
      <div className="site-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="inline-flex h-8 items-center rounded-full bg-gold-tint px-[14px] text-[13px] font-semibold text-gold-text">Why invest globally</span>
          <h2 className="brand-serif mt-4 text-[36px] leading-[1.15] !tracking-normal text-navy md:text-[48px]">Three reasons people invest globally.</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-[60px] xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : index * 0.12 }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="group min-h-[314px] rounded-[28px] bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-lg"
              >
                <div
                  aria-label={item.key}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-tint text-gold-text transition-transform duration-200 group-hover:scale-105"
                >
                  <Icon aria-hidden="true" size={24} strokeWidth={1.75} />
                </div>
                <h3 className="brand-serif mt-5 text-[24px] leading-[1.3] !tracking-normal text-navy xl:text-[26px]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[26px] text-[#475775]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
