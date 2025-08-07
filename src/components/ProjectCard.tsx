import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-gold hover:shadow-lg hover:shadow-gold/10 transition-all duration-500">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl font-bold text-white mb-2 tracking-wide">{project.title}</h3>
          <p className="accent-gold font-medium text-xs uppercase tracking-wider">{project.category}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="accent-gold font-medium italic text-sm mb-4 leading-relaxed">
          "{project.tagline}"
        </p>
        <p className="text-neutral-200 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-neutral-700/50 text-gold text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}