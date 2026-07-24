"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

export default function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[380px] w-[380px] rounded-full bg-violet-600/25 blur-[120px]" />
      </div>

      <FloatingIcons />

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        transitionSpeed={1200}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.12}
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto w-[300px] md:w-[360px] lg:w-[420px]"
        >
          <div className="rotate-2 rounded-[35px] border border-violet-500/30 bg-[#15111F] p-3 shadow-[0_25px_80px_rgba(135,80,247,.35)] transition-all duration-500 hover:rotate-0">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/profile.jpg"
                alt="Shohel Rana Shihab"
                width={420}
                height={520}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}