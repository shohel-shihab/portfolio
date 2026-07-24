"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    className: "left-0 top-10 text-cyan-400",
  },
  {
    Icon: SiNextdotjs,
    className: "right-4 top-0 text-white",
  },
  {
    Icon: FaNodeJs,
    className: "left-6 bottom-12 text-green-500",
  },
  {
    Icon: SiMongodb,
    className: "right-2 bottom-16 text-green-400",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className={`absolute hidden lg:flex ${className}`}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#1B1526] text-3xl shadow-xl backdrop-blur-md">
            <Icon />
          </div>
        </motion.div>
      ))}
    </>
  );
}