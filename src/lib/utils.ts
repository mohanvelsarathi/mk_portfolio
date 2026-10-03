import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getIconForTool = (tool: string) => {
  switch (tool.toLowerCase()) {
    case 'java': return '/icon-java.png';
    case 'spring boot': return '/icon-spring.png';
    case 'spring security': return '/icon-spring.png';
    case 'hibernate': return '/Hibernate 1.png';
    case 'mysql': return '/icon-MySQL.png';
    case 'postman': return '/icon-Postman.png';
    case 'git': return '/icon-git.png';
    case 'github': return '/icon-github.png';
    default: return null;
  }
};
