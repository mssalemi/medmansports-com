import Link from "next/link";
import { getProjects, getLogEntries } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import LogEntryCard from "@/components/LogEntryCard";

export default async function Home() {
  const projects = await getProjects();
  const logEntries = await getLogEntries();
  
  const recentProjects = projects.slice(0, 2);
  const recentLogEntries = logEntries.slice(0, 2);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content creator who codes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Welcome to my digital space where I share my journey as a developer and athlete. 
            Explore my projects, read about my athletic adventures, and let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View My Projects
            </Link>
            <Link 
              href="/collaborate"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Let's Collaborate
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
            <Link 
              href="/projects"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Log Entries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Updates</h2>
            <Link 
              href="/log"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all updates →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentLogEntries.map((entry) => (
              <LogEntryCard key={entry.slug} logEntry={entry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
