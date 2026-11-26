import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CALENDLY_URL } from '../../constants/siteLinks';
import { portfolios, multiTags, CTA_LABELS } from '../../content/siteContent';
import { SpotlightCard, IconPop } from '../../lib/motion-helpers';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function GlobalPortfoliosSection() {
  const reduced = prefersReducedMotion();
  return (
    <section id="global-portfolios" className="bg-mist section-pad lg:pt-[92px]">
      <div className="site-container">
        <motion.div
          className="mx-auto flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <motion.span
            className="brand-pill !h-[44px] !px-6 !text-[18px] !font-medium !text-navy"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            Our portfolios
          </motion.span>
          <span className="block overflow-hidden">
            <motion.h2
              className="brand-serif mt-4 text-[44px] leading-[1.15] !tracking-normal text-navy md:text-[64px]"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.08 }}
            >
              Our portfolios
            </motion.h2>
          </span>
          <motion.span
            aria-hidden="true"
            className="mt-5 h-1 w-[72px] rounded-full bg-[#F2C65B]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: reduced ? 0 : 0.45 }}
          />
        </motion.div>
        <div className="mt-9 grid auto-rows-fr items-stretch gap-5 md:grid-cols-2">
          {portfolios.map(({ title, description, icon: Icon, iconClass }, index) => (
            <SpotlightCard
              key={title}
              as="article"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: reduced ? 0 : index * 0.12 }}
              whileHover={reduced ? undefined : { y: -6 }}
              className="group min-h-[286px] rounded-[26px] border border-[#D8E3F5] bg-white p-5 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-[#D9A020] hover:shadow-card-lg sm:p-6 lg:p-7"
            >
              <div className="flex h-full flex-col">
                <IconPop
                  aria-hidden="true"
                  className={`inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full ${iconClass} transition-transform duration-200 group-hover:rotate-6`}
                >
                  <Icon size={22} strokeWidth={1.9} />
                </IconPop>
                <h3 className="brand-serif mt-4 text-[24px] leading-[1.3] !tracking-normal text-navy">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-[#475775] sm:text-[15px] md:text-[16px]">{description}</p>

                {/* Horizontal Multi tag row */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {multiTags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-[#C9DAF4] bg-[#F1F6FD] px-3 py-1.5 text-[12px] font-semibold leading-4 text-navy"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.4, ease: EASE_OUT, delay: reduced ? 0 : index * 0.12 + 0.3 + tagIndex * 0.04 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[15px] font-semibold text-blue transition-colors hover:text-[#1B44C8] sm:text-[16px]"
                >
                  {CTA_LABELS.bookConsultation}{' '}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
