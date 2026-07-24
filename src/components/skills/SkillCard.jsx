"use client";

import { motion } from "framer-motion";

export default function SkillCard({
  icon,
  title,
  color,
  percent,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: .3,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-violet-500/40
      hover:shadow-[0_20px_60px_rgba(135,80,247,.25)]
      "
    >
      <div
        className={`mb-5 text-5xl ${color}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <div className="mt-6 h-2 rounded-full bg-[#231531]">
        <motion.div
          initial={{
            width:0
          }}
          whileInView={{
            width:`${percent}%`
          }}
          transition={{
            duration:1.5
          }}
          viewport={{
            once:true
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
        />
      </div>

      <p className="mt-3 text-gray-400">
        {percent}%
      </p>
    </motion.div>
  );
}