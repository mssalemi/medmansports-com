import { getProjects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* 1. Hero Section */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Build. Compete. Create.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-neutral-200">
          The digital home of Mehdi Salemi—where software engineering meets athletic ambition.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/projects" className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            View My Work
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-neutral-200">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* 2. Alternating Feature Section - The Coder */}
      <section className="py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-500">The Engineer</p>
            <h2 className="mt-2 text-4xl font-bold text-white">From Idea to Impact</h2>
            <p className="mt-4 text-neutral-200">
              With years of experience in software development, I specialize in building robust, scalable web applications and e-commerce solutions. I thrive on solving complex problems and creating tools that empower creators and businesses.
            </p>
            <div className="mt-6">
              <Link href="/projects" className="text-blue-500 hover:text-blue-400 font-semibold">
                Explore My Work →
              </Link>
            </div>
          </div>
          <div className="h-96 w-full relative rounded-lg overflow-hidden">
            <Image src="/placeholder-project.svg" alt="Engineering" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Alternating Feature Section - The Athlete */}
      <section className="py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="h-96 w-full relative rounded-lg overflow-hidden md:order-last">
            <Image src="/placeholder-log.svg" alt="Athlete" fill className="object-cover" />
          </div>
          <div className="md:order-first">
            <p className="font-semibold text-blue-500">The Athlete</p>
            <h2 className="mt-2 text-4xl font-bold text-white">Discipline on the Court</h2>
            <p className="mt-4 text-neutral-200">
              The same focus and resilience I apply to coding are forged in competition. I actively train and compete in tennis and pickleball, constantly pushing my limits and documenting the journey.
            </p>
            <div className="mt-6">
              <Link href="/log" className="text-blue-500 hover:text-blue-400 font-semibold">
                Follow My Journey →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-24">
        <div className="text-center mb-16">
          <p className="font-semibold text-blue-500">Featured Work</p>
          <h2 className="mt-2 text-4xl font-bold text-white">Latest Projects</h2>
          <p className="mt-4 text-neutral-200 max-w-2xl mx-auto">
            A selection of recent work showcasing full-stack development and creative problem solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" className="rounded-md bg-neutral-800 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-700 ring-1 ring-white/10">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
