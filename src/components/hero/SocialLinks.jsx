"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/shohel-shihab",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/rshihab21",
  },
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/shihabsarker031",
  }
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
      {/* Download CV Button */}
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="
          inline-flex
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-purple-500
          px-8
          py-4
          text-base
          font-semibold
          text-white
          shadow-[0_10px_40px_rgba(135,80,247,.35)]
          transition-all
          duration-300
          hover:shadow-[0_20px_60px_rgba(135,80,247,.55)]
        "
      >
        Download Resume
      </motion.a>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-violet-500/30
              bg-[#171220]
              text-lg
              text-white
              transition-all
              duration-300
              hover:border-violet-500
              hover:bg-violet-600
            "
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}