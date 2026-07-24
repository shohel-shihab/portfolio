"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(135,80,247,.25)]"
    >
      <div className="relative h-60">
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-3 text-gray-400">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-green-500 bg-green-500/10 py-3 text-center font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-gray-600 bg-white/5 py-3 text-center font-semibold transition hover:border-violet-500 hover:bg-violet-500"
          >
            GitHub
          </a>

        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 font-semibold transition hover:scale-105"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}