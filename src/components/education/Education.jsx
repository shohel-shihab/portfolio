"use client";

import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

const education = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
    institute: "Green University of Bangladesh",
    duration: "2021 - 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Completed my Bachelor's degree in Computer Science & Engineering, where I built a strong foundation in programming, software engineering, data structures & algorithms, database management systems, computer networks, operating systems, artificial intelligence, machine learning, and web technologies. Alongside academics, I developed multiple full-stack web applications using the MERN stack and participated in various software development projects.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-[#11071F]"
    >
      <div className="section-container">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] font-semibold text-violet-400">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Educational Qualification
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My academic journey has provided me with a strong foundation in
            computer science principles, software engineering, and modern web
            development technologies. I continuously apply this knowledge to
            build practical and scalable software solutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-violet-600/30 md:block"></div>

          <div className="space-y-10">

            {education.map((item, index) => (
              <div
                key={index}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}

                <div className="absolute left-4 top-10 hidden h-7 w-7 rounded-full border-4 border-[#11071F] bg-violet-500 md:block"></div>

                <EducationCard
                  {...item}
                  delay={index * 0.2}
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}