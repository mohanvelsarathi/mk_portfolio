// ============================================================
// Manjunath Kesarur Portfolio — Data Layer
// Single source of truth for all portfolio content
// Sourced strictly from the resume
// ============================================================

export const profile = {
  name: 'Manjunath Kesarur',
  initials: 'MK',
  headline: 'Java Full Stack Developer',
  eyebrow: 'JAVA FULL STACK',
  location: 'Bengaluru, India',
  email: 'manjunath.dev05@gmail.com',
  phone: '+91-8618241316',
  githubProfile: 'https://github.com/ManjunathKesarur',
  linkedInProfile: 'https://linkedin.com/in/manjunath-kesarur',
  resumeUrl: '/Manjunath-Kesarur-Resume.pdf',
  resumeFilename: 'Manjunath-Kesarur-Resume.pdf',
  summary:
    'Motivated Computer Science Engineering graduate seeking a Java Full Stack Developer position. Skilled in Java, Spring Boot, Spring Security, Hibernate, RESTful APIs, SQL, HTML, CSS, and JavaScript, with hands-on experience building secure backend applications.',
  heroCopy:
    'Building reliable web applications with Java and Spring Boot. Experienced in RESTful API design, database management, and full-stack development through hands-on project work.',
} as const;

// ============================================================
// SKILLS — sourced directly from resume
// ============================================================
export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
  icon: string;
}

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    category: 'Languages',
    description: 'Programming languages and markup for building applications.',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    icon: '/icon-languages-code.png',
  },
  {
    id: 'frameworks',
    category: 'Frameworks & Libraries',
    description: 'Frameworks and libraries for building robust and secure applications.',
    skills: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Thymeleaf'],
    icon: '/icon-frameworks-layers.png',
  },
  {
    id: 'databases-cloud',
    category: 'Databases & Cloud',
    description: 'Work with relational data and cloud services.',
    skills: ['MySQL', 'JDBC', 'AWS (EC2, S3, IAM)'],
    icon: '/icon-database-cloud.png',
  },
  {
    id: 'tools-architecture',
    category: 'Tools & Architecture',
    description: 'Structure, version, build and test with the right tools.',
    skills: ['Git', 'GitHub', 'Postman', 'Eclipse', 'VS Code', 'RESTful APIs', 'CI/CD', 'Agile Methodology'],
    icon: '/icon-tools-gitbranch.png',
  },
];

// ============================================================
// PROJECTS — sourced directly from resume
// ============================================================
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'hirehub',
    title: 'HireHub – Job Recruitment Platform (API)',
    description:
      'A role-based job recruitment REST API enabling recruiters to manage job postings and job seekers to search and apply for available jobs.',
    technologies: ['Spring Boot', 'Spring Security', 'MySQL'],
    highlights: [
      'Implemented Spring Security authentication and role-based authorization for ADMIN, RECRUITER, and JOB_SEEKER roles to secure application endpoints.',
      'Built RESTful APIs for job and application management with pagination, sorting, custom database queries, ownership-based authorization, and centralized exception handling.',
    ],
    githubUrl: 'https://github.com/ManjunathKesarur/HireHub',
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    description:
      'An Employee Management System with RESTful APIs for employee CRUD operations, secured using Spring Security authentication and role-based access control (RBAC).',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Hibernate'],
    highlights: [
      'Implemented server-side validation, pagination, and automated email functionality using Spring Validation and JavaMailSender.',
      'Integrated MySQL using Spring Data JPA and implemented centralized Global Exception Handling for consistent error responses.',
    ],
    githubUrl: 'https://github.com/ManjunathKesarur/ems',
  },
];

// ============================================================
// EXPERIENCE — sourced directly from resume
// ============================================================
export interface Experience {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  tools: string[];
}

export const experience: Experience[] = [
  {
    id: 'jspiders',
    organization: 'JSpiders',
    role: 'Java Full Stack Intern',
    startDate: 'Feb 2026',
    endDate: 'May 2026',
    location: 'Bengaluru, India',
    responsibilities: [
      'Developed and tested 10+ RESTful API endpoints and CRUD backend modules using Java, Spring Boot, Hibernate, and MySQL.',
      'Performed manual and API testing across 15+ endpoints using Postman to validate request handling, responses, and error scenarios.',
      'Worked with Git and GitHub for version control and followed Agile development practices while building Java-based application modules.',
    ],
    tools: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Postman', 'Git', 'GitHub'],
  },
];

// ============================================================
// EDUCATION — sourced directly from resume
// ============================================================
export interface Education {
  id: string;
  institution: string;
  qualification: string;
  startYear: number;
  endYear: number;
  score: string;
  scoreLabel: string;
}

export const education: Education[] = [
  {
    id: 'be-cse',
    institution: 'East-West Institute of Technology',
    qualification: 'B.E. Computer Science & Engineering',
    startYear: 2022,
    endYear: 2026,
    score: '7.85 / 10',
    scoreLabel: 'CGPA',
  },
];

// ============================================================
// CERTIFICATIONS — sourced directly from resume
// ============================================================
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  mode: string;
}

export const certifications: Certification[] = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development Certification',
    issuer: 'JSpiders',
    mode: 'Offline',
  },
  {
    id: 'aws-cloud',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    mode: 'Online',
  },
];

// ============================================================
// ABOUT — evidence blocks (not proficiency scores)
// ============================================================
export const aboutBlocks = [
  { id: 'java', label: 'Java', description: 'Core & Advanced Java' },
  { id: 'spring-boot', label: 'Spring Boot', description: 'Backend Framework' },
  { id: 'rest-apis', label: 'REST APIs', description: 'API Design & Testing' },
  { id: 'mysql', label: 'MySQL', description: 'Database Management' },
  { id: 'react', label: 'Web Dev', description: 'HTML, CSS, JS' },
] as const;
