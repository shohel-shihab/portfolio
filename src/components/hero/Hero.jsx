"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import BackgroundText from "./BackgroundText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Purple Glow */}
      <div className="absolute right-[-180px] top-[-120px] h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[160px]" />

      {/* Background Text */}
      <BackgroundText />

      <div className="section-container w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}