import { motion } from 'framer-motion';
import { reasons } from '../../content/siteContent';
import { SpotlightCard, IconPop } from '../../lib/motion-helpers';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';
import AnimatedSectionHeader from '../common/AnimatedSectionHeader';

export default function WhyInvestGloballySection() {
  const reduced = prefersReducedMotion();
  return (
    <section id="why-us" className="bg-mist section-pad lg:pt-9 lg:pb-[88px]">
      <div className="site-container">
        <AnimatedSectionHeader
          label="Why invest globally"
          title="Three reasons people invest globally."
          pillClassName="!h-8 !px-[14px] !text-[13px] !font-semibold !text-gold-text"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-[60px] xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={item.key}
                as="article"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : index * 0.12 }}
                whileHover={reduced ? undefined : { y: -4 }}
                aria-label={item.key}
                className="group min-h-[314px] rounded-[28px] bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-lg"
              >
                <IconPop
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-tint text-gold-text transition-transform duration-200 group-hover:rotate-6"
                >
                  <Icon aria-hidden="true" size={24} strokeWidth={1.75} />
                </IconPop>
                <h3 className="brand-serif mt-5 text-[24px] leading-[1.3] !tracking-normal text-navy xl:text-[26px]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[26px] text-[#475775]">{item.text}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
