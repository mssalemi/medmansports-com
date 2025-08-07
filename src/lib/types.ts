export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
}

export interface LogEntry {
  slug: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}