import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { audienceCards } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function AudienceSection() {
  const reduced = prefersReducedMotion();
  return (
    <section className="bg-mist section-pad xl:py-[82px]">
      <div className="site-container">
        <SectionHeader label="Who it is for" title="Who is BrainTree for?" />
        <div className="mx-auto mt-10 grid auto-rows-fr max-w-[1280px] items-stretch gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-4">
          {audienceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : index * 0.1 }}
                whileHover={reduced ? undefined : { y: -4 }}
                className="group flex min-h-[300px] flex-col rounded-[28px] border border-[#D6E4F6] bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-card-lg sm:p-8"
              >
                <div
                  role="img"
                  aria-label={card.title}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-tint text-gold-text transition-transform duration-200 group-hover:scale-105"
                >
                  <Icon aria-hidden="true" size={24} strokeWidth={1.75} />
                </div>
                <h3 className="brand-serif mt-5 text-[24px] leading-[1.3] !tracking-normal text-navy xl:text-[26px]">{card.title}</h3>
                <p className="mt-3 text-[16px] leading-[26px] text-[#475775]">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
