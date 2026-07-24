"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/yourusername",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <FaFacebook />,
    href: "https://facebook.com/yourusername",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/yourusername",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0613]">
      <div className="section-container py-16">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="gradient-text text-4xl font-black">
            Shohel Rana Shihab
          </h2>

          <p className="mt-3 text-gray-400">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Navigation */}

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-400 transition hover:text-violet-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social */}

        <div className="mt-10 flex justify-center gap-5">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.1,
              }}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-lg
                transition
                hover:border-violet-500
                hover:bg-violet-600
              "
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Shohel Rana Shihab.
            All Rights Reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{
              y: -5,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-purple-500
              shadow-lg
            "
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}