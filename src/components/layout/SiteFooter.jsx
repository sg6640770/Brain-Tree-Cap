import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandLogo from '../common/BrandLogo';
import { footerColumns, footerBlurb, footerLegal } from '../../content/siteContent';
import { viewportOnce, EASE_OUT } from '../../lib/animation';

export default function SiteFooter() {
  return (
    <footer className="bg-[#0A1B3D] text-[#C5D0E8] xl:min-h-[418px]">
      <div className="site-container pb-[60px] pt-12 xl:pt-16">
        <div className="grid gap-10 lg:grid-cols-[410px_1fr] lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="max-w-[410px]"
          >
            <BrandLogo imageClassName="h-[98px] w-[178px] rounded-2xl bg-white/95 p-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.18)]" />
            <p className="mt-4 text-[15px] leading-[23px] text-[#C5D0E8]">{footerBlurb}</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[94px_116px_82px] lg:justify-end lg:gap-x-[70px]">
            {footerColumns.map((col, i) => (
              <motion.div
                key={col.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 + i * 0.08 }}
              >
                <h3 className="text-[14px] font-semibold leading-5 text-[#F7CD62]">{col.heading}</h3>
                <ul className="mt-[14px] space-y-[10px] text-[15px] leading-5 text-[#C5D0E8]">
                  {col.links.map((link) =>
                    link.to ? (
                      <li key={link.label}>
                        <Link to={link.to} className="hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : undefined}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="hover:text-white"
                        >
                          {link.label}
                          {link.external ? ' \u2192' : ''}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 h-px bg-[#24407F]" />
        <p className="mt-6 text-[12.5px] leading-5 text-[#8FA0C4]">{footerLegal}</p>
      </div>
    </footer>
  );
}
