import { motion } from 'framer-motion';
import { teamMembers, teamAdvisor } from '../../content/siteContent';
import { viewportOnce, EASE_OUT, prefersReducedMotion } from '../../lib/animation';

function TeamMemberCard({ member, index, horizontal = false }) {
  const initials = member.name.split(' ').map((word) => word[0]).slice(0, 2).join('');
  const avatar = member.image ? (
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      className="h-16 w-16 shrink-0 rounded-[12px] object-cover sm:h-[72px] sm:w-[72px]"
    />
  ) : (
    <div
      aria-hidden="true"
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[12px] bg-[#E4EDFC] text-[20px] font-semibold text-navy sm:h-[72px] sm:w-[72px] ${horizontal ? 'sm:h-[70px] sm:w-[70px]' : ''}`}
    >
      {initials}
    </div>
  );

  if (horizontal) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.08 }}
        className="grid gap-5 rounded-[18px] border border-[#d7e3f4] bg-white p-4 shadow-card sm:grid-cols-[minmax(0,0.78fr)_1fr] sm:items-center sm:gap-6 sm:p-5"
      >
        <div className="flex items-center gap-4 sm:border-r sm:border-[#d7e3f4] sm:pr-6">
          {avatar}
          <div className="min-w-0">
            <p className="text-[10px] font-bold leading-4 tracking-[0.08em] text-[#B2760A] sm:text-[11px]">{member.role}</p>
            <h3 className="brand-serif mt-1 text-[18px] leading-[1.3] !tracking-normal text-navy sm:text-[20px]">{member.name}</h3>
            <p className="mt-1 text-[12px] leading-[1.5] text-[#475775]">{member.credentials}</p>
          </div>
        </div>
        <p className="text-[13px] leading-[1.55] text-[#263858] sm:text-[14px]">{member.biography}</p>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE_OUT, delay: index * 0.08 }}
      className="flex h-full flex-col rounded-[18px] border border-[#d7e3f4] bg-white p-4 shadow-card sm:p-5"
    >
      <div className="flex items-center gap-3">
        {avatar}
        <div className="min-w-0">
          <p className="text-[10px] font-bold leading-4 tracking-[0.07em] text-[#B2760A] sm:text-[11px]">{member.role}</p>
          <h3 className="brand-serif mt-1 text-[17px] leading-[1.3] !tracking-normal text-navy sm:text-[19px]">{member.name}</h3>
          <p className="mt-1 text-[11px] leading-[1.4] text-[#475775] sm:text-[12px]">{member.credentials}</p>
        </div>
      </div>
      <p className="mt-3 text-[12px] leading-[1.55] text-[#263858] sm:text-[13px]">{member.biography}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        {member.tags.map((tag) => (
          <span key={tag} className="inline-flex rounded-full border border-[#E6C47B] px-2 py-[3px] text-[9px] font-semibold leading-3 text-[#9A6508] sm:text-[10px]">{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function AboutSection() {
  const reduced = prefersReducedMotion();
  return (
    <section id="about" className="bg-mist section-pad">
      <div className="site-container">
        <motion.header
          className="max-w-[740px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <p className="text-[11px] font-bold leading-4 tracking-[0.1em] text-[#B2760A] sm:text-[12px]">THE PEOPLE BEHIND BRAINTREE CAPITAL</p>
          <h2 className="brand-serif mt-2 text-[30px] leading-[1.16] !tracking-normal text-navy sm:text-[38px] md:text-[42px]">
            <span className="block">Decades of institutional experience.</span>
            <span className="block">Aligned with your interests.</span>
          </h2>
          <p className="mt-3 max-w-[700px] text-[14px] leading-[1.6] text-[#475775] sm:text-[15px]">
            Our team combines CXO-level leadership across banking, asset management, and technology with deep quantitative portfolio management expertise. Everyone is personally invested in the same strategies we manage for clients.
          </p>
        </motion.header>
        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-2 sm:mt-7">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={reduced ? 0 : index} />
          ))}
        </div>
        <div className="mt-4">
          <TeamMemberCard member={teamAdvisor} index={teamMembers.length} horizontal />
        </div>
      </div>
    </section>
  );
}
