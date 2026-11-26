import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { safetyCards } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function SafetySection() {
  const reduced = prefersReducedMotion();
  return (
    <section className="bg-[#0A1B3D] section-pad xl:py-[82px]">
      <div className="site-container">
        <SectionHeader
          label="Safety"
          pillClassName="!border-0 !bg-[#1B2B5E] !text-[#F7CD62]"
          titleClassName="!mt-3 text-white"
          title="Portfolio that you own and control"
        />
        <motion.p
          className="mx-auto mt-3 max-w-[700px] text-center text-[18px] leading-[1.6] text-[#B7C3DB]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          All investments are in listed securities, held in your name. You own and control what is in your portfolio.
        </motion.p>
        <div className="mt-8 grid auto-rows-fr items-stretch gap-[22px] md:grid-cols-2 xl:mt-10 xl:grid-cols-4">
          {safetyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : index * 0.1 }}
                className="flex min-h-[272px] flex-col rounded-[20px] border border-[#24407F] bg-[#12285C] p-7 text-white"
              >
                <div aria-label={card.title} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7CD62] text-[#0A1B3D]">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-[20px] font-semibold leading-[1.3] text-white">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[#B7C3DB]">{card.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
