"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationCard({
  degree,
  institute,
  duration,
  location,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:shadow-[0_20px_60px_rgba(135,80,247,.25)]
      "
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20">
        <GraduationCap className="text-violet-400" size={28} />
      </div>

      <h3 className="text-2xl font-bold">
        {degree}
      </h3>

      <p className="mt-2 text-lg font-semibold text-violet-400">
        {institute}
      </p>

      <div className="mt-5 flex flex-wrap gap-6 text-gray-400">

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {duration}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {location}
        </div>

      </div>

      <p className="mt-6 leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}