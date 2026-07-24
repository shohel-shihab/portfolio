"use client";

import { motion } from "framer-motion";
import { Code2, Coffee, BookOpen, Trophy } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#11071F]"
    >
      <div className="section-container">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-violet-400 font-semibold tracking-widest uppercase">
            About Me
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-black">
            Know More About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-violet-600"></div>
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold">
              Passionate Full Stack Developer
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              My programming journey began during my undergraduate studies in
              <span className="text-violet-400 font-semibold">
                {" "}Computer Science and Engineering
              </span>.
              What started as curiosity about how websites and software work
              quickly grew into a passion for solving real-world problems
              through technology.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Over the years, I have developed strong skills in
              <span className="text-white font-semibold">
                {" "}JavaScript, React.js, Next.js, Node.js, Express.js,
                MongoDB, and Tailwind CSS
              </span>.
              I enjoy creating responsive, scalable, and user-friendly web
              applications with clean architecture and modern UI/UX.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              I love working on full-stack applications because they allow me
              to combine creativity with logical thinking. From designing
              engaging interfaces to building secure backend APIs and
              databases, I enjoy every stage of the development process.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Beyond programming, I enjoy learning emerging technologies,
              exploring Artificial Intelligence, reading technology blogs,
              solving coding challenges, and continuously improving my
              problem-solving skills. I believe that learning never stops, and
              every project is an opportunity to grow as a developer.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="glass rounded-3xl p-6">
              <Code2 className="text-violet-400" size={40} />

              <h4 className="mt-4 text-xl font-bold">
                Programming Journey
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                Started with C and C++, then explored Java, Data Structures,
                Algorithms, and eventually specialized in modern Full Stack
                Web Development using the MERN ecosystem.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <BookOpen className="text-violet-400" size={40} />

              <h4 className="mt-4 text-xl font-bold">
                What I Enjoy
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                I enjoy developing scalable web applications, creating
                beautiful user interfaces, optimizing application performance,
                and learning new technologies that improve development
                workflows.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <Coffee className="text-violet-400" size={40} />

              <h4 className="mt-4 text-xl font-bold">
                Beyond Coding
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                Outside of programming, I enjoy playing sports, reading
                technology articles, exploring AI innovations, and spending
                time learning through real-world projects and open-source
                contributions.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <Trophy className="text-violet-400" size={40} />

              <h4 className="mt-4 text-xl font-bold">
                My Goal
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                My goal is to become a highly skilled Software Engineer who
                builds impactful products, contributes to innovative teams,
                and continuously grows by embracing new technologies and
                challenging projects.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}