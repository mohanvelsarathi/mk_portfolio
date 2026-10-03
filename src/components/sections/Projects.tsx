import { useState } from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { ProjectCard } from '../project/ProjectCard';
import { projects } from '../../data/portfolio';
import { motion } from 'framer-motion';

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (_e: any, { offset }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      nextProject();
    } else if (swipe > 50) {
      prevProject();
    }
  };

  const project = projects[currentIndex];

  return (
    <Section id="projects" className="bg-[var(--color-surface)] min-h-[100dvh] w-full flex flex-col justify-center py-20">
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
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            What I've Built
          </h2>
          <p className="text-[16px] text-[var(--color-text-secondary)]">
            Practical software projects demonstrating backend development fundamentals.
          </p>
        </motion.div>

        {/* Main Card Container */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-4 mb-6">
            <button 
              onClick={prevProject}
              className="p-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-accent)] hover:text-[#1A1A1A] transition-colors text-[var(--color-text-primary)]"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="text-[14px] font-bold text-[var(--color-text-secondary)]">
              {currentIndex + 1} / {projects.length}
            </div>
            <button 
              onClick={nextProject}
              className="p-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-accent)] hover:text-[#1A1A1A] transition-colors text-[var(--color-text-primary)]"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div className="overflow-hidden relative touch-pan-y">
            <ProjectCard 
              project={project} 
              currentIndex={currentIndex} 
              handleDragEnd={handleDragEnd} 
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
