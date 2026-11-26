import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { whatGoesWrong } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

export default function WhatGoesWrongSection() {
  const reduced = prefersReducedMotion();
  return (
    <section className="bg-mist section-pad">
      <div className="site-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="mx-auto flex w-fit max-w-full items-center justify-center whitespace-normal rounded-full bg-gold-tint px-[14px] py-2 text-center text-[13px] font-semibold leading-4 text-gold-text">
            How most Indians invest in Global markets today
          </span>
          <h2 className="brand-serif mx-auto mt-4 max-w-[760px] text-[36px] leading-[1.15] !tracking-normal text-navy md:text-[48px]">
            Most picks start with a tip, not<br className="hidden md:block" /> research.
          </h2>
        </motion.div>
        <motion.div
          className="mx-auto mt-8 w-full max-w-[1172px] rounded-[28px] bg-navy px-5 py-7 text-white shadow-card-lg sm:px-7 md:p-10 xl:mt-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: reduced ? 0 : 0.15 }}
        >
          <h3 className="brand-serif text-[28px] leading-[1.2] !tracking-normal text-white">What goes wrong</h3>
          <div className="mt-5 grid gap-x-8 gap-y-5 text-[16px] leading-6 md:grid-cols-2">
            {whatGoesWrong.map((statement, index) => (
              <motion.div
                key={statement}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.45, ease: EASE_OUT, delay: reduced ? 0 : 0.3 + index * 0.12 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A3F73] text-gold-light">
                  <X size={15} strokeWidth={2.2} />
                </span>
                <span>{statement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
