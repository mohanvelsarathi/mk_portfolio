import { User, Code, Briefcase, GraduationCap, Mail, type LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', url: '#home', icon: User },
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#skills', icon: Code },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Education', url: '#education', icon: GraduationCap },
  { name: 'Contact', url: '#contact', icon: Mail },
];
