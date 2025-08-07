import { getProjectBySlug, getProjects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found - MedMansports",
    };
  }

  return {
    title: `${project.title} - MedMansports`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="text-sm text-blue-600 font-medium mb-2">
              {project.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}