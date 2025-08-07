import { getProjects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects - MedMansports",
  description: "Explore my development projects and technical work.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of development projects I've worked on, from web applications 
            to tools that solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}