import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { profile } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function About() {
  return (
    <Section id="about" subtle className="min-h-[100dvh] w-full flex flex-col justify-center py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2.5fr] gap-8 md:gap-16 lg:gap-24 items-center max-w-5xl mx-auto">
          {/* Left: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-[280px] mx-auto md:max-w-[260px] lg:max-w-[300px] md:ml-auto md:mr-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[var(--color-surface-subtle)] border-2 border-[var(--color-border)] shadow-[var(--shadow-card)] flex flex-col items-center justify-center">
              <img 
                src="/Manjunath_Profile.jpeg" 
                alt={profile.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right: Narrative */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center text-left"
          >
            <motion.div variants={itemVariants}>
              <SectionHeader
                eyebrow="About"
                heading="Building with Java, growing with every project."
                headingClassName="text-[24px] lg:text-[28px] xl:text-[32px] xl:whitespace-nowrap"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 text-[16px] text-[var(--color-text-secondary)] leading-relaxed mt-4 text-justify">
              <p>
                I’m <strong>Manjunath Kesarur</strong>, an aspiring <strong>Java Full Stack Developer</strong> with a strong foundation in Java, Spring Boot, Spring Security, REST APIs, Hibernate, and MySQL. I enjoy building secure backend applications, designing RESTful APIs, working with databases, and solving application-level problems through clean and reliable code. I’m looking to start my career as a <strong>Java Full Stack Developer</strong>, where I can contribute to building practical software solutions, collaborate with a development team, and continuously strengthen my full-stack development skills.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
