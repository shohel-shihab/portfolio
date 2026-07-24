"use client";

import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[5px] text-violet-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Here are some of the projects I have developed using modern web technologies. Each project reflects my focus on clean architecture, responsive design, and practical problem-solving.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}