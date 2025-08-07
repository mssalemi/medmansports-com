import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-lg bg-neutral-800/50 ring-1 ring-white/10 hover:ring-blue-600/50 transition-all duration-200">
      <div className="relative h-56 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm font-semibold text-blue-500">{project.category}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-neutral-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-neutral-700/50 text-blue-500 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}