import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../data/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { getIconForTool } from '../../lib/utils';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function ProjectCard({
  project,
  currentIndex,
  handleDragEnd,
}: {
  project: Project;
  currentIndex: number;
  handleDragEnd: (e: any, info: any) => void;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        className="rounded-xl border border-[var(--color-border)] bg-[#0d131f] md:bg-[var(--color-surface-subtle)] shadow-[var(--shadow-card)] overflow-hidden flex flex-col md:flex-row cursor-grab active:cursor-grabbing w-full"
      >
        {/* Left Column */}
        <div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-surface)] relative pointer-events-auto">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="bg-[var(--color-accent)] text-[#1A1A1A] text-[12px] font-bold px-3 py-1 rounded">
              0{currentIndex + 1}
            </span>
            <span className="text-[12px] font-bold text-[var(--color-accent)] tracking-widest uppercase">
              Project
            </span>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            {project.title}
          </motion.h3>

          <motion.p variants={itemVariants} className="text-[15px] text-[var(--color-text-secondary)] mb-8">
            {project.description}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            {project.technologies.map((tech) => {
              const iconPath = getIconForTool(tech);
              return (
                <div key={tech} className="flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[13px] font-semibold text-[var(--color-text-primary)]">
                  {iconPath && <img src={iconPath} alt={tech} className="w-[18px] h-[18px] object-contain drop-shadow-sm contrast-125" />}
                  {tech}
                </div>
              );
            })}
          </motion.div>

          {/* What I Built */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
              <h4 className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                What I Built
              </h4>
            </div>
            <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
              A Spring Boot-based Employee Management System designed to handle employee data and operations via RESTful APIs. Built with a layered architecture, Spring Security, and MySQL for reliable, secure, and maintainable data management.
            </p>
          </motion.div>

          {/* Backend Highlights */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </span>
              <h4 className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Backend Highlights
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-[var(--color-text-secondary)]">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Focus */}
          <motion.div variants={itemVariants} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-subtle)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>
              </span>
              <h4 className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Technical Focus
              </h4>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">REST APIs</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">Design & Development</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">Security</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">Spring Security</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">Database</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">MySQL</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">Architecture</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">Layered Design</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[var(--color-text-primary)]">Reliability</span>
                <span className="text-[11px] text-[var(--color-text-muted)]">Exception Handling</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[45%] flex flex-col bg-[var(--color-surface)] relative">
          {/* Top Bar with GitHub CTA */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 flex justify-end static md:absolute md:top-0 md:right-0 w-full z-10 border-t md:border-t-0 border-[var(--color-border)]">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full md:w-auto gap-2 px-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[13px] font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub ↗
            </motion.a>
          </motion.div>

          {/* Architecture Section */}
          <div className="flex-1 p-6 md:p-10 pt-2 md:pt-28 flex flex-col">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
              <span className="text-[var(--color-accent)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
              </span>
              <h4 className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                Backend Architecture
              </h4>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <ArchitectureDiagram variant="project" />
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants} className="mt-auto pt-8 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[var(--color-accent)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.827M15.75 15.75l-2.456-2.456M12.75 12l2.28-2.28m0 0l-2.28-2.28m2.28 2.28l2.28 2.28M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v4.875c0 .621.504 1.125 1.125 1.125h4.875c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125Z" />
                  </svg>
                </span>
                <h4 className="text-[12px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                  Tools & Technologies
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-Postman.png" alt="Postman" className="w-6 h-6 object-contain" /> Postman
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-MySQL.png" alt="MySQL Workbench" className="w-6 h-6 object-contain" /> MySQL Workbench
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-git.png" alt="Git" className="w-6 h-6 object-contain" /> Git
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-github.png" alt="GitHub" className="w-6 h-6 object-contain" /> GitHub
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-Maven.png" alt="Maven" className="w-6 h-6 object-contain" /> Maven
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-subtle)] text-[12px] font-semibold text-[var(--color-text-primary)]">
                  <img src="/icon-VS Code.png" alt="VS Code" className="w-6 h-6 object-contain" /> VS Code
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
