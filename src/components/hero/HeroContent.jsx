"use client";

import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "./SocialLinks";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <p className="text-xl font-medium text-gray-300">
        Hello, I'm
      </p>

      <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
        <span className="gradient-text">
          Shohel Rana
        </span>
        <br />
        Shihab
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-gray-200 md:text-4xl">
        <Typewriter
          words={[
            "Full Stack Developer",
            "React Developer",
            "Next.js Developer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
        />
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-400">
        Passionate Full Stack Developer specializing in React,
        Next.js, Node.js, Express.js and MongoDB. I enjoy
        building modern, scalable web applications with clean
        UI and excellent user experience.
      </p>

      <SocialLinks />
    </div>
  );
}