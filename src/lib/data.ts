import { Project, LogEntry } from './types';

const projects: Project[] = [
  {
    slug: 'precision-cut',
    title: 'PRECISION CUT',
    category: 'AI-Powered Tool',
    tagline: 'Intelligent video splitting that transforms raw content into championship-caliber content arsenals.',
    description: 'Built on Rust\'s unmatched performance, this tool uses Whisper AI to intelligently identify breakpoints in long-form content for seamless video splitting. FFMpeg integration ensures broadcast-quality output with lightning-fast processing speeds.',
    techStack: ['Rust', 'Whisper AI', 'FFMpeg', 'Machine Learning'],
    imageUrl: '/placeholder-project.svg',
  },
  {
    slug: 'arena-architect',
    title: 'ARENA ARCHITECT',
    category: 'Fitness AI',
    tagline: 'AI-powered training that adapts to any arena, delivering elite performance regardless of equipment limitations.',
    description: 'This intelligent system analyzes available equipment—from full gyms to single kettlebells—and generates hyper-personalized workout protocols. AI-powered training that maximizes results within any constraints, ensuring peak performance regardless of your arena.',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
    imageUrl: '/placeholder-project.svg',
  },
  {
    slug: 'seamless-string',
    title: 'SEAMLESS STRING',
    category: 'E-commerce Solution',
    tagline: 'Custom stringing services integrated flawlessly into e-commerce, turning product pages into complete performance solutions.',
    description: 'Built with Shopify\'s advanced App Blocks and Functions, this solution embeds custom stringing services directly into product pages with zero friction. Transforms simple equipment purchases into complete performance configurations.',
    techStack: ['Shopify Functions', 'React', 'TypeScript', 'GraphQL'],
    imageUrl: '/placeholder-project.svg',
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