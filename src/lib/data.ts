import { Project, LogEntry } from './types';

const projects: Project[] = [
  {
    slug: 'shopify-performance-optimizer',
    title: 'Shopify Performance Optimizer',
    category: 'E-commerce Tool',
    description: 'A custom-built tool to analyze Shopify themes and suggest performance improvements, improving load times by up to 40%.',
    techStack: ['Next.js', 'Node.js', 'GraphQL', 'TypeScript'],
    imageUrl: '/shopify-optimizer.svg',
  },
  {
    slug: 'athlete-content-scheduler',
    title: 'Athlete Content Scheduler',
    category: 'Creator Tool',
    description: 'A web app for athletes and creators to schedule their social media content, with a focus on training logs and progress updates.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/content-scheduler.svg',
  },
];

const logEntries: LogEntry[] = [
  {
    slug: 'local-tennis-tournament-recap',
    title: 'Local Tennis Tournament Recap',
    date: '2024-07-20',
    summary: 'Competed in the local club championship, making it to the semi-finals. A breakdown of key matches and lessons learned.',
    imageUrl: '/tennis-tournament.svg',
  },
  {
    slug: 'pickleball-technique-breakthrough',
    title: 'Pickleball Technique Breakthrough',
    date: '2024-07-15',
    summary: 'Finally nailed the third shot drop after weeks of practice. Here\'s the drill that made the difference.',
    imageUrl: '/pickleball-technique.svg',
  },
];

export const getProjects = async (): Promise<Project[]> => {
  return projects;
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  return projects.find((p) => p.slug === slug);
};

export const getLogEntries = async (): Promise<LogEntry[]> => {
  return logEntries;
};