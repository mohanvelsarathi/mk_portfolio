import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { experience } from '../../data/portfolio';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

import { getIconForTool } from '../../lib/utils';

function ExperienceItem({ org, role, start, end, location, responsibilities, tools }: {
  org: string; role: string; start: string; end: string; location: string; responsibilities: string[]; tools: string[];
}) {
  return (
    <motion.div variants={itemVariants} className="relative pl-6 sm:pl-8 border-l-2 border-[var(--color-border)] pb-12 last:pb-0">
      <div className="absolute w-3.5 h-3.5 bg-[var(--color-surface)] border-2 border-[var(--color-accent)] rounded-full -left-[8px] top-1.5"></div>
      
      <p className="text-[12px] font-mono font-medium text-[var(--color-accent)] uppercase tracking-wide mb-2">
        {start} – {end} <span className="text-[var(--color-text-muted)] mx-2">|</span> {location}
      </p>
      
      <h4 className="text-[20px] font-bold text-[var(--color-text-primary)] leading-snug mb-1">{role}</h4>
      <p className="text-[16px] text-[var(--color-text-secondary)] font-medium mb-4">{org}</p>
      
      <ul className="flex flex-col gap-3 mb-6 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
        {responsibilities.map((resp, i) => (
          <li key={i} className="relative pl-5 group">
            {/* Custom bullet point matching UI */}
            <div className="absolute w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full left-0 top-[8px] shadow-[0_0_5px_var(--color-accent)] opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <span className="block text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
              {resp}
            </span>
          </li>
        ))}
      </ul>
      
      <div className="mt-2 mb-3">
        <p className="text-[12px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">
          Hands On Experience in :
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tools.map(tool => {
          const iconPath = getIconForTool(tool);
          return (
            <span 
              key={tool}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[11px] font-bold text-[var(--color-text-primary)] uppercase tracking-wider"
            >
              {iconPath && <img src={iconPath} alt={tool} className="w-[20px] h-[20px] object-contain" />}
              {tool}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

export function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <Section id="experience" subtle className="min-h-[100dvh] w-full flex flex-col justify-center py-20">
      <Container>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Professional Experience
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)] max-w-2xl">
            My work experience in software engineering and web development.
          </p>
        </motion.div>

        {/* Main Card Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-xl border border-[var(--color-border)] bg-[#0d131f] md:bg-[var(--color-surface-subtle)] shadow-[var(--shadow-card)] overflow-hidden"
        >
          <div className="p-8 md:p-12 bg-[var(--color-surface)]">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </span>
              <h3 className="text-[13px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Work History
              </h3>
            </motion.div>
            
            <div className="pl-2">
              {experience.map((exp) => (
                <ExperienceItem
                  key={exp.id}
                  org={exp.organization}
                  role={exp.role}
                  start={exp.startDate}
                  end={exp.endDate}
                  location={exp.location}
                  responsibilities={exp.responsibilities}
                  tools={exp.tools}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
