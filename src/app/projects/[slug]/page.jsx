import projects from "@/src/components/projects/projectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#0F0715] py-28 text-white">
      <div className="section-container">
        <Link
          href="/"
          className="mb-8 inline-block text-violet-400 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <div className="relative h-[450px] overflow-hidden rounded-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="mt-10 text-5xl font-black">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          {project.description}
        </p>

        <h2 className="mt-12 text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-violet-600/20 px-4 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}